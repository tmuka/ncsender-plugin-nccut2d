// ncCut2D's planner: 2D artwork (shapes from the DXF, SVG and PDF readers:
// mm polylines, Y up) and the user's choice for each shape become ncCAM
// operations, which paths.js turns into toolpaths.
//
// A choice: { cut, depth } where cut is
//   'outside' the tool outside the line (the part is what's inside), tabs
//   'inside'  the tool inside the line (a hole or a window)
//   'online'  the tool's centre on the line (a groove; open lines too)
//   'pocket'  clears what's inside the line, down to depth; Outside shapes
//             inside it stand as islands (bosses)
//   'off'
// and depth is in mm, or null for through (the stock and the break-through).
import * as C from './clip.js';
import { feeds, tabDefaults } from './tools.js';
import { len } from './units.js';

export const CUTS = ['outside', 'inside', 'online', 'pocket', 'off'];
export const CUT_NAMES = { outside: 'Outside', inside: 'Inside', online: 'On the line', pocket: 'Pocket', off: 'Off' };
const TINY = 0.01; // mm²

export const ZERO_POINTS = ['back-left', 'back-center', 'back-right', 'left-center', 'center', 'right-center', 'front-left', 'front-center', 'front-right'];

const fluteOk = (tool, depth) => !tool.fluteLength || tool.fluteLength + 1e-6 >= depth;
const ring = (pts) => (pts.length > 2 && pts[0][0] === pts.at(-1)[0] && pts[0][1] === pts.at(-1)[1] ? pts.slice(0, -1) : pts);
const ccw = (pts) => (C.loopArea(pts) < 0 ? pts.slice().reverse() : pts);

// The artwork moved so its lower-left corner is at 0, 0, and what the
// planner needs to know about each shape: closed, how deep it is nested
// among the closed shapes (0: inside none), and which one holds it.
export function analyze2d(shapes) {
  const all = shapes.flatMap((s) => s.pts);
  if (!all.length) return { shapes: [], size: [0, 0], nest: [] };
  const minX = Math.min(...all.map((p) => p[0])), minY = Math.min(...all.map((p) => p[1]));
  const maxX = Math.max(...all.map((p) => p[0])), maxY = Math.max(...all.map((p) => p[1]));
  const moved = shapes.map((s) => ({ ...s, pts: s.pts.map(([x, y]) => [x - minX, y - minY]) }));
  // A "closed" shape with no area (a line drawn there and back) is a line
  const loops = moved.map((s) => (s.closed && s.pts.length > 2 && Math.abs(C.loopArea(ring(s.pts))) > TINY ? ccw(ring(s.pts)) : null));
  const areas = loops.map((l) => (l ? C.loopArea(l) : 0));
  // Each shape's holder: the smallest closed shape around its first point
  const nest = moved.map((s, i) => {
    const q = s.pts[0];
    let parent = -1, depth = 0;
    loops.forEach((l, j) => {
      if (!l || j === i || areas[j] <= areas[i] || !C.pointInLoop(q, l)) return;
      depth++;
      if (parent < 0 || areas[j] < areas[parent]) parent = j;
    });
    return { parent, depth };
  });
  // Circles sharing a centre with the one around them: a stepped hole
  // (counterbore). step: 0 for the outermost of a stack, 1, 2... inward;
  // last: nothing concentric inside it
  const circ = loops.map((l) => (l ? asCircle(l) : null));
  const sameCentre = (i, j) => circ[i] && circ[j] && Math.hypot(circ[i].x - circ[j].x, circ[i].y - circ[j].y) < 0.05;
  nest.forEach((n, i) => {
    n.step = null;
    if (!circ[i]) return;
    let k = 0;
    for (let j = n.parent; j >= 0 && sameCentre(i, j); j = nest[j].parent) k++;
    const inner = nest.some((m, j) => m.parent === i && sameCentre(i, j));
    if (k || inner) { n.step = k; n.last = !inner; }
  });
  return { shapes: moved, loops, areas, nest, circles: circ, size: [maxX - minX, maxY - minY] };
}

