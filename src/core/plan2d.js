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
import { feeds, tabDefaults, FINISHES } from './tools.js';
import { len } from './units.js';
import { partLevels, sweptArea, inArea } from './mesh2d.js';
import { tabSpots } from './paths.js';

export const CUTS = ['outside', 'inside', 'online', 'pocket', 'off'];
// Named as QuickCut names its cut types
export const CUT_NAMES = { outside: 'Outer (part)', inside: 'Inner (perimeter)', pocket: 'Inner (clearing)', online: 'On the line', off: 'Off' };
const TINY = 0.01; // mm²
const EPS = 1e-4;
const CHAMFER_OUT = 0.25; // mm: a chamfering V-bit's tip runs this far outside the edge (as ncCAM)
// Shapes that only touch along an edge (a drawing's blocks side by side)
// stay separate in a union: grown and shrunk by 10 µm they join
const joined = (loops) => C.cleanLoops(C.offset(C.offset(C.union(loops), 0.01), -0.01), TINY);

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
  // On one layer, and inside a part: a round part's outline with a ring
  // drawn on it isn't a counterbore
  const layerOf = (i) => moved[i].layer ?? moved[i].color;
  const sameCentre = (i, j) => circ[i] && circ[j] && layerOf(i) === layerOf(j) && Math.hypot(circ[i].x - circ[j].x, circ[i].y - circ[j].y) < 0.05;
  nest.forEach((n, i) => {
    n.step = null;
    if (!circ[i]) return;
    let k = 0, top = i;
    for (let j = n.parent; j >= 0 && sameCentre(i, j); j = nest[j].parent) { k++; top = j; }
    const inner = nest.some((m, j) => m.parent === i && sameCentre(i, j));
    if ((k || inner) && nest[top].depth > 0) { n.step = k; n.last = !inner; n.top = top; }
  });
  // How many circles each stack has
  const of = new Map();
  nest.forEach((n) => { if (n.top !== undefined && n.step !== null) of.set(n.top, (of.get(n.top) || 0) + 1); });
  nest.forEach((n) => { if (n.top !== undefined && n.step !== null) n.of = of.get(n.top); });
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
    // Per group (groups2d's key), per colour layer, per shape (index): { cut, depth }
    groups: {}, layers: {}, shapes: {},
    depths: { pocket: 3, online: 1 },
    disabled: {}, toolOverride: {},
  };
}

// The decisions a drawing needs, one per group of alike shapes: the
// outline, holes of one size, each step of the counterbores, shapes of one
// size, the lines. { key, name, idx, cut (the default), kind }
export function groups2d(a) {
  const out = new Map();
  const r2 = (v) => Math.round(v * 100) / 100;
  const layers = new Set(a.shapes.map((s) => s.layer ?? s.color)).size > 1;
  a.shapes.forEach((s, i) => {
    const cut = defaultCut(a, i), n = a.nest[i], c = a.circles[i];
    const on = layers ? `${s.layer ?? s.color}:` : '';
    let key, kind, label;
    if (!a.loops[i]) { key = `line:${on}`; kind = 'line'; label = 'line'; }
    else if (cut === 'outside' && n.depth === 0) { key = `outline:${on}`; kind = 'outline'; label = 'outline'; }
    else if (c && n.step !== null && n.step !== undefined) {
      // The whole stack's sizes say which counterbore this is
      let top = i;
      while (a.nest[top].step > 0) top = a.nest[top].parent;
      const sizes = [];
      for (let k = top; k >= 0;) { sizes.push(r2(2 * a.circles[k].r)); const next = a.nest.findIndex((m, j) => m.parent === k && a.nest[j].step === a.nest[k].step + 1); k = next; }
      key = `cb:${on}${sizes.join('/')}:${n.step}`; kind = 'counterbore'; label = { d: 2 * c.r, sizes, step: n.step, last: n.last };
    } else if (c) { key = `circle:${on}${r2(2 * c.r)}:${cut}`; kind = 'circle'; label = { d: 2 * c.r }; }
    else {
      const b = C.bounds([a.loops[i]]), w = b.maxX - b.minX, h = b.maxY - b.minY;
      const rect = Math.abs(a.areas[i] - w * h) < 0.01 * w * h;
      key = `shape:${on}${r2(w)}x${r2(h)}:${Math.round(a.areas[i])}:${cut}`; kind = rect ? 'rect' : 'shape'; label = { w, h };
    }
    if (!out.has(key)) out.set(key, { key, kind, label, layer: layers ? (s.layer ?? s.color) : null, idx: [], cut });
    out.get(key).idx.push(i);
  });
  // Outline first, then counterbores and holes by size, shapes, lines
  const order = { outline: 0, counterbore: 1, circle: 2, rect: 3, shape: 4, line: 5 };
  return [...out.values()].sort((x, y) => order[x.kind] - order[y.kind] || (y.label?.d || 0) - (x.label?.d || 0) || x.key.localeCompare(y.key));
}

