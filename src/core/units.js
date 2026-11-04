// Everything inside ncCAM is in mm. What the user reads and types follows
// ncSender's units setting: 'in' when unitsPreference is 'imperial'.
export const INCH = 25.4;
export const unitsFrom = (pref) => (pref === 'imperial' ? 'in' : 'mm');

// A number in the user's units, as text: 0.1 mm or 0.001 in
export function num(v, units = 'mm', d = units === 'in' ? 3 : 1) {
  const x = units === 'in' ? v / INCH : v;
  return (Math.round(x * 10 ** d) / 10 ** d).toLocaleString('en-US', { maximumFractionDigits: d });
}
// The same with its unit: "6.4 mm", "0.25 in"
export const len = (v, units = 'mm', d) => `${num(v, units, d)} ${units}`;
// Typed text in the user's units back to mm
export const toMm = (v, units = 'mm') => (units === 'in' ? v * INCH : v);