// A loop's circle (centre, radius) when every point is within 1% of it
function asCircle(l) {
  if (l.length < 12) return null;
  const x = l.reduce((t, p) => t + p[0], 0) / l.length, y = l.reduce((t, p) => t + p[1], 0) / l.length;
  const d = l.map((p) => Math.hypot(p[0] - x, p[1] - y)), r = d.reduce((t, v) => t + v, 0) / d.length;
  // And its area a circle's: a rounded rectangle's points sit only at its
  // corners, all about as far from the middle
  if (!(r > 0 && d.every((v) => Math.abs(v - r) <= Math.max(0.01 * r, 0.02)))) return null;
  return Math.abs(Math.abs(C.loopArea(l)) - Math.PI * r * r) <= 0.03 * Math.PI * r * r ? { x, y, r } : null;
}

// What a shape gets until the user says otherwise: an open line is cut on
// the line; a closed one inside nothing (or inside a hole) is a part, cut
// outside; inside a part, a hole, cut inside.
// Circles in a stack (a counterbore): pockets, each deeper, the
// innermost through (inside).
export function defaultCut(a, i) {
  if (!a.loops[i]) return 'online';
  const n = a.nest[i];
  if (n.step !== null && n.step !== undefined) return n.last ? 'inside' : 'pocket';
  // Inside a counterbore's circle that isn't concentric: as inside its holder
  return n.depth % 2 ? 'inside' : 'outside';
}

export function defaultJob(a, thickness = 6) {
  return {
    material: 'mdf', finish: 'balanced',
    stock: { fit: true, margin: 5, width: a.size[0] + 10, depth: a.size[1] + 10, thickness },
    zero: { xy: 'front-left', z: 'top' },
    tabs: { enabled: true, count: 4, ...tabDefaults('mdf') },
    throughDepth: 0.3,
    // Per colour layer, then per shape (index) over it: { cut, depth }
    layers: {}, shapes: {},
    depths: { pocket: 3, online: 1 },
    disabled: {}, toolOverride: {},
  };
}

// The choice for shape i: its own, else its layer's, else the default
export function choiceFor(a, job, i) {
  const s = a.shapes[i];
  const own = job.shapes?.[i], layer = job.layers?.[s.layer ?? s.color];
  const cut = own?.cut || layer?.cut || defaultCut(a, i);
  const n = a.nest[i], stepped = cut === 'pocket' && n.step !== null && n.step !== undefined;
  const depth = own?.depth !== undefined ? own.depth : layer?.depth !== undefined ? layer.depth : stepped ? job.depths.pocket * (n.step + 1) : cut === 'pocket' || cut === 'online' ? job.depths[cut] : null;
  return { cut: cut === 'online' || a.loops[i] ? cut : 'online', depth };
}

export function stockBox(a, job) {
  const [w, d] = a.size, s = job.stock;
  const W = s.fit ? w + 2 * s.margin : Math.max(w, s.width);
  const D = s.fit ? d + 2 * s.margin : Math.max(d, s.depth);
  const T = s.thickness;
  return { minX: (w - W) / 2, minY: (d - D) / 2, maxX: (w + W) / 2, maxY: (d + D) / 2, bottom: 0, top: T, width: W, depth: D, thickness: T };
}

export function zeroPoint(stock, zero) {
  const words = zero.xy.split('-');
  let x = (stock.minX + stock.maxX) / 2, y = (stock.minY + stock.maxY) / 2;
  if (words.includes('left')) x = stock.minX;
  if (words.includes('right')) x = stock.maxX;
  if (words.includes('front')) y = stock.minY;
  if (words.includes('back')) y = stock.maxY;
  return { x, y, z: zero.z === 'bed' ? stock.bottom : stock.top };
}

