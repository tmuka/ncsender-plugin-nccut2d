// Toolpaths for each operation, as moves in part coordinates (mm):
// { r: true } for a rapid, otherwise a feed move at f mm/min.
//
// Climb milling with M3: pocket walls are followed counter-clockwise and
// outside edges clockwise, which is the direction Clipper already gives
// outer loops and holes.
import * as C from './clip.js';
import { FINISHES, tabDefaults } from './tools.js';

const CLEAR = 3; // mm above the stock for moves between cuts
// Material 3D roughing can leave over the surface: a layer's stair plus the
// allowance, and a margin. Rapids come down no lower than this above it.
const LAYER_LEFT = 3.5;
// A rapid comes down onto a cleared layer only this far inside what it
// cleared
const ENTRY_MARGIN = 0.02;

export function depthLevels(zTop, zBottom, stepdown) {
  const n = Math.max(1, Math.ceil((zTop - zBottom) / stepdown - 1e-6));
  return Array.from({ length: n }, (_, i) => zTop - ((i + 1) * (zTop - zBottom)) / n);
}

class Path {
  // travel(a, b): how high a rapid from a to b must go (null: the clearance
  // plane). Set, retract() waits for the next goTo, which knows where to.
  constructor(clearZ) { this.moves = []; this.clearZ = clearZ; this.at = null; this.travel = null; }
  rapid(x, y, z) { this.push({ r: true, x, y, z }); }
  feed(x, y, z, f) { this.push({ x, y, z, f }); }
  push(m) {
    const a = this.at;
    if (a && Math.abs(a.x - m.x) < 1e-6 && Math.abs(a.y - m.y) < 1e-6 && Math.abs(a.z - m.z) < 1e-6) return;
    this.moves.push(m);
    this.at = m;
  }
  // Up, across, then down to just above the surface the cut starts from.
  goTo(x, y, zSurface) {
    const a = this.at;
    let h = this.clearZ;
    if (a && this.travel) h = Math.min(h, Math.max(this.travel(a, { x, y }), a.z, zSurface + 1));
    if (a) this.rapid(a.x, a.y, h);
    this.rapid(x, y, h);
    this.rapid(x, y, zSurface + 1);
  }
  retract() { if (this.at && !this.travel) this.rapid(this.at.x, this.at.y, this.clearZ); }
}

// A closed loop walked by distance.
class Loop {
  constructor(points) {
    this.p = points;
    this.s = [0];
    for (let i = 1; i <= points.length; i++) {
      const a = points[i - 1], b = points[i % points.length];
      this.s.push(this.s[i - 1] + Math.hypot(b[0] - a[0], b[1] - a[1]));
    }
    this.length = this.s[points.length];
  }
  at(dist) {
    const L = this.length, d = ((dist % L) + L) % L;
    let i = 1;
    while (i < this.s.length - 1 && this.s[i] < d) i++;
    const a = this.p[i - 1], b = this.p[i % this.p.length];
    const seg = this.s[i] - this.s[i - 1] || 1;
    const f = (d - this.s[i - 1]) / seg;
    return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
  }
  // Distances of the corners between two distances (s1 may pass one lap).
  breaks(s0, s1) {
    const out = [];
    const L = this.length;
    for (let lap = Math.floor(s0 / L); lap * L <= s1; lap++) {
      for (let i = 0; i < this.p.length; i++) {
        const d = lap * L + this.s[i];
        if (d > s0 + 1e-9 && d < s1 - 1e-9) out.push(d);
      }
    }
    return out;
  }
  nearest([x, y]) {
    let best = 0, bd = Infinity;
    for (let i = 0; i < this.p.length; i++) {
      const d = (this.p[i][0] - x) ** 2 + (this.p[i][1] - y) ** 2;
      if (d < bd) { bd = d; best = this.s[i]; }
    }
    return best;
  }
}

// Walks a loop from distance s0 to s1. z(s) gives the depth; inside a tab
// the tool stays at tab height.
function walk(path, loop, s0, s1, z, f, tab) {
  const stops = [...loop.breaks(s0, s1), s1];
  if (tab) for (const t of tab.edges(s0, s1)) stops.push(t);
  stops.sort((a, b) => a - b);
  let prev = s0;
  for (const s of stops) {
    if (s - prev < 1e-9) continue;
    const mid = (prev + s) / 2;
    const lift = tab && tab.inside(mid) ? tab.top : -Infinity;
    const [ax, ay] = loop.at(prev);
    const za = Math.max(z(prev), lift);
    // Onto the loop where the stretch starts: a tool arriving from another
    // loop at the same depth would otherwise cut straight to the next
    // corner, past the point the link was checked against
    const a = path.at;
    if (a && (Math.abs(a.z - za) > 1e-6 || Math.abs(a.x - ax) > 1e-6 || Math.abs(a.y - ay) > 1e-6)) path.feed(ax, ay, za, f);
    const [x, y] = loop.at(s);
    path.feed(x, y, Math.max(z(s), lift), f);
    prev = s;
  }
}

// Down from zFrom to zTo along the loop, then one full lap at zTo.
// Returns where on the loop the lap ended.
function rampAndLap(path, loop, start, zFrom, zTo, fd, tab) {
  const rampLen = Math.max(0, (zFrom - zTo) / Math.tan((fd.rampAngle * Math.PI) / 180));
  if (loop.length < 1 || rampLen < 1e-6) {
    const [x, y] = loop.at(start);
    path.feed(x, y, tab && tab.inside(start) ? Math.max(zTo, tab.top) : zTo, fd.plunge);
    walk(path, loop, start, start + loop.length, () => zTo, fd.feed, tab);
    return start;
  }
  const end = start + rampLen;
  walk(path, loop, start, end, (s) => zFrom - ((s - start) / rampLen) * (zFrom - zTo), Math.min(fd.feed, fd.plunge * 2), tab);
  walk(path, loop, end, end + loop.length, () => zTo, fd.feed, tab);
  return end;
}

// Offset rings from the wall inward until nothing is left.
function rings(region, first, step, arc) {
  const out = [];
  for (let d = first, guard = 0; guard < 500; d += step, guard++) {
    const loops = C.simplify(C.cleanLoops(C.offset(region, -d, arc), 0.001), 0.005);
    if (!loops.length) break;
    out.push(loops);
  }
  return out;
}

