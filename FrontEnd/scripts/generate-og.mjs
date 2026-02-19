#!/usr/bin/env node
/**
 * Generate public/og/og-image.jpg: 1200x630, center-crop, <200KB.
 * Run: node scripts/generate-og.mjs
 */
import sharp from "sharp";
import { readFileSync, writeFileSync, statSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcPath = path.join(root, "public/releases/vornel_remixes.webp");
const outPath = path.join(root, "public/og/og-image.jpg");

const W = 1200;
const H = 630;
const MAX_BYTES = 200 * 1024;

async function main() {
  let quality = 80;
  let buffer;

  for (; quality >= 50; quality -= 10) {
    buffer = await sharp(srcPath)
      .resize(W, H, { fit: "cover", position: "center" })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();

    const size = buffer.length;
    if (size <= MAX_BYTES) break;
  }

  const finalQuality = quality;
  buffer = await sharp(srcPath)
    .resize(W, H, { fit: "cover", position: "center" })
    .jpeg({ quality: finalQuality, mozjpeg: true })
    .toBuffer();

  const metadata = await sharp(buffer).metadata();
  writeFileSync(outPath, buffer);

  const bytes = statSync(outPath).size;
  console.log("OG image written:", outPath);
  console.log("Dimensions:", metadata.width, "x", metadata.height);
  console.log("File size:", bytes, "bytes (" + (bytes / 1024).toFixed(1) + " KB)");
  console.log("JPEG quality:", finalQuality);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
