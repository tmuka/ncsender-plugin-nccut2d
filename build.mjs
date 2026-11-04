// Bundles src/ into lib/nccut2d.js and copies pdf.js (loaded only for PDF/AI).
// node build.mjs
import { build } from 'esbuild';
import { copyFileSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';

mkdirSync('lib', { recursive: true });
const tag = `${JSON.parse(readFileSync('manifest.json', 'utf8')).version}-${Date.now().toString(36)}`;
await build({
  entryPoints: ['src/index.js'],
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: ['chrome110'],
  minify: true,
  legalComments: 'eof',
  external: ['fs', 'path', 'crypto', 'url', 'ws'],
  define: { __BUILD__: JSON.stringify(tag) },
  outfile: 'lib/nccut2d.js',
});
const pdf = 'node_modules/pdfjs-dist';
copyFileSync(`${pdf}/build/pdf.min.mjs`, 'lib/pdf.min.mjs');
copyFileSync(`${pdf}/build/pdf.worker.min.mjs`, 'lib/pdf.worker.min.mjs');
copyFileSync(`${pdf}/LICENSE`, 'lib/LICENSE-pdfjs.txt');

// config.html loads lib/nccut2d.js again only when the build changes
const html = readFileSync('config.html', 'utf8').replace(/var BUILD = '[^']*';/, `var BUILD = '${tag}';`);
writeFileSync('config.html', html);
const size = readFileSync('lib/nccut2d.js').length;
console.log(`lib/nccut2d.js ${(size / 1024).toFixed(0)} KB, build ${tag}, sha ${createHash('sha1').update(readFileSync('lib/nccut2d.js')).digest('hex').slice(0, 8)}`);
