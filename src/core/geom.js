// Shapes are polylines in mm, Y up (machine frame).
//   { pts: [[x, y], ...], closed, color: '#rrggbb', layer, filled }
// Curves are flattened on import to within TOL of the true curve.
export const TOL = 0.01;

export const dist = (a, b) => Math.hypot(b[0] - a[0], b[1] - a[1]);

// Segments for a curve of radius r so the chord error stays under tol
export function arcSteps(r, sweep, tol = TOL) {
  if (!(r > tol)) return 1;
  const step = 2 * Math.acos(Math.max(-1, Math.min(1, 1 - tol / r)));
  return Math.max(2, Math.min(2000, Math.ceil(Math.abs(sweep) / step)));
}

// a0 → a1 in radians; ccw: increasing angle
export function arc(cx, cy, r, a0, a1, ccw = true) {
  let sweep = a1 - a0;
  if (ccw && sweep <= 0) sweep += Math.PI * 2;
  if (!ccw && sweep >= 0) sweep -= Math.PI * 2;
  const n = arcSteps(r, sweep);
  return Array.from({ length: n + 1 }, (_, i) => { const a = a0 + (sweep * i) / n; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; });
}

export const circle = (cx, cy, r) => { const p = arc(cx, cy, r, 0, Math.PI * 2, true); p[p.length - 1] = p[0].slice(); return p; };

// Ellipse: centre, major axis vector (mx, my), ratio of minor to major, parameter range
export function ellipse(cx, cy, mx, my, ratio, t0 = 0, t1 = Math.PI * 2) {
  const a = Math.hypot(mx, my), rot = Math.atan2(my, mx), b = a * ratio;
  let sweep = t1 - t0; if (sweep <= 0) sweep += Math.PI * 2;
  const n = arcSteps(a, sweep);
  const cr = Math.cos(rot), sr = Math.sin(rot);
  return Array.from({ length: n + 1 }, (_, i) => {
    const t = t0 + (sweep * i) / n, x = a * Math.cos(t), y = b * Math.sin(t);
    return [cx + x * cr - y * sr, cy + x * sr + y * cr];
  });
}

// Cubic Bézier, adaptive: split until flat within tol
export function cubic(p0, p1, p2, p3, out = [p0], tol = TOL, depth = 0) {
  const d1 = lineDist(p1, p0, p3), d2 = lineDist(p2, p0, p3);
  if (depth > 16 || Math.max(d1, d2) <= tol) { out.push(p3); return out; }
  const m = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  const p01 = m(p0, p1), p12 = m(p1, p2), p23 = m(p2, p3), p012 = m(p01, p12), p123 = m(p12, p23), mid = m(p012, p123);
  cubic(p0, p01, p012, mid, out, tol, depth + 1);
  cubic(mid, p123, p23, p3, out, tol, depth + 1);
  return out;
}
export const quad = (p0, p1, p2, out) => cubic(p0, [p0[0] + (2 / 3) * (p1[0] - p0[0]), p0[1] + (2 / 3) * (p1[1] - p0[1])], [p2[0] + (2 / 3) * (p1[0] - p2[0]), p2[1] + (2 / 3) * (p1[1] - p2[1])], p2, out);

function lineDist(p, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy);
  if (l < 1e-12) return dist(p, a);
  return Math.abs((p[0] - a[0]) * dy - (p[1] - a[1]) * dx) / l;
}

// SVG-style elliptical arc from the current point to (x, y)
export function svgArc(p0, rx, ry, phiDeg, large, sweep, p1) {
  if (!rx || !ry || (p0[0] === p1[0] && p0[1] === p1[1])) return [p0, p1];
  rx = Math.abs(rx); ry = Math.abs(ry);
  const phi = (phiDeg * Math.PI) / 180, c = Math.cos(phi), s = Math.sin(phi);
  const dx = (p0[0] - p1[0]) / 2, dy = (p0[1] - p1[1]) / 2;
  const x1 = c * dx + s * dy, y1 = -s * dx + c * dy;
  const lam = (x1 * x1) / (rx * rx) + (y1 * y1) / (ry * ry);
  if (lam > 1) { rx *= Math.sqrt(lam); ry *= Math.sqrt(lam); }
  const num = rx * rx * ry * ry - rx * rx * y1 * y1 - ry * ry * x1 * x1;
  let k = Math.sqrt(Math.max(0, num / (rx * rx * y1 * y1 + ry * ry * x1 * x1)));
  if (!!large === !!sweep) k = -k;
  const cx1 = (k * rx * y1) / ry, cy1 = (-k * ry * x1) / rx;
  const cx = c * cx1 - s * cy1 + (p0[0] + p1[0]) / 2, cy = s * cx1 + c * cy1 + (p0[1] + p1[1]) / 2;
  const ang = (ux, uy, vx, vy) => Math.atan2(ux * vy - uy * vx, ux * vx + uy * vy);
  const t0 = ang(1, 0, (x1 - cx1) / rx, (y1 - cy1) / ry);
  let dt = ang((x1 - cx1) / rx, (y1 - cy1) / ry, (-x1 - cx1) / rx, (-y1 - cy1) / ry);
  if (!sweep && dt > 0) dt -= Math.PI * 2;
  if (sweep && dt < 0) dt += Math.PI * 2;
  const n = arcSteps(Math.max(rx, ry), dt);
  const out = [];
  for (let i = 0; i <= n; i++) {
    const t = t0 + (dt * i) / n, ex = rx * Math.cos(t), ey = ry * Math.sin(t);
    out.push([c * ex - s * ey + cx, s * ex + c * ey + cy]);
  }
  out[0] = p0; out[n] = p1;
  return out;
}

