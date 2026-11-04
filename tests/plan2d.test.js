import test from 'node:test';
import assert from 'node:assert/strict';
import * as N from '../src/core/index.js';
import { dxf, line, circle, lwpoly, ornament } from './dxf.js';
import { LIBRARY } from './helpers.js';

const tools = N.normalizeTools(LIBRARY);

// A 100 x 60 plate (part) with a Ø20 hole, a 30 x 20 pocket holding a Ø6
// boss, and an open line to engrave
function sample() {
  return N.readDxf(dxf({
    entities: [
      lwpoly('PART', [[0, 0], [100, 0], [100, 60], [0, 60]], true),
      circle('PART', 25, 30, 10),
      lwpoly('POCKET', [[55, 20], [85, 20], [85, 40], [55, 40]], true),
      circle('POCKET', 70, 30, 3),
      line('LINE', 10, 50, 40, 50),
    ],
  })).shapes;
}

const run = (shapes, change = (j) => j) => {
  const a = N.analyze2d(shapes);
  const job = change(N.defaultJob(a, 6));
  const p = N.toolpaths(N.plan2d(a, tools, job));
  return { a, p };
};

test('DXF: the ornament reads as six shapes, 96 mm across', () => {
  const r = N.readDxf(ornament());
  assert.equal(r.shapes.length, 6);
  const bb = N.bounds(r.shapes);
  assert.ok(Math.abs(bb.w - 96) < 0.05 && Math.abs(bb.h - 96) < 0.05);
});

test('nesting: a part, its hole, the pocket inside the part, an open line', () => {
  const a = N.analyze2d(sample());
  const cuts = a.shapes.map((_, i) => N.defaultCut(a, i));
  // plate, hole, pocket rectangle, boss, line
  assert.deepEqual(cuts, ['outside', 'inside', 'inside', 'outside', 'online']);
  assert.deepEqual(a.size.map((v) => Math.round(v)), [100, 60]);
});

test('defaults: line, inside, outside in that order; through cuts reach the break-through', () => {
  const { p } = run(sample());
  const kinds = p.ops.map((o) => o.kind);
  assert.ok(kinds.indexOf('online') < kinds.indexOf('inside'));
  assert.ok(kinds.indexOf('inside') < kinds.indexOf('cutout'));
  const out = p.ops.find((o) => o.kind === 'cutout');
  assert.equal(out.zBottom, -0.3);
  assert.equal(p.ops.find((o) => o.kind === 'online').zBottom, 5);
  for (const op of p.ops) assert.ok(op.moves.length > 2, op.label);
  assert.equal(N.simulate(p, 0.5).collisions.length, 0);
});

test('pocket: the rectangle cleared 3 mm deep around its boss, which stands (not cut out)', () => {
  // The boss shares the pocket's layer: its own choice keeps it standing
  const { a, p } = run(sample(), (j) => ({ ...j, layers: { POCKET: { cut: 'pocket' } }, shapes: { 3: { cut: 'outside' } } }));
  const op = p.ops.find((o) => o.kind === 'pocket');
  assert.ok(op, 'a pocket');
  assert.equal(op.zBottom, 3);
  // 600 mm² less the boss
  assert.ok(Math.abs(N.clip.area(op.region) - (600 - Math.PI * 9)) < 1, `area ${N.clip.area(op.region)}`);
  const { hm } = N.simulate(p, 0.25);
  const at = (x, y) => hm.h[Math.floor((y - hm.y0) / hm.cell) * hm.nx + Math.floor((x - hm.x0) / hm.cell)];
  assert.ok(Math.abs(at(60, 25) - 3) < 0.05, `floor ${at(60, 25)}`);
  assert.ok(Math.abs(at(70, 30) - 6) < 0.05, `boss ${at(70, 30)}`);
  // The boss isn't cut out on its own
  assert.equal(a.shapes.length, 5);
  assert.ok(!p.ops.some((o) => o.kind === 'cutout' && N.clip.area(o.region) < 100));
});

