import test from 'node:test';
import assert from 'node:assert/strict';
import * as N from '../src/core/index.js';
import { dxf, circle, lwpoly } from './dxf.js';
import { LIBRARY } from './helpers.js';

// A hole barely wider than a 1/2" bit (the bit's bottom covers its middle
// all the way down): it comes down at the Plunge Rate, as fast as the
// machine can go round that small a circle ($120/$121), not at the
// material's ramp angle, which crawls there.
const HALF = { id: 9, toolId: 9, toolNumber: 3, name: '1/2" Upcut End Mill', type: 'flat', diameter: 12.7, dimensions: { flute_length: 32 } };

function inside(holeD, bit, limits = {}, thickness = 18) {
  const tools = N.normalizeTools([...LIBRARY, bit]);
  const shapes = N.readDxf(dxf({ entities: [lwpoly('0', [[0, 0], [60, 0], [60, 60], [0, 60]], true), circle('0', 30, 30, holeD / 2)] })).shapes;
  const a = N.analyze2d(shapes);
  const job = N.defaultJob(a, thickness);
  const id = N.plan2d(a, tools, job, limits).ops.find((o) => o.kind === 'inside').id;
  const p = N.toolpaths(N.plan2d(a, tools, { ...job, toolOverride: { [id]: bit.id } }, limits));
  const op = p.ops.find((o) => o.kind === 'inside');
  assert.equal(op.tool.diameter, bit.diameter);
  return op;
}

// Feed moves that go down: how steep (drop per length across; Infinity
// straight down) and how fast
function descents(op) {
  const out = [];
  for (let i = 1; i < op.moves.length; i++) {
    const m = op.moves[i], b = op.moves[i - 1];
    if (m.r || b.z - m.z < 1e-6) continue;
    const across = Math.hypot(m.x - b.x, m.y - b.y);
    out.push({ slope: across < 1e-6 ? Infinity : (b.z - m.z) / across, f: m.f, dz: b.z - m.z });
  }
  return out;
}

test('a 13.4 mm hole, 1/2" bit, 700 mm/s2: straight down at the plunge rate, a lap at each depth', () => {
  const op = inside(13.4, HALF, { accel: 700 });
  const d = descents(op);
  assert.ok(d.length >= 3, 'it steps down');
  const plunge = Math.min(op.feeds.plunge, op.feeds.feed);
  for (const m of d) {
    assert.equal(m.slope, Infinity, 'no slow ramp: about 940 mm/min round a 0.35 mm circle makes it steeper than 45 deg');
    assert.ok(m.f <= plunge, `down at ${m.f}, no faster than ${plunge}`);
    // The finishing pass's one deep level too: a step-down at a time
    assert.ok(m.dz <= op.feeds.stepdown + 1e-6, `a ${m.dz.toFixed(2)} mm plunge`);
  }
  // A lap at each depth: after every plunge, a move across at that depth
  for (let i = 1; i < op.moves.length; i++) {
    const m = op.moves[i], b = op.moves[i - 1];
    if (m.r || b.z - m.z < 1e-6 || m.z > op.zTop - 1e-6) continue; // into the cut, not down to the top
    const n = op.moves[i + 1];
    assert.ok(n && !n.r && Math.abs(n.z - m.z) < 1e-9 && Math.hypot(n.x - m.x, n.y - m.y) > 1e-6, `no lap at Z${m.z.toFixed(2)}`);
  }
});

test('the same hole without $120/$121: a ramp steep enough that Z comes down at the plunge rate at the feed', () => {
  const op = inside(14, HALF);
  const ramps = descents(op).filter((m) => m.slope < Infinity);
  assert.ok(ramps.length > 0, 'it ramps');
  // Roughing at the feed, finishing at 90 % of it: 0.3 and 0.33 in MDF
  const passFeeds = [op.feeds.feed, Math.round(op.feeds.feed * 0.9)];
  for (const m of ramps) {
    const feed = passFeeds.find((F) => Math.abs(m.slope - Math.min(op.feeds.plunge, F) / F) < 0.005);
    assert.ok(feed, `slope ${m.slope.toFixed(3)}, not the 5 deg ramp (0.087)`);
    // Along the ramp at the feed that drops Z at the plunge rate
    const s = Math.min(op.feeds.plunge, feed) / feed;
    const f = Math.min(feed, Math.round(op.feeds.plunge * Math.sqrt(1 + s * s) / s));
    assert.ok(Math.abs(m.f - f) <= 1, `ramp feed ${m.f}, want ${f}`);
  }
});