// Which group shape i is in (by key)
export function groupOf(groups) {
  const m = new Map();
  for (const g of groups) for (const i of g.idx) m.set(i, g.key);
  return m;
}

// The choice for shape i: its own, else its group's, else its layer's, else
// the default. `group`: groupOf(groups2d(a)) (optional)
export function choiceFor(a, job, i, group = null) {
  const s = a.shapes[i];
  const own = job.shapes?.[i] || (group && job.groups?.[group.get(i)]), layer = job.layers?.[s.layer ?? s.color];
  const cut = own?.cut || layer?.cut || defaultCut(a, i);
  const n = a.nest[i], stepped = cut === 'pocket' && n.step !== null && n.step !== undefined;
  // A counterbore's steps: a pocket depth each, inside the stock's
  // thickness (steps share it out when it's thin), the hole through
  const T = job.stock?.thickness;
  const stepDepth = () => { const d = job.depths.pocket * (n.step + 1); return T > 0 ? Math.min(d, (T * (n.step + 1)) / (n.of || 2)) : d; };
  const depth = own?.depth !== undefined ? own.depth : layer?.depth !== undefined ? layer.depth : stepped ? stepDepth() : cut === 'pocket' || cut === 'online' ? job.depths[cut] : null;
  // An open line can only be cut on the line (or not at all)
  return { cut: cut === 'online' || cut === 'off' || a.loops[i] ? cut : 'online', depth };
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
  const gOf = groupOf(groups2d(a));
  a.shapes.forEach((s, i) => {
    const c = choiceFor(a, job, i, gOf);
    if (c.cut === 'off') return;
    const z = bottomOf(c.depth);
    if (z >= T - 1e-6) return; // no depth: nothing to cut
    const k = `${c.cut}@${z}`;
    if (!groups.has(k)) groups.set(k, { cut: c.cut, z, depth: c.depth, idx: [] });
    groups.get(k).idx.push(i);
  });
  const all = [...groups.values()];
  const cutOf = a.shapes.map((_, i) => choiceFor(a, job, i, gOf).cut);
  // An Outside shape inside a pocket is that pocket's island, not a part
  const inPocket = (j) => { for (let k = a.nest[j].parent; k >= 0; k = a.nest[k].parent) if (cutOf[k] === 'pocket') return true; return false; };
  const of = (cut) => all.filter((g) => g.cut === cut).sort((x, y) => y.z - x.z);
  const coverage = (region, r) => C.area(C.offset(C.offset(region, -r), r)) / Math.max(C.area(region), TINY);

  // Planned pockets, insides, outsides, then lines (what's in use counts
  // for the next pick); cut in RANK order (below)
  // Pockets: each shape's inside, less the shapes inside it that aren't
  // pockets at this depth (islands); the largest end mill that clears most
  for (const g of of('pocket')) {
    // Shapes inside cut Outside stand as islands (a boss)
    const islands = a.loops.map((l, j) => (l && cutOf[j] === 'outside' && g.idx.some((i) => isInside(a, j, i)) ? l : null)).filter(Boolean);
    const region = C.cleanLoops(C.difference(joined(g.idx.map((i) => a.loops[i])), C.union(islands)), TINY);
    if (!region.length) continue;
    const ok = flats.filter((t) => t.diameter <= maxD && fluteOk(t, deep(g.z)) && C.offset(region, -t.diameter / 2).length);
    if (!ok.length) { warnings.push({ kind: 'notool', text: `No end mill fits the pockets ${name(g.depth)}.` }); continue; }
    const scored = ok.map((t) => ({ t, c: coverage(region, t.diameter / 2) }));
    const best = scored.find((s) => s.c >= 0.95) || scored.reduce((x, y) => (y.c > x.c ? y : x));
    if (best.c < 0.995) warnings.push({ kind: 'corners', text: `${best.t.name} leaves the pockets' tightest corners rounded.` });
    ops.push({ id: `pocket@${g.z}`, kind: 'pocket', label: g.idx.length > 1 ? `Clear ${g.idx.length} pockets` : 'Clear the pocket', tool: take(best.t), zTop: T, zBottom: g.z, region, detail: name(g.depth) });
  }

  // A profile's end mill: one in use if it fits, else the one nearest 1/4"
  const nearQuarter = (list) => list.slice().sort((x, y) => Math.abs(x.diameter - 6.35) - Math.abs(y.diameter - 6.35))[0] || null;
  const profileTool = (depth, fits) => {
    const ok = flats.filter((t) => t.diameter <= maxD && fluteOk(t, depth) && fits(t));
    return ok.find((t) => used.has(t.id)) || nearQuarter(ok);
  };

  // Parts (Outside, not a pocket's island): those inside nothing, and those
  // drawn in another part's window (cut before the window frees them)
  const isPart = (j) => cutOf[j] === 'outside' && a.loops[j] && !inPocket(j);
  const nested = (j) => a.nest[j].depth > 0;

  // Inside: holes and windows, each loop on its own, before the outside.
  // Each shape its own end mill: the largest already in use that fits it,
  // else the one nearest 1/4"; shapes with the same one are one operation.
  // A big hole isn't cut with a small bit just because a small hole is.
  // Room to move: the finishing allowance and 0.1 mm a side more than the
  // bit (a hole just the bit's size would only plunge)
  const allow = (FINISHES[job.finish] || FINISHES.balanced).allowance;
  const fits = (t, l) => C.offset([l], -(t.diameter / 2 + allow + 0.1)).length > 0;
  function insides(g, idx, tabs) {
    const ok = flats.filter((t) => t.diameter <= maxD && fluteOk(t, deep(g.z)));
    const quarter = nearQuarter(ok);
    const byTool = new Map();
    let none = 0;
    for (const i of idx) {
      const l = a.loops[i], can = ok.filter((t) => fits(t, l));
      const t = can.find((x) => used.has(x.id)) || nearQuarter(can);
      if (!t) { none++; continue; }
      if (!byTool.has(t)) byTool.set(t, []);
      byTool.get(t).push(l);
    }
    if (none) warnings.push({ kind: 'notool', text: `No end mill fits inside ${none > 1 ? `${none} shapes` : 'a shape'} cut ${name(g.depth)} with room to move: left uncut.` });
    // Fewer tool changes: a bit only a few shapes got goes, its shapes to
    // the largest other chosen bit that fits them (a 6 mm bit for two
    // holes the 1/8" cutting the others can do), unless another cut needs
    // it (in use, or nearest 1/4": the outside cut, planned next, takes it)
    for (let again = true; again && byTool.size > 1;) {
      again = false;
      for (const [tool, list] of [...byTool].filter(([t]) => !used.has(t.id) && t !== quarter).sort((x, y) => x[1].length - y[1].length)) {
        const others = [...byTool.keys()].filter((t) => t !== tool).sort((x, y) => y.diameter - x.diameter);
        if (!list.every((l) => others.some((t) => fits(t, l)))) continue;
        for (const l of list) byTool.get(others.find((t) => fits(t, l))).push(l);
        byTool.delete(tool);
        again = true;
        break;
      }
    }
    for (const [tool, cut] of [...byTool].sort((x, y) => y[0].diameter - x[0].diameter)) {
      ops.push({ id: `inside@${g.z}#${tool.id}${tabs ? ':tabs' : ''}`, kind: 'inside', label: `${tabs ? 'Cut round the windows' : cut.length > 1 ? `Cut ${cut.length} shapes inside` : 'Cut inside the shape'}`, tool: take(tool), zTop: T, zBottom: g.z, loops: cut, region: cut, tabs: tabs && g.z < 0 && job.tabs.enabled, detail: `${name(g.depth)}${tabs && g.z < 0 && job.tabs.enabled ? ' · tabs hold the parts in them' : ''}` });
    }
  }
  for (const g of of('inside')) {
    // A window with a part in it keeps its middle on tabs: the part is cut
    // first, and would drop with the middle
    const holds = (i) => a.shapes.some((_, j) => isPart(j) && isInside(a, j, i));
    insides(g, g.idx.filter((i) => !holds(i)), false);
    insides(g, g.idx.filter(holds), true);
  }

  // Outside: the parts, with tabs when cut through; parts in a window cut
  // on their own (in one outline with the frame they'd never be cut)
  for (const g of of('outside')) {
    for (const inner of [true, false]) {
      const parts = g.idx.filter((i) => isPart(i) && nested(i) === inner);
      if (!parts.length) continue;
      const region = joined(parts.map((i) => a.loops[i]));
      const tool = profileTool(deep(g.z), () => true);
      if (!tool) { warnings.push({ kind: 'notool', text: `No end mill is long enough to cut out ${name(g.depth)} (${L(deep(g.z))}).` }); continue; }
      const through = g.z < 0;
      ops.push({ id: `cutout${inner ? '-in' : ''}@${g.z}`, kind: 'cutout', inner, label: inner ? 'Cut out the parts in the windows' : 'Cut out the parts', tool: take(tool), zTop: T, zBottom: g.z, region, tabs: through, detail: `${name(g.depth)}${through ? ` · ${job.tabs.enabled ? `${job.tabs.count} tabs each` : 'no tabs'}` : ''}` });
    }
  }

  // On the line, planned last so a fine bit for a groove doesn't pull the
  // other cuts onto it: a bit already in use, else the smallest that reaches
  for (const g of of('online')) {
    const ok = flats.filter((t) => fluteOk(t, deep(g.z)));
    const tool = ok.filter((t) => used.has(t.id)).sort((x, y) => x.diameter - y.diameter)[0] || ok.sort((x, y) => x.diameter - y.diameter)[0];
    if (!tool) { warnings.push({ kind: 'notool', text: `No end mill reaches ${name(g.depth)} for the lines.` }); continue; }
    const lines = g.idx.map((i) => ({ pts: a.shapes[i].pts, closed: !!a.loops[i] }));
    ops.push({ id: `online@${g.z}`, kind: 'online', label: 'Cut on the lines', tool: take(tool), zTop: T, zBottom: g.z, lines, count: g.idx.length, detail: `${g.idx.length} line${g.idx.length > 1 ? 's' : ''} · ${name(g.depth)} · a groove ${L(tool.diameter)} wide` });
  }

  // Cut order: lines, pockets, parts in windows, insides (windows), parts
  const RANK = (o) => (o.kind === 'online' ? 0 : o.kind === 'pocket' ? 1 : o.kind === 'cutout' && o.inner ? 2 : o.kind === 'inside' ? 3 : 4);
  ops.sort((x, y) => RANK(x) - RANK(y) || y.zBottom - x.zBottom);

  for (const op of ops) {
    const over = job.toolOverride?.[op.id];
    if (over) { const t = tools.find((x) => x.id === over); if (t) op.tool = t; }
    op.enabled = !job.disabled?.[op.id];
    op.feeds = feeds(op.tool, job.material, job.finish, limits);
  }

  // Add Chamfer to top surfaces (ncCAM's option): a V-bit along the top
  // edge of each flat face the cuts made, last
  if (job.chamfer?.size > 0) {
    const op = chamfer2d({ a, job, tools, stock, ops, warnings, L });
    if (op) {
      op.enabled = !job.disabled?.[op.id];
      op.feeds = feeds({ ...op.tool, diameter: Math.min(op.tool.diameter, 2 * (op.size + CHAMFER_OUT)) }, job.material, job.finish, limits);
      ops.push(op);
    }
  }
  // A through cut-out without tabs at its last pass lets the part move
  const tabbed = job.tabs.enabled ? job : { ...job, tabs: { ...job.tabs, enabled: false } };
  const analysis = { top: T, size: [a.size[0], a.size[1], T] };
  return { analysis, stock, zero: zeroPoint(stock, job.zero), ops, warnings, job: tabbed };
}

