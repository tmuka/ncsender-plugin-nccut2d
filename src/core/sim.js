// Material removal on a heightmap: the stock is a grid of columns, and every
// move lowers the columns under the tool. Used by the preview and by the
// tests (a cut below the part is a gouge).

export class HeightMap {
  constructor(stock, cell) {
    this.cell = cell;
    this.x0 = stock.minX; this.y0 = stock.minY;
    this.nx = Math.max(2, Math.ceil((stock.maxX - stock.minX) / cell) + 1);
    this.ny = Math.max(2, Math.ceil((stock.maxY - stock.minY) / cell) + 1);
    this.h = new Float32Array(this.nx * this.ny).fill(stock.top);
    this.op = new Uint8Array(this.nx * this.ny); // which op last cut each column, 1-based
    this.top = stock.top;
    this.bottom = stock.bottom;
  }
  static cellFor(stock, maxCells = 600 * 600) {
    const a = (stock.maxX - stock.minX) * (stock.maxY - stock.minY);
    return Math.max(0.1, Math.sqrt(a / maxCells));
  }
}

// The tool's end as rings of columns around its center: how far above the
// tip each one is (0 for a flat end).
export function toolStamp(tool, cell) {
  // A thread mill's tooth cuts under the thread's crests, which a height
  // grid can't show: seen from above it is its neck
  const r = (tool.kind === 'threadmill' ? tool.neck : tool.diameter) / 2;
  const n = Math.ceil(r / cell);
  const out = [];
  for (let j = -n; j <= n; j++) for (let i = -n; i <= n; i++) {
    const d = Math.hypot(i, j) * cell;
    if (d > r + 1e-6) continue;
    const dd = Math.min(d, r);
    let dz = 0;
    if (tool.kind === 'ball') dz = r - Math.sqrt(Math.max(0, r * r - dd * dd));
    else if (tool.kind === 'vbit' || tool.kind === 'chamfer' || tool.kind === 'drill') {
      const half = ((tool.angle || (tool.kind === 'drill' ? 118 : 90)) * Math.PI) / 360;
      dz = dd / Math.tan(half);
    }
    out.push(i, j, dz, d);
  }
  const st = Float32Array.from(out);
  st.inner = Math.max(0, r - cell * Math.SQRT1_2); // reach a rapid is checked over
  return st;
}

// Cuts from a to b. Returns true if a rapid ran into material.
export function cutMove(hm, stamp, a, b, rapid, opIndex) {
  const len = Math.hypot(b.x - a.x, b.y - a.y);
  const steps = Math.max(1, Math.ceil(len / (hm.cell * 0.5)));
  let hit = false;
  for (let k = rapid ? 0 : 1; k <= steps; k++) {
    const t = k / steps;
    const cx = (a.x + (b.x - a.x) * t - hm.x0) / hm.cell;
    const cy = (a.y + (b.y - a.y) * t - hm.y0) / hm.cell;
    const z = a.z + (b.z - a.z) * t;
    if (z >= hm.top) continue;
    const ci = Math.round(cx), cj = Math.round(cy);
    for (let s = 0; s < stamp.length; s += 4) {
      const i = ci + stamp[s], j = cj + stamp[s + 1];
      if (i < 0 || j < 0 || i >= hm.nx || j >= hm.ny) continue;
      const idx = j * hm.nx + i;
      const zz = z + stamp[s + 2];
      if (hm.h[idx] > zz + 1e-4) {
        // A rapid hits only what is clearly inside the tool: its centre sits
        // on the nearest node, up to 0.71 of a cell off, which on a coarse
        // grid alone would put a wall it passes by under its edge
        if (rapid) { if (hm.h[idx] > zz + 0.05 && stamp[s + 3] <= stamp.inner) hit = true; continue; }
        hm.h[idx] = zz;
        hm.op[idx] = opIndex + 1;
      }
    }
  }
  return hit;
}

// For drawing: the same cut, with the tool at its exact position, and the
// columns on a wall moved onto the tool's edge (hm.sx/sy, in mm). A wall then
// follows the real curve instead of the grid's steps. A column left standing
// goes to the edge it is nearest (hm.gap: how far outside); a cut column to
// the edge of the cut it is deepest inside (hm.deep), which is the outer edge
// of the whole pass, not an inner pass's. A deeper cut starts both again.
export function edgeMap(hm) {
  const n = hm.nx * hm.ny;
  hm.sx = new Float32Array(n); hm.sy = new Float32Array(n);
  hm.wx = new Float32Array(n); hm.wy = new Float32Array(n); // which way the wall faces
  hm.gap = new Float32Array(n).fill(Infinity);
  hm.deep = new Float32Array(n).fill(-Infinity);
  return hm;
}