// Rings nested into trees, cut innermost first. Loops that follow one
// another without leaving the cut form a chain; each chain starts with an
// entry ramp.
function chains(levels) {
  const nodes = levels.map((loops, depth) => loops.map((l) => ({ loop: l, depth, kids: [] })));
  for (let d = 1; d < nodes.length; d++) {
    for (const n of nodes[d]) {
      const parent = nodes[d - 1].find((p) => C.pointInLoop(n.loop[0], p.loop) && Math.sign(C.loopArea(p.loop)) === Math.sign(C.loopArea(n.loop)))
        || nodes[d - 1].find((p) => C.pointInLoop(n.loop[0], p.loop));
      (parent || nodes[0][0]).kids.push(n);
    }
  }
  const out = [];
  const emit = (n) => {
    if (!n.kids.length) { out.push([n.loop]); return; }
    for (const k of n.kids) emit(k);
    out[out.length - 1].push(n.loop);
  };
  // Islands are holes in the outer ring; they hang off it like any other loop.
  for (const root of nodes[0] || []) if (C.loopArea(root.loop) > 0) emit(root);
  for (const root of nodes[0] || []) if (C.loopArea(root.loop) <= 0 && !nodes[0].some((p) => p.kids.includes(root))) emit(root);
  return out;
}

// Inside the area the tool's center may use (nonzero winding over loops).
function inside(pt, loops) {
  let w = 0;
  for (const l of loops) if (C.pointInLoop(pt, l)) w += C.loopArea(l) > 0 ? 1 : -1;
  return w > 0;
}

// A straight move at depth is only safe if it stays where the tool may go.
function linkClear(a, b, allowed) {
  const n = Math.max(2, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 0.2));
  for (let i = 1; i < n; i++) {
    const t = i / n;
    if (!inside([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t], allowed)) return false;
  }
  return true;
}

// lift: how high to go over what's in the way between loops (in 3D the
// part itself can stand far above the layer)
// entry(x, y): how low a rapid may come down there (default: zTop, all
// cleared above it); below that the tool feeds down.
function pocket(path, region, r, fd, zTop, zBottom, allowance, lift = null, entry = null) {
  const step = Math.min(fd.stepover, r * 0.95);
  // Stock left for a finishing pass hides coarser corners
  const levels = rings(region, r + allowance, step, allowance >= 0.2 ? 0.05 : undefined);
  if (!levels.length) return;
  const allowed = C.offset(region, -(r + allowance) + 0.01);
  const cs = chains(levels);
  let zFrom = zTop;
  for (const z of depthLevels(zTop, zBottom, fd.stepdown)) {
    for (const chain of cs) {
      let loop = new Loop(chain[0]);
      let [sx, sy] = loop.at(0);
      path.goTo(sx, sy, Math.max(zFrom, entry ? entry(sx, sy) : zFrom));
      path.feed(sx, sy, zFrom, fd.plunge);
      let end = rampAndLap(path, loop, 0, zFrom, z, fd);
      for (let i = 1; i < chain.length; i++) {
        const from = loop.at(end);
        const next = new Loop(chain[i]);
        const s = next.nearest(from);
        if (!linkClear(from, next.at(s), allowed)) {
          // Something is in the way: lift and come down on the next loop
          [sx, sy] = next.at(s);
          const up = path.travel ? Math.max(zFrom + 1, Math.min(lift ?? Infinity, path.travel({ x: from[0], y: from[1] }, { x: sx, y: sy }))) : lift ?? zFrom + 1;
          path.rapid(from[0], from[1], up);
          path.rapid(sx, sy, up);
          const safe = Math.max(zFrom, entry ? entry(sx, sy) : zFrom) + 1;
          if (up > safe) path.rapid(sx, sy, safe);
          path.feed(sx, sy, z, fd.plunge);
        }
        walk(path, next, s, s + next.length, () => z, fd.feed);
        loop = next;
        end = s;
      }
    }
    zFrom = z;
  }
  path.retract();
}

// One lap of each wall at the finished size, in passes no deeper than the
// cutting length allows.
function finishWalls(path, region, r, fd, zTop, zBottom, maxDepth) {
  const loops = C.simplify(C.cleanLoops(C.offset(region, -r), 0.001), 0.005);
  for (const pts of loops) {
    const loop = new Loop(pts);
    const [x, y] = loop.at(0);
    path.goTo(x, y, zTop);
    for (const z of depthLevels(zTop, zBottom, maxDepth)) {
      path.feed(x, y, z, fd.plunge);
      walk(path, loop, 0, loop.length, () => z, fd.feed * 0.9);
    }
    path.retract();
  }
}

// 3D roughing leaves its allowance for the ball, which can't finish the
// foot of a vertical wall. Where a layer's wall stands right under the one
// above (within 0.05 mm: vertical), one lap to the wall finishes it. It
// touches only the layer's outline, which holds everything above it.
// Starts come down no lower than entry(x, y) allows.
function verticalWalls(path, region, above, r, fd, zFrom, z, entry) {
  const lo = above ? C.offset(above, -(r - 0.05)) : null, hi = above ? C.offset(above, -(r + 0.05)) : null;
  const vertical = (q) => !above || (inside(q, lo) && !inside(q, hi));
  // 0.02 off the wall: the offset's arcs (0.01) and the simplifying (0.005)
  // may each cut a corner by that much, never into the part
  for (const pts of C.simplify(C.cleanLoops(C.offset(region, -(r + 0.02)), 0.001), 0.005)) {
    const loop = new Loop(pts);
    const n = Math.max(8, Math.ceil(loop.length / 0.5));
    const flag = Array.from({ length: n }, (_, i) => vertical(loop.at((i / n) * loop.length)));
    if (!flag.some(Boolean)) continue;
    const all = flag.every(Boolean);
    const first = all ? 0 : flag.indexOf(false);
    for (let k = 0; k < n; k++) {
      const i = (first + k) % n;
      if (!flag[i] || (!all && flag[(i - 1 + n) % n])) continue;
      let j = i;
      while (j - i < n - 1 && flag[(j + 1) % n]) j++;
      const s0 = (i / n) * loop.length, s1 = all ? s0 + loop.length : ((j + 1) / n) * loop.length;
      const [x, y] = loop.at(s0);
      path.goTo(x, y, Math.max(zFrom, entry(x, y)));
      path.feed(x, y, z, fd.plunge);
      walk(path, loop, s0, s1, () => z, fd.feed * 0.9);
      path.retract();
      if (all) break;
    }
  }
}