// The chamfer option on a 2D plan: ncCAM's chamferPass, with the part's
// levels (mesh2d) for the model's slices. Only edges a cut made: the
// board's own edge isn't chamfered. Scrap that stands (the stock past a
// cut-out's slot, a window's middle) is kept clear of the cone.
function chamfer2d({ job, tools, stock, ops, warnings, L }) {
  const w = job.chamfer.size, which = job.chamfer.edges || 'all';
  const T = stock.top;
  const vbits = tools.filter((t) => (t.kind === 'vbit' || t.kind === 'chamfer') && t.angle > 0 && t.angle < 180);
  const half = (t) => (t.angle * Math.PI) / 360;
  const vFits = (t) => t.diameter / 2 >= w + CHAMFER_OUT + 0.1 && (!t.fluteLength || t.fluteLength >= (w + CHAMFER_OUT) / Math.tan(half(t)) - 1e-6);
  const picked = tools.find((t) => t.id === job.toolOverride?.chamfer && vbits.includes(t));
  // A 90° bit makes the usual 45° chamfer; else the angle nearest to it
  const tool = picked || vbits.filter(vFits).sort((x, y) => Math.abs(x.angle - 90) - Math.abs(y.angle - 90) || x.diameter - y.diameter)[0];
  if (!tool) { warnings.push({ kind: 'chamfer', text: vbits.length ? `No V-bit in your Tool Library is wide enough for a ${L(w)} chamfer.` : 'Adding a chamfer to top surfaces needs a V-bit in your Tool Library.' }); return null; }
  const depth = (w + CHAMFER_OUT) / Math.tan(half(tool));

  const p = { stock, ops };
  const levels = partLevels(p);
  const swept = sweptArea(p);
  if (!swept.length) { warnings.push({ kind: 'chamfer', text: 'No cut makes an edge to chamfer.' }); return null; }
  const rectLoop = [[stock.minX, stock.minY], [stock.maxX, stock.minY], [stock.maxX, stock.maxY], [stock.minX, stock.maxY]];
  const part = C.union(levels.flatMap((l) => l.region));
  const standing = C.cleanLoops(C.difference(C.difference([rectLoop], swept), part), TINY);
  // Material at height h: the part's levels above it, the scrap, and the
  // floors of cuts that stop above it (a slot cut part way down)
  const partial = ops.filter((o) => o.enabled !== false && o.zBottom > 0 && o.kind !== 'online');
  const section = (h) => C.union([...levels.filter((l) => l.z > h).flatMap((l) => l.region), ...(T > h ? standing : []),
    ...partial.filter((o) => o.zBottom > h).flatMap((o) => (o.kind === 'cutout' ? C.difference(C.offset(o.region, o.tool.diameter), o.region) : o.kind === 'inside' ? C.difference(o.loops, C.offset(o.loops, -o.tool.diameter)) : o.region))]);
  // Each tab, as far as the cone (tr wide) can reach it, on the cut-outs and
  // the windows cut with tabs
  const tabTop = job.tabs.height ?? tabDefaults(job.material).height;
  const bridge = job.tabs.length ?? tabDefaults(job.material).length;
  const tabZones = (tr) => {
    if (!job.tabs.enabled) return [];
    const spots = [];
    for (const o of ops) {
      if (o.enabled === false || !o.tabs || o.zBottom > 0) continue;
      const r = o.tool.diameter / 2;
      const at = o.kind === 'cutout' ? tabSpots(o.region, r, job) : o.kind === 'inside' ? insideTabSpots(o.loops, r, job) : [];
      for (const q of at) spots.push({ q, rad: bridge / 2 + r + tr + 0.5 });
    }
    return spots.map(({ q: [x, y], rad }) => Array.from({ length: 24 }, (_, i) => [x + rad * Math.cos((i * Math.PI) / 12), y + rad * Math.sin((i * Math.PI) / 12)]));
  };
  // Only where a cut made the edge: the swept area, a little grown
  const keep = C.offset(swept, 0.05);
  const tr = tool.diameter / 2, R = w + CHAMFER_OUT;
  let skipped = false, lifted = false;
  const passes = [];
  const tops = [...new Set(levels.map((l) => l.z))].filter((z) => z > EPS).sort((x, y) => y - x);
  for (const z of tops) {
    const zTip = z - depth;
    if (zTip < -job.throughDepth + 0.1) { skipped = true; continue; } // into the spoilboard
    const lo = C.cleanLoops(C.union(levels.filter((l) => l.z >= z - EPS).flatMap((l) => l.region)), TINY);
    if (!lo.length) continue;
    const hi = z < T - EPS ? section(z + EPS) : [];
    const under = C.cleanLoops(C.difference(section(Math.max(zTip, EPS) + EPS), C.offset(lo, 0.01)), TINY);
    const overTabs = job.tabs.enabled && zTip <= Math.max(EPS, tabTop + 0.2);
    const lifts = overTabs ? tabZones(tr) : [];
    // Scrap is no taller than the stock: the cone is only this wide up there
    const atTop = Math.min(tr, (T - zTip) * Math.tan(half(tool)));
    const bad = C.union([...(z < T - EPS ? C.offset(hi, tr + 0.1) : []), ...C.offset(standing, atTop + 0.1), ...C.offset(under, R + 0.1), ...lifts]);
    const loops = [];
    for (const [outer, ...holes] of C.regions(C.offsetMiter(lo, CHAMFER_OUT))) {
      if (which !== 'inside') loops.push(outer);
      if (which !== 'outside') loops.push(...holes);
    }
    // Only loops with something to cut: a stretch of 0.5 mm clear of `bad`
    const inBad = (q) => !inArea(q, keep) || inArea(q, bad);
    const cuts = loops.filter((l) => {
      let run = 0;
      for (let i = 0; i < l.length; i++) {
        const p0 = l[i], p1 = l[(i + 1) % l.length], len2 = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]), k = Math.max(1, Math.ceil(len2 / 0.25));
        for (let j = 0; j < k; j++) {
          if (inBad([p0[0] + ((p1[0] - p0[0]) * j) / k, p0[1] + ((p1[1] - p0[1]) * j) / k])) run = 0;
          else if ((run += len2 / k) >= 0.5) return true;
        }
      }
      return false;
    });
    if (!cuts.length) continue;
    passes.push({ z, depth, loops: cuts, bad, keep });
    if (overTabs && lifts.length && which !== 'inside') lifted = true;
  }
  if (skipped) warnings.push({ kind: 'chamfer', text: `Some edges are too low to chamfer ${L(w)} without cutting the spoilboard.` });
  if (!passes.length) { warnings.push({ kind: 'chamfer', text: `No edge can take a ${L(w)} chamfer with ${tool.name}.` }); return null; }
  if (lifted) warnings.push({ kind: 'chamfer', text: 'The chamfer lifts over the tabs: sand those spots after breaking the part free.' });
  return { id: 'chamfer', kind: 'chamfer', label: 'Add Chamfer to top surfaces', tool, zTop: T, zBottom: Math.min(...passes.map((l) => l.z - l.depth)), region: C.union(levels.flatMap((l) => l.region)), levels: passes, show: passes.map((l) => ({ z: l.z, loops: l.loops })), size: w, angle: tool.angle / 2, detail: `${L(w)} wide \u00b7 ${Math.round(tool.angle)}\u00b0 bit \u00b7 ${{ all: 'all edges', outside: 'outside edges', inside: 'pockets and holes' }[which]}` };
}

