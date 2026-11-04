import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readPdf } from '../src/core/index.js';

const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');

// Minimal one-page PDF writer with a correct xref table
function pdf(content, { w = 200, h = 200, resources = '' } = {}) {
  const objs = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${w} ${h}] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> ${resources} >> >>`,
    `<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream`,
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  ];
  let out = '%PDF-1.5\n';
  const offs = [];
  objs.forEach((o, i) => { offs.push(Buffer.byteLength(out)); out += `${i + 1} 0 obj\n${o}\nendobj\n`; });
  const xref = Buffer.byteLength(out);
  out += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n` + offs.map((o) => `${String(o).padStart(10, '0')} 00000 n \n`).join('');
  out += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return new Uint8Array(Buffer.from(out, 'latin1'));
}

const near = (a, b, t = 1e-6) => Math.abs(a - b) <= t;
const closeTo = (p, q, t = 1e-6) => assert.ok(near(p[0], q[0], t) && near(p[1], q[1], t), `${p} vs ${q}`);

test('pdf: stroked red rectangle, 72pt = 25.4mm', async () => {
  const r = await readPdf(pdf('1 0 0 RG 72 72 72 36 re S'), pdfjs);
  assert.equal(r.pages, 1);
  assert.equal(r.shapes.length, 1);
  const s = r.shapes[0];
  assert.equal(s.closed, true);
  assert.equal(s.filled, false);
  assert.equal(s.color, '#ff0000');
  assert.equal(s.pts.length, 5);
  assert.deepEqual(s.pts[0], s.pts[4]);
  closeTo(s.pts[0], [25.4, 25.4]);
  closeTo(s.pts[1], [50.8, 25.4]);
  closeTo(s.pts[2], [50.8, 38.1]);
  closeTo(s.pts[3], [25.4, 38.1]);
});

test('pdf: filled blue cubic path closed with h f', async () => {
  const r = await readPdf(pdf('0 0 1 rg 0 0 m 72 0 l 72 72 36 72 0 36 c h f'), pdfjs);
  assert.equal(r.shapes.length, 1);
  const s = r.shapes[0];
  assert.equal(s.color, '#0000ff');
  assert.equal(s.filled, true);
  assert.equal(s.closed, true);
  assert.deepEqual(s.pts[0], s.pts[s.pts.length - 1]);
  assert.ok(s.pts.length > 6, 'curve is flattened');
  closeTo(s.pts[1], [25.4, 0]);
  // the curve ends at (0, 36pt) and stays inside the 72pt square
  assert.ok(s.pts.some((p) => near(p[0], 0) && near(p[1], 12.7)));
  assert.ok(s.pts.every((p) => p[0] >= -1e-9 && p[0] <= 25.4 + 1e-9 && p[1] >= -1e-9 && p[1] <= 25.4 + 1e-9));
});

test('pdf: cm inside q/Q transforms only its own path', async () => {
  const r = await readPdf(pdf('q 2 0 0 2 72 0 cm 0 0 m 36 0 l S Q 0 0 m 72 0 l S'), pdfjs);
  assert.equal(r.shapes.length, 2);
  const [a, b] = r.shapes;
  assert.equal(a.closed, false);
  closeTo(a.pts[0], [25.4, 0]);
  closeTo(a.pts[1], [50.8, 0]);
  closeTo(b.pts[0], [0, 0]);
  closeTo(b.pts[1], [25.4, 0]);
});

test('pdf: whole-page white background is skipped, other fills kept', async () => {
  const r = await readPdf(pdf('1 g 0 0 200 200 re f 1 0 0 rg 10 10 20 20 re f 1 g 0 0 100 100 re f'), pdfjs);
  assert.equal(r.skipped.background, 1);
  assert.equal(r.shapes.length, 2);
  assert.equal(r.shapes[1].color, '#ffffff');
});

test('pdf: text and clipping paths are not drawn', async () => {
  const r = await readPdf(pdf('BT /F1 12 Tf 10 10 Td (Hello) Tj ET q 0 0 50 50 re W n 0 0 m 10 10 l S Q'), pdfjs);
  assert.equal(r.skipped.text, 1);
  assert.equal(r.shapes.length, 1);
  assert.equal(r.shapes[0].pts.length, 2);
});

test('pdf: optional content group name becomes the layer', async () => {
  const bytes = pdf('/OC /L1 BDC 0 0 m 10 0 l S EMC 0 0 m 0 10 l S', { resources: '/Properties << /L1 6 0 R >>' });
  // Splice an OCG object and the catalog's /OCProperties in by rewriting the file
  const src = Buffer.from(bytes).toString('latin1')
    .replace('<< /Type /Catalog /Pages 2 0 R >>', '<< /Type /Catalog /Pages 2 0 R /OCProperties << /OCGs [6 0 R] /D << /ON [6 0 R] >> >> >>');
  const body = src.slice(0, src.indexOf('xref')) + '6 0 obj\n<< /Type /OCG /Name (Cut) >>\nendobj\n';
  const r = await readPdf(rebuild(body), pdfjs);
  assert.equal(r.shapes.length, 2);
  assert.equal(r.shapes[0].layer, 'Cut');
  assert.equal(r.shapes[1].layer, '');
});

test('ai: PostScript-only file is rejected with a clear message', async () => {
  const bytes = new Uint8Array(Buffer.from('%!PS-Adobe-3.0\n%%Creator: Adobe Illustrator\n'));
  await assert.rejects(readPdf(bytes, pdfjs), /Create PDF Compatible File/);
});

// Recompute the xref for a hand-edited body
function rebuild(body) {
  const offs = [];
  for (const m of body.matchAll(/(\d+) 0 obj\n/g)) offs[+m[1] - 1] = m.index;
  const xref = body.length;
  const out = body + `xref\n0 ${offs.length + 1}\n0000000000 65535 f \n` + offs.map((o) => `${String(o).padStart(10, '0')} 00000 n \n`).join('')
    + `trailer\n<< /Size ${offs.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return new Uint8Array(Buffer.from(out, 'latin1'));
}
