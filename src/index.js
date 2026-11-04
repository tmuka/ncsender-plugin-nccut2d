// lib/nccut2d.js: in the page it is the ncCut2D dialog; started as a Web
// Worker (from its own source) it is the engine that plans and makes
// toolpaths.
import { createEngine } from './engine.js';

const BUILD = __BUILD__;

if (typeof document === 'undefined') {
  const handle = createEngine();
  self.onmessage = async ({ data }) => {
    try {
      const result = await handle(data);
      const transfer = result?.part ? [result.part.positions.buffer, result.part.indices.buffer] : [];
      self.postMessage({ id: data.id, ok: true, result }, transfer);
    } catch (e) {
      self.postMessage({ id: data.id, ok: false, error: e.message || String(e) });
    }
  };
} else {
  const NcCut = (window.NcCut2D = window.NcCut2D || {});
  // An update loads this script into a page that still has the old build's
  // engine: its worker runs the old code, so start a new one.
  if (NcCut.build !== BUILD && NcCut.engine) {
    NcCut.engine.then((call) => call.worker?.terminate(), () => {});
    NcCut.engine = null;
  }
  NcCut.build = BUILD;
  NcCut.mount = async (root, host) => {
    const { mountApp } = await import('./ui/app.js');
    try {
      mountApp(root, host, await engineFor(host));
    } catch (e) {
      root.textContent = `ncCut2D could not start: ${e.message || e}`;
    }
  };

  // One engine for every time the dialog opens
  const engineFor = (host) => (NcCut.engine ||= startEngine(host));

  async function startEngine(host) {
    let worker = null;
    try {
      worker = new Worker(URL.createObjectURL(new Blob([NcCut.source || ''], { type: 'text/javascript' })));
    } catch { worker = null; }
    if (worker) {
      let seq = 0;
      const waiting = new Map();
      worker.onmessage = ({ data }) => {
        const w = waiting.get(data.id);
        if (!w) return;
        waiting.delete(data.id);
        if (data.ok) w.resolve(data.result); else w.reject(new Error(data.error));
      };
      const call = (type, args = {}, transfer = []) => new Promise((resolve, reject) => {
        const id = ++seq;
        waiting.set(id, { resolve, reject });
        worker.postMessage({ ...args, id, type }, transfer);
      });
      const ok = await Promise.race([call('init').then(() => true), new Promise((r) => setTimeout(() => r(false), 5000))]);
      if (ok) { call.worker = worker; return call; }
      worker.terminate();
    }
    // Workers blocked: run in the page
    const handle = createEngine();
    await handle({ type: 'init' });
    return (type, args = {}) => handle({ ...args, type });
  }
}