// Where insideProfile puts its tabs: on each loop's tool path (inside by r,
// counter-clockwise), spread as makeTabs spreads them
function insideTabSpots(loops, r, job) {
  const count = Math.max(0, Math.round(job.tabs.count));
  const out = [];
  for (const l of loops) {
    for (const pts of C.simplify(C.cleanLoops(C.offset([ccw(l)], -r), 0.001), 0.005).filter((x) => C.loopArea(x) > 0)) {
      const lens = pts.map((q, i) => Math.hypot(pts[(i + 1) % pts.length][0] - q[0], pts[(i + 1) % pts.length][1] - q[1]));
      const total = lens.reduce((x, y) => x + y, 0);
      for (let k = 0; k < count; k++) {
        let d = ((k + 0.5) / count) * total, i = 0;
        while (i < pts.length - 1 && d > lens[i]) d -= lens[i++];
        const q0 = pts[i], q1 = pts[(i + 1) % pts.length], f = lens[i] ? d / lens[i] : 0;
        out.push([q0[0] + (q1[0] - q0[0]) * f, q0[1] + (q1[1] - q0[1]) * f]);
      }
    }
  }
  return out;
}

// Shape j inside closed shape i
function isInside(a, j, i) {
  if (!a.loops[i] || a.areas[j] >= a.areas[i]) return false;
  for (let k = a.nest[j].parent; k >= 0; k = a.nest[k].parent) if (k === i) return true;
  return false;
}

export function toolsUsed(p) {
  const out = [];
  for (const op of p.ops) if (op.enabled && !out.some((t) => t.id === op.tool.id)) out.push(op.tool);
  return out;
}
