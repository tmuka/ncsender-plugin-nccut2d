// SVG path data ("M10 10 L20 20 ...") to polylines in the path's own units.
// Corners stay exact; only curves are flattened.
import { cubic, quad, svgArc } from './geom.js';

const TOKEN = /([MmLlHhVvCcSsQqTtAaZz])|(-?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)/g;

export function parsePath(d) {
  const tokens = [];
  for (const m of String(d || '').matchAll(TOKEN)) tokens.push(m[1] || +m[2]);
  const subs = [];
  let i = 0, cmd = '', cur = [0, 0], start = [0, 0], pts = null, lastCtrl = null, lastCmd = '';
  const num = () => { const v = tokens[i++]; if (typeof v !== 'number') throw new Error('bad path data'); return v; };
  // Arc flags may be written run together ("a1 1 0 01 10 10"): split a digit run.
  const flag = () => {
    const v = tokens[i];
    if (typeof v === 'number' && (v === 0 || v === 1)) { i++; return v; }
    if (typeof v === 'number') { const s = String(v); tokens.splice(i, 1, +s[0], +s.slice(1)); i++; return +s[0]; }
    throw new Error('bad arc flag');
  };
  const begin = (p) => { if (pts && pts.length > 1) subs.push({ pts, closed: false }); pts = [p]; start = p; };
  while (i < tokens.length) {
    if (typeof tokens[i] === 'string') cmd = tokens[i++];
    else if (!cmd) throw new Error('path must start with M');
    const rel = cmd === cmd.toLowerCase();
    const C = cmd.toUpperCase();
    const at = (x, y) => (rel ? [cur[0] + x, cur[1] + y] : [x, y]);
    switch (C) {
      case 'M': { const p = at(num(), num()); begin(p); cur = p; cmd = rel ? 'l' : 'L'; lastCtrl = null; break; }
      case 'L': { const p = at(num(), num()); pts.push(p); cur = p; lastCtrl = null; break; }
      case 'H': { const x = num(); const p = [rel ? cur[0] + x : x, cur[1]]; pts.push(p); cur = p; lastCtrl = null; break; }
      case 'V': { const y = num(); const p = [cur[0], rel ? cur[1] + y : y]; pts.push(p); cur = p; lastCtrl = null; break; }
      case 'C': { const c1 = at(num(), num()), c2 = at(num(), num()), p = at(num(), num()); cubic(cur, c1, c2, p, pts); lastCtrl = c2; cur = p; break; }
      case 'S': {
        const c1 = lastCtrl && 'CS'.includes(lastCmd) ? [2 * cur[0] - lastCtrl[0], 2 * cur[1] - lastCtrl[1]] : cur;
        const c2 = at(num(), num()), p = at(num(), num()); cubic(cur, c1, c2, p, pts); lastCtrl = c2; cur = p; break;
      }
      case 'Q': { const c = at(num(), num()), p = at(num(), num()); quad(cur, c, p, pts); lastCtrl = c; cur = p; break; }
      case 'T': {
        const c = lastCtrl && 'QT'.includes(lastCmd) ? [2 * cur[0] - lastCtrl[0], 2 * cur[1] - lastCtrl[1]] : cur;
        const p = at(num(), num()); quad(cur, c, p, pts); lastCtrl = c; cur = p; break;
      }
      case 'A': {
        const rx = num(), ry = num(), rot = num(), large = flag(), sweep = flag(), p = at(num(), num());
        pts.push(...svgArc(cur, rx, ry, rot, large, sweep, p).slice(1)); cur = p; lastCtrl = null; break;
      }
      case 'Z': {
        if (pts && pts.length > 1) { pts.push(start.slice()); subs.push({ pts, closed: true }); }
        pts = [start]; cur = start; lastCtrl = null; break;
      }
      default: throw new Error(`unknown path command ${cmd}`);
    }
    lastCmd = C;
    if (C === 'Z') cmd = '';
  }
  if (pts && pts.length > 1) subs.push({ pts, closed: false });
  return subs;
}