test('a compression or down-cut bit keeps the slow ramp in a narrow hole (its chips pack under it)', () => {
  for (const name of ['1/2" Compression End Mill', '1/2" Down-cut End Mill']) {
    const op = inside(14, { ...HALF, name }, { accel: 700 });
    const ramps = descents(op).filter((m) => m.slope < Infinity);
    assert.ok(ramps.length > 0, `${name}: it ramps`);
    for (const m of ramps) assert.ok(m.slope < Math.tan((op.feeds.rampAngle * Math.PI) / 180) + 1e-3, `${name}: slope ${m.slope.toFixed(3)}`);
  }
});

test('a hole with room to move keeps the material ramp angle', () => {
  const op = inside(30, LIBRARY[0], { accel: 700 }, 6);
  const ramps = descents(op).filter((m) => m.slope < Infinity);
  assert.ok(ramps.length > 0);
  const tan = Math.tan((op.feeds.rampAngle * Math.PI) / 180);
  for (const m of ramps) {
    assert.ok(Math.abs(m.slope - tan) < 1e-3, `slope ${m.slope.toFixed(4)}, want ${tan.toFixed(4)}`);
    assert.equal(m.f, Math.min(op.feeds.feed, op.feeds.plunge * 2));
  }
});

test('bit types: compression and down-cut from the tool type or name, else none', () => {
  const t = N.normalizeTools([
    { id: 1, name: '1/4" Compression', type: 'flat', diameter: 6.35 },
    { id: 2, name: 'Amana 46170', type: 'compression', diameter: 6.35 },
    { id: 3, name: '1/4" Down Cut Spiral', type: 'flat', diameter: 6.35 },
    { id: 4, name: 'Spiral', type: 'downcut', diameter: 6.35 },
    { id: 5, name: '1/4" Upcut', type: 'flat', diameter: 6.35 },
    { id: 6, name: '1/4" Down Spiral', type: 'flat', diameter: 6.35 },
    { id: 7, name: '1/4 Downshear', type: 'flat', diameter: 6.35 },
    { id: 8, name: '1/4 Down_cut', type: 'flat', diameter: 6.35 },
    { id: 9, name: '1/4" Up Spiral', type: 'flat', diameter: 6.35 },
  ]);
  assert.deepEqual(t.map((x) => x.cut), ['compression', 'compression', 'down', 'down', '', 'down', 'down', 'down', '']);
});

test('a quicker machine (3000 mm/s2) ramps the narrow hole, steeper than at the feed, short of 45 deg', () => {
  const op = inside(14, HALF, { accel: 3000 });
  const ramps = descents(op).filter((m) => m.slope < Infinity);
  assert.ok(ramps.length > 0, 'it ramps');
  for (const m of ramps) assert.ok(m.slope > 0.34 && m.slope <= 1, `slope ${m.slope.toFixed(3)}`);
});

test('a round pocket: its first ring, inside half the bit\'s radius, comes down steeply too', () => {
  const tools = N.normalizeTools(LIBRARY);
  const shapes = N.readDxf(dxf({ entities: [lwpoly('0', [[0, 0], [60, 0], [60, 60], [0, 60]], true), circle('0', 30, 30, 13)] })).shapes;
  const a = N.analyze2d(shapes);
  const job = { ...N.defaultJob(a, 18), shapes: { 1: { cut: 'pocket', depth: 15 } } };
  const op = N.toolpaths(N.plan2d(a, tools, job, { accel: 700 })).ops.find((o) => o.kind === 'pocket');
  assert.ok(op, 'a pocket');
  const d = descents(op);
  assert.ok(d.length > 0);
  const tan = Math.tan((op.feeds.rampAngle * Math.PI) / 180);
  assert.ok(d.every((m) => m.slope > tan * 2), `slopes ${[...new Set(d.map((m) => m.slope.toFixed(2)))].join(' ')}`);
});
