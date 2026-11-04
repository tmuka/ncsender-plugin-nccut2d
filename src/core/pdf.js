// PDF (and PDF-compatible Illustrator .ai) to shapes. Walks page 1's operator
// list from pdf.js and rebuilds its paths. Text, images and gradients are
// counted, not drawn: they need converting to curves first.
// The caller passes the pdf.js module so the core never loads it itself.
import { cubic, clean, mul, apply } from './geom.js';

const PT = 25.4 / 72;
const rgb = (a) => '#' + ((a[0] << 16) | (a[1] << 8) | a[2]).toString(16).padStart(6, '0');
const NOT_PDF = 'This .ai file was saved without PDF content. In Illustrator, save it again with "Create PDF Compatible File" on, or export a PDF or SVG.';

// Paint ops -> [stroke, fill, close first]
const PAINT = {
  stroke: [true, false, false], closeStroke: [true, false, true],
  fill: [false, true, false], eoFill: [false, true, false],
  fillStroke: [true, true, false], eoFillStroke: [true, true, false],
  closeFillStroke: [true, true, true], closeEOFillStroke: [true, true, true],
};
const TEXT = ['showText', 'showSpacedText', 'nextLineShowText', 'nextLineSetSpacingShowText'];
const IMAGE = ['paintImageXObject', 'paintInlineImageXObject', 'paintInlineImageXObjectGroup', 'paintImageXObjectRepeat',
  'paintImageMaskXObject', 'paintImageMaskXObjectGroup', 'paintImageMaskXObjectRepeat', 'paintSolidColorImageMask'];

const isPdf = (b) => b.length >= 4 && b[0] === 0x25 && b[1] === 0x50 && b[2] === 0x44 && b[3] === 0x46;

export async function readPdf(bytes, pdfjs) {
  let data = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  // Some writers put junk before the header; the spec allows it within 1 KB
  let at = -1;
  for (let i = 0; i < Math.min(data.length - 4, 1024) && at < 0; i++) if (isPdf(data.subarray(i))) at = i;
  if (at < 0) throw new Error(NOT_PDF);
  // pdf.js takes ownership of (detaches) the buffer it is given
  data = data.slice();

  const doc = await pdfjs.getDocument({ data, isEvalSupported: false, disableFontFace: true, useSystemFonts: false, verbosity: 0 }).promise;
  try {
    const page = await doc.getPage(1);
    const ops = await page.getOperatorList({ annotationMode: pdfjs.AnnotationMode.DISABLE });
    const oc = await doc.getOptionalContentConfig().catch(() => null);
    return { ...walk(page, ops, pdfjs.OPS, oc), units: 'pt', pages: doc.numPages };
  } finally {
    await doc.destroy();
  }
}

