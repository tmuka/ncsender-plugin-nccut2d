// The heavy work, run in a Web Worker (or in the page if workers are
// blocked): reading the part's file, planning and making the toolpaths.
// Messages: { id, type, ...args } -> { id, ok, result | error }.
import occtFactory from 'occt-import-js';
import * as N from './core/index.js';

const STEP_OPTIONS = { linearUnit: 'millimeter', linearDeflectionType: 'absolute_value', linearDeflection: 0.02, angularDeflection: 0.1 };

// 3x3 matrices, row by row
const I3 = [1, 0, 0, 0, 1, 0, 0, 0, 1];
const mul = (a, b) => Array.from({ length: 9 }, (_, k) => a[(k / 3 | 0) * 3] * b[k % 3] + a[(k / 3 | 0) * 3 + 1] * b[3 + k % 3] + a[(k / 3 | 0) * 3 + 2] * b[6 + k % 3]);
const transpose = (a) => [a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8]];
// A saved size: [x, y, z] (older saves, the file's axes) or a 3x3 matrix
const asMatrix = (scale) => (scale?.length === 9 ? scale.slice() : scale?.length === 3 ? [scale[0], 0, 0, 0, scale[1], 0, 0, 0, scale[2]] : I3.slice());

export function createEngine() {
  // source: the part as read (mm); raw: resized (`size`, a 3x3 in the
  // file's axes); part: resized and turned (`rot` from raw)
  let occt = null, source = null, raw = null, part = null, wasm = null;
  let size = I3.slice(), rot = I3.slice();
  const resized = () => {
    raw = size.every((v, i) => Math.abs(v - I3[i]) < 1e-12) ? source : { ...source, ...N.transformMesh(source, size) };
  };
  const info = () => ({ solids: raw.solids, size: N.meshBounds(raw).size, fileSize: N.meshBounds(source).size, mesh: source.mesh, scale: size, ...N.sides(raw) });
  const shown = () => ({ positions: Float32Array.from(part.positions), indices: part.indices.slice(), faces: part.faces, analysis: N.analyze(part), rot, scale: size });

  const handlers = {
    async init({ wasmBinary }) { wasm = wasmBinary; return true; },

    // name picks the reader (.stl, .3mf, else STEP); scale: see asMatrix
    async load({ bytes, name = '', scale }) {
      source = await N.meshFromFile(bytes, name);
      if (source) source.mesh = /\.stl$/i.test(name) ? 'stl' : '3mf';
      // A mesh saved as STEP reads in JS in a moment; CAD solids go to OCCT
      else source = N.meshFromFacetedStep(new Uint8Array(bytes));
      if (!source) {
        occt ||= await occtFactory({ wasmBinary: wasm });
        const r = occt.ReadStepFile(new Uint8Array(bytes), STEP_OPTIONS);
        if (!r.success || !r.meshes?.length) throw new Error('This file has no solid ncCAM can read. Export it again as STEP (AP214 or AP242), STL or 3MF.');
        source = N.meshFromOcct(r);
      }
      size = asMatrix(scale);
      resized();
      return info();
    },

    // Resize the part as it sits now: `by` [x, y, z] along the machine's
    // axes, kept with the part if it is turned again; or `scale`, a whole
    // new size in the file's axes (back to the file's size, inches)
    async rescale({ by, scale }) {
      if (by) {
        if (!by.every((v) => v > 0)) throw new Error('A size must be more than 0.');
        size = mul(mul(transpose(rot), mul([by[0], 0, 0, 0, by[1], 0, 0, 0, by[2]], rot)), size);
      } else size = asMatrix(scale);
      resized();
      if (part) part = N.transformMesh(raw, rot);
      return { ...info(), ...(part ? shown() : {}) };
    },

    // up: a side name, a direction (from a clicked face), or { rot }: a turn
    // from the file's axes
    async orient({ up }) {
      if (up?.rot) { rot = up.rot.slice(); part = N.transformMesh(raw, rot); }
      else { rot = N.rotationToUp(typeof up === 'string' ? N.UP_DIRECTIONS[up] : up); part = N.transformMesh(raw, rot); }
      return shown();
    },

    // A clicked face of the part as it is now goes on top
    async tilt({ normal }) {
      const r = N.rotationToUp(normal);
      rot = mul(r, rot);
      part = N.transformMesh(part, r);
      return shown();
    },

    // Turn the part as it is now: 'around' is half a turn on the table (X
    // and Y both reverse, never a mirror image), 'over' turns it upside down
    async turn({ how }) {
      const r = how === 'over' ? [1, 0, 0, 0, -1, 0, 0, 0, -1] : [-1, 0, 0, 0, -1, 0, 0, 0, 1];
      rot = mul(r, rot);
      part = N.transformMesh(part, r);
      return shown();
    },

    async plan({ tools, job, limits, paths, gcodeOptions, timing }) {
      const p = N.plan(part, tools, job, limits);
      if (paths) N.toolpaths(p);
      const seconds = paths ? N.runTime(p, timing) : 0;
      const gcode = paths ? N.gcode(p, gcodeOptions) : '';
      // Rapids into material, checked here (a worker) and not on the page
      const collisions = paths ? N.simulate(p, N.HeightMap.cellFor(p.stock, 300 * 300)).collisions.map((c) => ({ op: c.op, at: c.at })) : [];
      for (const op of p.ops) delete op.surface; // the height grid stays here
      // Moves go back packed: x, y, z, feed (0 for a rapid)
      for (const op of p.ops) {
        if (!op.moves) continue;
        const t = new Float32Array(op.moves.length * 4);
        op.moves.forEach((m, i) => { t[i * 4] = m.x; t[i * 4 + 1] = m.y; t[i * 4 + 2] = m.z; t[i * 4 + 3] = m.r ? 0 : m.f; });
        op.track = t;
        delete op.moves;
      }
      return { plan: p, gcode, seconds, collisions };
    },
  };

  return async function handle(msg) {
    const fn = handlers[msg.type];
    if (!fn) throw new Error(`unknown request ${msg.type}`);
    return fn(msg);
  };
}