// Chamfers: a V-bit along each edge's loop (the tip a little outside it),
// down to the chamfer's depth in passes no deeper than a step-down, only
// where nothing else is within reach of the cone (outside `bad`).
function chamfer(path, levels, fd) {
  for (const lv of levels) {
    for (const pts of nearestFirst(lv.loops.map((l) => [l]), path.at).map((g) => g[0])) {
      const loop = new Loop(pts.slice().reverse()); // climb, as the cut-out
      const n = Math.max(8, Math.ceil(loop.length / 0.25));
      const flag = Array.from({ length: n }, (_, i) => { const q = loop.at((i / n) * loop.length); return !inside(q, lv.bad) && (!lv.keep || inside(q, lv.keep)); });
      if (!flag.some(Boolean)) continue;
      const all = flag.every(Boolean), first = all ? 0 : flag.indexOf(false);
      for (let k = 0; k < n; k++) {
        const i = (first + k) % n;
        if (!flag[i] || (!all && flag[(i - 1 + n) % n])) continue;
        let j = i;
        while (j - i < n - 1 && flag[(j + 1) % n]) j++;
        const s0 = (i / n) * loop.length, s1 = all ? s0 + loop.length : (j / n) * loop.length;
        if (!all && s1 - s0 < 0.5) continue; // a stretch too short to matter
        const [x, y] = loop.at(s0);
        for (const z of depthLevels(lv.z, lv.z - lv.depth, fd.stepdown)) {
          if (!all) path.goTo(x, y, lv.z);
          else if (!path.at || Math.hypot(path.at.x - x, path.at.y - y) > 1e-6) path.goTo(x, y, lv.z);
          path.feed(x, y, z, fd.plunge);
          walk(path, loop, s0, s1, () => z, fd.feed);
          if (!all) path.retract();
        }
        path.retract();
        if (all) break;
      }
    }
  }
}

// Only the stretches of the wall the bigger tool couldn't reach.
function corners(path, region, r, bigR, fd, zTop, zBottom) {
  const left = C.cleanLoops(C.difference(region, C.offset(C.offset(region, -bigR), bigR)), 0.01);
  if (!left.length) return;
  const near = C.offset(left, r + 0.5);
  for (const pts of C.simplify(C.cleanLoops(C.offset(region, -r), 0.001), 0.005)) {
    const loop = new Loop(pts);
    const n = Math.max(8, Math.ceil(loop.length / 0.25));
    const inside = Array.from({ length: n }, (_, i) => near.some((l) => C.pointInLoop(loop.at((i / n) * loop.length), l)));
    if (inside.every(Boolean)) { finishWalls(path, region, r, fd, zTop, zBottom, fd.stepdown); return; }
    // Runs of samples near a corner, starting after an outside sample
    const first = inside.indexOf(false);
    for (let k = 0; k < n; k++) {
      const i = (first + k) % n;
      if (!inside[i] || inside[(i - 1 + n) % n]) continue;
      let j = i;
      while (inside[(j + 1) % n] && j - i < n) j++;
      const s0 = (i / n) * loop.length, s1 = ((j + 1) / n) * loop.length;
      const [x, y] = loop.at(s0);
      path.goTo(x, y, zTop);
      let forward = true;
      for (const z of depthLevels(zTop, zBottom, fd.stepdown)) {
        const ds = [...loop.breaks(s0, s1), s1];
        const route = forward ? ds : [...ds.slice(0, -1).reverse(), s0];
        const [cx, cy] = loop.at(forward ? s0 : s1);
        path.feed(cx, cy, z, fd.plunge);
        for (const d of route) { const [px, py] = loop.at(d); path.feed(px, py, z, fd.feed); }
        forward = !forward;
      }
      path.retract();
    }
  }
}

function face(path, stock, r, fd, zTop, zBottom) {
  const step = Math.min(fd.stepover, r * 1.6);
  const x0 = stock.minX - r - 2, x1 = stock.maxX + r + 2;
  for (const z of depthLevels(zTop, zBottom, fd.stepdown)) {
    let y = stock.minY + r * 0.6;
    path.goTo(x0, y, zTop);
    path.feed(x0, y, z, fd.plunge);
    let dir = 1;
    for (;;) {
      path.feed(dir > 0 ? x1 : x0, y, z, fd.feed);
      if (y >= stock.maxY - r * 0.6 - 1e-6) break;
      y = Math.min(y + step, stock.maxY - r * 0.6);
      path.feed(dir > 0 ? x1 : x0, y, z, fd.feed);
      dir = -dir;
    }
  }
  path.retract();
}

// Threads with a single-form thread mill, hole by hole (nearest next): down
// the middle of the hole (cut to the thread's minor diameter, wider than the
// cutter) to the bottom, a half circle out onto the helix, up one pitch a
// turn to the top (climb milling: counter-clockwise for a right-hand
// thread), a half circle back to the middle, out. In passes, each a little
// further out, the last two at full depth (a spring pass).
const THREAD_PASSES = { fast: [0.6, 1], balanced: [0.5, 0.8, 1, 1], smooth: [0.4, 0.65, 0.85, 1, 1] };
function threads(path, op, fd, finish) {
  const th = op.thread, d = op.tool.cut ?? op.tool.diameter;
  const Rfull = Math.max(0, (th.major - d) / 2), P = th.pitch, dir = th.hand === 'left' ? -1 : 1;
  const seg = 72; // a turn
  const left = op.centers.slice();
  while (left.length) {
    const at = path.at || left[0];
    let best = 0;
    left.forEach((q, i) => { if (Math.hypot(q.x - at.x, q.y - at.y) < Math.hypot(left[best].x - at.x, left[best].y - at.y)) best = i; });
    const [c] = left.splice(best, 1);
    path.goTo(c.x, c.y, op.zTop);
    for (const f of THREAD_PASSES[finish] || THREAD_PASSES.balanced) {
      const R = Rfull * f;
      // Straight down the middle: nothing there but air
      path.feed(c.x, c.y, op.zTop, fd.plunge);
      path.feed(c.x, c.y, th.zLow, fd.plunge);
      // Out along a half circle R/2 wide, meeting the helix going its way
      let z = th.zLow;
      for (let k = 1; k <= seg / 2; k++) {
        const a = Math.PI + (Math.PI * k) / (seg / 2); // π..2π round (R/2, 0)
        z = th.zLow + (P / 4) * (k / (seg / 2));
        path.feed(c.x + R / 2 + (R / 2) * Math.cos(a), c.y + dir * (R / 2) * Math.sin(a), z, fd.feed);
      }
      // Up the helix
      const turns = (th.zHigh - z) / P, steps = Math.max(1, Math.ceil(turns * seg));
      let a = 0;
      for (let k = 1; k <= steps; k++) {
        a = (2 * Math.PI * turns * k) / steps;
        path.feed(c.x + R * Math.cos(a), c.y + dir * R * Math.sin(a), z + (P * a) / (2 * Math.PI), fd.feed);
      }
      // Back in along a half circle to the middle
      const z1 = z + P * turns, cx = c.x + (R / 2) * Math.cos(a), cy = c.y + dir * (R / 2) * Math.sin(a);
      for (let k = 1; k <= seg / 2; k++) {
        const b = a + (Math.PI * k) / (seg / 2);
        path.feed(cx + (R / 2) * Math.cos(b), cy + dir * (R / 2) * Math.sin(b), Math.min(op.zTop, z1 + (P / 4) * (k / (seg / 2))), fd.feed);
      }
    }
    path.feed(c.x, c.y, op.zTop, fd.feed);
    path.retract();
  }
}

