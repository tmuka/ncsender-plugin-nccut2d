// ncSender's $SAFEZ raises Z to the Safe Z setting, in machine coordinates and
// in the program's own units. It arrived in ncSender 2.0.228 and ncSender Pro
// 2.0.326. Older versions pass it on to the controller, which rejects it, so
// ask which version this is first. When in doubt, the answer is no.
export function safeZVersionOk(edition, version) {
  const v = String(version || '').trim();
  if (v === 'dev' || /-dev\b/.test(v)) return true;
  const m = /^v?(\d+)\.(\d+)\.(\d+)(-.*)?$/.exec(v);
  if (!m) return false;
  const min = edition === 'pro' ? [2, 0, 326] : [2, 0, 228];
  for (let i = 0; i < 3; i++) {
    const d = Number(m[i + 1]) - min[i];
    if (d) return d > 0;
  }
  return !m[4]; // a beta of the first version that has it may not
}

// Resolves true when this ncSender runs $SAFEZ. /api/app-info (2.0.76 on)
// names the edition; /api/updates/check reports the running version even
// when it can't reach GitHub. Gives up after 5 s.
export function ncSenderHasSafeZ(base = '', wait = 5000) {
  const get = async (path) => {
    const r = await fetch(base + path);
    if (!r.ok) throw new Error(`${path}: ${r.status}`);
    return r.json();
  };
  const check = Promise.all([get('/api/app-info'), get('/api/updates/check')])
    .then(([info, update]) => safeZVersionOk(info?.edition, update?.currentVersion))
    .catch(() => false);
  const late = new Promise((resolve) => setTimeout(() => resolve(false), wait));
  return Promise.race([check, late]);
}
