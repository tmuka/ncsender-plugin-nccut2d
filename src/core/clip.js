// Polygon booleans and offsets on top of Clipper (clipper-lib). Clipper works
// in integers, so millimetres are scaled by SCALE (1 unit = 1 µm).
// A "paths" value is an array of closed loops, each an array of [x, y] in mm.
// Outer loops run counter-clockwise, holes clockwise.
import ClipperLib from 'clipper-lib';

export const SCALE = 1000;
const ARC_TOLERANCE = 0.01 * SCALE;

const toClipper = (paths) => paths.map((loop) => loop.map(([x, y]) => ({ X: Math.round(x * SCALE), Y: Math.round(y * SCALE) })));
const fromClipper = (paths) => paths.map((loop) => loop.map((p) => [p.X / SCALE, p.Y / SCALE]));

function run(type, subject, clip, fill = ClipperLib.PolyFillType.pftNonZero) {
  const c = new ClipperLib.Clipper();
  c.AddPaths(toClipper(subject), ClipperLib.PolyType.ptSubject, true);
  if (clip) c.AddPaths(toClipper(clip), ClipperLib.PolyType.ptClip, true);
  const out = new ClipperLib.Paths();
  c.Execute(type, out, fill, fill);
  return fromClipper(out);
}

// Loops from a mesh slice come in any orientation; even-odd makes them one
// material area regardless.
export const unionEvenOdd = (paths) => run(ClipperLib.ClipType.ctUnion, paths, null, ClipperLib.PolyFillType.pftEvenOdd);
export const union = (paths) => run(ClipperLib.ClipType.ctUnion, paths, null);
// Many small loops (a mesh's triangles): Clipper inserts each one into a
// sorted list, so one call with 100k triangles takes minutes. Merge in
// batches, then merge the results the same way.
export function unionMany(paths, batch = 256) {
  let parts = paths.length > batch ? nearbyFirst(paths) : paths;
  while (parts.length > batch) {
    const next = [];
    for (let i = 0; i < parts.length; i += batch) next.push(union(parts.slice(i, i + batch)));
    const merged = next.flat();
    if (next.length === 1) return merged;
    // Batches only merge neighbours that share a batch: a mesh whose
    // triangles come in no order (a faceted STEP) barely shrinks, so pass
    // after pass would never end. Then one union of everything left.
    if (merged.length > parts.length / 2) return union(merged);
    parts = merged;
  }
  return union(parts);
}
// Loops in Z-order of their middles, so neighbours share a batch.
function nearbyFirst(paths) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const mids = paths.map((l) => {
    let sx = 0, sy = 0;
    for (const [x, y] of l) { sx += x; sy += y; }
    const m = [sx / l.length, sy / l.length];
    x0 = Math.min(x0, m[0]); y0 = Math.min(y0, m[1]); x1 = Math.max(x1, m[0]); y1 = Math.max(y1, m[1]);
    return m;
  });
  const s = 65535 / Math.max(x1 - x0, y1 - y0, 1e-9);
  const spread = (v) => {
    v = (v | (v << 8)) & 0x00ff00ff; v = (v | (v << 4)) & 0x0f0f0f0f;
    v = (v | (v << 2)) & 0x33333333; return (v | (v << 1)) & 0x55555555;
  };
  const key = mids.map(([x, y]) => (spread(Math.round((x - x0) * s)) | (spread(Math.round((y - y0) * s)) << 1)) >>> 0);
  return paths.map((_, i) => i).sort((a, b) => key[a] - key[b]).map((i) => paths[i]);
}
export const difference =(a, b) => run(ClipperLib.ClipType.ctDifference, a, b);
export const intersection = (a, b) => run(ClipperLib.ClipType.ctIntersection, a, b);

// Positive delta grows the area, negative shrinks it. Round joins, so an
// offset is exactly where a round tool's center can go.
// arc: how far round corners may stray from a true arc (mm); roughing that
// leaves stock for a finishing pass can take a coarser one.
export function offset(paths, delta, arc = ARC_TOLERANCE / SCALE) {
  if (!paths.length) return [];
  // Shrinking past a hairline needle in the outline (a few µm wide, as mesh
  // sections have) can leave a spike millimetres long into what should be
  // gone. A first tiny step removes such needles; it never adds area.
  if (delta < -2 * NEEDLE) paths = offsetOnce(paths, -NEEDLE, arc), delta += NEEDLE;
  return offsetOnce(paths, delta, arc);
}
const NEEDLE = 0.005;
function offsetOnce(paths, delta, arc) {
  if (!paths.length) return [];
  const co = new ClipperLib.ClipperOffset(2, arc * SCALE);
  co.AddPaths(toClipper(paths), ClipperLib.JoinType.jtRound, ClipperLib.EndType.etClosedPolygon);
  const out = new ClipperLib.Paths();
  co.Execute(out, delta * SCALE);
  return fromClipper(out);
}

