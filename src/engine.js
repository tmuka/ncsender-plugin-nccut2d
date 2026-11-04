// The heavy work, run in a Web Worker (or in the page if workers are
// blocked): planning, the part model and the toolpaths. The page reads the
// drawing (SVG needs the browser's DOM) and sends its shapes here.
// Messages: { id, type, ...args } -> { id, ok, result | error }.
import * as N from './core/index.js';

export function createEngine() {
  let a = null; // analyze2d of the drawing as sized

  const handlers = {
    async init() { return true; },

    // shapes: mm polylines, Y up, already sized
    async load({ shapes }) {
      a = N.analyze2d(shapes);
      return { size: a.size, count: a.shapes.length };
    },

    async plan({ tools, job, limits, paths, gcodeOptions, timing }) {
      if (!a) throw new Error('No drawing open.');
      const p = N.plan2d(a, tools, job, limits);
      const part = N.partMesh2d(p);
      if (paths) N.toolpaths(p);
      const seconds = paths ? N.runTime(p, timing) : 0;
      const gcode = paths ? N.gcode(p, gcodeOptions) : '';
      // Rapids into material, checked here (a worker) and not on the page
      const collisions = paths ? N.simulate(p, N.HeightMap.cellFor(p.stock, 300 * 300)).collisions.map((c) => ({ op: c.op, at: c.at })) : [];
      // Moves go back packed: x, y, z, feed (0 for a rapid)
      for (const op of p.ops) {
        if (!op.moves) continue;
        const t = new Float32Array(op.moves.length * 4);
        op.moves.forEach((m, i) => { t[i * 4] = m.x; t[i * 4 + 1] = m.y; t[i * 4 + 2] = m.z; t[i * 4 + 3] = m.r ? 0 : m.f; });
        op.track = t;
        delete op.moves;
      }
      return { plan: p, gcode, seconds, collisions, part };
    },
  };

  return async function handle(msg) {
    const fn = handlers[msg.type];
    if (!fn) throw new Error(`unknown request ${msg.type}`);
    return fn(msg);
  };
}
