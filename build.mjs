// Bundles src/ into lib/nccam.js and copies the STEP reader's wasm.
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
  outfile: 'lib/nccam.js',
});
const occt = 'node_modules/occt-import-js/dist';
copyFileSync(`${occt}/occt-import-js.wasm`, 'lib/occt-import-js.wasm');
copyFileSync(`${occt}/license.occt.txt`, 'lib/LICENSE-occt.txt');
copyFileSync(`${occt}/license.occt-import-js.txt`, 'lib/LICENSE-occt-import-js.txt');

// config.html loads lib/nccam.js again only when the build changes
const html = readFileSync('config.html', 'utf8').replace(/var BUILD = '[^']*';/, `var BUILD = '${tag}';`);
writeFileSync('config.html', html);
const size = readFileSync('lib/nccam.js').length;
console.log(`lib/nccam.js ${(size / 1024).toFixed(0)} KB, build ${tag}, sha ${createHash('sha1').update(readFileSync('lib/nccam.js')).digest('hex').slice(0, 8)}`);