// A hole an end mill only a little smaller than it rounds to size, after a
// pilot drill took the middle: down into the pilot, then a helix out at the
// hole's edge (climb: counter-clockwise), a step-down a turn, a last full
// turn at the bottom, back to the middle and up.
function bore(path, centers, r, fd, zTop, zBottom) {
  const left = centers.slice();
  while (left.length) {
    // The nearest hole next
    const at = path.at || left[0];
    let best = 0;
    left.forEach((q, i) => { if (Math.hypot(q.x - at.x, q.y - at.y) < Math.hypot(left[best].x - at.x, left[best].y - at.y)) best = i; });
    const [c] = left.splice(best, 1);
    const R = Math.max(0, c.d / 2 - r);
    const turns = Math.max(1, Math.ceil((zTop - zBottom) / fd.stepdown - 1e-6));
    const seg = Math.max(12, Math.ceil((2 * Math.PI * R) / 0.05));
    path.goTo(c.x, c.y, zTop);
    path.feed(c.x, c.y, zTop, fd.plunge);
    path.feed(c.x + R, c.y, zTop, fd.feed);
    for (let k = 1; k <= (turns + 1) * seg; k++) {
      const a = (2 * Math.PI * k) / seg, z = Math.max(zBottom, zTop - ((zTop - zBottom) * k) / (turns * seg));
      path.feed(c.x + R * Math.cos(a), c.y + R * Math.sin(a), z, fd.feed);
    }
    path.feed(c.x, c.y, zBottom, fd.feed);
    path.retract();
  }
}

function drill(path, centers, fd, zTop, zBottom, d) {
  const peck = Math.max(0.5, d * 1.5);
  for (const c of centers) {
    path.goTo(c.x, c.y, zTop);
    let z = zTop;
    while (z > zBottom + 1e-6) {
      const next = Math.max(zBottom, z - peck);
      if (z < zTop) path.rapid(c.x, c.y, z + 0.5);
      path.feed(c.x, c.y, next, fd.plunge);
      path.rapid(c.x, c.y, zTop + 1);
      z = next;
    }
    path.retract();
  }
}

// Tabs at even spacing; their edges are where the tool's center lifts.
function makeTabs(length, job, r, zPartBottom) {
  const count = Math.max(0, Math.round(job.tabs.count));
  if (!job.tabs.enabled || !count) return null;
  // The tool's center lifts for the bridge plus its own width
  const bridge = job.tabs.length ?? tabDefaults(job.material).length;
  const width = 2 * r + bridge;
  const spans = Array.from({ length: count }, (_, i) => {
    const mid = ((i + 0.5) / count) * length;
    return [mid - width / 2, mid + width / 2];
  });
  const L = length;
  return {
    top: zPartBottom + (job.tabs.height ?? tabDefaults(job.material).height),
    inside: (s) => { const d = ((s % L) + L) % L; return spans.some(([a, b]) => d > a && d < b); },
    edges: (s0, s1) => {
      const out = [];
      for (let lap = Math.floor(s0 / L); lap * L <= s1; lap++) for (const [a, b] of spans) for (const e of [a, b]) {
        const d = lap * L + e;
        if (d > s0 && d < s1) out.push(d);
      }
      return out;
    },
  };
}

// Where the cut-out leaves its tabs: the middle of each, on the tool's path
// around each outside outline (as cutout() lays them)
export function tabSpots(footprint, r, job) {
  if (!job.tabs.enabled) return [];
  const count = Math.max(0, Math.round(job.tabs.count));
  const out = [];
  for (const outer of C.regions(footprint).map((g) => g[0])) {
    for (const pts of C.simplify(C.cleanLoops(C.offset([outer], r), 0.001), 0.005).filter((l) => C.loopArea(l) > 0)) {
      const loop = new Loop(pts.slice().reverse());
      for (let i = 0; i < count; i++) out.push(loop.at(((i + 0.5) / count) * loop.length));
    }
  }
  return out;
}

function cutout(path, footprint, r, fd, zTop, zBottom, job, allowance) {
  const passes = [{ off: r + allowance, fd }];
  if (allowance > 0) passes.push({ off: r, fd: { ...fd, feed: Math.round(fd.feed * 0.9) }, finish: true });
  for (const pass of passes) {
    for (const outer of C.regions(footprint).map((g) => g[0])) {
      const grown = C.simplify(C.cleanLoops(C.offset([outer], pass.off), 0.001), 0.005).filter((l) => C.loopArea(l) > 0);
      for (const pts of grown) {
        const loop = new Loop(pts.slice().reverse()); // clockwise: climb on an outside edge
        const tab = makeTabs(loop.length, job, r, 0);
        const [x, y] = loop.at(0);
        path.goTo(x, y, zTop);
        path.feed(x, y, zTop, fd.plunge);
        let s = 0, zFrom = zTop;
        const levels = pass.finish ? depthLevels(zTop, zBottom, Math.max(fd.stepdown, Math.min(3 * 2 * r, zTop - zBottom))) : depthLevels(zTop, zBottom, fd.stepdown);
        for (const z of levels) {
          s = rampAndLap(path, loop, s, zFrom, z, pass.fd, tab);
          zFrom = z;
        }
        path.retract();
      }
    }
  }
}

// Inside a closed line (ncCut2D): the tool's edge on the line from inside,
// counter-clockwise (climb on an inside wall), each loop on its own; tabs
// (when `tabs`) keep the piece from dropping into the cutter.
function insideProfile(path, loops, r, fd, zTop, zBottom, job, allowance, tabs) {
  const tabJob = { ...job, tabs: { ...job.tabs, enabled: !!tabs } };
  const passes = [{ off: r + allowance, fd }];
  if (allowance > 0) passes.push({ off: r, fd: { ...fd, feed: Math.round(fd.feed * 0.9) }, finish: true });
  for (const pass of passes) {
    for (const outer of nearestFirst(loops.map((l) => [C.loopArea(l) < 0 ? l.slice().reverse() : l]), path.at).map((g) => g[0])) {
      const shrunk = C.simplify(C.cleanLoops(C.offset([outer], -pass.off), 0.001), 0.005).filter((l) => C.loopArea(l) > 0);
      for (const pts of shrunk) {
        const loop = new Loop(pts); // counter-clockwise
        const tab = makeTabs(loop.length, tabJob, r, 0);
        const [x, y] = loop.at(0);
        path.goTo(x, y, zTop);
        path.feed(x, y, zTop, fd.plunge);
        let s = 0, zFrom = zTop;
        const levels = pass.finish ? depthLevels(zTop, zBottom, Math.max(fd.stepdown, Math.min(3 * 2 * r, zTop - zBottom))) : depthLevels(zTop, zBottom, fd.stepdown);
        for (const z of levels) {
          s = rampAndLap(path, loop, s, zFrom, z, pass.fd, tab);
          zFrom = z;
        }
        path.retract();
      }
    }
  }
}

