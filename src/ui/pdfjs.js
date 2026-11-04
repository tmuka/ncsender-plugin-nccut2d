// pdf.js is 1.4 MB with its worker, so it loads the first time a PDF or AI
// file is opened, from the plugin's lib/ folder (served by ncSender).
let loading = null;

export function loadPdfjs(host) {
  return (loading ||= (async () => {
    const text = async (name) => {
      const r = await fetch(host.file(`lib/${name}`));
      if (!r.ok) throw new Error(`lib/${name}: ${r.status}`);
      return URL.createObjectURL(new Blob([await r.text()], { type: 'text/javascript' }));
    };
    const [lib, worker] = await Promise.all([text('pdf.min.mjs'), text('pdf.worker.min.mjs')]);
    const pdfjs = await import(/* @vite-ignore */ lib);
    pdfjs.GlobalWorkerOptions.workerSrc = worker;
    return pdfjs;
  })().catch((e) => { loading = null; throw e; }));
}
