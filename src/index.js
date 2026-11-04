// lib/nccam.js: in the page it is the ncCAM dialog; started as a Web Worker
// (from its own source) it is the engine that reads STEP files and makes
// toolpaths.
import { createEngine } from './engine.js';

const BUILD = __BUILD__;

if (typeof document === 'undefined') {
  const handle = createEngine();
  self.onmessage = async ({ data }) => {
    try {
      const result = await handle(data);
      const transfer = result && result.positions ? [result.positions.buffer, result.indices.buffer] : [];
      self.postMessage({ id: data.id, ok: true, result }, transfer);
    } catch (e) {
      self.postMessage({ id: data.id, ok: false, error: e.message || String(e) });
    }
  };
} else {
  const NcCam = (window.NcCam = window.NcCam || {});
  // An update loads this script into a page that still has the old build's
  // engine: its worker runs the old code, so start a new one.
  if (NcCam.build !== BUILD && NcCam.engine) {
    NcCam.engine.then((call) => call.worker?.terminate(), () => {});
    NcCam.engine = null;
  }
  NcCam.build = BUILD;
  NcCam.mount = async (root, host) => {
    const { mountApp } = await import('./ui/app.js');
    try {
      mountApp(root, host, await engineFor(host));
    } catch (e) {
      root.textContent = `ncCAM could not start: ${e.message || e}`;
    }
  };

  // One engine for every time the dialog opens: the 7.6 MB STEP reader
  // loads once.
  const engineFor = (host) => (NcCam.engine ||= startEngine(host));

  async function startEngine(host) {
    const wasm = await fetch(host.file('lib/occt-import-js.wasm')).then((r) => {
      if (!r.ok) throw new Error(`lib/occt-import-js.wasm: ${r.status}`);
      return r.arrayBuffer();
    });
    let worker = null;
    try {
      worker = new Worker(URL.createObjectURL(new Blob([NcCam.source || ''], { type: 'text/javascript' })));
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
      const ok = await Promise.race([call('init', { wasmBinary: wasm }).then(() => true), new Promise((r) => setTimeout(() => r(false), 5000))]);
      if (ok) { call.worker = worker; return call; }
      worker.terminate();
    }
    // Workers blocked: run in the page
    const handle = createEngine();
    await handle({ type: 'init', wasmBinary: wasm });
    return (type, args = {}) => handle({ ...args, type });
  }
}