// On the line (ncCut2D): the tool's centre follows each line, a groove as
// wide as the tool. Closed lines ramp in and lap; open ones go back and
// forth, one step-down each way.
function onLine(path, lines, fd, zTop, zBottom) {
  const left = lines.slice();
  while (left.length) {
    const at = path.at || { x: left[0].pts[0][0], y: left[0].pts[0][1] };
    let best = 0, flip = false, bestD = Infinity;
    left.forEach((l, i) => {
      const a = l.pts[0], b = l.pts[l.pts.length - 1];
      const da = Math.hypot(a[0] - at.x, a[1] - at.y), db = l.closed ? Infinity : Math.hypot(b[0] - at.x, b[1] - at.y);
      if (Math.min(da, db) < bestD) { bestD = Math.min(da, db); best = i; flip = db < da; }
    });
    const [line] = left.splice(best, 1);
    const pts = flip ? line.pts.slice().reverse() : line.pts;
    if (line.closed) {
      const loop = new Loop(pts[0][0] === pts.at(-1)[0] && pts[0][1] === pts.at(-1)[1] ? pts.slice(0, -1) : pts);
      const [x, y] = loop.at(0);
      path.goTo(x, y, zTop);
      path.feed(x, y, zTop, fd.plunge);
      let s = 0, zFrom = zTop;
      for (const z of depthLevels(zTop, zBottom, fd.stepdown)) { s = rampAndLap(path, loop, s, zFrom, z, fd); zFrom = z; }
    } else {
      let way = pts;
      path.goTo(way[0][0], way[0][1], zTop);
      for (const z of depthLevels(zTop, zBottom, fd.stepdown)) {
        path.feed(way[0][0], way[0][1], z, fd.plunge);
        for (const [x, y] of way.slice(1)) path.feed(x, y, z, fd.feed);
        way = way.slice().reverse();
      }
    }
    path.retract();
  }
}

// The part's top as a 3D tool sees it (g: a height grid). A node counts as
// half a cell's diagonal nearer than it is: any point of the surface is that
// close to some node, and on a steep wall the surface between two nodes can
// stand far above both; the tool's edge must still see it.
function toolOnSurface(g, tool, zFloor) {
  const r = tool.diameter / 2, c = g.cell, ball = tool.kind === 'ball';
  const near = c * Math.SQRT1_2, n = Math.ceil((r + near) / c);
  const tip = (d) => (ball ? r - Math.sqrt(Math.max(0, r * r - d * d)) : 0); // tip to tool end at d out
  const st = [];
  for (let j = -n; j <= n; j++) for (let i = -n; i <= n; i++) {
    const d = Math.max(0, Math.hypot(i, j) * c - near);
    if (d <= r + 1e-9) st.push(i, j, tip(d));
  }
  const { nx, ny, h, x0, y0 } = g;
  const S = { r, c, n, zFloor, x: (i) => x0 + i * c, y: (j) => y0 + j * c };
  // Lowest the tip can go with the tool's axis on node i, j (null: no part
  // within reach), never below zFloor
  S.drop = (i, j) => {
    let z = -Infinity;
    for (let s = 0; s < st.length; s += 3) {
      const ii = i + st[s], jj = j + st[s + 1];
      if (ii < 0 || jj < 0 || ii >= nx || jj >= ny) continue;
      const v = h[jj * nx + ii] - st[s + 2];
      if (v > z) z = v;
    }
    return z === -Infinity ? null : Math.max(z, zFloor);
  };
  // The same anywhere, not only on a node
  S.dropAt = (x, y) => {
    const fi = (x - x0) / c, fj = (y - y0) / c, m = (r + near) / c;
    let z = -Infinity;
    for (let jj = Math.max(0, Math.ceil(fj - m)); jj <= Math.min(ny - 1, Math.floor(fj + m)); jj++) {
      for (let ii = Math.max(0, Math.ceil(fi - m)); ii <= Math.min(nx - 1, Math.floor(fi + m)); ii++) {
        const d = Math.max(0, Math.hypot(ii - fi, jj - fj) * c - near);
        if (d > r) continue;
        const v = h[jj * nx + ii] - tip(d);
        if (v > z) z = v;
      }
    }
    return z === -Infinity ? null : Math.max(z, zFloor);
  };
  // The highest surface anywhere under the tool: rapids stop above it
  S.underAt = (x, y) => {
    const fi = (x - x0) / c, fj = (y - y0) / c, m = (r + near) / c;
    let z = zFloor;
    for (let jj = Math.max(0, Math.ceil(fj - m)); jj <= Math.min(ny - 1, Math.floor(fj + m)); jj++) {
      for (let ii = Math.max(0, Math.ceil(fi - m)); ii <= Math.min(nx - 1, Math.floor(fi + m)); ii++) if (h[jj * nx + ii] > z) z = h[jj * nx + ii];
    }
    return z;
  };
  // Nodes where the part is, plus the tool's reach
  let i0 = Infinity, i1 = -1, j0 = Infinity, j1 = -1;
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    if (h[j * nx + i] === -Infinity) continue;
    if (i < i0) i0 = i; if (i > i1) i1 = i; if (j < j0) j0 = j; if (j > j1) j1 = j;
  }
  S.box = i1 < 0 ? null : { i0: Math.max(0, i0 - n), i1: Math.min(nx - 1, i1 + n), j0: Math.max(0, j0 - n), j1: Math.min(ny - 1, j1 + n) };
  return S;
}

