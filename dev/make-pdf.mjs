// node dev/make-pdf.mjs -> tests/fixtures/badge.pdf (Chrome prints the SVG as vectors)
import { chromium } from 'playwright-core';
import { readFileSync } from 'node:fs';
const b = await chromium.launch({ channel: 'chrome' });
const p = await b.newPage();
await p.setContent(`<style>@page{size:80mm 50mm;margin:0}body{margin:0}</style>${readFileSync('tests/fixtures/badge.svg', 'utf8')}`);
await p.pdf({ path: 'tests/fixtures/badge.pdf', width: '80mm', height: '50mm', printBackground: false });
await b.close();
console.log('badge.pdf written');
