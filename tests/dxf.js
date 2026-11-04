// A tiny DXF writer for the tests and the dev harness.
export function dxf({ units = 4, layers = [], entities = [], blocks = [] }) {
  const g = (...pairs) => pairs.map((v, i) => (i % 2 ? String(v) : String(v).padStart(3))).join('\n');
  const out = [g(0, 'SECTION', 2, 'HEADER', 9, '$INSUNITS', 70, units, 0, 'ENDSEC')];
  out.push(g(0, 'SECTION', 2, 'TABLES', 0, 'TABLE', 2, 'LAYER', 70, layers.length));
  for (const L of layers) out.push(g(0, 'LAYER', 2, L.name, 70, 0, 62, L.aci));
  out.push(g(0, 'ENDTAB', 0, 'ENDSEC'));
  if (blocks.length) {
    out.push(g(0, 'SECTION', 2, 'BLOCKS'));
    for (const b of blocks) { out.push(g(0, 'BLOCK', 8, '0', 2, b.name, 70, 0, 10, b.x || 0, 20, b.y || 0, 30, 0)); out.push(...b.entities); out.push(g(0, 'ENDBLK')); }
    out.push(g(0, 'ENDSEC'));
  }
  out.push(g(0, 'SECTION', 2, 'ENTITIES'));
  out.push(...entities);
  out.push(g(0, 'ENDSEC', 0, 'EOF'));
  return out.join('\n') + '\n';
}
const g = (...pairs) => pairs.map((v, i) => (i % 2 ? String(v) : String(v).padStart(3))).join('\n');
export const line = (layer, x1, y1, x2, y2, aci) => g(0, 'LINE', 8, layer, ...(aci ? [62, aci] : []), 10, x1, 20, y1, 30, 0, 11, x2, 21, y2, 31, 0);
export const circle = (layer, x, y, r, aci) => g(0, 'CIRCLE', 8, layer, ...(aci ? [62, aci] : []), 10, x, 20, y, 30, 0, 40, r);
export const lwpoly = (layer, pts, closed, aci) => g(0, 'LWPOLYLINE', 8, layer, ...(aci ? [62, aci] : []), 90, pts.length, 70, closed ? 1 : 0,
  ...pts.flatMap((p) => [10, p[0], 20, p[1], ...(p[2] ? [42, p[2]] : [])]));
export const insert = (layer, name, x, y, rot = 0, s = 1) => g(0, 'INSERT', 8, layer, 2, name, 10, x, 20, y, 30, 0, 41, s, 42, s, 50, rot);

// The ornament from the mockup: red cut (outline + hanging hole), blue score
// lines, purple shade (mountains), on named layers.
export function ornament() {
  const mountains = [[16, 36], [32, 58], [42, 47], [56, 70], [70, 52], [76, 58], [86, 36]];
  return dxf({
    layers: [{ name: 'CUT', aci: 1 }, { name: 'LINES', aci: 5 }, { name: 'SHADE', aci: 200 }],
    entities: [
      circle('CUT', 50, 50, 48), circle('CUT', 50, 90, 2.5),
      circle('LINES', 50, 50, 43), line('LINES', 14, 36, 86, 36),
      lwpoly('SHADE', mountains, true), circle('SHADE', 72, 76, 6),
    ],
  });
}