// Cuts along a line of points, getting onto it from where the tool is: a
// short hop goes straight (over whatever stands in the way), a long one up
// to the clearance plane and down to where stairs left by the roughing may be.
const STEEP_DOWN = Math.tan((70 * Math.PI) / 180);
function followLine(path, S, line, fd, reach, above) {
  const first = line[0], last = path.at;
  if (last && !last.r && Math.hypot(first.x - last.x, first.y - last.y) <= reach) {
    const m = Math.max(1, Math.ceil(Math.hypot(first.x - last.x, first.y - last.y) / (S.c / 2)));
    // In the way: anything above the straight line, even if lower than its
    // higher end; then over the top of all of it
    let top = Math.max(last.z, first.z), blocked = false;
    for (let k = 1; k < m; k++) {
      const t = k / m, z = S.dropAt(last.x + (first.x - last.x) * t, last.y + (first.y - last.y) * t) ?? S.zFloor;
      if (z > last.z + (first.z - last.z) * t + 1e-3) { blocked = true; top = Math.max(top, z); }
    }
    if (blocked) {
      path.feed(last.x, last.y, top + 0.5, fd.feed);
      path.feed(first.x, first.y, top + 0.5, fd.feed);
    }
    path.feed(first.x, first.y, first.z, fd.plunge);
  } else {
    path.goTo(first.x, first.y, S.underAt(first.x, first.y) + above);
    path.feed(first.x, first.y, first.z, fd.plunge);
  }
  let prev = first;
  for (const q of line.slice(1)) {
    // Steeper than 70° down: plunge rate (the ball's tip does the cutting)
    path.feed(q.x, q.y, q.z, prev.z - q.z > STEEP_DOWN * Math.hypot(q.x - prev.x, q.y - prev.y) ? fd.plunge : fd.feed);
    prev = q;
  }
}

// 3D finishing: back-and-forth passes along X over the whole surface, then
// (steep: true) waterlines on the walls steeper than STEEP, where passes
// along X step down the wall in big steps. Both are spaced for ridges
// `ridge` high.
const STEEP = Math.tan((50 * Math.PI) / 180);
function surface3d(path, g, tool, fd, ridge, zFloor, above, steep = true) {
  const S = toolOnSurface(g, tool, zFloor);
  if (!S.box) return;
  const { r, c } = S, { i0, i1, j0, j1 } = S.box;
  const over = tool.kind === 'ball' ? 2 * Math.sqrt(Math.max(0, 2 * r * ridge - ridge * ridge)) : fd.stepover * 0.5;
  const every = Math.max(1, Math.floor(Math.min(over, r) / c + 1e-9));
  const reach = 3 * every * c + 1e-6;
  const rows = [];
  for (let j = j0; j <= j1; j += every) rows.push(j);
  if (rows[rows.length - 1] !== j1) rows.push(j1);
  rows.forEach((j, k) => {
    // Runs of nodes the tool reaches, simplified, every other row backwards
    const runs = [];
    let run = [];
    for (let i = i0; i <= i1; i++) {
      const z = S.drop(i, j);
      if (z === null) { if (run.length) runs.push(run); run = []; continue; }
      run.push({ x: S.x(i), y: S.y(j), z });
    }
    if (run.length) runs.push(run);
    if (k % 2) { runs.reverse(); runs.forEach((x) => x.reverse()); }
    for (const pts of runs) followLine(path, S, simplifyZ(pts, 0.005), fd, reach, above);
  });
  if (steep) waterlines(path, S, fd, Math.min(over, r), reach, above);
  path.retract();
}

// Contours of the drop field (how low the tip can go) at heights `dz`
// apart, where it's steep: the tool runs level around the wall. Contour
// points lie between nodes, so each is checked again (dropAt) and lifted
// if the surface there needs it.
function waterlines(path, S, fd, dz, reach, above) {
  const k = 2; // field on every other node: plenty for where to look
  const { i0, i1, j0, j1 } = S.box;
  const W = Math.floor((i1 - i0) / k) + 1, H = Math.floor((j1 - j0) / k) + 1;
  const D = new Float32Array(W * H);
  let zMax = -Infinity;
  for (let b = 0; b < H; b++) for (let a = 0; a < W; a++) {
    const z = S.drop(i0 + a * k, j0 + b * k);
    D[b * W + a] = z === null ? NaN : z;
    if (z !== null && z > zMax) zMax = z;
  }
  const step = k * S.c, slope = STEEP * step;
  const X = (a) => S.x(i0 + a * k), Y = (b) => S.y(j0 + b * k);
  // A cell is steep when any of its sides rises faster than STEEP
  const steepCell = new Uint8Array(W * H);
  for (let b = 0; b + 1 < H; b++) for (let a = 0; a + 1 < W; a++) {
    const p = D[b * W + a], q = D[b * W + a + 1], u = D[(b + 1) * W + a], v = D[(b + 1) * W + a + 1];
    if ([p, q, u, v].some(Number.isNaN)) continue;
    if (Math.abs(p - q) > slope || Math.abs(u - v) > slope || Math.abs(p - u) > slope || Math.abs(q - v) > slope) steepCell[b * W + a] = 1;
  }
  for (let z = zMax - dz / 2; z > S.zFloor + 0.05; z -= dz) {
    // Marching squares: a segment across each steep cell the level crosses,
    // its ends named by the cell side they lie on
    const ends = new Map(), segs = [];
    const edge = (a, b, horiz) => {
      const key = horiz ? `h${a},${b}` : `v${a},${b}`;
      if (!ends.has(key)) {
        const p = D[b * W + a], q = horiz ? D[b * W + a + 1] : D[(b + 1) * W + a];
        const t = (z - p) / (q - p);
        ends.set(key, { key, x: horiz ? X(a) + t * step : X(a), y: horiz ? Y(b) : Y(b) + t * step, segs: [] });
      }
      return ends.get(key);
    };
    for (let b = 0; b + 1 < H; b++) for (let a = 0; a + 1 < W; a++) {
      if (!steepCell[b * W + a]) continue;
      const p = D[b * W + a] > z, q = D[b * W + a + 1] > z, u = D[(b + 1) * W + a] > z, v = D[(b + 1) * W + a + 1] > z;
      const sides = [];
      if (p !== q) sides.push(edge(a, b, true));
      if (q !== v) sides.push(edge(a + 1, b, false));
      if (u !== v) sides.push(edge(a, b + 1, true));
      if (p !== u) sides.push(edge(a, b, false));
      // Two sides crossed: one segment; four (a saddle): pair them in order
      for (let s = 0; s + 1 < sides.length; s += 2) {
        const seg = [sides[s], sides[s + 1]];
        segs.push(seg); seg[0].segs.push(seg); seg[1].segs.push(seg);
      }
    }
    // Segments joined end to end into lines
    const used = new Set(), lines = [];
    for (const seg of segs) {
      if (used.has(seg)) continue;
      used.add(seg);
      const line = [seg[0], seg[1]];
      for (const back of [false, true]) {
        for (;;) {
          const tail = back ? line[0] : line[line.length - 1];
          const next = tail.segs.find((s) => !used.has(s));
          if (!next) break;
          used.add(next);
          const o = next[0] === tail ? next[1] : next[0];
          if (back) line.unshift(o); else line.push(o);
        }
      }
      if (line.length >= 3) lines.push(line);
    }
    // Nearest line first; each point no lower than the surface allows
    let at = path.at;
    while (lines.length) {
      let best = 0, bd = Infinity, flip = false;
      lines.forEach((l, i) => {
        for (const [e, f] of [[l[0], false], [l[l.length - 1], true]]) {
          const d = at ? Math.hypot(e.x - at.x, e.y - at.y) : 0;
          if (d < bd) { bd = d; best = i; flip = f; }
        }
      });
      const [l] = lines.splice(best, 1);
      if (flip) l.reverse();
      const pts = l.map((e) => ({ x: e.x, y: e.y, z: Math.max(z, S.dropAt(e.x, e.y) ?? z) }));
      followLine(path, S, simplifyZ(pts, 0.005), fd, reach, above);
      at = path.at;
    }
  }
}

