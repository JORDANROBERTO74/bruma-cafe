/**
 * Generates the local placeholder art set (SVG) used across the storefront.
 *
 * These are original, brand-colored illustrations, not photographs. They keep
 * the project self-contained until the final photography set is produced; the
 * filenames are stable, so swapping the files is all that is needed.
 *
 * Usage: node scripts/generate-art.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images");

const paper = "#FAF5EE";
const paperDeep = "#F1E8DB";
const ink = "#201713";

function beans(accent, seed) {
  const positions = [
    [18, 22, -18],
    [76, 16, 12],
    [88, 68, -28],
    [12, 72, 24],
    [64, 84, 8],
  ];
  return positions
    .map(([x, y, r], index) => {
      if ((index + seed) % 2 !== 0) return "";
      return `
      <g transform="translate(${x} ${y}) rotate(${r}) scale(${0.8 + ((seed + index) % 3) * 0.12})">
        <ellipse rx="5.4" ry="8.2" fill="${accent}" opacity="0.75"/>
        <path d="M0 -8 C 2 -3, 2 3, 0 8" stroke="${paper}" stroke-width="1.1" fill="none" opacity="0.85"/>
      </g>`;
    })
    .join("");
}

function cup(accent) {
  return `
  <g transform="translate(100 118)">
    <ellipse cx="0" cy="44" rx="46" ry="9" fill="${ink}" opacity="0.12"/>
    <path d="M-38 -20 H38 L32 24 A36 20 0 0 1 -32 24 Z" fill="${paper}" stroke="${ink}" stroke-width="2.2"/>
    <path d="M-38 -20 H38 L35 4 H-35 Z" fill="${paperDeep}"/>
    <ellipse cx="0" cy="-20" rx="38" ry="11" fill="${accent}"/>
    <ellipse cx="0" cy="-21" rx="30" ry="8" fill="${ink}" opacity="0.28"/>
    <path d="M38 -12 h9 a13 13 0 0 1 0 26 h-11" fill="none" stroke="${ink}" stroke-width="2.2"/>
    <path d="M-14 -42 c 0 -10 9 -10 9 -20 M2 -44 c 0 -10 9 -10 9 -20" fill="none" stroke="${accent}" stroke-width="2.4" stroke-linecap="round" opacity="0.8"/>
  </g>`;
}

function landscape(accent) {
  return `
  <g opacity="0.9">
    <circle cx="132" cy="96" r="34" fill="${accent}" opacity="0.9"/>
    <path d="M0 210 C 40 160, 70 168, 104 196 C 140 226, 176 150, 200 176 L200 250 L0 250 Z" fill="${ink}" opacity="0.16"/>
    <path d="M0 224 C 46 190, 82 200, 112 218 C 148 240, 172 196, 200 206 L200 250 L0 250 Z" fill="${ink}" opacity="0.26"/>
    <g stroke="${ink}" stroke-width="1.4" opacity="0.35">
      <path d="M12 236 C 50 214, 88 222, 120 236"/>
      <path d="M6 246 C 52 228, 96 234, 132 246"/>
    </g>
    <g fill="${accent}">
      <circle cx="46" cy="206" r="4.2"/>
      <circle cx="56" cy="212" r="4.2"/>
      <circle cx="150" cy="196" r="4.2"/>
      <circle cx="160" cy="202" r="4.2"/>
    </g>
  </g>`;
}

function art({ accent, kind = "cup", seed = 0 }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" width="800" height="1000" role="img">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0" stop-color="${paper}"/>
      <stop offset="1" stop-color="${paperDeep}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.75" cy="0.2" r="0.7">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.28"/>
      <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.055"/></feComponentTransfer>
    </filter>
  </defs>

  <rect width="200" height="250" fill="url(#bg)"/>
  <rect width="200" height="250" fill="url(#glow)"/>

  <g stroke="${accent}" fill="none" opacity="0.3">
    <circle cx="168" cy="42" r="34"/>
    <circle cx="168" cy="42" r="46"/>
    <circle cx="168" cy="42" r="58"/>
  </g>
  <rect x="0" y="0" width="200" height="250" filter="url(#grain)" opacity="0.7"/>
  ${kind === "landscape" ? landscape(accent) : cup(accent)}
  ${beans(accent, seed)}
  <rect x="12" y="234" width="24" height="2.5" fill="${accent}"/>
</svg>`;
}

const assets = [
  ["hero", "#A34A28", "cup", 1],
  ["origin", "#6E7A52", "landscape", 2],
  ["category-coffee", "#A34A28", "cup", 0],
  ["category-espresso", "#4A3A32", "cup", 1],
  ["category-decaf", "#C97A4F", "cup", 2],
  ["category-gear", "#6E7A52", "cup", 0],
  ["category-gifts", "#D9A441", "cup", 1],
  ["product-house-blend", "#A34A28", "cup", 0],
  ["product-finca-la-paz", "#D9A441", "landscape", 1],
  ["product-yungas-reserve", "#6E7A52", "landscape", 2],
  ["product-espresso-nocturno", "#4A3A32", "cup", 1],
  ["product-decaf-sereno", "#C97A4F", "cup", 2],
  ["product-pour-over-set", "#6E7A52", "cup", 0],
  ["product-burr-grinder", "#4A3A32", "cup", 1],
  ["product-bruma-mug", "#C97A4F", "cup", 2],
  ["product-gift-box", "#D9A441", "cup", 0],
];

await mkdir(outDir, { recursive: true });

for (const [name, accent, kind, seed] of assets) {
  await writeFile(join(outDir, `${name}.svg`), art({ accent, kind, seed }), "utf8");
}

console.log(`Generated ${assets.length} illustrations in public/images`);
