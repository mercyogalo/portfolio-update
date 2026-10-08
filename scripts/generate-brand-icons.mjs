import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function markSvg(size) {
  const radius = Math.round(size * 0.22);
  const fontSize = Math.round(size * 0.62);
  const accent = Math.max(4, Math.round(size * 0.12));
  const offset = Math.round(size * 0.16);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${radius}" fill="#000000"/>
  <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle"
    font-family="Arial, Helvetica, sans-serif" font-weight="700"
    font-size="${fontSize}" fill="#FFFFFF">M</text>
  <circle cx="${size - offset}" cy="${size - offset}" r="${accent / 2}" fill="#FF6A00"/>
</svg>`;
}

async function png(size) {
  return sharp(Buffer.from(markSvg(size))).png().toBuffer();
}

const iconsDir = join(root, "public", "icons");
const brandDir = join(root, "public", "brand");
await mkdir(iconsDir, { recursive: true });
await mkdir(brandDir, { recursive: true });

await writeFile(join(iconsDir, "icon-192.png"), await png(192));
await writeFile(join(iconsDir, "icon-512.png"), await png(512));

const ico = await pngToIco([await png(16), await png(32), await png(48)]);
await writeFile(join(root, "src", "app", "favicon.ico"), ico);

console.log("Generated public/icons/icon-192.png, public/icons/icon-512.png, and src/app/favicon.ico");