function walk(page, { fnArray, argsArray }, OPS, oc) {
  const name = [];
  for (const k in OPS) name[OPS[k]] = k;

  // Page space -> mm, Y up, page corner at 0,0; the viewport handles /Rotate
  const vp = page.getViewport({ scale: 1 });
  const base = mul([PT, 0, 0, -PT, 0, vp.height * PT], vp.transform);
  const pageW = vp.width * PT, pageH = vp.height * PT;

  const shapes = [];
  const skipped = {};
  const skip = (t) => { skipped[t] = (skipped[t] || 0) + 1; };

  let gs = { ctm: base, stroke: '#000000', fill: '#000000' };
  const stack = [];
  const marks = [];                     // marked content: { layer, hidden } or null
  let subs = [], cur = null, pt = [0, 0], start = [0, 0];
  let textShown = false;

  const layerOf = () => { for (let i = marks.length - 1; i >= 0; i--) if (marks[i]?.layer !== undefined) return marks[i].layer; return ''; };
  const hidden = () => marks.some((m) => m?.hidden);
  const P = (x, y) => apply(gs.ctm, [x, y]);
  const begin = (x, y) => { cur = { pts: [P(x, y)], closed: false }; subs.push(cur); pt = start = [x, y]; };
  const ensure = () => { if (!cur) begin(pt[0], pt[1]); };
  const close = () => { if (cur) { cur.closed = true; cur = null; pt = start; } };

  function construct(sub, args) {
    let j = 0;
    for (const op of sub) {
      switch (name[op]) {
        case 'moveTo': begin(args[j], args[j + 1]); j += 2; break;
        case 'lineTo': ensure(); pt = [args[j], args[j + 1]]; cur.pts.push(P(...pt)); j += 2; break;
        case 'curveTo': case 'curveTo2': case 'curveTo3': {
          ensure();
          let c1, c2, end;
          // v: first control is the current point; y: second control is the end
          if (name[op] === 'curveTo') { c1 = [args[j], args[j + 1]]; c2 = [args[j + 2], args[j + 3]]; end = [args[j + 4], args[j + 5]]; j += 6; }
          else if (name[op] === 'curveTo2') { c1 = pt; c2 = [args[j], args[j + 1]]; end = [args[j + 2], args[j + 3]]; j += 4; }
          else { c1 = [args[j], args[j + 1]]; end = [args[j + 2], args[j + 3]]; c2 = end; j += 4; }
          // Flatten in mm so the tolerance means what it says
          cubic(cur.pts[cur.pts.length - 1], P(...c1), P(...c2), P(...end), cur.pts);
          pt = end;
          break;
        }
        case 'closePath': close(); break;
        case 'rectangle': {
          const [x, y, w, h] = args.slice(j, j + 4); j += 4;
          begin(x, y);
          cur.pts.push(P(x + w, y), P(x + w, y + h), P(x, y + h));
          close();
          break;
        }
      }
    }
  }

  const isBackground = (s) => {
    if (!s.filled || s.stroked || s.color !== '#ffffff' || s.pts.length !== 5) return false;
    const xs = s.pts.map((p) => p[0]), ys = s.pts.map((p) => p[1]);
    const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    const t = 0.1;
    if (x0 > t || y0 > t || x1 < pageW - t || y1 < pageH - t) return false;
    // axis-aligned: every corner sits on the bounding box corners
    return s.pts.every((p) => (Math.abs(p[0] - x0) < t || Math.abs(p[0] - x1) < t) && (Math.abs(p[1] - y0) < t || Math.abs(p[1] - y1) < t));
  };

  function paint([doStroke, doFill, closeFirst]) {
    if (closeFirst) close();
    const off = hidden();
    for (const s of subs) {
      // a fill closes every subpath
      const closed = s.closed || doFill;
      const pts = clean(s.pts, closed);
      if (pts.length < 2) continue;
      const shape = { pts, closed: closed && pts.length > 2, color: doStroke ? gs.stroke : gs.fill, layer: layerOf(), filled: doFill };
      if (off) { skip('hidden'); continue; }
      if (isBackground({ ...shape, stroked: doStroke })) { skip('background'); continue; }
      shapes.push(shape);
    }
    subs = []; cur = null;
  }

  for (let i = 0; i < fnArray.length; i++) {
    const op = name[fnArray[i]], a = argsArray[i];
    if (PAINT[op]) { paint(PAINT[op]); continue; }
    if (TEXT.includes(op)) { textShown = true; continue; }
    if (IMAGE.includes(op)) { skip('image'); continue; }
    switch (op) {
      case 'constructPath': construct(a[0], a[1]); break;
      case 'endPath': subs = []; cur = null; break;
      case 'save': stack.push({ ...gs }); break;
      case 'restore': if (stack.length) gs = stack.pop(); break;
      case 'transform': gs.ctm = mul(gs.ctm, a); break;
      case 'paintFormXObjectBegin': stack.push({ ...gs }); if (a[0]) gs.ctm = mul(gs.ctm, a[0]); break;
      case 'paintFormXObjectEnd': if (stack.length) gs = stack.pop(); break;
      case 'setStrokeRGBColor': gs.stroke = rgb(a); break;
      case 'setFillRGBColor': gs.fill = rgb(a); break;
      // Pattern fills keep the last solid colour so the shape still shows
      case 'setStrokeColorN': case 'setFillColorN': break;
      case 'beginText': textShown = false; break;
      case 'endText': if (textShown) skip('text'); textShown = false; break;
      case 'shadingFill': skip('gradient'); break;
      case 'beginMarkedContentProps': {
        const p = a[0] === 'OC' ? a[1] : null;
        if (!p) { marks.push(null); break; }
        const g = p.type === 'OCG' ? oc?.getGroup(p.id) : null;
        marks.push({ layer: g?.name ?? '', hidden: oc ? !oc.isVisible(p) : false });
        break;
      }
      case 'beginMarkedContent': marks.push(null); break;
      case 'endMarkedContent': marks.pop(); break;
    }
  }
  return { shapes, skipped };
}
