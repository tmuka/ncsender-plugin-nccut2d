// SVG to shapes, using the browser for what it already knows: CSS (classes,
// <style>, inherited colours) and transforms. Path data is flattened by the
// core so corners stay exact. Output: mm, Y up.
import { parsePath, arc, circle, ellipse, clean } from '../core/index.js';

const TO_MM = { mm: 1, cm: 10, in: 25.4, pt: 25.4 / 72, pc: 25.4 / 6, px: 25.4 / 96, '': 25.4 / 96 };
const SKIP_PARENTS = 'defs, clipPath, mask, symbol, marker, pattern, metadata, title, desc';

function length(v) {
  const m = /^\s*([-+]?[\d.]+(?:e[-+]?\d+)?)\s*([a-z%]*)\s*$/i.exec(v || '');
  if (!m || m[2] === '%') return null;
  const k = TO_MM[m[2].toLowerCase()];
  return k ? { mm: +m[1] * k, user: +m[1] } : null;
}

function hexOf(css) {
  const m = /rgba?\(\s*(\d+)[, ]+(\d+)[, ]+(\d+)(?:[,/ ]+([\d.]+%?))?/.exec(css || '');
  if (!m) return null;
  if (m[4] !== undefined && parseFloat(m[4]) === 0) return null;
  return '#' + [m[1], m[2], m[3]].map((v) => (+v).toString(16).padStart(2, '0')).join('');
}

export function readSvg(text) {
  const doc = new DOMParser().parseFromString(text, 'image/svg+xml');
  if (doc.querySelector('parsererror') || doc.documentElement.nodeName.toLowerCase() !== 'svg') throw new Error('This SVG could not be read. Save it again as plain SVG.');
  const src = doc.documentElement;
  const vb = (src.getAttribute('viewBox') || '').trim().split(/[\s,]+/).map(Number);
  const hasVb = vb.length === 4 && vb.every(Number.isFinite) && vb[2] > 0 && vb[3] > 0;
  const W = length(src.getAttribute('width')), H = length(src.getAttribute('height'));
  const userW = hasVb ? vb[2] : W?.user ?? 0, userH = hasVb ? vb[3] : H?.user ?? 0;
  // mm per user unit: from the physical width over the viewBox, else 96 px/in
  const k = W && hasVb ? W.mm / vb[2] : H && hasVb ? H.mm / vb[3] : W ? W.mm / W.user : 25.4 / 96;
  const units = W ? (/[a-z]+$/i.exec(src.getAttribute('width'))?.[0] || 'px') : 'px';

  // Rendered off screen so getCTM and getComputedStyle work; one user unit = one px
  const holder = document.createElement('div');
  holder.style.cssText = 'position:absolute;left:-100000px;top:0;width:0;height:0;overflow:hidden;opacity:0;pointer-events:none';
  const svg = document.importNode(src, true);
  if (hasVb) { svg.setAttribute('width', String(vb[2])); svg.setAttribute('height', String(vb[3])); svg.setAttribute('preserveAspectRatio', 'none'); }
  else { if (userW) svg.setAttribute('width', String(userW)); if (userH) svg.setAttribute('height', String(userH)); }
  holder.appendChild(svg);
  document.body.appendChild(holder);
  const shapes = [], skipped = {};
  const skip = (t) => { skipped[t] = (skipped[t] || 0) + 1; };
  try {
    expandUses(svg);
    const height = hasVb ? vb[3] : userH || svg.getBBox().height;
    const els = svg.querySelectorAll('path, rect, circle, ellipse, line, polyline, polygon, text, image');
    for (const el of els) {
      if (el.closest(SKIP_PARENTS)) continue;
      const cs = getComputedStyle(el);
      if (cs.display === 'none' || cs.visibility === 'hidden') continue;
      const tag = el.nodeName.toLowerCase();
      if (tag === 'text') { skip('text'); continue; }
      if (tag === 'image') { skip('image'); continue; }
      const stroke = cs.stroke !== 'none' && parseFloat(cs.strokeOpacity) !== 0 ? hexOf(cs.stroke) : null;
      const fill = cs.fill !== 'none' && parseFloat(cs.fillOpacity) !== 0 ? hexOf(cs.fill) : null;
      if (!stroke && !fill) continue;
      const m = el.getCTM();
      if (!m) continue;
      const layer = layerOf(el);
      for (const sub of local(el, tag)) {
        const pts = sub.pts.map(([x, y]) => [(m.a * x + m.c * y + m.e) * k, (height - (m.b * x + m.d * y + m.f)) * k]);
        const c = clean(pts, sub.closed);
        if (c.length < 2) continue;
        shapes.push({ pts: c, closed: sub.closed && c.length > 2, color: stroke || fill, layer, filled: !!fill });
      }
    }
  } finally {
    holder.remove();
  }
  return { shapes, units, skipped };
}

// Inkscape layers (inkscape:groupmode="layer") or a named top-level group
function layerOf(el) {
  for (let g = el.parentElement; g && g.nodeName.toLowerCase() !== 'svg'; g = g.parentElement) {
    if (g.getAttribute('inkscape:groupmode') === 'layer') return g.getAttribute('inkscape:label') || g.id || '';
  }
  return '';
}

// <use> becomes a copy of what it points at, so CTM and styles apply as drawn
function expandUses(svg) {
  for (let round = 0; round < 6; round++) {
    const uses = svg.querySelectorAll('use');
    if (!uses.length) return;
    for (const u of uses) {
      const href = u.getAttribute('href') || u.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || '';
      const target = href.startsWith('#') ? svg.querySelector(`[id="${CSS.escape(href.slice(1))}"]`) : null;
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      for (const a of u.attributes) if (!['href', 'xlink:href', 'x', 'y', 'width', 'height', 'transform'].includes(a.name)) g.setAttribute(a.name, a.value);
      const x = parseFloat(u.getAttribute('x')) || 0, y = parseFloat(u.getAttribute('y')) || 0;
      g.setAttribute('transform', `${u.getAttribute('transform') || ''} translate(${x} ${y})`);
      if (target && !target.contains(u)) {
        const copy = target.nodeName.toLowerCase() === 'symbol'
          ? Object.assign(document.createElementNS('http://www.w3.org/2000/svg', 'g'), { innerHTML: target.innerHTML })
          : target.cloneNode(true);
        copy.removeAttribute('id');
        g.appendChild(copy);
      }
      u.replaceWith(g);
    }
  }
}

const num = (el, a) => parseFloat(el.getAttribute(a)) || 0;

function local(el, tag) {
  switch (tag) {
    case 'path': try { return parsePath(el.getAttribute('d')); } catch { return []; }
    case 'line': return [{ pts: [[num(el, 'x1'), num(el, 'y1')], [num(el, 'x2'), num(el, 'y2')]], closed: false }];
    case 'polyline': case 'polygon': {
      const v = (el.getAttribute('points') || '').trim().split(/[\s,]+/).map(Number);
      const pts = [];
      for (let i = 0; i + 1 < v.length; i += 2) pts.push([v[i], v[i + 1]]);
      if (tag === 'polygon' && pts.length > 2) pts.push(pts[0].slice());
      return pts.length > 1 ? [{ pts, closed: tag === 'polygon' }] : [];
    }
    case 'circle': { const r = num(el, 'r'); return r > 0 ? [{ pts: circle(num(el, 'cx'), num(el, 'cy'), r), closed: true }] : []; }
    case 'ellipse': {
      const rx = num(el, 'rx'), ry = num(el, 'ry');
      if (!(rx > 0 && ry > 0)) return [];
      const p = ellipse(num(el, 'cx'), num(el, 'cy'), rx, 0, ry / rx); p[p.length - 1] = p[0].slice();
      return [{ pts: p, closed: true }];
    }
    case 'rect': {
      const x = num(el, 'x'), y = num(el, 'y'), w = num(el, 'width'), h = num(el, 'height');
      if (!(w > 0 && h > 0)) return [];
      let rx = el.hasAttribute('rx') ? num(el, 'rx') : num(el, 'ry'), ry = el.hasAttribute('ry') ? num(el, 'ry') : rx;
      rx = Math.min(rx, w / 2); ry = Math.min(ry, h / 2);
      if (!(rx > 0)) return [{ pts: [[x, y], [x + w, y], [x + w, y + h], [x, y + h], [x, y]], closed: true }];
      // Rounded corners; a circle-quarter scaled to ry
      const R = Math.max(rx, ry);
      const q = (cx, cy, a0) => arc(0, 0, R, a0, a0 + Math.PI / 2, true).map(([u, v]) => [cx + (u / R) * rx, cy + (v / R) * ry]);
      const pts = [...q(x + w - rx, y + h - ry, 0), ...q(x + rx, y + h - ry, Math.PI / 2), ...q(x + rx, y + ry, Math.PI), ...q(x + w - rx, y + ry, Math.PI * 1.5)];
      pts.push(pts[0].slice());
      return [{ pts, closed: true }];
    }
  }
  return [];
}
