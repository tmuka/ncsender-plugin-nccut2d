// DXF to shapes. Reads model-space LINE, LWPOLYLINE/POLYLINE (with bulges),
// ARC, CIRCLE, ELLIPSE, SPLINE and SOLID, and expands block INSERTs.
// Text and hatches are counted, not drawn: they need converting to curves.
import DxfParser from 'dxf-parser';
import { arc, circle, ellipse, clean, mul, apply, IDENTITY, arcSteps, TOL } from './geom.js';

// $INSUNITS -> mm per drawing unit (0 = unitless, read as mm)
const UNITS = { 0: 1, 1: 25.4, 2: 304.8, 4: 1, 5: 10, 6: 1000, 8: 0.0000254, 9: 0.0254, 10: 914.4, 13: 0.001, 14: 100 };
const UNIT_NAMES = { 0: 'mm (no units set)', 1: 'in', 2: 'ft', 4: 'mm', 5: 'cm', 6: 'm', 8: 'µin', 9: 'mil', 10: 'yd', 13: 'µm', 14: 'dm' };

export const hex = (rgb) => '#' + (rgb >>> 0 & 0xffffff).toString(16).padStart(6, '0');

export function readDxf(text) {
  let dxf;
  try { dxf = new DxfParser().parseSync(text); } catch (e) { throw new Error(`This DXF could not be read (${e.message || e}). Save it again as ASCII DXF.`); }
  if (!dxf) throw new Error('This DXF could not be read. Save it again as ASCII DXF.');
  const unitCode = Number(dxf.header?.$INSUNITS ?? 0);
  const scale = UNITS[unitCode] ?? 1;
  const layers = dxf.tables?.layer?.layers || {};
  const shapes = [];
  const skipped = {};
  const skip = (t) => { skipped[t] = (skipped[t] || 0) + 1; };

  const colorOf = (e, inherited) => {
    const idx = e.colorIndex;
    if (e.color !== undefined && idx !== 0 && idx !== 256) return hex(e.color);
    if (idx === 0 && inherited) return inherited;                 // BYBLOCK
    const L = layers[e.layer];
    if (L && L.color !== undefined) return hex(L.color);
    return inherited || '#000000';
  };

  const push = (pts, closed, e, m, color) => {
    if (pts.length < 2) return;
    const p = clean(pts.map((q) => apply(m, q)), closed);
    if (p.length < 2) return;
    shapes.push({ pts: p, closed: closed && p.length > 2, color, layer: e.layer || '0' });
  };

  // Arcs written with an extrusion of (0, 0, -1) are mirrored in X (OCS)
  const ocs = (e) => ((e.extrusionDirectionZ ?? e.extrusionDirection?.z ?? 1) < 0 ? [-1, 0, 0, 1, 0, 0] : IDENTITY);

  function bulgeSeg(a, b, bulge) {
    const chord = Math.hypot(b.x - a.x, b.y - a.y);
    if (chord < 1e-12) return [];
    const ab = Math.abs(bulge);
    const r = (chord * (1 + ab * ab)) / (4 * ab);
    const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
    // centre sits left of the chord for a CCW (positive) bulge, past the
    // chord when the arc is more than half a turn
    const h = Math.sign(bulge) * (r - (ab * chord) / 2);
    const nx = -(b.y - a.y) / chord, ny = (b.x - a.x) / chord;
    const cx = mx + nx * h, cy = my + ny * h;
    const a0 = Math.atan2(a.y - cy, a.x - cx), a1 = Math.atan2(b.y - cy, b.x - cx);
    return arc(cx, cy, r, a0, a1, bulge > 0).slice(1);
  }

  function polyline(e, m, color) {
    const v = (e.vertices || []).filter((q) => Number.isFinite(q.x) && Number.isFinite(q.y));
    if (v.length < 2) return;
    const closed = !!e.shape;
    const pts = [[v[0].x, v[0].y]];
    const n = closed ? v.length : v.length - 1;
    for (let i = 0; i < n; i++) {
      const a = v[i], b = v[(i + 1) % v.length];
      if (a.bulge) pts.push(...bulgeSeg(a, b, a.bulge));
      else pts.push([b.x, b.y]);
    }
    push(pts, closed, e, m, color);
  }

  // B-spline by de Boor; falls back to the fit points
  function spline(e, m, color) {
    const cp = (e.controlPoints || []).map((p) => [p.x, p.y]);
    const k = e.knotValues || [], p = e.degreeOfSplineCurve || 3;
    if (cp.length > p && k.length === cp.length + p + 1) {
      const t0 = k[p], t1 = k[cp.length];
      let len = 0; for (let i = 1; i < cp.length; i++) len += Math.hypot(cp[i][0] - cp[i - 1][0], cp[i][1] - cp[i - 1][1]);
      const n = Math.max(cp.length * 8, Math.min(4000, Math.ceil(len / 0.2)));
      const pts = [];
      for (let s = 0; s <= n; s++) pts.push(deBoor(p, cp, k, t0 + ((t1 - t0) * s) / n));
      return push(pts, !!e.closed, e, m, color);
    }
    const fp = (e.fitPoints || []).map((q) => [q.x, q.y]);
    if (fp.length > 1) push(fp, !!e.closed, e, m, color);
  }

  function walk(entities, m, inherited, depth) {
    if (depth > 8) return;
    for (const e of entities || []) {
      if (e.inPaperSpace || e.visible === false) continue;
      const L = layers[e.layer];
      if (L && (L.visible === false || L.frozen)) continue;
      const color = colorOf(e, inherited);
      const mo = mul(m, ocs(e));
      switch (e.type) {
        case 'LINE': if (e.vertices?.length >= 2) push(e.vertices.map((q) => [q.x, q.y]), false, e, m, color); break;
        case 'LWPOLYLINE': case 'POLYLINE':
          if (e.is3dPolygonMesh || e.isPolyfaceMesh) { skip('mesh'); break; }
          polyline(e, mo, color); break;
        case 'CIRCLE': push(circle(e.center.x, e.center.y, e.radius), true, e, mo, color); break;
        case 'ARC': push(arc(e.center.x, e.center.y, e.radius, e.startAngle, e.endAngle, true), false, e, mo, color); break;
        case 'ELLIPSE': {
          const full = e.startAngle === undefined || Math.abs((e.endAngle ?? 0) - (e.startAngle ?? 0) - Math.PI * 2) < 1e-6 || (e.startAngle === 0 && Math.abs(e.endAngle - Math.PI * 2) < 1e-6);
          const pts = ellipse(e.center.x, e.center.y, e.majorAxisEndPoint.x, e.majorAxisEndPoint.y, e.axisRatio, e.startAngle ?? 0, e.endAngle ?? Math.PI * 2);
          push(pts, full, e, mo, color); break;
        }
        case 'SPLINE': spline(e, m, color); break;
        case 'SOLID': {
          const q = (e.points || []).filter(Boolean);
          if (q.length >= 3) { const o = q.length === 4 ? [q[0], q[1], q[3], q[2]] : q; push(o.map((p) => [p.x, p.y]).concat([[o[0].x, o[0].y]]), true, e, mo, color); }
          break;
        }
        case 'INSERT': {
          const b = dxf.blocks?.[e.name];
          if (!b) { skip('missing block'); break; }
          const rot = ((e.rotation || 0) * Math.PI) / 180, c = Math.cos(rot), s = Math.sin(rot);
          const sx = e.xScale ?? 1, sy = e.yScale ?? 1;
          const bp = b.position || { x: 0, y: 0 };
          const cols = Math.max(1, e.columnCount || 1), rows = Math.max(1, e.rowCount || 1);
          for (let r = 0; r < rows; r++) for (let ci = 0; ci < cols; ci++) {
            const ox = (e.position?.x || 0) + ci * (e.columnSpacing || 0) * c - r * (e.rowSpacing || 0) * s;
            const oy = (e.position?.y || 0) + ci * (e.columnSpacing || 0) * s + r * (e.rowSpacing || 0) * c;
            const im = mul(mul(m, [c * sx, s * sx, -s * sy, c * sy, ox, oy]), [1, 0, 0, 1, -bp.x, -bp.y]);
            walk(b.entities, im, color, depth + 1);
          }
          break;
        }
        case 'TEXT': case 'MTEXT': case 'ATTDEF': skip('text'); break;
        case 'DIMENSION': skip('dimension'); break;
        case 'POINT': break;
        default: skip(e.type.toLowerCase());
      }
    }
  }
  walk(dxf.entities, [scale, 0, 0, scale, 0, 0], null, 0);
  return { shapes, units: UNIT_NAMES[unitCode] ?? 'mm', skipped };
}

function deBoor(p, cp, k, t) {
  let s = p;
  while (s < cp.length - 1 && t >= k[s + 1]) s++;
  const d = [];
  for (let j = 0; j <= p; j++) d.push(cp[j + s - p].slice());
  for (let r = 1; r <= p; r++) {
    for (let j = p; j >= r; j--) {
      const i = j + s - p, den = k[i + p - r + 1] - k[i];
      const a = den === 0 ? 0 : (t - k[i]) / den;
      d[j] = [(1 - a) * d[j - 1][0] + a * d[j][0], (1 - a) * d[j - 1][1] + a * d[j][1]];
    }
  }
  return d[p];
}

export { arcSteps, TOL };
