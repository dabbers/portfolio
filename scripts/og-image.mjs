// Renders public/og.png (1200×630 social share image) and
// public/apple-touch-icon.png from inline SVG. Run with `npm run og`.
// The output is committed, so this only needs re-running when the text changes.
import sharp from "sharp";
import { writeFile } from "node:fs/promises";

const mono = "JetBrains Mono, DejaVu Sans Mono, Menlo, Consolas, monospace";
const sans = "Inter, Helvetica Neue, Arial, DejaVu Sans, sans-serif";

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f5f5f4"/>
  <rect x="0" y="0" width="14" height="630" fill="#991B1B"/>
  <text x="96" y="250" font-family="${mono}" font-size="34" fill="#991B1B">&lt;dab&gt;</text>
  <text x="96" y="330" font-family="${mono}" font-size="72" font-weight="600" fill="#1c1917">David Barajas</text>
  <text x="96" y="400" font-family="${sans}" font-size="34" fill="#57534e">Software engineer in the Seattle area.</text>
  <text x="96" y="560" font-family="${mono}" font-size="28" fill="#991B1B">davidbarajas.com</text>
</svg>`;

const icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#991B1B"/>
  <text x="32" y="43" text-anchor="middle" font-family="${mono}" font-size="30" font-weight="600" fill="#fff">db</text>
</svg>`;

await writeFile("public/og.png", await sharp(Buffer.from(og)).png().toBuffer());
await writeFile("public/apple-touch-icon.png", await sharp(Buffer.from(icon)).resize(180, 180).png().toBuffer());
console.log("wrote public/og.png and public/apple-touch-icon.png");