// Drops points that lie within tol of the line through their neighbours
// (along one pass, so x or y and z).
function simplifyZ(pts, tol) {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    const A = pts[a], B = pts[b];
    const dx = B.x - A.x, dy = B.y - A.y, dz = B.z - A.z;
    const L2 = dx * dx + dy * dy + dz * dz;
    let worst = -1, wd = tol;
    for (let k = a + 1; k < b; k++) {
      const P = pts[k];
      const t = L2 > 0 ? ((P.x - A.x) * dx + (P.y - A.y) * dy + (P.z - A.z) * dz) / L2 : 0;
      const d = Math.hypot(A.x + dx * t - P.x, A.y + dy * t - P.y, A.z + dz * t - P.z);
      if (d > wd) { wd = d; worst = k; }
    }
    if (worst >= 0) { keep[worst] = 1; stack.push([a, worst], [worst, b]); }
  }
  return pts.filter((_, k) => keep[k]);
}

// Areas of consecutive layers that overlap, joined into columns: each is
// one area (its first part, for nearestFirst) with all its parts in order.
function spots(layers) {
  const open = [];
  let all = [];
  layers.forEach((layer, k) => {
    const next = [];
    for (const area of C.regions(layer.region)) {
      const b = C.bounds([area[0]]);
      // Every column this area is under: two that join lower down are one,
      // cut layer by layer across both, so neither is cut below the other's
      // uncut upper layers
      const under = [...new Set(open.filter((o) => o.b.minX < b.maxX && b.minX < o.b.maxX && o.b.minY < b.maxY && b.minY < o.b.maxY && C.area(C.intersection(o.last, area)) > 0).map((o) => o.spot))];
      const spot = under[0] || { parts: [] };
      if (!under.length) all.push(spot);
      for (const other of under.slice(1)) {
        spot.parts.push(...other.parts);
        all = all.filter((x) => x !== other);
        for (const o of [...open, ...next]) if (o.spot === other) o.spot = spot;
      }
      spot.parts.push({ k, area });
      next.push({ k, b, last: area, spot });
    }
    open.length = 0;
    open.push(...next);
  });
  for (const spot of all) spot.parts.sort((a, b) => a.k - b.k);
  // nearestFirst takes areas: give each column its first part's, and back
  return all.map((spot) => Object.assign([...spot.parts[0].area], { parts: spot.parts }));
}

// Visits areas from where the tool is, always going to the closest next.
function nearestFirst(areas, from) {
  const mid = (a) => { const b = C.bounds([a[0]]); return [(b.minX + b.maxX) / 2, (b.minY + b.maxY) / 2]; };
  const left = areas.map((a) => ({ a, m: mid(a) }));
  const out = [];
  let at = from ? [from.x, from.y] : left[0]?.m;
  while (left.length) {
    let best = 0;
    for (let i = 1; i < left.length; i++) if (Math.hypot(left[i].m[0] - at[0], left[i].m[1] - at[1]) < Math.hypot(left[best].m[0] - at[0], left[best].m[1] - at[1])) best = i;
    const [n] = left.splice(best, 1);
    out.push(n.a); at = n.m;
  }
  return out;
}

// How far down 3D layers have cleared the stock, on a 1 mm grid over it:
// a cell goes down to a layer's floor when its middle is inside what the
// layer swept and it was already cleared to the layer's top. Rapids between
// cuts go just over the highest cell under the tool's way.
class Cleared {
  constructor(stock, zTop) {
    this.c = 1; this.x0 = stock.minX; this.y0 = stock.minY;
    this.nx = Math.ceil((stock.maxX - stock.minX) / this.c) + 1;
    this.ny = Math.ceil((stock.maxY - stock.minY) / this.c) + 1;
    this.top = new Float32Array(this.nx * this.ny).fill(zTop);
  }
  // Even-odd over the loops, row by row. A cell counts as cleared only when
  // all of it is: a wall thinner than a cell between two cell centres would
  // otherwise be missed, and a rapid cross it.
  layer(cut, zFrom, z) {
    const { c, x0, y0, nx, ny, top } = this;
    const loops = C.offset(cut, -(c * Math.SQRT1_2 + 0.02));
    for (let j = 0; j < ny; j++) {
      const y = y0 + j * c, xs = [];
      for (const l of loops) for (let k = 0; k < l.length; k++) {
        const [ax, ay] = l[k], [bx, by] = l[(k + 1) % l.length];
        if ((ay <= y) !== (by <= y)) xs.push(ax + ((y - ay) / (by - ay)) * (bx - ax));
      }
      xs.sort((a, b) => a - b);
      for (let k = 0; k + 1 < xs.length; k += 2) {
        for (let i = Math.max(0, Math.ceil((xs[k] - x0) / c)); i <= Math.min(nx - 1, Math.floor((xs[k + 1] - x0) / c)); i++) {
          const q = j * nx + i;
          if (top[q] <= zFrom + 1e-6 && z < top[q]) top[q] = z;
        }
      }
    }
  }
  // Highest stock within reach of a tool r wide moving from a to b, + 1 mm
  over(a, b, r) {
    const { c, x0, y0, nx, ny, top } = this;
    const reach = (r + 1.5 * c) / c;
    const n = Math.max(1, Math.ceil(Math.hypot(b.x - a.x, b.y - a.y) / (c / 2)));
    let h = -Infinity;
    for (let k = 0; k <= n; k++) {
      const fi = (a.x + ((b.x - a.x) * k) / n - x0) / c, fj = (a.y + ((b.y - a.y) * k) / n - y0) / c;
      for (let j = Math.max(0, Math.ceil(fj - reach)); j <= Math.min(ny - 1, Math.floor(fj + reach)); j++) {
        for (let i = Math.max(0, Math.ceil(fi - reach)); i <= Math.min(nx - 1, Math.floor(fi + reach)); i++) {
          if ((i - fi) ** 2 + (j - fj) ** 2 <= reach * reach && top[j * nx + i] > h) h = top[j * nx + i];
        }
      }
    }
    return h + 1;
  }
}

