import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import * as N from '../src/core/index.js';
import { dxf, lwpoly } from './dxf.js';
import { LIBRARY } from './helpers.js';

const tools = N.normalizeTools(LIBRARY);

function program(opts) {
  const a = N.analyze2d(N.readDxf(dxf({ entities: [lwpoly('PART', [[0, 0], [60, 0], [60, 40], [0, 40]], true)] })).shapes);
  return N.gcode(N.toolpaths(N.plan2d(a, tools, N.defaultJob(a, 6))), opts);
}

test('$SAFEZ: written when ncSender runs it, the height written in when not', () => {
  const old = program({ safeZHeightMm: -5 });
  assert.ok(old.includes('G53 G0 Z-5') && !old.includes('$SAFEZ'));
  assert.ok(program({}).includes('G53 G0 Z0'));
  const g = program({ safeZHeightMm: -5, safeZCommand: true });
  assert.ok(!/G53/.test(g), 'no G53 left');
  // one before the tool change, one at the end
  assert.equal(g.split('\n').filter((l) => l === '$SAFEZ').length, 2);
  assert.equal(g, old.replaceAll('G53 G0 Z-5', '$SAFEZ'));
});

test('$SAFEZ: from ncSender 2.0.228 and ncSender Pro 2.0.326', () => {
  const ok = N.safeZVersionOk;
  assert.equal(ok('community', '2.0.227'), false);
  assert.equal(ok('community', '2.0.228'), true);
  assert.equal(ok('community', '2.1.0'), true);
  assert.equal(ok(undefined, '2.0.228'), true);
  assert.equal(ok('pro', '2.0.325'), false);
  assert.equal(ok('pro', '2.0.326'), true);
  assert.equal(ok('pro', 'v2.0.330'), true);
  assert.equal(ok('pro', '2.0.326-beta.1'), false);
  assert.equal(ok('pro', '2.0.327-beta.1'), true);
  assert.equal(ok('community', '2.0.230-dev'), true);
  assert.equal(ok('community', 'dev'), true);
  assert.equal(ok('community', ''), false);
  assert.equal(ok('community', 'nonsense'), false);
  assert.equal(ok('community', null), false);
});

test('$SAFEZ: asks ncSender; no app-info, an error or no answer is a no', async () => {
  let routes = {};
  const server = createServer((req, res) => {
    const r = routes[req.url];
    if (r === 'hang') return;
    if (!r) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(r));
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    routes = { '/api/app-info': { edition: 'pro' }, '/api/updates/check': { currentVersion: '2.0.329' } };
    assert.equal(await N.ncSenderHasSafeZ(base), true);
    routes = { '/api/app-info': { edition: 'pro' }, '/api/updates/check': { currentVersion: '2.0.300' } };
    assert.equal(await N.ncSenderHasSafeZ(base), false);
    routes = { '/api/updates/check': { currentVersion: '2.0.230' } };
    assert.equal(await N.ncSenderHasSafeZ(base), false);
    routes = { '/api/app-info': { edition: 'community' }, '/api/updates/check': 'hang' };
    assert.equal(await N.ncSenderHasSafeZ(base, 200), false);
  } finally {
    server.closeAllConnections();
    server.close();
  }
});