export function plan2d(a, tools, job, limits = {}) {
  const L = (v) => len(v, job.units);
  const stock = stockBox(a, job);
  const T = stock.top;
  const warnings = [];
  const ops = [];
  const flats = tools.filter((t) => t.kind === 'flat').sort((x, y) => y.diameter - x.diameter);
  const maxD = job.material === 'aluminum' ? 8 : 12.8;
  const used = new Set();
  const take = (t) => { used.add(t.id); return t; };
  // A depth (null: through) as the cut's bottom
  const bottomOf = (depth) => (depth === null || depth === undefined || depth >= T - 1e-6 ? -job.throughDepth : Math.max(T - depth, 0));
  const deep = (z) => T - z;
  const name = (depth) => (depth === null || depth === undefined || depth >= T - 1e-6 ? 'through' : `${L(depth)} deep`);

  // The choices, grouped by cut and depth
  const groups = new Map();
  a.shapes.forEach((s, i) => {
    const c = choiceFor(a, job, i);
    if (c.cut === 'off') return;
    const z = bottomOf(c.depth);
    const k = `${c.cut}@${z}`;
    if (!groups.has(k)) groups.set(k, { cut: c.cut, z, depth: c.depth, idx: [] });
    groups.get(k).idx.push(i);
  });
  const all = [...groups.values()];
  const cutOf = a.shapes.map((_, i) => choiceFor(a, job, i).cut);
  // An Outside shape inside a pocket is that pocket's island, not a part
  const inPocket = (j) => { for (let k = a.nest[j].parent; k >= 0; k = a.nest[k].parent) if (cutOf[k] === 'pocket') return true; return false; };
  const of = (cut) => all.filter((g) => g.cut === cut).sort((x, y) => y.z - x.z);
  const coverage = (region, r) => C.area(C.offset(C.offset(region, -r), r)) / Math.max(C.area(region), TINY);

  // On the line: the smallest flat end mill that reaches (a groove its width)
  for (const g of of('online')) {
    const tool = flats.slice().reverse().find((t) => fluteOk(t, deep(g.z)));
    if (!tool) { warnings.push({ kind: 'notool', text: `No end mill reaches ${name(g.depth)} for the lines.` }); continue; }
    const lines = g.idx.map((i) => ({ pts: a.shapes[i].pts, closed: !!a.loops[i] }));
    ops.push({ id: `online@${g.z}`, kind: 'online', label: 'Cut on the lines', tool: take(tool), zTop: T, zBottom: g.z, lines, count: g.idx.length, detail: `${g.idx.length} line${g.idx.length > 1 ? 's' : ''} · ${name(g.depth)}` });
  }

  // Pockets: each shape's inside, less the shapes inside it that aren't
  // pockets at this depth (islands); the largest end mill that clears most
  for (const g of of('pocket')) {
    // Shapes inside cut Outside stand as islands (a boss)
    const islands = a.loops.map((l, j) => (l && cutOf[j] === 'outside' && g.idx.some((i) => isInside(a, j, i)) ? l : null)).filter(Boolean);
    const region = C.cleanLoops(C.difference(C.union(g.idx.map((i) => a.loops[i])), C.union(islands)), TINY);
    if (!region.length) continue;
    const ok = flats.filter((t) => t.diameter <= maxD && fluteOk(t, deep(g.z)) && C.offset(region, -t.diameter / 2).length);
    if (!ok.length) { warnings.push({ kind: 'notool', text: `No end mill fits the pockets ${name(g.depth)}.` }); continue; }
    const scored = ok.map((t) => ({ t, c: coverage(region, t.diameter / 2) }));
    const best = scored.find((s) => s.c >= 0.95) || scored.reduce((x, y) => (y.c > x.c ? y : x));
    if (best.c < 0.995) warnings.push({ kind: 'corners', text: `${best.t.name} leaves the pockets' tightest corners rounded.` });
    ops.push({ id: `pocket@${g.z}`, kind: 'pocket', label: g.idx.length > 1 ? `Clear ${g.idx.length} pockets` : 'Clear the pocket', tool: take(best.t), zTop: T, zBottom: g.z, region, detail: name(g.depth) });
  }

  // A profile's end mill: one in use if it fits, else the one nearest 1/4"
  const profileTool = (depth, fits) => {
    const ok = flats.filter((t) => t.diameter <= maxD && fluteOk(t, depth) && fits(t));
    return ok.find((t) => used.has(t.id)) || ok.sort((x, y) => Math.abs(x.diameter - 6.35) - Math.abs(y.diameter - 6.35))[0] || null;
  };

  // Inside: holes and windows, each loop on its own, before the outside
  // One end mill for as many as it fits, then a smaller one for the rest
  for (const g of of('inside')) {
    let left = g.idx.map((i) => a.loops[i]);
    const fits = (t, l) => C.offset([l], -t.diameter / 2).length > 0;
    for (let n = 0; left.length; n++) {
      const tool = profileTool(deep(g.z), (t) => left.every((l) => fits(t, l))) ||
        flats.filter((t) => t.diameter <= maxD && fluteOk(t, deep(g.z)) && left.some((l) => fits(t, l))).sort((x, y) => left.filter((l) => fits(y, l)).length - left.filter((l) => fits(x, l)).length || y.diameter - x.diameter)[0];
      if (!tool) { warnings.push({ kind: 'notool', text: `No end mill fits inside ${left.length > 1 ? `${left.length} shapes` : 'a shape'} cut ${name(g.depth)}: left uncut.` }); break; }
      const cut = left.filter((l) => fits(tool, l));
      left = left.filter((l) => !fits(tool, l));
      ops.push({ id: `inside@${g.z}${n ? `#${n}` : ''}`, kind: 'inside', label: cut.length > 1 ? `Cut ${cut.length} shapes inside` : 'Cut inside the shape', tool: take(tool), zTop: T, zBottom: g.z, loops: cut, region: cut, tabs: false, detail: name(g.depth) });
    }
  }

  // Outside: the parts, with tabs when cut through
  for (const g of of('outside')) {
    const parts = g.idx.filter((i) => !inPocket(i));
    if (!parts.length) continue;
    const region = C.cleanLoops(C.union(parts.map((i) => a.loops[i])), TINY);
    const tool = profileTool(deep(g.z), () => true);
    if (!tool) { warnings.push({ kind: 'notool', text: `No end mill is long enough to cut out ${name(g.depth)} (${L(deep(g.z))}).` }); continue; }
    const through = g.z < 0;
    ops.push({ id: `cutout@${g.z}`, kind: 'cutout', label: 'Cut out the parts', tool: take(tool), zTop: T, zBottom: g.z, region, detail: `${name(g.depth)}${through ? ` · ${job.tabs.enabled ? `${job.tabs.count} tabs each` : 'no tabs'}` : ''}` });
  }

  for (const op of ops) {
    const over = job.toolOverride?.[op.id];
    if (over) { const t = tools.find((x) => x.id === over); if (t) op.tool = t; }
    op.enabled = !job.disabled?.[op.id];
    op.feeds = feeds(op.tool, job.material, job.finish, limits);
  }
  // A through cut-out without tabs at its last pass lets the part move
  const tabbed = job.tabs.enabled ? job : { ...job, tabs: { ...job.tabs, enabled: false } };
  const analysis = { top: T, size: [a.size[0], a.size[1], T] };
  return { analysis, stock, zero: zeroPoint(stock, job.zero), ops, warnings, job: tabbed };
}

// Shape j inside closed shape i
function isInside(a, j, i) {
  if (!a.loops[i] || a.areas[j] >= a.areas[i]) return false;
  for (let k = a.nest[j].parent; k >= 0; k = a.nest[k].parent) if (k === i) return true;
  return false;
}
