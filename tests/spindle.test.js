import test from 'node:test';
import assert from 'node:assert/strict';
import * as N from '../src/core/index.js';
import { dxf, lwpoly } from './dxf.js';
import { LIBRARY } from './helpers.js';

const tools = N.normalizeTools(LIBRARY);

// $SPINDLESH from the Journeyman's grblHAL on 2026-11-25: the Huanyang VFD is
// in use with its own 0-24000 while $30 held a laser's 1000
const SPINDLESH = [
  '[SPINDLE:2|0|2|*SDRVE|Huanyang v1|0.0,24000.0]',
  '[SPINDLE:1|1|0|IRV|PWM2|0.0,1000.0]',
  '[SPINDLE:0|-|0|DIRV|PWM|1000.0,24000.0]',
  '[SPINDLE:3|-|2|SDVE|Huanyang P2A]',
];

function plan(limits) {
  const a = N.analyze2d(N.readDxf(dxf({ entities: [lwpoly('PART', [[0, 0], [60, 0], [60, 40], [0, 40]], true)] })).shapes);
  return N.plan2d(a, tools, N.defaultJob(a, 6), limits);
}

test('spindles: $SPINDLESH lines, the one in use and its own range', () => {
  const list = N.parseSpindles(['ok', ...SPINDLESH, 'error:3']);
  assert.equal(list.length, 4);
  assert.deepEqual(list[0], { id: 2, num: 0, type: 2, current: true, name: 'Huanyang v1', minRpm: undefined, maxRpm: 24000 });
  assert.equal(list[1].num, 1);
  assert.equal(list[2].num, null);
  assert.equal(list[3].maxRpm, undefined);
});

test('spindle range: the spindle in use wins; else $30/$31, or PWM2\'s $730/$731', () => {
  const fmt = 'PWM,PWM2,Huanyang v1';
  const fs = (def, max = '1000.000') => ({ 30: { value: max }, 31: { value: '0.000' }, 730: { value: '1000' }, 731: { value: '0' },
    ...(def == null ? {} : { 395: { value: String(def), format: fmt } }) });
  assert.deepEqual(N.spindleRange(fs(2), N.parseSpindles(SPINDLESH)), { maxRpm: 24000, minRpm: undefined, source: "the Huanyang v1 spindle's range" });
  // M104 Q1 picked PWM2 (the laser)
  const laser = N.parseSpindles(SPINDLESH.map((l) => l.replace('*', '').replace('|IRV|', '|*IRV|')));
  assert.deepEqual(N.spindleRange(fs(2), laser), { maxRpm: 1000, minRpm: undefined, source: "the PWM2 spindle's range" });
  // No answer: the settings, as before
  assert.deepEqual(N.spindleRange(fs(2, '24000'), []), { maxRpm: 24000, minRpm: undefined, source: '$30' });
  assert.deepEqual(N.spindleRange(fs(null, '24000')), { maxRpm: 24000, minRpm: undefined, source: '$30' });
  assert.deepEqual(N.spindleRange(fs(1)), { maxRpm: 1000, minRpm: undefined, source: '$730' });
  assert.deepEqual(N.spindleRange({}), { maxRpm: undefined, minRpm: undefined, source: '$30' });
});

test('a Spindle max too low for a router is flagged, and says where it came from', () => {
  const low = plan(N.spindleRange({ 30: { value: '1000.000' } })).warnings.find((w) => w.kind === 'spindle');
  assert.match(low.text, /Spindle max is 1000 RPM \(\$30\)/);
  assert.match(low.text, /Firmware settings/);
  const pwm2 = N.spindleRange({}, N.parseSpindles(['[SPINDLE:1|0|0|*IRV|PWM2|0.0,1000.0]']));
  assert.match(plan(pwm2).warnings.find((w) => w.kind === 'spindle').text, /the PWM2 spindle's range.*in the drive/);
  assert.ok(!plan(N.spindleRange({}, N.parseSpindles(SPINDLESH))).warnings.some((w) => w.kind === 'spindle'));
  assert.ok(!plan({}).warnings.some((w) => w.kind === 'spindle'));
  // The feeds follow the range
  const ops = plan(N.spindleRange({}, N.parseSpindles(SPINDLESH))).ops;
  assert.ok(ops.some((o) => o.feeds?.rpm > 1000));
  assert.ok(ops.every((o) => !o.feeds || o.feeds.rpm <= 24000));
  assert.ok(plan(N.spindleRange({ 30: { value: '1000' } })).ops.every((o) => !o.feeds || o.feeds.rpm <= 1000));
});

test('askSpindles: sends a quiet $SPINDLESH and gathers the reply', async () => {
  const win = new EventTarget();
  const sent = [];
  const send = (body) => {
    sent.push(body);
    setTimeout(() => {
      win.dispatchEvent(new MessageEvent('message', { data: { type: 'cnc-data', data: 'ok' } }));
      for (const l of SPINDLESH) win.dispatchEvent(new MessageEvent('message', { data: { type: 'cnc-data', data: l } }));
      win.dispatchEvent(new MessageEvent('message', { data: { type: 'server-state-update', data: SPINDLESH[0] } }));
    }, 10);
  };
  assert.deepEqual(await N.askSpindles({ win, send, wait: 1000, settle: 30 }), SPINDLESH);
  assert.equal(sent.length, 1);
  assert.equal(sent[0].command, '$SPINDLESH');
  assert.equal(sent[0].meta.sourceId, 'ncCut2D');
  assert.equal(sent[0].meta.quiet.terminalResponse, true);
  // No answer (older ncSender, Grbl): [] after the wait; no window: [] at once
  const t = Date.now();
  assert.deepEqual(await N.askSpindles({ win: new EventTarget(), send: () => {}, wait: 60 }), []);
  assert.ok(Date.now() - t >= 50);
  assert.deepEqual(await N.askSpindles({ win: null, send: () => { throw new Error('sent'); } }), []);
  assert.deepEqual(await N.askSpindles({ win: new EventTarget(), send: () => Promise.reject(new Error('down')), wait: 5000 }), []);
});
