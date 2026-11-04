// Tool Library entries as ncCAM uses them, and speeds and feeds per material.

export const MATERIALS = {
  softwood: { name: 'Softwood', note: 'Pine, cedar', rpm: 18000, chip: 0.012, maxChip: 0.25, stepdown: 0.5, stepover: 0.45, ramp: 5 },
  hardwood: { name: 'Hardwood', note: 'Oak, maple, walnut', rpm: 18000, chip: 0.009, maxChip: 0.2, stepdown: 0.35, stepover: 0.4, ramp: 4 },
  mdf: { name: 'MDF / Plywood', note: 'Sheet goods', rpm: 18000, chip: 0.012, maxChip: 0.25, stepdown: 0.5, stepover: 0.45, ramp: 5 },
  plastic: { name: 'Plastic', note: 'Acrylic, HDPE', rpm: 16000, chip: 0.01, maxChip: 0.2, stepdown: 0.3, stepover: 0.4, ramp: 3 },
  aluminum: { name: 'Aluminum', note: '6061', rpm: 18000, chip: 0.003, maxChip: 0.05, stepdown: 0.1, stepover: 0.25, ramp: 2 },
  foam: { name: 'Foam', note: 'Tooling board', rpm: 12000, chip: 0.02, maxChip: 0.4, stepdown: 1, stepover: 0.6, ramp: 10 },
};

// Fast cuts harder and skips the finishing pass; Smooth takes lighter steps.
export const FINISHES = {
  fast: { name: 'Fast', feed: 1.15, stepdown: 1.2, stepover: 1.1, allowance: 0 },
  balanced: { name: 'Balanced', feed: 1, stepdown: 1, stepover: 1, allowance: 0.2 },
  smooth: { name: 'Smooth', feed: 0.85, stepdown: 0.8, stepover: 0.7, allowance: 0.25 },
};

const ENDMILL_TYPES = new Set(['flat', 'flat end mill', 'endmill', 'end mill', 'flat_end_mill']);

export function toolKind(tool) {
  const t = String(tool.type || '').toLowerCase().replace(/[-_]/g, ' ');
  if (ENDMILL_TYPES.has(t) || t.startsWith('flat')) return 'flat';
  if (t.startsWith('surfac')) return 'surfacing';
  if (t.startsWith('drill')) return 'drill';
  if (t.startsWith('ball')) return 'ball';
  if (t.startsWith('v')) return 'vbit';
  if (t.startsWith('chamfer')) return 'chamfer';
  if (t.startsWith('thread')) return 'threadmill';
  return t || 'flat';
}

// The T number M6 asks for: Settings -> Tool Changer -> Tool Numbering picks
// the Tool ID or the magazine slot. `numbering` is 'toolId', 'slot', or what
// makeNumbering returns.
export function toolNumber(tool, numbering) {
  const mode = typeof numbering === 'string' ? numbering : numbering?.mode;
  if (mode === 'toolId') return tool.toolId ?? tool.id;
  if (tool.toolNumber) return tool.toolNumber;
  return numbering?.manual?.get(tool.id) ?? tool.toolId ?? tool.id;
}

// Slot numbering reads T<n> as slot n, and a number past the magazine as a
// change by hand. A tool in no slot gets a number of its own past the
// magazine: its Tool ID when that is free, else the next free one. Never a
// number inside the magazine, which would load the tool in that slot.
export function makeNumbering(mode, tools, slots = 0, probe = null) {
  if (mode === 'toolId') return { mode };
  const taken = new Set(tools.filter((t) => t.toolNumber).map((t) => t.toolNumber));
  for (let n = 1; n <= slots; n++) taken.add(n);
  if (probe) taken.add(probe);
  const manual = new Map();
  const loose = tools.filter((t) => !t.toolNumber);
  for (const t of loose) {
    const id = t.toolId ?? t.id;
    if (id > slots && !taken.has(id)) { manual.set(t.id, id); taken.add(id); }
  }
  let next = slots + 1;
  for (const t of loose) {
    if (manual.has(t.id)) continue;
    while (taken.has(next)) next++;
    manual.set(t.id, next); taken.add(next);
  }
  return { mode, manual };
}