// Grown with sharp corners (mitred, up to 4× the distance out): where a
// V-bit's tip runs outside an edge, so the chamfer keeps the part's corners.
export function offsetMiter(paths, delta) {
  if (!paths.length) return [];
  const co = new ClipperLib.ClipperOffset(4, ARC_TOLERANCE);
  co.AddPaths(toClipper(paths), ClipperLib.JoinType.jtMiter, ClipperLib.EndType.etClosedPolygon);
  const out = new ClipperLib.Paths();
  co.Execute(out, delta * SCALE);
  return fromClipper(out);
}

export function loopArea(loop) {
  let a = 0;
  for (let i = 0, j = loop.length - 1; i < loop.length; j = i++) a += (loop[j][0] + loop[i][0]) * (loop[j][1] - loop[i][1]);
  return -a / 2;
}

export const area = (paths) => paths.reduce((s, l) => s + loopArea(l), 0);

export function loopLength(loop) {
  let len = 0;
  for (let i = 0; i < loop.length; i++) {
    const a = loop[i], b = loop[(i + 1) % loop.length];
    len += Math.hypot(b[0] - a[0], b[1] - a[1]);
  }
  return len;
}

export function bounds(paths) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const l of paths) for (const [x, y] of l) {
    if (x < minX) minX = x; if (x > maxX) maxX = x;
    if (y < minY) minY = y; if (y > maxY) maxY = y;
  }
  return { minX, minY, maxX, maxY };
}

// Splits an area into regions: each is one outer loop and the holes
// directly inside it. Islands inside holes become regions of their own.
export function regions(paths) {
  if (!paths.length) return [];
  const c = new ClipperLib.Clipper();
  c.AddPaths(toClipper(paths), ClipperLib.PolyType.ptSubject, true);
  const tree = new ClipperLib.PolyTree();
  c.Execute(ClipperLib.ClipType.ctUnion, tree, ClipperLib.PolyFillType.pftNonZero, ClipperLib.PolyFillType.pftNonZero);
  const out = [];
  const walk = (node) => {
    for (const child of node.Childs()) {
      if (child.IsHole()) { walk(child); continue; }
      const holes = child.Childs().map((h) => h.Contour());
      out.push(fromClipper([child.Contour(), ...holes]));
      for (const h of child.Childs()) walk(h);
    }
  };
  walk(tree);
  return out;
}

export function pointInLoop([x, y], loop) {
  let inside = false;
  for (let i = 0, j = loop.length - 1; i < loop.length; j = i++) {
    const [xi, yi] = loop[i], [xj, yj] = loop[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

// Inside the region: inside its outer loop and outside every hole.
export function pointInRegion(p, region) {
  if (!pointInLoop(p, region[0])) return false;
  for (let i = 1; i < region.length; i++) if (pointInLoop(p, region[i])) return false;
  return true;
}

export function cleanLoops(paths, minArea = 1e-4) {
  return paths.filter((l) => l.length >= 3 && Math.abs(loopArea(l)) > minArea);
}

// Fewer points, staying within tol of the original (Douglas-Peucker).
export function simplifyLoop(loop, tol = 0.005) {
  if (loop.length < 8) return loop;
  // Split at the two points farthest apart so both halves are open
  let far = 0, fd = -1;
  for (let i = 1; i < loop.length; i++) {
    const d = (loop[i][0] - loop[0][0]) ** 2 + (loop[i][1] - loop[0][1]) ** 2;
    if (d > fd) { fd = d; far = i; }
  }
  const half = (pts) => {
    const keep = new Uint8Array(pts.length);
    keep[0] = keep[pts.length - 1] = 1;
    const stack = [[0, pts.length - 1]];
    while (stack.length) {
      const [a, b] = stack.pop();
      const [ax, ay] = pts[a], [bx, by] = pts[b];
      const L = Math.hypot(bx - ax, by - ay) || 1e-12;
      let idx = -1, md = tol;
      for (let i = a + 1; i < b; i++) {
        const d = Math.abs((bx - ax) * (ay - pts[i][1]) - (ax - pts[i][0]) * (by - ay)) / L;
        if (d > md) { md = d; idx = i; }
      }
      if (idx > 0) { keep[idx] = 1; stack.push([a, idx], [idx, b]); }
    }
    return pts.filter((_, i) => keep[i]);
  };
  const a = half(loop.slice(0, far + 1));
  const b = half([...loop.slice(far), loop[0]]);
  return [...a, ...b.slice(1, -1)];
}

export const simplify = (paths, tol) => paths.map((l) => simplifyLoop(l, tol)).filter((l) => l.length >= 3);
