import { chromium } from 'playwright-core';
import { readFileSync } from 'node:fs';
const exe = `${process.env.HOME}/Library/Caches/ms-playwright/chromium-1223/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;
const b = await chromium.launch({ executablePath: exe });
const p = await b.newPage({ viewport: { width: 512, height: 512 } });
await p.setContent(`<body style="margin:0;background:transparent">${readFileSync('dev/logo.svg', 'utf8')}</body>`);
await p.screenshot({ path: 'logo.png', omitBackground: true });
await b.close();
