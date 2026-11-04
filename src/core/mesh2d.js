// The part a 2D plan makes, as a mesh (positions, indices) for the viewer
// and the gouge check: the top at the stock's thickness, each pocket's
// floor at its depth, through cuts open, and walls between them.
import { ShapeUtils, Vector2 } from 'three';
import * as C from './clip.js';

// Point q inside an area of many loops (Clipper's: outer loops
// counter-clockwise, holes clockwise). C.pointInRegion takes one region.
export function inArea(q, loops) {
  let w = 0;
  for (const l of loops) if (C.pointInLoop(q, l)) w += C.loopArea(l) > 0 ? 1 : -1;
  return w > 0;
}

export function partMesh2d(p) {
  const levels = partLevels(p);
  return meshOf(levels);
}

// The part as flat levels: { z, region } (the top at the stock's
// thickness, each floor at its height; through cuts aren't in any).
// Chamfers are left out: `ops` defaults to the plan's ops besides them.
export function partLevels(p, ops = p.ops.filter((o) => o.kind !== 'chamfer')) {
  const T = p.stock.top;
  ops = ops.filter((o) => o.enabled !== false);
  const cutouts = ops.filter((o) => o.kind === 'cutout');
  // The part: what the outside cuts go round, else the whole stock
  const F = cutouts.length ? C.union(cutouts.flatMap((o) => o.region)) : [[[p.stock.minX, p.stock.minY], [p.stock.maxX, p.stock.minY], [p.stock.maxX, p.stock.maxY], [p.stock.minX, p.stock.maxY]]];
  // What's cut down to each height (0 for through)
  const byZ = new Map();
  for (const o of ops) {
    // An inside cut to a depth cuts only a ring the bit's width: the middle stands
    const area = o.kind === 'pocket' ? o.region : o.kind === 'inside' ? (o.zBottom > 0 ? C.difference(o.loops, C.offset(o.loops, -o.tool.diameter)) : o.loops) : null;
    if (!area?.length) continue;
    const z = Math.max(0, o.zBottom);
    byZ.set(z, [...(byZ.get(z) || []), ...area]);
  }
  const zs = [...byZ.keys()].sort((x, y) => x - y);
  // Each height's own area: cut to it and not deeper, inside the part
  const levels = [];
  let deeper = [];
  for (const z of zs) {
    const all = C.union(byZ.get(z));
    const own = C.cleanLoops(C.intersection(C.difference(all, deeper), F), 0.01);
    if (z > 0 && own.length) levels.push({ z, region: own });
    deeper = C.union([...deeper, ...all]);
  }
  // Parts cut out of a window stand in it: their own area, less the cuts
  // inside them (not the window round them)
  const inner = C.union(cutouts.filter((o) => o.inner).flatMap((o) => o.region));
  const innerCuts = inner.length ? C.union([...byZ.values()].flat().filter((l) => inArea(l[0], inner))) : [];
  const top = C.cleanLoops(C.union([...C.difference(F, deeper), ...C.difference(inner, innerCuts)]), 0.01);
  levels.push({ z: T, region: top });
  return levels;
}

// What the bits sweep (seen from the top): cut-out slots, inside rings or
// whole insides (through), pockets. Lines aren't in it (nor in the part).
export function sweptArea(p) {
  const area = [];
  for (const o of p.ops) {
    if (o.enabled === false) continue;
    const d = o.tool.diameter;
    if (o.kind === 'cutout') area.push(...C.difference(C.offset(o.region, d), o.region));
    else if (o.kind === 'inside') area.push(...C.difference(o.loops, C.offset(o.loops, -d)));
    else if (o.kind === 'pocket') area.push(...o.region);
  }
  return C.union(area);
}

function meshOf(levels) {
  const heightAt = (q) => {
    for (const lv of levels) if (inArea(q, lv.region)) return lv.z;
    return 0; // through, or outside the part
  };
  const pos = [], idx = [];
  const vert = (x, y, z) => { pos.push(x, y, z); return pos.length / 3 - 1; };
  for (const lv of levels) {
    for (const [outer, ...holes] of C.regions(lv.region)) {
      const v2 = (l) => l.map(([x, y]) => new Vector2(x, y));
      const contour = v2(outer), hs = holes.map(v2);
      const tris = ShapeUtils.triangulateShape(contour, hs);
      const flat = [...contour, ...hs.flat()];
      const base = pos.length / 3;
      for (const v of flat) pos.push(v.x, v.y, lv.z);
      for (const t of tris) idx.push(base + t[0], base + t[1], base + t[2]);
      // Walls down to whatever is next to each edge, where that is lower
      for (const loop of [outer, ...holes]) {
        for (let i = 0; i < loop.length; i++) {
          const a = loop[i], b = loop[(i + 1) % loop.length];
          const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy);
          if (L < 1e-9) continue;
          const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, ux = dy / L * 0.05, uy = -dx / L * 0.05;
          // The side away from this level's area
          const out = inArea([mx + ux, my + uy], lv.region) ? [mx - ux, my - uy] : [mx + ux, my + uy];
          const low = heightAt(out);
          if (low >= lv.z - 1e-6) continue;
          const i0 = vert(a[0], a[1], lv.z), i1 = vert(b[0], b[1], lv.z), i2 = vert(b[0], b[1], low), i3 = vert(a[0], a[1], low);
          idx.push(i0, i1, i2, i0, i2, i3);
        }
      }
    }
  }
  return { positions: Float32Array.from(pos), indices: Uint32Array.from(idx) };
}
