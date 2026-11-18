// Renders public/og.png (1200x630) from the /share-card page, and
// app/apple-icon.png (180x180) from the logo. Run with the site running:
//   npm run build && npm start   (in one terminal)
//   npm run images               (in another)
// Needs Playwright: npm i -g playwright && npx playwright install chromium
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const base = process.env.SITE ?? "http://localhost:3000";
const browser = await chromium.launch();

const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(`${base}/share-card`, { waitUntil: "networkidle" });
await page.emulateMedia({ reducedMotion: "reduce" });
await page.evaluate(() => document.fonts.ready);
await page.locator("#share-card").screenshot({ path: "public/og.png" });

const svg = readFileSync("app/icon.svg", "utf8");
const icon = await browser.newPage({ viewport: { width: 180, height: 180 } });
await icon.setContent(
  `<html><body style="margin:0;background:#fff8e7">${svg.replace("<svg ", '<svg width="180" height="180" ')}</body></html>`,
);
await icon.screenshot({ path: "app/apple-icon.png" });

await browser.close();
console.log("Wrote public/og.png and app/apple-icon.png");
