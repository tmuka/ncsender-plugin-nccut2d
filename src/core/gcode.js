// The program: every enabled operation's moves in work coordinates, with
// a tool change wherever the tool changes. Only G0/G1, G4, M3/M5, M6 and
// M30, so it runs the same on grblHAL, FluidNC and classic Grbl.
import { toolNumber, MATERIALS, FINISHES } from './tools.js';

const num = (v) => {
  const s = (Math.round(v * 1000) / 1000).toFixed(3).replace(/\.?0+$/, '');
  return s === '-0' ? '0' : s;
};

// A comment ends at the first ')' and can't nest. ASCII only: older
// controllers reject other characters.
const ASCII = { '\u00d7': 'x', '\u00b7': '-', '\u00d8': 'D', '\u00b0': ' deg', '\u2019': "'", '\u2026': '...' };
const comment = (text) => `(${String(text).replace(/\(/g, '[').replace(/\)/g, ']').replace(/[^\x20-\x7e]/g, (c) => ASCII[c] ?? '')})`;

const ZERO_NAMES = {
  'back-left': 'back left corner', 'back-center': 'back edge, middle', 'back-right': 'back right corner',
  'left-center': 'left edge, middle', center: 'center', 'right-center': 'right edge, middle',
  'front-left': 'front left corner', 'front-center': 'front edge, middle', 'front-right': 'front right corner',
};

export function gcode(p, opts = {}) {
  const { name = 'part', numbering = 'slot', safeZHeightMm = null, spindleDelay = 3 } = opts;
  const safeZ = Number.isFinite(safeZHeightMm) ? `G53 G0 Z${num(safeZHeightMm)}` : 'G53 G0 Z0';
  const z0 = p.zero;
  const s = p.stock;
  const lines = [
    comment(`ncCAM: ${name}`),
    comment(`Stock ${num(s.width)} x ${num(s.depth)} x ${num(s.thickness)} mm, ${(MATERIALS[p.job.material] || {}).name || p.job.material}, ${(FINISHES[p.job.finish] || {}).name || p.job.finish}`),
    comment(`Zero: X Y at the ${ZERO_NAMES[p.job.zero.xy] || p.job.zero.xy}, Z on ${p.job.zero.z === 'bed' ? 'the bed' : 'top of the stock'}`),
  ];
  const ops = p.ops.filter((o) => o.enabled && o.moves && o.moves.length);
  for (const t of [...new Map(ops.map((o) => [o.tool.id, o.tool])).values()]) lines.push(comment(`T${toolNumber(t, numbering)}: ${t.name}, ${num(t.diameter)} mm`));
  lines.push('G21 G90 G94 G17');

  let tool = null, last = {}, feed = null, mode = null;
  for (const op of ops) {
    if (!tool || op.tool.id !== tool.id) {
      if (tool) lines.push('M5');
      lines.push(safeZ, `M6 T${toolNumber(op.tool, numbering)}`, comment(op.tool.name));
      tool = op.tool;
      lines.push(`M3 S${op.feeds.rpm}`);
      if (spindleDelay > 0) lines.push(`G4 P${spindleDelay}`);
      last = {}; feed = null; mode = null;
    }
    lines.push(comment(`${op.label}${op.detail ? ': ' + op.detail : ''}`));
    for (const m of op.moves) {
      const x = num(m.x - z0.x), y = num(m.y - z0.y), z = num(m.z - z0.z);
      // A rapid never moves sideways and down at once: across first, then
      // down (going up: up first). After a tool change Z is unknown, so the
      // first rapid always goes across at the safe height before coming down.
      if (m.r && (x !== last.x || y !== last.y) && z !== last.z) {
        const down = last.z === undefined || +z < +last.z;
        const steps = down ? [`X${x} Y${y}`, `Z${z}`] : [`Z${z}`, `X${x} Y${y}`];
        for (const st of steps) { lines.push(`${mode === 'G0' ? '' : 'G0 '}${st}`); mode = 'G0'; }
        last = { x, y, z };
        continue;
      }
      const g = m.r ? 'G0' : 'G1';
      let line = g === mode ? '' : g;
      if (x !== last.x) line += ` X${x}`;
      if (y !== last.y) line += ` Y${y}`;
      if (z !== last.z) line += ` Z${z}`;
      if (!m.r && m.f !== feed) { line += ` F${Math.round(m.f)}`; feed = m.f; }
      line = line.trim();
      if (!line || line === g) continue;
      lines.push(line);
      mode = g; last = { x, y, z };
    }
  }
  lines.push('M5', safeZ, 'M30', '');
  return lines.join('\n');
}

// Run time from the moves: feed moves at their feed, rapids at maxRapid,
// plus the spindle wait at each tool change.
export function runTime(p, { maxRapid = 5000, spindleDelay = 3, toolChange = 30 } = {}) {
  let sec = 0, prev = null, tool = null;
  for (const op of p.ops) {
    if (!op.enabled || !op.moves) continue;
    if (!tool || op.tool.id !== tool.id) { sec += spindleDelay + (tool ? toolChange : 0); tool = op.tool; }
    let opSec = 0;
    for (const m of op.moves) {
      if (prev) {
        const d = Math.hypot(m.x - prev.x, m.y - prev.y, m.z - prev.z);
        opSec += (d / (m.r ? maxRapid : m.f)) * 60;
      }
      prev = m;
    }
    op.seconds = opSec;
    sec += opSec;
  }
  return sec;
}
