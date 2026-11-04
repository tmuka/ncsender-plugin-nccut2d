// Dev harness: serves the plugin the way ncSender's dialog does, with a fake
// API (tools from tests/helpers.js). node dev/serve.mjs [port]
import { createServer } from 'node:http';
import { readFileSync, existsSync, writeFileSync, mkdirSync } from 'node:fs';
import { LIBRARY } from '../tests/helpers.js';

const port = +(process.argv[2] || 8777);
const json = (res, v) => { res.writeHead(200, { 'Content-Type': 'application/json' }); res.end(JSON.stringify(v)); };
const saved = new Map();
createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  const p = url.pathname;
  if (p === '/' ) { res.writeHead(200, { 'Content-Type': 'text/html' }); return res.end(readFileSync('dev/harness.html')); }
  if (p.startsWith('/fixtures/')) { res.writeHead(200); return res.end(readFileSync('tests' + p)); }
  if (p === '/api/plugins/com.ncsender.nccam/config-ui') return json(res, { configUI: readFileSync('config.html', 'utf8').replace('__SERVER_PORT__', String(port)) });
  if (p === '/api/plugins/com.ncsender.nccam/icon') {
    const f = url.searchParams.get('file');
    if (!f || f.includes('..') || !existsSync(f)) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { 'Content-Type': 'application/octet-stream' }); return res.end(readFileSync(f));
  }
  if (p === '/api/settings') return json(res, { unitsPreference: process.env.UNITS || 'metric', safeZHeight: -5, tool: { numbering: 'slot' } });
  if (p === '/api/tools') return json(res, LIBRARY);
  if (p === '/api/firmware') return json(res, { settings: { 30: { value: '24000' }, 110: { value: '5000' }, 111: { value: '5000' }, 130: { value: '800' }, 131: { value: '800' }, 132: { value: '150' } } });
  if (p === '/api/server-state') return json(res, { machineState: { connected: true, tool: 1 } });
  if (p === '/api/gcode-files') return json(res, { tree: [{ type: 'folder', path: 'ncCAM', children: [...saved.keys()].map((k) => ({ type: 'file', path: k })) }] });
  if (p === '/api/gcode-files/file') { if (saved.has(url.searchParams.get('path'))) return json(res, {}); res.writeHead(404); return res.end(); }
  if (p === '/api/gcode-files/load-temp' || p === '/api/gcode-files/file/save') {
    let body = '';
    req.on('data', (c) => (body += c));
    req.on('end', () => {
      const b = JSON.parse(body);
      mkdirSync('dist', { recursive: true });
      writeFileSync(`dist/${p.endsWith('save') ? 'saved' : 'loaded'}.nc`, b.content);
      if (b.path) saved.set(b.path, true);
      console.log(p, b.filename || b.path, b.content.length, 'bytes');
      json(res, { success: true });
    });
    return;
  }
  res.writeHead(404); res.end();
}).listen(port, '127.0.0.1', () => console.log(`http://localhost:${port}/`));
