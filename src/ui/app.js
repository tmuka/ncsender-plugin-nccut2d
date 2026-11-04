// The ncCut2D wizard: Drawing (what to cut), Stock & Zero, Operations,
// Preview & Load. Steps 2-4 are ncCAM's.
import { Color } from 'three';
import * as N from '../core/index.js';
import { Viewer, OP_COLORS, STOCK_COLORS } from './viewer.js';
import * as store from './store.js';
import { readSvg } from './svg.js';
import { loadPdfjs } from './pdfjs.js';

const STEPS = ['Drawing', 'Stock & Zero', 'Operations', 'Preview & Load'];

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clock = (sec) => { const s = Math.max(0, Math.round(sec)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };

const svg = (body, size = 18, extra = '') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${body}</svg>`;
// Chamfer width: default and range, in mm

const ICONS = {
  close: svg('<path d="M6 6l12 12M18 6L6 18"/>'),
  next: svg('<path d="M9 6l6 6-6 6"/>', 16, 'stroke-width="2.4"'),
  part: svg('<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 22V12M21 7l-9 5-9-5"/>', 20),
  upload: svg('<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>', 28),
  info: svg('<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>'),
  warn: svg('<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/>'),
  check: svg('<path d="M5 12l5 5 9-10"/>', 12, 'stroke-width="3.2"'),
  cross: svg('<path d="M6 6l12 12M18 6L6 18"/>', 12, 'stroke-width="3.2"'),
  play: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',
  pause: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',
  load: svg('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>', 16, 'stroke-width="2.4"'),
  face: svg('<path d="M3 9h18M3 15h18"/>'),
  pocket: svg('<rect x="4" y="6" width="16" height="12" rx="2"/>'),
  corners: svg('<path d="M4 10V6a2 2 0 012-2h4M20 14v4a2 2 0 01-2 2h-4"/>'),
  hole: svg('<circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/>'),
  drill: svg('<path d="M12 3v14M8 13l4 8 4-8"/>'),
  step: svg('<path d="M3 18h6v-6h6V6h6"/>'),
  cutout: svg('<rect x="3" y="5" width="18" height="14" rx="2" stroke-dasharray="3 2.5"/>'),
  rough3d: svg('<path d="M3 19h4v-4h3v-4h4v4h3v4h4"/>'),
  finish3d: svg('<path d="M3 18c3 0 4-9 9-9s6 9 9 9"/>'),
  thread: svg('<path d="M8 4h8M8 8l8-2M8 12l8-2M8 16l8-2M8 20h8M8 4v16M16 4v16"/>'),
  chamfer: svg('<path d="M4 20V9l5-5h11v16z"/><path d="M9 4v5H4" stroke-dasharray="2 2"/>'),
  rest3d: svg('<path d="M3 19h4v-4h3v-4h4v4h3v4h4"/><circle cx="12" cy="17" r="1.5"/>'),
};


export function mountApp(root, host, engine) {
  const api = {
    get: async (p) => { const r = await fetch(host.base + p); if (!r.ok) throw new Error(`${p}: ${r.status}`); return r.json(); },
    post: (p, body) => fetch(host.base + p, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }),
  };

  const S = {
    step: 1, maxStep: 1,
    fileName: '', loading: '', error: '',
    up: 'top', analysis: null, part: null,
    // Size: scale in the file's X, Y, Z; lock keeps them together
    scale: null, rot: null, lock: true, fileSize: null, meshKind: null,
    tools: [], numbering: 'slot', safeZ: null, connected: false, units: 'mm',
    limits: {}, travel: null,
    job: null, plan: null, planning: false, result: null, simChecks: null,
    toast: '',
    recent: [], partKey: null,
    // The drawing: as read (raw), at S.scale (a: analyze2d), its decision
    // groups, the shapes selected
    raw: null, a: null, groups: [], sel: new Set(), info: null,
  };
  const viewer = new Viewer();
  // A slot past the magazine is still a change by hand
  const inMagazine = (t) => !!t.toolNumber && (!S.slots || t.toolNumber <= S.slots);
  // Sizes in the user's units (ncSender's Units setting); mm inside
  const n = (v, d) => N.units.num(v, S.units, d);
  const L = (v, d) => N.units.len(v, S.units, d);
  let planSeq = 0;

  // ---------- startup ----------
  (async () => {
    const [settings, tools, fw, state] = await Promise.all([
      api.get('/api/settings').catch(() => ({})),
      api.get('/api/tools').catch(() => []),
      api.get('/api/firmware').catch(() => null),
      api.get('/api/server-state').catch(() => null),
    ]);
    S.units = N.units.unitsFrom(settings?.unitsPreference);
    S.numbering = settings?.tool?.numbering === 'toolId' ? 'toolId' : 'slot';
    S.slots = Math.max(0, Number(settings?.tool?.count) || 0);
    const probe = settings?.tool?.probe ? Number(settings?.tool?.probeToolNumber) || 99 : null;
    const sz = Number(settings?.safeZHeight);
    S.safeZ = Number.isFinite(sz) ? sz : null;
    S.tools = N.normalizeTools(Array.isArray(tools) ? tools : tools?.tools);
    S.numbering = N.makeNumbering(S.numbering, S.tools, S.slots, probe);
    const fs = fw?.settings || {};
    const val = (k) => { const v = parseFloat(fs[k]?.value); return Number.isFinite(v) && v > 0 ? v : null; };
    S.limits = { maxRpm: val('30') || undefined, minRpm: val('31') || undefined, maxFeed: Math.min(val('110') || Infinity, val('111') || Infinity, Infinity) };
    if (!Number.isFinite(S.limits.maxFeed)) delete S.limits.maxFeed;
    S.maxRapid = Math.min(val('110') || 5000, val('111') || 5000);
    if (val('130') && val('131')) S.travel = { x: val('130'), y: val('131'), z: val('132') };
    S.connected = !!state?.machineState?.connected;
    render();
    S.recent = await store.recent();
    if (S.recent.length && !S.a && !S.loading) openRecent(S.recent[0].key);
  })();

  // ---------- engine calls ----------
  // last: the saved drawing to open again ({ name, bytes, job, scale })
  // Each open supersedes the one before: an older one stops at its next step
  let loadSeq = 0;
  const DRAWING = /\.(dxf|svg|pdf|ai)$/i;
  async function openFile(file, last = null) {
    if (!file && !last) return;
    const seq = ++loadSeq, gone = () => seq !== loadSeq;
    const name = last ? last.name : file.name;
    if (!DRAWING.test(name)) { S.error = /\.(step|stp|stl|3mf)$/i.test(name) ? 'That’s a 3D part: open it in ncCAM. ncCut2D reads drawings: DXF, SVG, PDF or AI.' : 'Open a DXF, SVG, PDF or AI drawing.'; render(); return; }
    S.fileName = name; S.loading = `Reading ${name}…`; S.error = ''; S.plan = null; S.result = null; S.a = null; S.part = null; S.sel = new Set();
    S.step = 1; S.maxStep = 1;
    render();
    try {
      const bytes = last ? last.bytes : await file.arrayBuffer();
      if (gone()) return;
      // The same file opened again: its settings from last time
      const key = store.partKey(name, bytes);
      if (!last && S.recent.some((r) => r.key === key)) {
        const kept = await store.load(`part:${key}`);
        if (gone()) return;
        if (kept?.bytes && sameBytes(kept.bytes, bytes)) last = { ...kept, bytes };
      }
      const ext = name.split('.').pop().toLowerCase();
      let r;
      if (ext === 'dxf') r = N.readDxf(new TextDecoder().decode(bytes));
      else if (ext === 'svg') r = readSvg(new TextDecoder().decode(bytes));
      else r = await N.readPdf(new Uint8Array(bytes.slice(0)), await loadPdfjs(host));
      if (gone()) return;
      // Loose lines that meet become closed shapes
      const joined = N.joinPaths(r.shapes);
      if (!joined.shapes.length) throw new Error('No lines or shapes were found in this drawing. Text must be converted to curves (outlines) first.');
      const skipped = Object.entries(r.skipped || {}).filter(([, v]) => v > 0).map(([k, v]) => `${v} ${k}`);
      S.info = { units: r.units, notes: skipped.length ? `Not drawn: ${skipped.join(', ')} (convert text and hatches to curves to cut them).` : '' };
      S.raw = joined.shapes;
      S.bytes = bytes.slice(0); S.partKey = key;
      S.scale = last?.scale || 1;
      await sized(last?.job);
      if (gone()) return;
      remember();
    } catch (e) {
      if (gone()) return;
      S.error = e.message || String(e);
      S.fileName = ''; S.a = null;
    }
    S.loading = '';
    render();
  }

  // The drawing at S.scale: analysed here (to draw and choose) and in the
  // engine (to plan). keep: a job to keep (reopened, or resized)
  async function sized(keep) {
    const shapes = S.scale === 1 ? S.raw : N.transformShapes(S.raw, [S.scale, 0, 0, S.scale, 0, 0]);
    const before = S.groups;
    S.a = N.analyze2d(shapes);
    S.groups = N.groups2d(S.a);
    // Group keys carry sizes: after a resize, each group's choice follows its
    // shapes to their new key
    if (keep?.groups && before?.length) {
      const moved = {};
      for (const g of S.groups) {
        const old = before.find((o) => o.idx.includes(g.idx[0]));
        if (old && keep.groups[old.key]) moved[g.key] = keep.groups[old.key];
      }
      keep = { ...keep, groups: moved };
    }
    await engine('load', { shapes });
    const fresh = N.defaultJob(S.a, null);
    S.job = keep ? { ...fresh, ...keep, stock: { ...fresh.stock, ...keep.stock, ...(keep.stock?.fit !== false ? { width: fresh.stock.width, depth: fresh.stock.depth } : {}) }, groups: keep.groups || {}, shapes: keep.shapes || {} } : fresh;
    // Shapes are numbered as read: a saved per-shape choice past the end is stale
    for (const i of Object.keys(S.job.shapes)) if (+i >= S.a.shapes.length) delete S.job.shapes[i];
    S.sel = new Set([...S.sel].filter((i) => i < S.a.shapes.length));
    await replan();
  }

  let sizing = Promise.resolve();
  function rescale(scale) {
    sizing = sizing.then(async () => {
      S.loading = 'Resizing the drawing…'; render();
      try { S.scale = scale; S.result = null; S.maxStep = Math.min(S.maxStep, 3); await sized(S.job); remember(); } catch (e) { S.error = e.message || String(e); }
      S.loading = '';
      render();
    });
    return sizing;
  }

  async function replan(paths = false) {
    // Nothing is planned until the stock's thickness is given
    if (!S.a || !(S.job?.stock.thickness > 0)) { S.plan = null; S.part = null; render(); return; }
    const seq = ++planSeq;
    S.planning = true;
    if (paths) S.result = null;
    render();
    const started = performance.now();
    try {
      const r = await engine('plan', {
        tools: S.tools, job: { ...S.job, units: S.units }, limits: S.limits, paths,
        gcodeOptions: { name: S.fileName, numbering: S.numbering, safeZHeightMm: S.safeZ },
        timing: { maxRapid: S.maxRapid || 5000 },
      });
      if (seq !== planSeq) return;
      // How long this took here: a small computer gets a note when it's slow
      S.slow = slowNote(performance.now() - started, paths) ?? (paths ? null : S.slow);
      S.plan = r.plan;
      S.part = r.part;
      remember();
      if (paths) { S.result = r; S.simChecks = null; }
    } catch (e) {
      if (seq === planSeq) S.error = e.message || String(e);
    }
    if (seq === planSeq) { S.planning = false; render(); }
  }

  // ncCAM works in the browser that shows it. On a small computer (a
  // Raspberry Pi running ncSender) planning can take a while; ncSender's
  // own page opened from a laptop's browser plans there instead.
  const SLOW = { plan: 6000, paths: 15000, tip: 5000 };
  const smallHere = () => {
    const small = /aarch64|arm64|armv\d|raspberry/i.test(navigator.userAgent || '') || (navigator.hardwareConcurrency || 8) <= 4;
    const here = /^(localhost|127\.|\[?::1)/.test(location.hostname || 'localhost') || !/^https?:$/.test(location.protocol);
    return small && here;
  };
  function slowNote(ms, paths) {
    if (!smallHere() || ms < (paths ? SLOW.paths : SLOW.plan)) return null;
    return `${paths ? 'Making the toolpaths' : 'Planning'} took ${Math.round(ms / 1000)} s on this small computer. ncCut2D runs in the browser that shows it: open ncSender in a browser on a laptop or desktop (this machine's address, port 8090) and it works there, usually several times faster. Programs still save to this machine.`;
  }

  // Busy: a spinner, the seconds so far (quietly), and on a small computer,
  // after a few seconds, where it would be faster
  function busyBox(label, style = '') {
    return `<div class="ncc-busy" ${style ? `style="${style}"` : ''}><div class="ncc-busy-in"><div class="ncc-busy-row"><span class="ncc-spin"></span>${esc(label)}<span class="ncc-elapsed" data-elapsed></span></div>
      <div class="ncc-busy-tip" data-slowtip hidden>Slow for your parts? Open ncSender in a browser on a laptop or desktop (this machine's address, port 8090): ncCut2D works there, usually several times faster.</div></div></div>`;
  }
  let busyStart = null;
  const ticker = setInterval(() => {
    // Closed: let this instance go
    if (!root.isConnected) { clearInterval(ticker); return; }
    const busy = S.loading || S.planning || (S.result && !S.simChecks && S.step === 4);
    if (!busy) { busyStart = null; return; }
    busyStart ??= performance.now();
    const ms = performance.now() - busyStart, sec = Math.floor(ms / 1000);
    root.querySelectorAll('[data-elapsed]').forEach((e) => { e.textContent = sec >= 2 ? ` ${sec} s` : ''; });
    if (ms >= SLOW.tip && smallHere()) root.querySelectorAll('[data-slowtip]').forEach((e) => { e.hidden = false; });
  }, 500);

  // The part and its settings for next time, first in the recent parts
  let saveTimer = null;
  function remember() {
    if (!S.bytes || !S.job) return;
    clearTimeout(saveTimer);
    const record = { name: S.fileName, bytes: S.bytes, job: S.job, scale: S.scale, savedAt: Date.now() };
    const key = S.partKey, first = S.recent[0]?.key !== key;
    saveTimer = setTimeout(async () => {
      S.recent = await store.keep(record, S.recent, key);
      if (first) render();
    }, 400);
  }
  async function openRecent(key) {
    const kept = await store.load(`part:${key}`);
    if (kept?.bytes) return openFile(null, kept);
    S.recent = await store.forget(key, S.recent);
    S.error = 'That drawing is no longer kept in this browser.';
    render();
  }
  function sameBytes(a, b) {
    if (a.byteLength !== b.byteLength) return false;
    const x = new Uint8Array(a), y = new Uint8Array(b);
    for (let i = 0; i < x.length; i++) if (x[i] !== y[i]) return false;
    return true;
  }
  // Recent parts other than the one open
  function recentList() {
    const open = S.bytes ? S.partKey : null;
    return S.recent.filter((r) => r.key !== open);
  }
  function when(ms) {
    const d = (Date.now() - ms) / 86400000;
    if (d < 1) return 'today';
    if (d < 2) return 'yesterday';
    if (d < 30) return `${Math.floor(d)} days ago`;
    return new Date(ms).toLocaleDateString();
  }

  // ---------- rendering ----------
  function render() {
    if (!root.isConnected) return;
    const scrolled = root.querySelector('[data-keep-scroll]');
    const keepTop = scrolled ? scrolled.scrollTop : 0;
    const step = S.step;
    const lede = [
      S.a ? 'Give the stock’s thickness, then choose how each kind of shape is cut and how deep.' : 'Drop a drawing. ncCut2D groups alike shapes so you choose each kind once.',
      'Pick the material. ncCAM sets the speeds, feeds and depth of each pass.',
      'Tools are picked from your Tool Library. Change any of them, or just continue.',
      'Watch the cut play through. When it looks right, load it.',
    ][step - 1];
    const title = [S.a ? 'What to cut' : 'Open your drawing', 'What are you cutting it from?', 'Here’s the plan', S.simChecks && !S.simChecks.ok ? 'Check the warnings' : 'Ready to cut'][step - 1];
    root.innerHTML = `
      <nav class="ncc-rail" aria-label="Steps">
        <div class="ncc-rail-head"><div class="ncc-eyebrow">Plugin</div><div class="ncc-rail-title">ncCut2D<span class="ncc-beta">Beta</span></div><div class="ncc-rail-sub">DXF, SVG, PDF or AI to G-code</div></div>
        <div class="ncc-steps">${STEPS.map((name, i) => {
          const n = i + 1, cls = n === step ? 'on' : n < S.maxStep || (n < step) ? 'done' : '';
          return `<button class="ncc-step ${cls}" type="button" data-go="${n}" ${n <= S.maxStep ? '' : 'disabled'}><span class="ncc-num">${cls === 'done' ? '✓' : n}</span>${esc(name)}</button>`;
        }).join('')}</div>
        <button class="ncc-close" type="button" data-act="close">${ICONS.close}Close</button>
      </nav>
      <section class="ncc-main">
        <div class="ncc-top">
          <div><h1>${esc(title)}</h1><p class="ncc-lede">${esc(lede)}</p></div>
          <div class="ncc-conn"><span class="ncc-dot ${S.connected ? 'ok' : ''}"></span>${S.connected ? 'Connected' : 'Not connected'}</div>
        </div>
        <div class="ncc-body ${step === 3 ? 'fixed' : ''}">${[stepDrawing, stepStock, stepOps, stepPreview][step - 1]()}</div>
        <div class="ncc-foot">${footer()}</div>
      </section>
      ${S.toast ? `<div class="ncc-toast" role="status">${esc(S.toast)}</div>` : ''}`;
    const again = root.querySelector('[data-keep-scroll]');
    if (again) again.scrollTop = keepTop;
    const slot = root.querySelector('[data-viewer]');
    if (slot) {
      slot.replaceWith(viewer.el);
      const busy = S.loading || (step === 4 && !S.result) ? busyBox(S.loading || 'Making toolpaths…') : '';
      viewer.el.querySelectorAll('.ncc-busy, .ncc-overlay').forEach((e) => e.remove());
      viewer.el.insertAdjacentHTML('beforeend', (step === 4 ? previewOverlay() : '') + busy);
      viewer.fit();
      if (step === 2) showZeroView();
      if (step === 3) showOpsView();
      if (step === 4 && S.result) showPreview();
    }
  }

  function footer() {
    const back = `<button class="ncc-back" type="button" data-go="${S.step - 1}" ${S.step > 1 ? '' : 'disabled'}>Back</button>`;
    if (S.step === 1) {
      const why = !S.a ? '' : !(S.job?.stock.thickness > 0) ? 'Give the stock’s thickness first.' : S.plan && !S.plan.ops.length ? 'Nothing is set to be cut.' : '';
      return `${back}${why ? `<span class="ncc-foot-note">${why}</span>` : ''}<button class="ncc-next" type="button" data-go="2" ${S.plan && S.plan.ops.length && !S.loading && !S.planning ? '' : 'disabled'}>Next: Stock ${ICONS.next}</button>`;
    }
    if (S.step === 2) return `${back}<button class="ncc-next" type="button" data-go="3">Next: Operations ${ICONS.next}</button>`;
    if (S.step === 3) {
      const any = S.plan && S.plan.ops.some((o) => o.enabled);
      return `${back}<button class="ncc-next" type="button" data-go="4" ${any && !S.planning ? '' : 'disabled'}>Make toolpaths ${ICONS.next}</button>`;
    }
    const bad = S.simChecks && !S.simChecks.ok;
    return `${back}${bad ? '<span class="ncc-foot-note ncc-bad">Fix the problems above before loading.</span>' : ''}<button class="ncc-next" type="button" data-act="load" ${S.result && S.simChecks && !bad ? '' : 'disabled'}>${ICONS.load}Load into ncSender</button>`;
  }

  // ---------- step 1 ----------
  // The drawing flat, each shape in its cut's colour; the decisions beside it
  const CUT_COLORS = { outside: OP_COLORS.cutout, inside: OP_COLORS.inside, pocket: OP_COLORS.pocket, online: OP_COLORS.online, off: '#8a94a3' };
  const ACCEPT = '.dxf,.svg,.pdf,.ai,.DXF,.SVG,.PDF,.AI';
  function stepDrawing() {
    if (!S.a && !S.loading) {
      return `<div class="ncc-drop" data-drop>
        <div class="ncc-drop-icon">${ICONS.upload}</div>
        <h2>Drop a DXF, SVG, PDF or AI file here</h2>
        <p>A drawing to size, from Fusion, Inkscape, Illustrator, LibreCAD or QCAD. Each shape gets a cut: <strong>Outer (part)</strong>, <strong>Inner (perimeter)</strong>, <strong>Inner (clearing)</strong> or <strong>On the line</strong>.</p>
        <label class="ncc-btn" style="display: inline-flex; align-items: center; gap: 8px">Open file<input type="file" accept="${ACCEPT}" data-file hidden></label>
        ${S.error ? `<div class="ncc-hint bad" style="max-width: 520px">${ICONS.warn}<span>${esc(S.error)}</span></div>` : ''}
        ${recentList().length ? `<div class="ncc-recent"><div class="ncc-recent-h">Recent drawings <span>kept in this browser</span></div>
          ${recentList().map((r) => `<div class="ncc-recent-row"><button class="ncc-recent-open" type="button" data-recent-open="${esc(r.key)}"><span class="ncc-file-name">${esc(r.name)}</span><span class="ncc-file-sub">${when(r.savedAt)}</span></button><button class="ncc-recent-x" type="button" data-forget="${esc(r.key)}" aria-label="Forget ${esc(r.name)}" title="Forget">${ICONS.close}</button></div>`).join('')}</div>` : ''}
        ${S.tools.length ? '' : `<div class="ncc-hint" style="max-width: 520px">${ICONS.info}<span>Your Tool Library is empty. Add your end mills in Settings → Tool Library so ncCut2D can pick them.</span></div>`}
      </div>`;
    }
    const a = S.a;
    return `
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div class="ncc-file">
          <div style="display: flex; align-items: center; gap: 12px; min-width: 0">
            <div class="ncc-drop-icon" style="width: 38px; height: 38px; border-radius: 10px">${ICONS.part}</div>
            <div style="min-width: 0"><div class="ncc-file-name">${esc(S.fileName)}</div>
            <div class="ncc-file-sub ncc-mono">${a ? `${n(a.size[0])} × ${L(a.size[1])} · ${a.shapes.length} shape${a.shapes.length === 1 ? '' : 's'}` : '&nbsp;'}</div></div>
          </div>
          <div style="display: flex; gap: 8px; align-items: center">
          ${recentList().length ? `<select class="ncc-select ncc-recent-pick" data-recent aria-label="Recent drawings" ${S.loading ? 'disabled' : ''}><option value="">Recent drawings…</option>${recentList().map((r) => `<option value="${esc(r.key)}">${esc(r.name)} · ${when(r.savedAt)}</option>`).join('')}</select>` : ''}
          <label class="ncc-btn muted" style="white-space: nowrap">Open another file<input type="file" accept="${ACCEPT}" data-file hidden></label>
          </div>
        </div>
        <div class="ncc-drawing" data-drawing>${a ? drawingSvg() : busyBox(S.loading || 'Reading…', 'position: static; flex: 1')}</div>
        <div class="ncc-row-sub" style="margin: 0">Click a shape to choose its cut on its own; shift-click for more. ${legend()}</div>
      </div>
      <div class="ncc-col ncc-side" data-keep-scroll="cuts">
        ${a ? `${sizeCard()}${thicknessCard()}${selectionCard()}${decisionsCard()}${planHints(true)}` : ''}
      </div>`;
  }

  const legend = () => ['outside', 'inside', 'pocket', 'online', 'off'].map((k) => `<span style="white-space: nowrap"><span class="ncc-swatch" style="background: ${CUT_COLORS[k]}"></span> ${esc(N.CUT_NAMES[k])}</span>`).join(' ');

  // Every shape, its cut's colour; pockets filled, off dashed, selected bold
  function drawingSvg() {
    const a = S.a, [w, h] = a.size, pad = Math.max(w, h) * 0.03 + 1;
    const gOf = N.groupOf(S.groups);
    const order = a.shapes.map((_, i) => i).sort((i, j) => (a.areas[j] || 0) - (a.areas[i] || 0));
    const stroke = Math.max(w, h) / 500;
    const paths = order.map((i) => {
      const s = a.shapes[i], c = N.choiceFor(a, S.job, i, gOf);
      const d = s.pts.map((p, k) => `${k ? 'L' : 'M'}${p[0].toFixed(3)} ${(h - p[1]).toFixed(3)}`).join('') + (a.loops[i] ? 'Z' : '');
      const col = CUT_COLORS[c.cut], sel = S.sel.has(i);
      const fill = c.cut === 'pocket' && a.loops[i] ? `fill="${col}" fill-opacity="0.22"` : a.loops[i] ? 'fill="transparent"' : 'fill="none"';
      return `<path d="${d}" data-shape="${i}" stroke="${sel ? 'var(--color-accent)' : col}" stroke-width="${(sel ? 3 : 1.4) * stroke}" ${c.cut === 'off' ? `stroke-dasharray="${4 * stroke} ${3 * stroke}"` : ''} ${fill} vector-effect="non-scaling-stroke" style="cursor: pointer"><title>${esc(shapeName(i))} · ${esc(N.CUT_NAMES[c.cut])}${depthText(c)}</title></path>`;
    }).join('');
    return `<svg viewBox="${-pad} ${-pad} ${w + 2 * pad} ${h + 2 * pad}" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; display: block">${paths}</svg>`;
  }

  const depthText = (c) => (c.cut === 'off' ? '' : c.depth === null || c.depth === undefined ? ' · through' : ` · ${L(c.depth)} deep`);

  function shapeName(i) {
    const a = S.a, c = a.circles[i];
    if (!a.loops[i]) return 'Line';
    if (c) return `Ø${L(2 * c.r)} circle`;
    const b = N.bounds([a.shapes[i]]);
    return `${n(b.w)} × ${L(b.h)} shape`;
  }

  function groupName(g) {
    const k = g.idx.length, many = k > 1 ? `${k} × ` : '';
    if (g.kind === 'outline') return k > 1 ? `Outline (${k} shapes joined)` : 'Outline';
    if (g.kind === 'line') return k > 1 ? `${k} lines` : 'A line';
    if (g.kind === 'counterbore') {
      const { sizes, step, last } = g.label;
      return `${many}Ø${L(sizes[step])} ${last ? 'hole through the' : step ? 'inner step of the' : 'outer step of the'} counterbore${k > 1 ? 's' : ''} (${sizes.map((d) => n(d)).join(' / ')})`;
    }
    if (g.kind === 'circle') return `${many}Ø${L(g.label.d)} circle${k > 1 ? 's' : ''}`;
    return `${many}${n(g.label.w)} × ${L(g.label.h)} ${g.kind === 'rect' ? 'rectangle' : 'shape'}${k > 1 ? 's' : ''}`;
  }

  // The cuts a shape can take: an open line only on the line
  const cutsFor = (closed) => (closed ? ['outside', 'inside', 'pocket', 'online', 'off'] : ['online', 'off']);
  // A cut and depth chooser: data-k says what it sets (group key or 'sel')
  function chooser(k, c, closed) {
    const opts = cutsFor(closed).map((x) => `<option value="${x}" ${c.cut === x ? 'selected' : ''}>${esc(N.CUT_NAMES[x])}</option>`).join('');
    const through = c.depth === null || c.depth === undefined;
    const depthIn = c.cut === 'off' ? '' : `<label class="ncc-chk"><input type="checkbox" data-through="${esc(k)}" ${through ? 'checked' : ''}> Through</label>
      ${through ? '' : `<input class="ncc-input ncc-mono ncc-depth" inputmode="decimal" aria-label="Depth (${S.units})" data-depth="${esc(k)}" value="${S.units === 'in' ? Math.round(c.depth / N.units.INCH * 1000) / 1000 : Math.round(c.depth * 100) / 100}"><span class="ncc-unit">${S.units} deep</span>`}`;
    return `<div class="ncc-choose"><select class="ncc-select" data-cut="${esc(k)}" aria-label="Cut">${opts}</select>${depthIn}</div>`;
  }

  function decisionsCard() {
    const gOf = N.groupOf(S.groups);
    const rows = S.groups.map((g) => {
      const c = N.choiceFor(S.a, S.job, g.idx[0], gOf);
      const own = g.idx.filter((i) => S.job.shapes[i]).length;
      return `<div class="ncc-decide" data-hover="${esc(g.key)}">
        <div class="ncc-decide-name"><span class="ncc-swatch" style="background: ${CUT_COLORS[c.cut]}"></span>${esc(groupName(g))}${own ? `<small> · ${own} set on ${own > 1 ? 'their' : 'its'} own</small>` : ''}</div>
        ${chooser(g.key, c, g.kind !== 'line')}
      </div>`;
    }).join('');
    return `<div class="ncc-card"><div class="ncc-label">What to cut</div>${rows}</div>`;
  }

  function selectionCard() {
    if (!S.sel.size) return '';
    const idx = [...S.sel], gOf = N.groupOf(S.groups);
    const c = N.choiceFor(S.a, S.job, idx[0], gOf);
    const closed = idx.every((i) => S.a.loops[i]);
    const own = idx.some((i) => S.job.shapes[i]);
    return `<div class="ncc-card ncc-sel-card">
        <div class="ncc-row"><div class="ncc-row-title">${idx.length > 1 ? `${idx.length} shapes selected` : esc(shapeName(idx[0]))}</div><button type="button" class="ncc-link" data-act="unselect">Clear</button></div>
        ${chooser('sel', c, closed)}
        ${own ? '<button type="button" class="ncc-link" data-act="sel-reset">Back to its group’s choice</button>' : '<div class="ncc-row-sub">A change here applies to the selected shapes only.</div>'}
      </div>`;
  }

  // The stock's thickness: no guess; nothing is planned until it's given
  function thicknessCard() {
    const t = S.job.stock.thickness;
    const v = t ? (S.units === 'in' ? Math.round(t / N.units.INCH * 1000) / 1000 : Math.round(t * 100) / 100) : '';
    return `<div class="ncc-card ${t ? '' : 'ncc-need'}">
        <div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">Stock thickness</div><div class="ncc-row-sub">${t ? '“Through” cuts go this deep and a little into the spoilboard.' : 'How thick is the board? Measure it: every “through” cut depends on it.'}</div></div>
        <div style="display: flex; align-items: center; gap: 6px"><input class="ncc-input ncc-mono ncc-depth" inputmode="decimal" aria-label="Stock thickness (${S.units})" data-thick value="${v}" placeholder="?"><span class="ncc-unit">${S.units}</span></div></div>
      </div>`;
  }

  // The drawing's size: a scale, or inches for a file drawn in them
  function sizeCard() {
    const a = S.a, raw = N.bounds(S.raw);
    const unitless = S.info?.units == null || S.info?.units === 'unitless';
    const pct = Math.round(S.scale * 10000) / 100;
    return `<div class="ncc-card">
        <div class="ncc-fields">${['X', 'Y'].map((ax, k) => `<div class="ncc-field"><label for="ncc-size${k}">${ax} (${S.units})</label><input id="ncc-size${k}" class="ncc-input ncc-mono" inputmode="decimal" data-size="${k}" value="${S.units === 'in' ? Math.round(a.size[k] / N.units.INCH * 1000) / 1000 : Math.round(a.size[k] * 100) / 100}"></div>`).join('')}</div>
        <div class="ncc-row-sub">${pct === 100 ? 'As drawn' : `Scaled to ${pct}%`}${S.info?.units ? ` · the file says ${esc(S.info.units)}` : ''}.${pct !== 100 ? ' <button type="button" class="ncc-link" data-scale="reset">Back to the drawing’s size</button>' : ''}</div>
        ${unitless && pct === 100 && Math.max(raw.w, raw.h) < 50 ? `<div class="ncc-hint">${ICONS.info}<span>Only ${n(Math.max(raw.w, raw.h))} across and the file has no unit: it may be in inches. <button type="button" class="ncc-link" data-scale="inch">Make it inches (× 25.4)</button></span></div>` : ''}
        ${S.info?.notes ? `<div class="ncc-hint">${ICONS.info}<span>${esc(S.info.notes)}</span></div>` : ''}
      </div>`;
  }

  function planHints() {
    const slow = S.slow ? `<div class="ncc-hint">${ICONS.info}<span>${esc(S.slow)}</span></div>` : '';
    if (!S.plan) return slow;
    return slow + S.plan.warnings.map((x) => `<div class="ncc-hint ${x.kind === 'notool' ? 'bad' : ''}">${x.kind === 'notool' ? ICONS.warn : ICONS.info}<span>${esc(x.text)}</span></div>`).join('');
  }

  let shownPart = null;

  // ---------- step 2 ----------
  function stepStock() {
    const j = S.job, st = S.plan?.stock || N.stockBox(S.a, j);
    const mats = Object.entries(N.MATERIALS).map(([k, m]) => `<button class="ncc-pick ncc-mat ${j.material === k ? 'sel' : ''}" type="button" data-material="${k}"><span class="ncc-mat-swatch" style="background: ${STOCK_COLORS[k]}"></span>${esc(m.name)}<small>${esc(m.note)}</small></button>`).join('');
    const field = (key, label, value) => `<div class="ncc-field"><label for="ncc-${key}">${label}</label><input id="ncc-${key}" class="ncc-input ncc-mono" inputmode="decimal" data-stock="${key}" value="${S.units === 'in' ? Math.round(value / N.units.INCH * 1000) / 1000 : Math.round(value * 100) / 100}" ${j.stock.fit && key !== 'thickness' ? 'disabled' : ''}></div>`;
    // Two even columns: what the stock is on the left, where zero is on the right
    return `
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-mat-card"><div class="ncc-label">Material</div><div class="ncc-picks ncc-mats">${mats}</div></div>
        <div class="ncc-card">
          ${toggleRow('fit', 'Size the stock to the drawing', `Adds ${L(j.stock.margin)} on every side`, j.stock.fit)}
          <div class="ncc-fields">${field('width', `Width X (${S.units})`, st.width)}${field('depth', `Depth Y (${S.units})`, st.depth)}${field('thickness', `Thickness Z (${S.units})`, st.thickness)}</div>
        </div>
        <div class="ncc-card">
          ${toggleRow('tabs', 'Leave tabs to hold the part', j.tabs.enabled ? `${n(tabSize().height)} \u00d7 ${L(tabSize().length)}, so the part stays put until you cut it free` : 'The part comes loose at the end', j.tabs.enabled)}
          ${j.tabs.enabled ? `<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">Number of tabs</span><div class="ncc-stepper"><button type="button" data-tabs="-1" aria-label="Fewer tabs" ${j.tabs.count <= 1 ? 'disabled' : ''}>\u2212</button><span class="ncc-mono">${j.tabs.count}</span><button type="button" data-tabs="1" aria-label="More tabs" ${j.tabs.count >= 12 ? 'disabled' : ''}>+</button></div></div>
          ${tabStepper('height', 'Tab thickness', 'Thinner tabs', 'Thicker tabs')}
          ${tabStepper('length', 'Tab length', 'Shorter tabs', 'Longer tabs')}` : ''}
        </div>
      </div>
      <div class="ncc-col ncc-half">
        <div class="ncc-card ncc-zero-card"><div class="ncc-label">Where is zero?</div>${zeroPicker(st)}
          <div style="font-size: 14px">X Y zero: <strong>${esc(zeroName(j.zero.xy))}</strong> of the stock</div>
          <div class="ncc-seg" role="group" aria-label="Z zero">
            <button type="button" class="${j.zero.z === 'top' ? 'sel' : ''}" data-z="top">Z0 on top of stock</button>
            <button type="button" class="${j.zero.z === 'bed' ? 'sel' : ''}" data-z="bed">Z0 on the bed</button>
          </div>
        </div>
      </div>`;
  }

  const toggleRow = (key, title, sub, on) => `<div class="ncc-row"><div class="ncc-row-text"><div class="ncc-row-title">${esc(title)}</div><div class="ncc-row-sub">${esc(sub)}</div></div><button class="ncc-toggle" type="button" role="switch" aria-checked="${on}" aria-label="${esc(title)}" data-toggle="${key}"></button></div>`;

  function zeroName(xy) {
    return { 'back-left': 'back left corner', 'back-center': 'back edge, middle', 'back-right': 'back right corner', 'left-center': 'left edge, middle', center: 'center', 'right-center': 'right edge, middle', 'front-left': 'front left corner', 'front-center': 'front edge, middle', 'front-right': 'front right corner' }[xy];
  }

  // Tab size: the job's, or the material's defaults (older saved jobs)
  const tabSize = () => ({ ...N.tabDefaults(S.job.material), ...Object.fromEntries(['height', 'length'].filter((k) => S.job.tabs[k] != null).map((k) => [k, S.job.tabs[k]])) });
  // Steps of 0.5 mm, or 0.02 in on a 0.01 in grid
  const tab = () => (S.units === 'in' ? { min: 0.508, max: 10.16, step: 0.508, grid: 0.254 } : { min: 0.5, max: 10, step: 0.5, grid: 0.1 });
  function tabStepper(key, title, less, more) {
    const v = tabSize()[key];
    return `<div class="ncc-row"><span class="ncc-row-title" style="font-weight: 500">${title}</span><div class="ncc-stepper"><button type="button" data-tabsize="${key}" data-by="-1" aria-label="${less}" ${v <= tab().min + 1e-6 ? 'disabled' : ''}>\u2212</button><span class="ncc-mono">${L(v, S.units === 'in' ? 2 : 1)}</span><button type="button" data-tabsize="${key}" data-by="1" aria-label="${more}" ${v >= tab().max - 1e-6 ? 'disabled' : ''}>+</button></div></div>`;
  }

  // The zero picker is the 3D view (showZeroView); this is its slot
  function zeroPicker(st) {
    return `<div class="ncc-zero"><div data-viewer></div></div>
      <div class="ncc-row-sub ncc-mono" style="text-align: center; margin: 0">${n(st.width)} \u00d7 ${n(st.depth)} \u00d7 ${L(st.thickness)} stock \u00b7 tap a point for zero, an arrow to turn the part</div>`;
  }

  let shownZero = null;
  function showZeroView() {
    const st = S.plan?.stock || N.stockBox(S.a, S.job);
    const points = N.ZERO_POINTS.map((key) => ({ key, ...N.zeroPoint(st, { xy: key, z: 'top' }) }));
    const accent = getComputedStyle(root).getPropertyValue('--color-accent').trim() || '#4c6ef5';
    // Same stock: keep the camera where the operator turned it
    const key = `${S.part?.positions?.length}|${st.width}|${st.depth}|${st.thickness}`;
    viewer.keepCamera = shownZero === key;
    viewer.showZero({ stock: st, part: S.part, points, selected: S.job.zero.xy, zFace: S.job.zero.z, color: STOCK_COLORS[S.job.material], accent });
    shownZero = key;
    shownPart = null; shownResult = null;
    viewer.onPick = null;
    viewer.onMarker = (k) => { if (k !== S.job.zero.xy) { S.job.zero.xy = k; changed(); } };
    viewer.onAxis = null;
  }

  // ---------- step 3 ----------
  function stepOps() {
    const p = S.plan;
    if (!p) return busyBox('Planning\u2026', 'position: static; flex: 1');
    const rows = p.ops.map((o) => {
      const choices = toolChoices(o);
      return `<div class="ncc-op ${o.enabled ? '' : 'off'} ${S.focusOp === o.id ? 'focus' : ''}" data-focus="${o.id}">
        <div class="ncc-op-icon" style="background: color-mix(in srgb, ${OP_COLORS[o.kind]} 16%, transparent); color: ${OP_COLORS[o.kind]}">${ICONS[o.kind] || ICONS.pocket}</div>
        <div class="ncc-op-text"><div class="ncc-op-title">${esc(o.label)}</div><div class="ncc-op-sub ncc-mono">${esc(o.detail)}</div></div>
        <select class="ncc-select" data-tool="${o.id}" aria-label="Tool for ${esc(o.label)}">${choices.map((t) => `<option value="${t.id}" ${t.id === o.tool.id ? 'selected' : ''}>T${N.toolNumber(t, S.numbering)} \u00b7 ${esc(t.name)}</option>`).join('')}</select>
        <button class="ncc-toggle" type="button" role="switch" aria-checked="${o.enabled}" aria-label="${esc(o.label)}" data-op="${o.id}"></button>
      </div>`;
    }).join('');
    const used = N.toolsUsed(p);
    // Speeds of the tool that does most of the cutting
    const count = new Map();
    for (const o of p.ops) if (o.enabled && o.kind !== 'face') count.set(o.tool.id, (count.get(o.tool.id) || 0) + 1);
    const main = [...count].sort((a, b) => b[1] - a[1])[0]?.[0];
    const mainOp = p.ops.find((o) => o.enabled && o.tool.id === main) || p.ops.find((o) => o.enabled);
    const f = mainOp?.feeds;
    const pair = `<div class="ncc-pair">
          <div class="ncc-card"><div class="ncc-label">Finish</div>
            <div class="ncc-seg" role="group" aria-label="Finish">${Object.entries(N.FINISHES).map(([k, v]) => `<button type="button" class="${S.job.finish === k ? 'sel' : ''}" data-finish="${k}">${v.name}</button>`).join('')}</div>
            <div class="ncc-row-sub">${{ fast: 'Bigger steps, no finishing pass.', balanced: `Leaves ${L(0.2, S.units === 'in' ? 3 : 1)} on the walls, then a clean finishing pass.`, smooth: 'Lighter steps and a finishing pass, for the best walls.' }[S.job.finish]}</div>
            ${f ? `<div class="ncc-mono ncc-row-sub" style="line-height: 1.6">${esc(mainOp.tool.name)}<br>${esc(N.MATERIALS[S.job.material].name)} \u00b7 ${f.rpm.toLocaleString()} RPM<br>${S.units === 'in' ? `${n(f.feed, 1)} in/min` : `${f.feed.toLocaleString()} mm/min`} \u00b7 ${L(f.stepdown, S.units === 'in' ? 3 : 2)} per pass</div>` : ''}
          </div>
          <div class="ncc-card"><div class="ncc-label">Tools for this job</div>
            ${used.map((t) => `<div class="ncc-row"><span style="min-width: 0"><span class="ncc-mono" style="color: var(--color-accent)">T${N.toolNumber(t, S.numbering)}</span> ${esc(t.name)}</span><span class="ncc-slot ${inMagazine(t) ? '' : 'hand'}">${inMagazine(t) ? `Slot ${t.toolNumber}` : 'By hand'}</span></div>`).join('') || '<div class="ncc-row-sub">No operations switched on.</div>'}
            ${used.some((t) => !t.toolNumber) ? `<div class="ncc-row-sub">By hand: not in the magazine, so you\u2019ll be asked to load it.</div>` : ''}
          </div>
        </div>`;
    // Landscape: list | drawing over Finish + Tools. Portrait: the drawing
    // stays on top and only the list (Finish + Tools at its end) scrolls.
    return `<div class="ncc-plan">
        <div class="ncc-plan-list" data-keep-scroll="ops"><div class="ncc-ops">${rows}</div>${planHints(false)}<div class="ncc-plan-pair-in">${pair}</div></div>
        <div class="ncc-card ncc-viewcard ncc-plan-view"><div data-viewer></div></div>
        <div class="ncc-plan-pair">${pair}</div>
      </div>`;
  }

  // Step 3's view: every operation on the part in its color; the tapped one
  // stands out, the rest fade.
  function showOpsView() {
    const ops = (S.plan?.ops || []).filter((o) => o.enabled && o.kind !== 'face');
    const overlays = ops.flatMap((o) => {
      const dim = S.focusOp && S.focusOp !== o.id;
      if (o.kind === 'chamfer') return o.show.map((v) => ({ loops: v.loops, z: v.z + 0.05, color: OP_COLORS.chamfer, opacity: dim ? 0.2 : 1, top: v.z }));
      const loops = o.region || (o.lines || []).map((l) => l.pts) || [];
      return { loops, z: o.kind === 'cutout' ? o.zTop + 0.05 : Math.max(o.zBottom, 0) + 0.05, color: OP_COLORS[o.kind], dashed: o.kind === 'cutout', opacity: dim ? 0.2 : 1, top: o.zTop };
    });
    viewer.keepCamera = shownPart === S.part?.positions;
    viewer.showPart(S.part, overlays);
    shownPart = S.part?.positions;
    shownResult = null; shownZero = null;
    viewer.onFrame = null; viewer.onMarker = null; viewer.onPick = null;
  }

  function toolChoices(o) {
    const kinds = o.kind === 'drill' ? ['drill'] : o.kind === 'face' ? ['surfacing', 'flat'] : o.kind === 'finish3d' ? ['ball', 'flat'] : o.kind === 'chamfer' ? ['vbit', 'chamfer'] : o.kind === 'thread' ? ['threadmill'] : ['flat'];
    const list = S.tools.filter((t) => kinds.includes(t.kind) && (o.angle == null || Math.abs(t.angle / 2 - o.angle) <= 1.5)).sort((a, b) => b.diameter - a.diameter);
    return list.some((t) => t.id === o.tool.id) ? list : [o.tool, ...list];
  }

  // ---------- step 4 ----------
  function stepPreview() {
    const r = S.result;
    const p = r?.plan;
    const used = p ? N.toolsUsed(p) : [];
    const changes = p ? p.ops.filter((o) => o.enabled).reduce((n, o, i, a) => n + (i > 0 && a[i - 1].tool.id !== o.tool.id ? 1 : 0), 0) : 0;
    return `
      <div class="ncc-card ncc-viewcard ncc-grow">
        <div data-viewer></div>
        <div class="ncc-play" data-playbar>${playbar()}</div>
      </div>
      <div class="ncc-col ncc-side">
        <div class="ncc-card ncc-stats">
          <div class="ncc-stat"><b class="ncc-mono">${p ? Math.max(1, Math.round(r.seconds / 60)) : '–'}<span> min</span></b><span>Run time</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${used.length || '–'}</b><span>Tools</span></div>
          <div class="ncc-stat"><b class="ncc-mono">${p ? changes : '–'}</b><span>Tool changes</span></div>
        </div>
        <div class="ncc-card"><div class="ncc-label">Checked</div>${checks()}</div>
        ${S.slow ? `<div class="ncc-hint">${ICONS.info}<span>${esc(S.slow)}</span></div>` : ''}
        <div class="ncc-card">
          <div class="ncc-mono ncc-row-sub" style="margin: 0">${esc(programName())}${r ? ` · ${(r.gcode.split('\n').length - 1).toLocaleString()} lines` : ''}</div>
          <button class="ncc-btn muted" type="button" data-act="save" ${r ? '' : 'disabled'}>Save to File Manager</button>
        </div>
      </div>`;
  }

  const programName = () => `${(S.fileName || 'drawing').replace(/\.(dxf|svg|pdf|ai)$/i, '')}.nc`;

  function checks() {
    const c = S.simChecks;
    if (!c) return `<div class="ncc-row-sub">${S.result ? 'Checking…' : 'Waiting for the toolpaths…'}<span class="ncc-elapsed" data-elapsed></span></div>`;
    return c.items.map((i) => `<div class="ncc-check"><span class="ncc-ck ${i.state}">${i.state === 'bad' ? ICONS.cross : i.state === 'info' ? '!' : ICONS.check}</span><span>${esc(i.text)}</span></div>`).join('');
  }

  // ---------- playback ----------
  const PLAY = { ops: [], moves: null, opOf: null, cum: null, total: 0, t: 0, i: 1, playing: false, speed: 5, hm: null, stamps: [], colors: [], cursor: null, goal: null };

  function playbar() {
    if (!S.result) return '';
    const p = S.result.plan;
    const ops = p.ops.filter((o) => o.enabled && o.track);
    const total = PLAY.total || 1;
    const cur = ops[Math.max(0, PLAY.opIndexAt?.(PLAY.t) ?? 0)];
    return `<button class="ncc-playbtn" type="button" data-act="play" aria-label="${PLAY.playing ? 'Pause' : 'Play'}">${PLAY.playing ? ICONS.pause : ICONS.play}</button>
      <div class="ncc-track">
        <div class="ncc-bar" data-scrub role="slider" aria-label="Position in the program" aria-valuemin="0" aria-valuemax="${Math.round(total)}" aria-valuenow="${Math.round(PLAY.t)}">
          ${ops.map((o) => `<i style="width: ${((o.seconds || 0) / total) * 100}%; background: ${OP_COLORS[o.kind]}"></i>`).join('')}
          <b style="width: ${(PLAY.t / total) * 100}%"></b><em style="left: ${(PLAY.t / total) * 100}%"></em>
        </div>
        <div class="ncc-row" style="font-size: 12px; color: var(--color-text-secondary)"><span data-pb="step">${stepText(ops, cur)}</span><span class="ncc-mono" data-pb="clock">${clock(PLAY.t)} / ${clock(total)}</span></div>
      </div>
      <div class="ncc-seg" style="padding: 3px" role="group" aria-label="Speed">${[[1, 'Slow'], [5, 'Normal'], [25, 'Fast']].map(([v, l]) => `<button type="button" style="padding: 6px 8px" class="${PLAY.speed === v ? 'sel' : ''}" data-speed="${v}">${l}</button>`).join('')}</div>`;
  }

  function previewOverlay() {
    return `<div class="ncc-overlay tr">
      <button class="ncc-chip ${viewer.paths?.visible !== false && S.showPaths ? 'on' : ''}" type="button" data-act="paths">Toolpaths</button>
      <button class="ncc-chip ${S.showPart ? 'on' : ''}" type="button" data-act="ghost">Part</button>
    </div>`;
  }

  let shownResult = null;
  function showPreview() {
    if (shownResult === S.result) { syncOverlays(); return; }
    shownResult = S.result;
    shownPart = null; shownZero = null;
    viewer.onMarker = null; viewer.onPick = null;
    const p = S.result.plan;
    const ops = p.ops.filter((o) => o.enabled && o.track);
    // A coarser grid on a small computer: half the cutting to show
    const cell = N.HeightMap.cellFor(p.stock, smallHere() ? 380 * 380 : 520 * 520);
    PLAY.ops = ops;
    PLAY.hm = N.edgeMap(new N.HeightMap(p.stock, cell));
    PLAY.colors = p.ops.map((o) => new Color(OP_COLORS[o.kind]));
    PLAY.stamps = p.ops.map((o) => N.toolStamp(o.tool, cell));
    // One list of moves with the time each one ends
    let n = 0;
    for (const o of ops) n += o.track.length / 4;
    PLAY.moves = new Float32Array(n * 4); PLAY.opOf = new Uint16Array(n); PLAY.cum = new Float64Array(n);
    let k = 0, t = 0, prev = null;
    const rapid = S.maxRapid || 5000;
    for (const o of ops) {
      const oi = p.ops.indexOf(o);
      for (let i = 0; i < o.track.length; i += 4, k++) {
        PLAY.moves.set(o.track.subarray(i, i + 4), k * 4);
        PLAY.opOf[k] = oi;
        if (prev) {
          const d = Math.hypot(o.track[i] - prev[0], o.track[i + 1] - prev[1], o.track[i + 2] - prev[2]);
          t += (d / (o.track[i + 3] > 0 ? o.track[i + 3] : rapid)) * 60;
        }
        prev = [o.track[i], o.track[i + 1], o.track[i + 2]];
        PLAY.cum[k] = t;
      }
    }
    PLAY.total = t;
    PLAY.opIndexAt = (time) => { const i = Math.min(n - 1, lowerBound(PLAY.cum, time)); return ops.indexOf(p.ops[PLAY.opOf[i]]); };
    PLAY.t = 0; PLAY.i = 1; PLAY.cursor = null; PLAY.toolOp = -1; PLAY.snaps = []; PLAY.goal = null; PLAY.cutT = 0;
    viewer.showStock(PLAY.hm, STOCK_COLORS[p.job.material] || STOCK_COLORS.mdf, S.part);
    // Fit the stock and everywhere a cutting edge goes (a facing bit runs
    // well past a small part's edges), so the bit never fills the view
    {
      const hm = PLAY.hm, lo = [hm.x0, hm.y0, hm.bottom], hi = [hm.x0 + (hm.nx - 1) * hm.cell, hm.y0 + (hm.ny - 1) * hm.cell, hm.top];
      for (const o of ops) {
        const r = o.tool.diameter / 2;
        for (let i = 0; i < o.track.length; i += 4) {
          if (o.track[i + 3] === 0) continue;
          lo[0] = Math.min(lo[0], o.track[i] - r); hi[0] = Math.max(hi[0], o.track[i] + r);
          lo[1] = Math.min(lo[1], o.track[i + 1] - r); hi[1] = Math.max(hi[1], o.track[i + 1] + r);
        }
      }
      viewer.frame(lo, hi);
    }
    viewer.showPaths(ops);
    S.showPaths = S.showPaths ?? false;
    syncOverlays();
    placeTool(0);
    // Speed so the whole job plays in about 40 s at 20x
    // Slow is the machine's own pace, Normal 5x, Fast 25x; a long job is
    // sped up so Normal never takes more than 10 minutes
    PLAY.speed = 5;
    PLAY.rate = Math.max(1, PLAY.total / 600 / 5);
    viewer.onFrame = frame;
    runChecks(p);
    // Waits for Play: the uncut stock first
    PLAY.playing = false;
    updatePlaybar();
  }

  function syncOverlays() {
    if (viewer.paths) viewer.paths.visible = !!S.showPaths;
    if (viewer.partGhost) viewer.partGhost.visible = !!S.showPart;
  }

  function lowerBound(arr, v) {
    let lo = 0, hi = arr.length;
    while (lo < hi) { const m = (lo + hi) >> 1; if (arr[m] < v) lo = m + 1; else hi = m; }
    return lo;
  }

  const moveAt = (k) => ({ x: PLAY.moves[k * 4], y: PLAY.moves[k * 4 + 1], z: PLAY.moves[k * 4 + 2], r: PLAY.moves[k * 4 + 3] === 0 });

  // Cuts everything up to time t, or what fits before `deadline` (then the
  // rest on the next frames); returns the rows that changed and whether it
  // got to t.
  function advance(t, deadline = Infinity) {
    const hm = PLAY.hm, n = PLAY.cum.length;
    let j0 = Infinity, j1 = -1;
    const touch = (a, b, oi) => {
      const rad = (S.result.plan.ops[oi].tool.diameter / 2) / hm.cell + 3;
      const ja = Math.floor((Math.min(a.y, b.y) - hm.y0) / hm.cell - rad), jb = Math.ceil((Math.max(a.y, b.y) - hm.y0) / hm.cell + rad);
      j0 = Math.min(j0, Math.max(0, ja)); j1 = Math.max(j1, Math.min(hm.ny - 1, jb));
    };
    let count = 0;
    while (PLAY.i < n && PLAY.cum[PLAY.i] <= t) {
      if ((++count & 31) === 0 && performance.now() > deadline) { PLAY.cutT = PLAY.cum[PLAY.i - 1]; return [j0, j1, false]; }
      // The stock as it is at each operation's start and every tenth of the
      // program: going back replays only from the nearest
      if (!PLAY.cursor && (PLAY.opOf[PLAY.i] !== PLAY.opOf[PLAY.i - 1] || Math.floor((PLAY.cum[PLAY.i] / PLAY.total) * 10) > Math.floor((PLAY.cum[PLAY.i - 1] / PLAY.total) * 10))) snapshot();
      const a = PLAY.cursor || moveAt(PLAY.i - 1), b = moveAt(PLAY.i), oi = PLAY.opOf[PLAY.i];
      if (!b.r) { N.cutMoveExact(hm, S.result.plan.ops[oi].tool, a, b, oi); touch(a, b, oi); }
      PLAY.cursor = null;
      PLAY.i++;
    }
    // Part way along the next move
    if (PLAY.i < n && t > PLAY.cum[PLAY.i - 1]) {
      const a = PLAY.cursor || moveAt(PLAY.i - 1), b = moveAt(PLAY.i), oi = PLAY.opOf[PLAY.i];
      const t0 = PLAY.cum[PLAY.i - 1], f = (t - t0) / (PLAY.cum[PLAY.i] - t0 || 1);
      const start = moveAt(PLAY.i - 1);
      const m = { x: start.x + (b.x - start.x) * f, y: start.y + (b.y - start.y) * f, z: start.z + (b.z - start.z) * f };
      if (!b.r) { N.cutMoveExact(hm, S.result.plan.ops[oi].tool, a, m, oi); touch(a, m, oi); }
      PLAY.cursor = m;
    }
    PLAY.cutT = t;
    return [j0, j1, true];
  }

  function placeTool(t) {
    const n = PLAY.cum.length;
    if (!n) return;
    const i = Math.min(n - 1, lowerBound(PLAY.cum, t));
    const oi = PLAY.opOf[i];
    if (oi !== PLAY.toolOp) {
      const op = S.result.plan.ops[oi];
      viewer.setTool(op.tool, op.zTop - op.zBottom);
      PLAY.toolOp = oi;
    }
    // Where the tool is at t (the stock may still be catching up)
    const a = moveAt(Math.max(0, i - 1)), b = moveAt(i), t0 = i > 0 ? PLAY.cum[i - 1] : 0;
    const f = i > 0 ? Math.max(0, Math.min(1, (t - t0) / (PLAY.cum[i] - t0 || 1))) : 1;
    viewer.moveTool(a.x + (b.x - a.x) * f, a.y + (b.y - a.y) * f, a.z + (b.z - a.z) * f);
  }

  let lastFrame = 0, lastBar = 0, lastStock = 0;
  const dirty = [Infinity, -1];
  // ms of cutting a frame: little while dragging (it stays smooth), a lot
  // once let go (it catches up about as fast as cutting it all at once)
  const CUT_BUDGET = { drag: 12, catchUp: 250 };
  function frame(now) {
    const dt = lastFrame ? Math.min(0.1, (now - lastFrame) / 1000) : 0;
    lastFrame = now;
    if (!PLAY.cum) return;
    if (PLAY.playing) { PLAY.t = Math.min(PLAY.total, PLAY.t + dt * PLAY.speed * PLAY.rate); PLAY.goal = PLAY.t; }
    if (PLAY.goal == null) return;
    // The stock catches up a slice a frame, so the view never freezes
    const [j0, j1, done] = advance(PLAY.goal, performance.now() + (PLAY.dragging || PLAY.playing ? CUT_BUDGET.drag : CUT_BUDGET.catchUp));
    // Redrawing the stock costs as much as cutting: while catching up, a
    // few times a second; playing, every frame
    dirty[0] = Math.min(dirty[0], j0); dirty[1] = Math.max(dirty[1], j1);
    if (done || PLAY.playing || now - lastStock > 250) {
      viewer.refreshStock(dirty[0], dirty[1], PLAY.colors);
      dirty[0] = Infinity; dirty[1] = -1; lastStock = now;
    }
    if (done) PLAY.goal = null;
    if (!PLAY.playing) return;
    placeTool(PLAY.t);
    if (PLAY.t >= PLAY.total) { PLAY.playing = false; updatePlaybar(); }
    else if (now - lastBar > 200) { lastBar = now; updatePlaybar(); }
  }

  // The stock as it is when each operation starts, so going back only
  // replays from the nearest one
  const SNAP_KEYS = ['h', 'op', 'sx', 'sy', 'wx', 'wy', 'gap', 'deep'];
  function snapshot() {
    if (PLAY.snaps.some((sn) => sn.i === PLAY.i)) return;
    PLAY.snaps.push({ i: PLAY.i, data: SNAP_KEYS.map((k) => PLAY.hm[k].slice()) });
  }

  function seek(t) {
    t = Math.max(0, Math.min(PLAY.total, t));
    // Going back from where the stock is cut to: from the nearest snapshot
    if (t < (PLAY.cutT ?? 0)) {
      const sn = PLAY.snaps.filter((x) => PLAY.cum[x.i - 1] <= t).sort((a, b) => b.i - a.i)[0];
      if (sn) { SNAP_KEYS.forEach((k, q) => PLAY.hm[k].set(sn.data[q])); PLAY.i = sn.i; }
      else {
        PLAY.hm.h.fill(PLAY.hm.top); PLAY.hm.op.fill(0); PLAY.hm.sx.fill(0); PLAY.hm.sy.fill(0); PLAY.hm.wx.fill(0); PLAY.hm.wy.fill(0); PLAY.hm.gap.fill(Infinity); PLAY.hm.deep.fill(-Infinity);
        PLAY.i = 1;
      }
      PLAY.cursor = null;
      PLAY.cutT = PLAY.i > 1 ? PLAY.cum[PLAY.i - 1] : 0;
      viewer.refreshStock(0, PLAY.hm.ny - 1, PLAY.colors);
    }
    // The tool and the bar go there now; the stock follows a slice a frame
    PLAY.goal = t;
    PLAY.t = t;
    placeTool(t);
    updatePlaybar();
  }

  const stepText = (ops, cur) => (cur ? `Step ${ops.indexOf(cur) + 1} of ${ops.length} · ${esc(cur.label)} · T${N.toolNumber(cur.tool, S.numbering)}` : '');

  // Built once per program, then only the moving parts change: replacing
  // the buttons every frame lost clicks that pressed one copy and released
  // on the next.
  function updatePlaybar() {
    const bar = root.querySelector('[data-playbar]');
    if (!bar) return;
    if (bar._result !== S.result || bar._total !== PLAY.total || !bar.querySelector('[data-scrub]')) { bar.innerHTML = playbar(); bar._result = S.result; bar._total = PLAY.total; return; }
    const ops = S.result.plan.ops.filter((o) => o.enabled && o.track);
    const total = PLAY.total || 1, pct = `${(PLAY.t / total) * 100}%`;
    const cur = ops[Math.max(0, PLAY.opIndexAt?.(PLAY.t) ?? 0)];
    const scrub = bar.querySelector('[data-scrub]');
    scrub.querySelector('b').style.width = pct;
    scrub.querySelector('em').style.left = pct;
    scrub.setAttribute('aria-valuenow', String(Math.round(PLAY.t)));
    const set = (el, v) => { if (el && el.innerHTML !== v) el.innerHTML = v; };
    set(bar.querySelector('[data-pb="step"]'), stepText(ops, cur));
    set(bar.querySelector('[data-pb="clock"]'), `${clock(PLAY.t)} / ${clock(total)}`);
    const play = bar.querySelector('[data-act="play"]');
    const label = PLAY.playing ? 'Pause' : 'Play';
    if (play.getAttribute('aria-label') !== label) { play.setAttribute('aria-label', label); play.innerHTML = PLAY.playing ? ICONS.pause : ICONS.play; }
    for (const btn of bar.querySelectorAll('[data-speed]')) btn.classList.toggle('sel', +btn.dataset.speed === PLAY.speed);
  }

  // The whole program cut once, up front, for the checks.
  function runChecks(p) {
    setTimeout(() => {
      if (S.result?.plan !== p) return;
      // Simulated in the engine's worker with the toolpaths, off this page
      const collisions = S.result?.collisions || [];
      const items = [];
      items.push(collisions.length
        ? { state: 'bad', text: `${collisions.length} fast move${collisions.length > 1 ? 's go' : ' goes'} into the material (${[...new Set(collisions.map((c) => p.ops.find((o) => o.id === c.op)?.label))].join(', ')}).` }
        : { state: 'ok', text: 'No fast moves through the material' });
      if (S.travel) {
        const fits = p.stock.width <= S.travel.x && p.stock.depth <= S.travel.y;
        items.push(fits ? { state: 'ok', text: 'The stock fits inside your machine’s travel' } : { state: 'bad', text: `The stock is bigger than your machine’s travel (${n(S.travel.x)} × ${L(S.travel.y)}).` });
      }
      const used = N.toolsUsed(p);
      items.push(used.every((t) => t.fluteLength)
        ? { state: 'ok', text: 'Every tool is long enough for its depth' }
        : { state: 'info', text: 'Some tools have no cutting length in the Tool Library, so their depth isn’t checked.' });
      const cut = p.ops.find((o) => o.kind === 'cutout' && o.enabled);
      if (cut) items.push({ state: 'ok', text: `The cut-out goes ${L(p.job.throughDepth, S.units === 'in' ? 3 : 1)} into the spoilboard${p.job.tabs.enabled ? `, with ${p.job.tabs.count} tabs` : ''}` });
      if (p.warnings.some((w) => w.kind === 'undercut')) items.push({ state: 'info', text: 'Some features are on the other side. Cut this side, then turn the part over and make a program for that side. Pins (the Spoilboard Toolbox plugin can set them up) put it back in the same place.' });
      S.simChecks = { ok: !items.some((i) => i.state === 'bad'), items };
      render();
    }, 50);
  }

  // ---------- events ----------
  const go = (n) => {
    if (n < 1 || n > 4 || n > S.maxStep + 1) return;
    if (n === 4 && S.step !== 4) { PLAY.playing = false; S.step = 4; S.maxStep = 4; render(); replan(true); return; }
    S.step = n; S.maxStep = Math.max(S.maxStep, n);
    if (n !== 4) PLAY.playing = false;
    render();
  };

  const changed = () => { S.maxStep = Math.min(S.maxStep, Math.max(S.step, 3)); S.result = null; replan(false); };

  root.addEventListener('click', (e) => {
    // A shape in the drawing: select it (shift: add or remove); the empty
    // drawing: clear
    const shape = e.target.closest('[data-shape]');
    if (shape || e.target.closest('[data-drawing]')) {
      const i = shape ? +shape.dataset.shape : null;
      if (i === null) S.sel = new Set();
      else if (e.shiftKey || e.metaKey || e.ctrlKey) { if (S.sel.has(i)) S.sel.delete(i); else S.sel.add(i); }
      else S.sel = S.sel.size === 1 && S.sel.has(i) ? new Set() : new Set([i]);
      return render();
    }
    const row = e.target.closest('[data-focus]');
    if (row && !e.target.closest('button, select')) { S.focusOp = S.focusOp === row.dataset.focus ? null : row.dataset.focus; render(); return; }
    const t = e.target.closest('button, [data-scrub]');
    if (!t || t.disabled) return;
    const d = t.dataset;
    if (d.go) return go(+d.go);
    if (d.material) { S.job.material = d.material; Object.assign(S.job.tabs, N.tabDefaults(d.material)); return changed(); }
    if (d.tabsize) { const t = tabSize(); const k = tab(); S.job.tabs[d.tabsize] = Math.max(k.min, Math.min(k.max, Math.round((t[d.tabsize] + +d.by * k.step) / k.grid) * k.grid)); return changed(); }
    if (d.zero) { S.job.zero.xy = d.zero; return changed(); }
    if (d.z) { S.job.zero.z = d.z; return changed(); }
    if (d.finish) { S.job.finish = d.finish; return changed(); }
    if (d.tabs) { S.job.tabs.count = Math.max(1, Math.min(12, S.job.tabs.count + +d.tabs)); return changed(); }
    if (d.toggle === 'fit') {
      const st = S.plan?.stock;
      S.job.stock.fit = !S.job.stock.fit;
      if (!S.job.stock.fit && st) Object.assign(S.job.stock, { width: st.width, depth: st.depth, thickness: st.thickness });
      return changed();
    }
    if (d.scale === 'reset') return rescale(1);
    if (d.scale === 'inch') return rescale(N.units.INCH);
    if (d.act === 'unselect') { S.sel = new Set(); return render(); }
    if (d.act === 'sel-reset') { for (const i of S.sel) delete S.job.shapes[i]; return changed(); }
    if (d.toggle === 'tabs') { S.job.tabs.enabled = !S.job.tabs.enabled; return changed(); }
    if (d.op) { S.job.disabled[d.op] = !S.job.disabled[d.op]; return changed(); }
    if (d.speed) { PLAY.speed = +d.speed; return updatePlaybar(); }
    if (d.act === 'play') {
      if (PLAY.t >= PLAY.total) seek(0);
      PLAY.playing = !PLAY.playing; lastFrame = 0;
      return updatePlaybar();
    }
    if (d.act === 'paths') { S.showPaths = !S.showPaths; syncOverlays(); t.classList.toggle('on', S.showPaths); return; }
    if (d.act === 'ghost') { S.showPart = !S.showPart; syncOverlays(); t.classList.toggle('on', S.showPart); return; }
    if (d.act === 'close') return close();
    if (d.recentOpen) return openRecent(d.recentOpen);
    if (d.forget) return store.forget(d.forget, S.recent).then((l) => { S.recent = l; render(); });
    if (d.act === 'load') return loadProgram(t);
    if (d.act === 'save') return saveProgram(t);
  });

  // Scrubbing the bar
  root.addEventListener('pointerdown', (e) => {
    const bar = e.target.closest('[data-scrub]');
    if (!bar || !PLAY.cum) return;
    const was = PLAY.playing;
    PLAY.playing = false;
    PLAY.dragging = true;
    // The bar is redrawn on every seek, so measure the one on screen now;
    // at most one seek per frame while dragging
    const at = (x) => { const r = root.querySelector('[data-scrub]').getBoundingClientRect(); if (r.width > 0) seek(((x - r.left) / r.width) * PLAY.total); };
    at(e.clientX);
    let pending = null;
    const move = (ev) => {
      if (pending === null) requestAnimationFrame(() => { const x = pending; pending = null; at(x); });
      pending = ev.clientX;
    };
    const up = () => { PLAY.dragging = false; window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); PLAY.playing = was && PLAY.t < PLAY.total; lastFrame = 0; updatePlaybar(); };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  });

  root.addEventListener('change', (e) => {
    const t = e.target;
    if (t.matches('[data-file]')) return openFile(t.files[0]);
    if (t.matches('[data-recent]')) return t.value && openRecent(t.value);
    if (t.dataset.tool) { S.job.toolOverride[t.dataset.tool] = +t.value || t.value; return changed(); }
    if (t.dataset.size) {
      const k = +t.dataset.size, v = parseFloat(String(t.value).replace(',', '.'));
      if (!(Number.isFinite(v) && v > 0 && S.a?.size[k] > 0)) return render();
      const f = N.units.toMm(v, S.units) / S.a.size[k];
      if (Math.abs(f - 1) < 1e-9) return render();
      return rescale(S.scale * f);
    }
    // The stock's thickness (step 1 and Stock & Zero)
    if (t.matches('[data-thick]')) {
      const v = parseFloat(String(t.value).replace(',', '.'));
      if (Number.isFinite(v) && v > 0) S.job.stock.thickness = N.units.toMm(v, S.units);
      return changed();
    }
    // A cut or depth for a group (its key) or the selection ('sel')
    const k = t.dataset.cut ?? t.dataset.through ?? t.dataset.depth;
    if (k !== undefined) {
      const targets = k === 'sel' ? [...S.sel].map((i) => (S.job.shapes[i] ||= {})) : [(S.job.groups[k] ||= {})];
      if (k === 'sel') {
        // Each selected shape starts from what it has now
        const gOf = N.groupOf(S.groups);
        [...S.sel].forEach((i, q) => { const c = N.choiceFor(S.a, { ...S.job, shapes: {} }, i, gOf); if (targets[q].cut === undefined) Object.assign(targets[q], { cut: c.cut, depth: c.depth }); });
      } else {
        const g = S.groups.find((x) => x.key === k), c = N.choiceFor(S.a, { ...S.job, groups: {}, shapes: {} }, g.idx[0], null);
        if (targets[0].cut === undefined) Object.assign(targets[0], { cut: c.cut, depth: c.depth });
      }
      for (const o of targets) {
        if (t.dataset.cut !== undefined) {
          o.cut = t.value;
          // Through for the profiles; a depth for clearing and lines
          o.depth = t.value === 'pocket' || t.value === 'online' ? (o.depth ?? S.job.depths[t.value]) : (t.value === 'off' ? o.depth : null);
        } else if (t.dataset.through !== undefined) o.depth = t.checked ? null : Math.max(0.1, Math.min(S.job.depths[o.cut] || S.job.depths.pocket, (S.job.stock.thickness || 6) - 0.5));
        else {
          const v = parseFloat(String(t.value).replace(',', '.'));
          if (Number.isFinite(v) && v > 0) o.depth = N.units.toMm(v, S.units);
        }
      }
      return changed();
    }
    if (t.dataset.stock) {
      const v = parseFloat(String(t.value).replace(',', '.'));
      if (Number.isFinite(v) && v > 0) S.job.stock[t.dataset.stock] = N.units.toMm(v, S.units);
      return changed();
    }
  });

  root.addEventListener('dragover', (e) => { const z = e.target.closest('[data-drop]'); if (z) { e.preventDefault(); z.classList.add('over'); } });
  root.addEventListener('dragleave', (e) => { const z = e.target.closest('[data-drop]'); if (z) z.classList.remove('over'); });
  root.addEventListener('drop', (e) => {
    const z = e.target.closest('[data-drop]');
    if (!z) return;
    e.preventDefault();
    openFile(e.dataTransfer.files[0]);
  });

  function flash(text) {
    S.toast = text; render();
    setTimeout(() => { if (S.toast === text) { S.toast = ''; render(); } }, 2600);
  }

  async function loadProgram(btn) {
    btn.disabled = true;
    try {
      const res = await api.post('/api/gcode-files/load-temp', { filename: programName(), content: S.result.gcode });
      if (!res.ok) throw new Error(`ncSender said ${res.status}`);
      close();
    } catch (e) {
      btn.disabled = false;
      flash(`Couldn’t load the program: ${e.message}`);
    }
  }

  async function saveProgram(btn) {
    btn.disabled = true;
    try {
      const path = await freePath(programName());
      const res = await api.post('/api/gcode-files/file/save', { path, content: S.result.gcode });
      if (!res.ok) throw new Error(`save failed (${res.status})`);
      flash(`Saved to File Manager: ${path}`);
    } catch (e) {
      flash(`Couldn’t save: ${e.message}`);
    }
    btn.disabled = false;
  }

  // The first name not taken in File Manager's ncCut2D folder, from one
  // listing (asking for each name logged a 404 for every free one)
  async function freePath(name) {
    const stem = name.replace(/\.nc$/, '');
    const taken = new Set();
    const walk = (list) => { for (const e of list || []) { if (e.type === 'folder') walk(e.children); else taken.add(e.path); } };
    walk((await api.get('/api/gcode-files'))?.tree);
    for (let n = 1; n < 1000; n++) {
      const path = `ncCut2D/${n < 2 ? name : `${stem} (${n}).nc`}`;
      if (!taken.has(path)) return path;
    }
    throw new Error('too many saved copies');
  }

  function close() {
    PLAY.playing = false;
    window.postMessage({ type: 'close-plugin-dialog' }, '*');
  }

  render();
  // For the headless checks in dev/
  window.__nccut2d = { S, PLAY, viewer, seek: (t) => seek(t) };
}

function circle(c, n = 48) {
  return Array.from({ length: n }, (_, i) => [c.x + (c.d / 2) * Math.cos((i / n) * 2 * Math.PI), c.y + (c.d / 2) * Math.sin((i / n) * 2 * Math.PI)]);
}