test('inside: the hole comes out its size; outside: the plate its size, tabs left', () => {
  const { p } = run(sample(), (j) => ({ ...j, layers: { POCKET: { cut: 'off' }, LINE: { cut: 'off' } } }));
  const { hm } = N.simulate(p, 0.2);
  const at = (x, y) => hm.h[Math.floor((y - hm.y0) / hm.cell) * hm.nx + Math.floor((x - hm.x0) / hm.cell)];
  // Hole: cut through within its circle, stock left just outside it
  assert.ok(at(25 + 9.6, 30) < 0, 'hole cut to size');
  assert.ok(at(25 + 10.4, 30) > 5.9, 'not past the hole');
  // Plate: the slot just outside the edge cut (or a tab), inside untouched
  assert.ok(at(50, 60.4) <= 2 + 1e-6, 'slot outside the plate');
  assert.ok(at(50, 59.6) > 5.9, 'plate edge kept');
  const cut = p.ops.find((o) => o.kind === 'cutout');
  assert.equal(N.tabSpots(cut.region, cut.tool.diameter / 2, p.job).length, 4);
});

test('a per-shape choice beats its layer: one hole off', () => {
  const { p } = run(sample(), (j) => ({ ...j, shapes: { 1: { cut: 'off' } }, layers: { POCKET: { cut: 'off' } } }));
  assert.ok(!p.ops.some((o) => o.kind === 'inside'));
});

test('an open line can only be cut on the line', () => {
  const a = N.analyze2d(sample());
  const job = { ...N.defaultJob(a), shapes: { 4: { cut: 'pocket' } } };
  assert.equal(N.choiceFor(a, job, 4).cut, 'online');
});

test('a hole smaller than every end mill is left with a note', () => {
  const shapes = N.readDxf(dxf({ entities: [lwpoly('0', [[0, 0], [50, 0], [50, 50], [0, 50]], true), circle('0', 25, 25, 1)] })).shapes;
  const { p } = run(shapes);
  assert.ok(p.warnings.some((w) => /No end mill fits inside/.test(w.text)));
  assert.ok(p.ops.some((o) => o.kind === 'cutout'));
});

test('G-code: one program with every op', () => {
  const { p } = run(sample(), (j) => ({ ...j, layers: { POCKET: { cut: 'pocket' } } }));
  const g = N.gcode(p);
  assert.ok(/M3|M03/.test(g) && /M30|M2\b/.test(g));
  assert.ok(g.split('\n').length > 50);
});

test('counterbores: concentric circles are a stepped hole, the innermost through', async () => {
  // A plate with a Ø12.5 / Ø8.5 / Ø5 stack, and a line drawn there and back (no area)
  const shapes = N.readDxf(dxf({ entities: [lwpoly('0', [[0, 0], [60, 0], [60, 40], [0, 40]], true), circle('0', 30, 20, 6.25), circle('0', 30, 20, 4.25), circle('0', 30, 20, 2.5), lwpoly('0', [[50, 0], [50, 40]], true)] })).shapes;
  const a = N.analyze2d(shapes);
  assert.deepEqual(a.shapes.map((_, i) => N.defaultCut(a, i)), ['outside', 'pocket', 'pocket', 'inside', 'online']);
  const job = N.defaultJob(a, 10);
  assert.deepEqual([1, 2].map((i) => N.choiceFor(a, job, i).depth), [3, 6]);
  const p = N.toolpaths(N.plan2d(a, N.normalizeTools([...LIBRARY, { id: 9, toolId: 9, name: '3 mm end mill', type: 'flat', diameter: 3, dimensions: { flute_length: 15 } }]), job));
  const { hm } = N.simulate(p, 0.1);
  const at = (x, y) => hm.h[Math.floor((y - hm.y0) / hm.cell) * hm.nx + Math.floor((x - hm.x0) / hm.cell)];
  assert.ok(Math.abs(at(30 + 5.5, 20) - 7) < 0.05, `outer step ${at(35.5, 20)}`);
  assert.ok(Math.abs(at(30 + 3.5, 20) - 4) < 0.05, `inner step ${at(33.5, 20)}`);
  assert.ok(at(30 + 1.5, 20) < 0, `through ${at(31.5, 20)}`);
  assert.ok(at(30 + 6.6, 20) > 9.9, 'not past the counterbore');
});