export function cutMoveExact(hm, tool, a, b, opIndex) {
  const r = (tool.kind === 'threadmill' ? tool.neck : tool.diameter) / 2, cell = hm.cell, rc = r / cell;
  const tip = tool.kind === 'ball' ? (d) => r - Math.sqrt(Math.max(0, r * r - d * d))
    : (tool.kind === 'vbit' || tool.kind === 'chamfer' || tool.kind === 'drill')
      ? ((t) => (d) => d / t)(Math.tan(((tool.angle || (tool.kind === 'drill' ? 118 : 90)) * Math.PI) / 360))
      : () => 0;
  const flat = !tool.kind || tool.kind === 'flat' || tool.kind === 'surfacing' || tool.kind === 'threadmill';
  const { h, sx, sy, wx, wy, gap, deep, nx, ny } = hm;
  const band = 1.5 * cell, reach = rc + 1.5;
  // One column against the tool at height z, its axis (gx, gy) away in cells
  const visit = (idx, gx, gy, z) => {
    const dc = Math.hypot(gx, gy);
    if (dc > reach) return;
    const d = dc * cell;
    if (d <= r) {
      const zz = z + tip(d);
      if (h[idx] > zz + 1e-4) { h[idx] = zz; hm.op[idx] = opIndex + 1; gap[idx] = Infinity; deep[idx] = -Infinity; }
      else if (h[idx] < zz - 1e-4) return;
      // The bottom of a wall, moved out onto the edge it is deepest inside
      if (r - d > deep[idx]) {
        deep[idx] = r - d;
        if (flat && r - d < band && dc > 1e-6) { sx[idx] = (gx / dc) * (r - d); sy[idx] = (gy / dc) * (r - d); wx[idx] = -gx / dc; wy[idx] = -gy / dc; }
        else { sx[idx] = 0; sy[idx] = 0; wx[idx] = 0; wy[idx] = 0; }
      }
    } else if (flat && h[idx] > z + 1e-4 && d - r < gap[idx]) {
      // Just outside, still standing: the top of a wall, moved in onto it
      gap[idx] = d - r; sx[idx] = (gx / dc) * (r - d); sy[idx] = (gy / dc) * (r - d); wx[idx] = -gx / dc; wy[idx] = -gy / dc;
    }
  };
  const ax = (a.x - hm.x0) / cell, ay = (a.y - hm.y0) / cell, bx = (b.x - hm.x0) / cell, by = (b.y - hm.y0) / cell;
  if (Math.abs(b.z - a.z) < 1e-9) {
    // Level move: the tool sweeps a capsule, every column measured from the
    // nearest point on the path (one pass, however long the move)
    if (a.z >= hm.top) return;
    const vx = bx - ax, vy = by - ay, vv = vx * vx + vy * vy;
    const i0 = Math.max(0, Math.floor(Math.min(ax, bx) - reach)), i1 = Math.min(nx - 1, Math.ceil(Math.max(ax, bx) + reach));
    const j0 = Math.max(0, Math.floor(Math.min(ay, by) - reach)), j1 = Math.min(ny - 1, Math.ceil(Math.max(ay, by) + reach));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const t = vv > 0 ? Math.max(0, Math.min(1, ((i - ax) * vx + (j - ay) * vy) / vv)) : 0;
      visit(j * nx + i, i - (ax + vx * t), j - (ay + vy * t), a.z);
    }
    return;
  }
  // Ramps and plunges: the tool at points along the move
  const len = Math.hypot(b.x - a.x, b.y - a.y);
  const steps = Math.max(1, Math.ceil(len / (cell * 0.5)));
  const n = Math.ceil(reach);
  for (let k = 1; k <= steps; k++) {
    const t = k / steps;
    const cx = ax + (bx - ax) * t, cy = ay + (by - ay) * t, z = a.z + (b.z - a.z) * t;
    if (z >= hm.top) continue;
    const i0 = Math.max(0, Math.floor(cx - n)), i1 = Math.min(nx - 1, Math.ceil(cx + n));
    const j0 = Math.max(0, Math.floor(cy - n)), j1 = Math.min(ny - 1, Math.ceil(cy + n));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) visit(j * nx + i, i - cx, j - cy, z);
  }
}

// Plays a whole program; collisions lists the rapids that hit material.
export function simulate(p, cell) {
  const hm = new HeightMap(p.stock, cell || HeightMap.cellFor(p.stock));
  const collisions = [];
  p.ops.forEach((op, oi) => {
    if (!op.enabled || !op.moves) return;
    const stamp = toolStamp(op.tool, hm.cell);
    let prev = null;
    for (const m of op.moves) {
      if (prev && cutMove(hm, stamp, prev, m, !!m.r, oi)) collisions.push({ op: op.id, at: m });
      prev = m;
    }
  });
  return { hm, collisions };
}

// The part's top surface on the same grid (-Infinity where there is none).
export function partHeights(mesh, hm) {
  const out = new Float32Array(hm.nx * hm.ny).fill(-Infinity);
  const p = mesh.positions, ix = mesh.indices;
  for (let t = 0; t < ix.length; t += 3) {
    const a = ix[t] * 3, b = ix[t + 1] * 3, c = ix[t + 2] * 3;
    const ax = p[a], ay = p[a + 1], az = p[a + 2], bx = p[b], by = p[b + 1], bz = p[b + 2], cx = p[c], cy = p[c + 1], cz = p[c + 2];
    const det = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
    if (Math.abs(det) < 1e-12) continue;
    const i0 = Math.max(0, Math.floor((Math.min(ax, bx, cx) - hm.x0) / hm.cell)), i1 = Math.min(hm.nx - 1, Math.ceil((Math.max(ax, bx, cx) - hm.x0) / hm.cell));
    const j0 = Math.max(0, Math.floor((Math.min(ay, by, cy) - hm.y0) / hm.cell)), j1 = Math.min(hm.ny - 1, Math.ceil((Math.max(ay, by, cy) - hm.y0) / hm.cell));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const x = hm.x0 + i * hm.cell, y = hm.y0 + j * hm.cell;
      const l1 = ((by - cy) * (x - cx) + (cx - bx) * (y - cy)) / det;
      const l2 = ((cy - ay) * (x - cx) + (ax - cx) * (y - cy)) / det;
      const l3 = 1 - l1 - l2;
      if (l1 < -1e-9 || l2 < -1e-9 || l3 < -1e-9) continue;
      const z = l1 * az + l2 * bz + l3 * cz;
      const idx = j * hm.nx + i;
      if (z > out[idx]) out[idx] = z;
    }
  }
  return out;
}