// 2D affine [a, b, c, d, e, f]: x' = a x + c y + e, y' = b x + d y + f
export const IDENTITY = [1, 0, 0, 1, 0, 0];
export const mul = (m, n) => [
  m[0] * n[0] + m[2] * n[1], m[1] * n[0] + m[3] * n[1],
  m[0] * n[2] + m[2] * n[3], m[1] * n[2] + m[3] * n[3],
  m[0] * n[4] + m[2] * n[5] + m[4], m[1] * n[4] + m[3] * n[5] + m[5],
];
export const apply = (m, p) => [m[0] * p[0] + m[2] * p[1] + m[4], m[1] * p[0] + m[3] * p[1] + m[5]];

export function bounds(shapes) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const s of shapes) for (const [x, y] of s.pts) { if (x < x0) x0 = x; if (y < y0) y0 = y; if (x > x1) x1 = x; if (y > y1) y1 = y; }
  if (!Number.isFinite(x0)) return { x0: 0, y0: 0, x1: 0, y1: 0, w: 0, h: 0 };
  return { x0, y0, x1, y1, w: x1 - x0, h: y1 - y0 };
}

export const transformShapes = (shapes, m) => shapes.map((s) => ({ ...s, pts: s.pts.map((p) => apply(m, p)) }));

export function area(pts) {
  let a = 0;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) a += (pts[j][0] - pts[i][0]) * (pts[j][1] + pts[i][1]);
  return a / 2;
}

export function inside(p, pts) {
  let c = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, yi] = pts[i], [xj, yj] = pts[j];
    if ((yi > p[1]) !== (yj > p[1]) && p[0] < ((xj - xi) * (p[1] - yi)) / (yj - yi) + xi) c = !c;
  }
  return c;
}

// Drop repeated points; a closed shape keeps first === last
export function clean(pts, closed, eps = 1e-6) {
  const out = [];
  for (const p of pts) if (!out.length || dist(out[out.length - 1], p) > eps) out.push(p);
  if (closed && out.length > 2 && dist(out[0], out[out.length - 1]) > eps) out.push(out[0].slice());
  return out;
}

// Join open paths of the same colour whose ends meet (within tol), the way a
// DXF drawn as loose lines needs to be before it can be filled or cut inside
// first. Returns { shapes, joined }: joined counts the paths merged away.
export function joinPaths(shapes, tol = 0.05) {
  const closed = [], open = [];
  for (const s of shapes) {
    if (s.closed || s.pts.length < 2) { closed.push(s); continue; }
    if (dist(s.pts[0], s.pts[s.pts.length - 1]) <= tol && s.pts.length > 2) { closed.push({ ...s, closed: true, pts: clean(s.pts.slice(0, -1).concat([s.pts[0]]), true) }); continue; }
    open.push({ ...s, pts: s.pts.slice() });
  }
  let joined = 0;
  const byColor = new Map();
  for (const s of open) { const k = s.color + '|' + (s.layer || ''); if (!byColor.has(k)) byColor.set(k, []); byColor.get(k).push(s); }
  const out = [];
  for (const list of byColor.values()) {
    const used = new Array(list.length).fill(false);
    for (let i = 0; i < list.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      const cur = list[i];
      let grew = true;
      while (grew) {
        grew = false;
        const head = cur.pts[0], tail = cur.pts[cur.pts.length - 1];
        for (let j = 0; j < list.length; j++) {
          if (used[j]) continue;
          const o = list[j].pts, a = o[0], b = o[o.length - 1];
          if (dist(tail, a) <= tol) cur.pts.push(...o.slice(1));
          else if (dist(tail, b) <= tol) cur.pts.push(...o.slice(0, -1).reverse());
          else if (dist(head, b) <= tol) cur.pts.unshift(...o.slice(0, -1));
          else if (dist(head, a) <= tol) cur.pts.unshift(...o.slice(1).reverse());
          else continue;
          used[j] = true; joined++; grew = true;
          break;
        }
      }
      if (cur.pts.length > 2 && dist(cur.pts[0], cur.pts[cur.pts.length - 1]) <= tol) {
        cur.pts[cur.pts.length - 1] = cur.pts[0].slice();
        cur.closed = true;
      }
      out.push(cur);
    }
  }
  return { shapes: closed.concat(out), joined };
}

export const pathLength = (pts) => { let l = 0; for (let i = 1; i < pts.length; i++) l += dist(pts[i - 1], pts[i]); return l; };
