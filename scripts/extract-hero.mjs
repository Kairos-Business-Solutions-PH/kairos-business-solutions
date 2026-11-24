// Extracts the raster from public/kairos-animated-hero.svg and exports optimized AVIF/WebP/PNG-fallback versions.
import fs from "node:fs";
import sharp from "sharp";

const svg = fs.readFileSync("public/kairos-animated-hero.svg", "utf8");
const m = svg.match(/<image[^>]*href="data:image\/png;base64,([^"]+)"/);
if (!m) throw new Error("embedded PNG not found");
const png = Buffer.from(m[1], "base64");
fs.mkdirSync("assets-src", { recursive: true });
fs.writeFileSync("assets-src/hero-roadmap.png", png);
const meta = await sharp(png).metadata();
console.log("png", meta.width, meta.height, "alpha", meta.hasAlpha, (png.length / 1024).toFixed(0) + "KB");
await sharp(png).resize({ width: 1536 }).webp({ quality: 82, effort: 6 }).toFile("public/brand/hero-roadmap.webp");
console.log("webp", (fs.statSync("public/brand/hero-roadmap.webp").size / 1024).toFixed(0) + "KB");
const { data, info } = await sharp(png).raw().toBuffer({ resolveWithObject: true });
const px = (x, y) => Array.from(data.subarray((y * info.width + x) * info.channels, (y * info.width + x) * info.channels + info.channels));
console.log("corners", px(2, 2), px(info.width - 3, 2), px(2, info.height - 3), px(info.width - 3, info.height - 3));