export function normalizeTools(list) {
  return (list || [])
    .filter((t) => t && t.diameter > 0)
    .map((t) => ({
      id: t.id, toolId: t.toolId ?? t.id, toolNumber: t.toolNumber ?? null,
      name: t.name || `${t.diameter} mm ${toolKind(t)}`,
      kind: toolKind(t), diameter: Number(t.diameter),
      fluteLength: Number(t.dimensions?.flute_length) || null,
      flutes: Number(t.metadata?.flutes) || 2,
      ...(/^(vbit|chamfer)$/.test(toolKind(t)) ? { angle: vAngle(t) } : {}),
      ...(toolKind(t) === 'threadmill' ? threadMill(t) : {}),
    }));
}

// A single-form thread mill: its cutting diameter and the pitches it cuts
// (from metadata, else a SKU or name like "D3.15×P0.5-0.8", else the
// tool's diameter and any pitch), how deep it reaches below the shank
// (metadata.reach, else 3 × the cutting diameter: `assumed`), and its neck
// (narrower than the cutter; 0.7 × it unless given).
export function threadMill(t) {
  const md = t.metadata || {}, text = [md.sku, t.name, md.notes].filter(Boolean).join(' ');
  const m = text.match(/D\s*(\d+(?:\.\d+)?)\s*[×xX*]\s*P(?:itch)?\s*(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)/);
  const cut = Number(md.cut_diameter) || (m ? Number(m[1]) : Number(t.diameter));
  const reach = Number(md.reach) || Number(t.dimensions?.neck_length) || 0;
  return {
    cut, pitchMin: Number(md.pitch_min) || (m ? Number(m[2]) : 0), pitchMax: Number(md.pitch_max) || (m ? Number(m[3]) : Infinity),
    reach: reach || 3 * cut, reachAssumed: !reach, neck: Number(md.neck_diameter) || 0.7 * cut,
  };
}

// A V-bit's included angle. The Tool Library keeps half of it in
// dimensions.taper_angle (the Fusion 360 importer writes 30 for a 60° bit);
// else the name says it ("60 degree", "90 Deg", "60°"); else 90°.
export function vAngle(t) {
  const half = Number(t.dimensions?.taper_angle);
  if (half > 0 && half < 90) return half * 2;
  const m = String(t.name || '').match(/(\d{2,3}(?:\.\d+)?)\s*(?:°|º|deg\b|degrees?\b)/i);
  const a = m ? Number(m[1]) : 0;
  return a > 0 && a < 180 ? a : 90;
}

export function feeds(tool, material, finish, limits = {}) {
  const m = MATERIALS[material] || MATERIALS.mdf;
  const f = FINISHES[finish] || FINISHES.balanced;
  const maxRpm = limits.maxRpm || 24000, minRpm = limits.minRpm || 0;
  const rpm = Math.round(Math.min(maxRpm, Math.max(minRpm, m.rpm)));
  const chip = Math.min(m.maxChip, m.chip * tool.diameter);
  const maxFeed = Math.min(limits.maxFeed || 4000, 4000);
  const feed = Math.round(Math.min(maxFeed, Math.max(150, rpm * tool.flutes * chip * f.feed)));
  return {
    rpm, feed,
    plunge: Math.round(Math.max(60, feed * 0.3)),
    stepdown: Math.max(0.05, tool.diameter * m.stepdown * f.stepdown),
    stepover: Math.max(0.05, tool.diameter * Math.min(0.9, m.stepover * f.stepover)),
    rampAngle: m.ramp,
  };
}

// Tabs: how tall they stand off the bed and how long a bridge of material
// they leave, in mm. Aluminum holds with less.
export const tabDefaults = (material) => (material === 'aluminum' ? { height: 1, length: 1 } : { height: 2, length: 2 });
