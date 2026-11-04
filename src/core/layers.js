// One layer per colour in the artwork, each with a role:
//   fill  — engrave the inside of the closed shapes, line by line
//   score — follow the lines lightly
//   cut   — follow the lines through the material, inside shapes first
// mode is what the user picked: 'Fill', 'Line' or 'Off'.

const NAMED = [
  ['Red', [229, 72, 77]], ['Red', [255, 0, 0]], ['Blue', [0, 0, 255]], ['Blue', [62, 142, 247]], ['Green', [0, 160, 0]], ['Green', [0, 255, 0]],
  ['Black', [0, 0, 0]], ['Grey', [128, 128, 128]], ['Purple', [155, 107, 242]], ['Purple', [128, 0, 128]], ['Magenta', [255, 0, 255]],
  ['Cyan', [0, 255, 255]], ['Teal', [0, 128, 128]], ['Brown', [139, 69, 19]], ['Pink', [255, 105, 180]], ['White', [255, 255, 255]],
  ['Yellow', [255, 255, 0]], ['Orange', [255, 140, 0]], ['Navy', [0, 0, 128]], ['Maroon', [128, 0, 0]], ['Olive', [128, 128, 0]],
];
const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));

export function colorName(hex) {
  const c = rgb(hex);
  let best = 'Colour', d = Infinity;
  for (const [n, v] of NAMED) { const e = (v[0] - c[0]) ** 2 + (v[1] - c[1]) ** 2 + (v[2] - c[2]) ** 2; if (e < d) { d = e; best = n; } }
  return best;
}

// The colour a layer is drawn in on screen: the file's own, except black and
// white (invisible on one theme or the other), which get a stand-in, and very
// dark colours, which are lightened.
export function displayColor(hex) {
  const [r, g, b] = rgb(hex);
  const hi = Math.max(r, g, b), lo = Math.min(r, g, b);
  const l = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  if (hi - lo < 40 && l < 0.35) return '#9b6bf2';
  if (hi - lo < 40 && l > 0.85) return '#8fa3b8';
  if (l < 0.3) return '#' + [r, g, b].map((v) => Math.round(v + (255 - v) * 0.35).toString(16).padStart(2, '0')).join('');
  return hex;
}

function roleFor(name, hex, shapes) {
  const n = name.toLowerCase();
  if (/cut|outline|through|contour/.test(n)) return 'cut';
  if (/engrave|fill|shade|raster|image/.test(n)) return 'fill';
  if (/score|line|mark|etch|vector/.test(n)) return 'score';
  const [r, g, b] = rgb(hex);
  if (r > 180 && g < 110 && b < 110) return 'cut';
  const closed = shapes.filter((s) => s.closed).length;
  if (shapes.some((s) => s.filled) && closed === shapes.length) return 'fill';
  return 'score';
}

export function buildLayers(shapes) {
  const groups = new Map();
  for (const s of shapes) {
    if (!groups.has(s.color)) groups.set(s.color, []);
    groups.get(s.color).push(s);
  }
  const out = [];
  let i = 0;
  for (const [color, list] of groups) {
    const names = [...new Set(list.map((s) => s.layer).filter((l) => l && l !== '0'))];
    const name = names.length === 1 ? names[0] : colorName(color);
    const role = roleFor(names.length === 1 ? names[0] : '', color, list);
    out.push({
      id: 'L' + i, color, show: displayColor(color), name, role,
      mode: role === 'fill' ? 'Fill' : 'Line',
      shapes: list.length, closed: list.filter((s) => s.closed).length,
      speed: 1000, power: 20, passes: 1,
      interval: 0.1, angle: 0, bidir: true, overscan: 2.5,
    });
    i++;
  }
  return out;
}

// Burn order: engrave, then score, then cut; the order of the file inside each.
export const ROLE_ORDER = { fill: 0, score: 1, cut: 2 };
export function burnOrder(layers) {
  const rank = (L) => (L.mode === 'Fill' ? 0 : L.role === 'cut' ? 2 : 1);
  return layers.filter((L) => L.mode !== 'Off').map((L, i) => ({ L, i })).sort((a, b) => rank(a.L) - rank(b.L) || a.i - b.i).map((x) => x.L);
}

// Speed (mm/min), power (%) and passes per role, by material.
export const MATERIALS = [
  { id: 'ply3', name: 'Plywood', sub: '3 mm', swatch: '#d9c3a0', fill: [6000, 30, 1], score: [1500, 20, 1], cut: [400, 90, 2] },
  { id: 'ply6', name: 'Plywood', sub: '6 mm', swatch: '#c9ad82', fill: [6000, 35, 1], score: [1500, 25, 1], cut: [250, 100, 3] },
  { id: 'mdf3', name: 'MDF', sub: '3 mm', swatch: '#b9946a', fill: [6000, 35, 1], score: [1500, 25, 1], cut: [300, 100, 2] },
  { id: 'acr3', name: 'Acrylic', sub: '3 mm', swatch: '#cfe3ef', fill: [8000, 22, 1], score: [2000, 15, 1], cut: [300, 95, 1] },
  { id: 'leather', name: 'Leather', sub: '2 mm', swatch: '#8a5a44', fill: [7000, 18, 1], score: [2000, 12, 1], cut: [600, 70, 1] },
  { id: 'card', name: 'Cardstock', sub: '0.3 mm', swatch: '#ece6da', fill: [9000, 8, 1], score: [3000, 6, 1], cut: [1500, 25, 1] },
  { id: 'slate', name: 'Slate', sub: 'engrave', swatch: '#5c6670', fill: [5000, 60, 1], score: [1200, 60, 1], cut: [1200, 60, 1] },
  { id: 'anod', name: 'Anodized Al', sub: 'engrave', swatch: '#4a5d73', fill: [3000, 80, 1], score: [800, 80, 1], cut: [800, 80, 1] },
];

export function applyMaterial(layers, mat) {
  for (const L of layers) {
    const v = mat[L.mode === 'Fill' ? 'fill' : L.role === 'cut' ? 'cut' : 'score'];
    L.speed = v[0]; L.power = v[1]; L.passes = v[2];
  }
  return layers;
}