// How low a rapid may come down at x, y onto a layer starting at zFrom:
// material goes from the top down, so it is clear down to the last of an
// unbroken run of layers from the top that each swept the whole tool there.
function clearedDown(swept, zFrom, r, x, y, zTop) {
  const levels = [...new Set(swept.map((s) => s.z))].sort((a, b) => b - a);
  let top = zTop;
  for (const z of levels) {
    if (z < zFrom - 1e-6) break;
    if (!inside([x, y], sweptAt(swept, z, r))) break;
    top = z;
  }
  return Math.max(top, zFrom);
}

// Everything swept down to height z (roughing and rest together), shrunk so
// a tool r wide centred inside fits whole. Kept until more is swept there.
function sweptAt(swept, z, r) {
  const here = swept.filter((s) => Math.abs(s.z - z) < 1e-6);
  swept.inner ||= new Map();
  const key = `${z}|${r}`, got = swept.inner.get(key);
  if (got && got.n === here.length) return got.loops;
  const loops = C.offset(C.union(here.flatMap((s) => s.area)), -r - ENTRY_MARGIN);
  swept.inner.set(key, { n: here.length, loops });
  return loops;
}

export function toolpaths(p) {
  const clearZ = p.stock.top + CLEAR;
  const swept = []; // 3D layers cut so far: { zFrom, z, area }
  let cleared = null; // the same on a grid, for rapids between cuts
  const allowance = (FINISHES[p.job.finish] || FINISHES.balanced).allowance;
  // Without the facing pass the top is still at the stock's height
  const faced = p.ops.some((o) => o.kind === 'face' && o.enabled);
  const surface = faced ? p.analysis.top : p.stock.top;
  for (const op of p.ops) {
    const path = new Path(clearZ);
    const zTop = op.kind !== 'face' && op.zTop >= p.analysis.top - 1e-6 ? Math.max(op.zTop, surface) : op.zTop;
    const r = op.tool.diameter / 2, fd = op.feeds;
    const maxFinish = Math.min(op.tool.fluteLength || Infinity, 3 * op.tool.diameter);
    switch (op.kind) {
      case 'face': face(path, p.stock, r, fd, zTop, op.zBottom); break;
      case 'hole':
        // A pilot drilled the middle: round the hole to size from it
        if (op.bore) { bore(path, op.centers, r, fd, zTop, op.zBottom); break; }
      // falls through
      case 'pocket': case 'step':
        // Each separate area (each hole) to full depth before the next
        for (const area of nearestFirst(C.regions(op.region), path.at)) {
          pocket(path, area, r, fd, zTop, op.zBottom, allowance);
          if (allowance > 0) finishWalls(path, area, r, fd, zTop, op.zBottom, maxFinish);
        }
        break;
      case 'corners': {
        const big = p.ops.find((o) => o.id === op.after);
        corners(path, op.region, r, big ? big.tool.diameter / 2 : r * 2, fd, zTop, op.zBottom);
        break;
      }
      case 'rough3d': case 'rest3d': {
        // Each layer from the one above it; the first from the top surface.
        // rest3d: narrow places, to the wall (nothing is left for the ball)
        const allow = op.kind === 'rough3d' ? op.allowance : 0;
        const entry = (k) => (x, y) => clearedDown(swept, op.layers[k].zFrom, r, x, y, zTop);
        cleared ||= new Cleared(p.stock, surface);
        path.travel = (a, b) => cleared.over(a, b, r);
        if (op.kind === 'rest3d') {
          // Each narrow place top to bottom before the next: it only needs
          // its own column cleared, and the tool doesn't cross the part
          // again for every layer
          for (const spot of nearestFirst(spots(op.layers), path.at)) {
            for (const { k, area } of spot.parts) {
              const layer = op.layers[k], from = layer.zFrom >= p.analysis.top - 1e-6 ? zTop : layer.zFrom;
              pocket(path, area, r, fd, from, layer.z, 0, zTop + 1, entry(k));
              const cut = C.offset(C.offset(area, -r), r);
              if (cut.length && op.enabled) { swept.push({ zFrom: from, z: layer.z, area: cut }); cleared.layer(cut, from, layer.z); }
            }
          }
          path.travel = null;
          path.retract();
          break;
        }
        op.layers.forEach((layer, k) => {
          const from = layer.zFrom >= p.analysis.top - 1e-6 ? zTop : layer.zFrom;
          for (const area of nearestFirst(C.regions(layer.region), path.at)) pocket(path, area, r, fd, from, layer.z, allow, zTop + 1, entry(k));
          // Opened only at this height: nothing above was cut, so from the top
          for (const area of nearestFirst(C.regions(layer.fresh || []), path.at)) pocket(path, area, r, fd, zTop, layer.z, allow, zTop + 1);
          // Not on the first layer: with nothing above to compare, a sloped
          // wall would get one too; the ball reaches that high anyway
          if (allow > 0 && k) verticalWalls(path, layer.exact || layer.region, op.layers[k - 1].exact || op.layers[k - 1].region, r, fd, from, layer.z, entry(k));
          // What this layer swept: the tool's reach inside the region
          const cut = C.offset(C.offset([...layer.region, ...(layer.fresh || [])], -(r + allow)), r);
          if (cut.length && op.enabled) { swept.push({ zFrom: from, z: layer.z, area: cut }); cleared.layer(cut, from, layer.z); }
        });
        path.travel = null;
        path.retract();
        break;
      }
      case 'finish3d': surface3d(path, op.surface, op.tool, fd, op.ridge, 0, op.left ?? LAYER_LEFT, op.steep !== false); break;
      case 'drill': drill(path, op.centers, fd, zTop, op.zBottom, op.tool.diameter); break;
      case 'thread': threads(path, op, fd, p.job.finish); break;
      case 'cutout': cutout(path, op.region, r, fd, zTop, op.zBottom, p.job, allowance); break;
      case 'inside': insideProfile(path, op.loops, r, fd, zTop, op.zBottom, p.job, allowance, op.tabs); break;
      case 'online': onLine(path, op.lines, fd, zTop, op.zBottom); break;
      // Edges on the model's top stand on any stock left above it (no
      // facing): the same outline, higher (the cut-out and pockets went
      // through it), so the pass moves up with them
      case 'chamfer': chamfer(path, op.levels.map((l) => (l.z >= p.analysis.top - 1e-6 ? { ...l, z: l.z + surface - p.analysis.top } : l)), fd); break;
    }
    op.moves = path.moves;
  }
  return p;
}
