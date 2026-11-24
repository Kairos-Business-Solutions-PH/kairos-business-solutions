// Trims transparent/white padding from the source logos and exports web-sized PNGs into public/brand.
import sharp from "sharp";

const jobs = [
  { src: "assets-src/logo-dark-source.png", out: "public/brand/logo-dark.png" },
  { src: "assets-src/logo-light-source.png", out: "public/brand/logo-light.png" },
];

for (const { src, out } of jobs) {
  const { data, info } = await sharp(src).raw().toBuffer({ resolveWithObject: true });
  const px = (x, y) => Array.from(data.subarray((y * info.width + x) * 4, (y * info.width + x) * 4 + 4));
  console.log(src, "corner", px(0, 0), "center-ish", px(Math.floor(info.width / 2), Math.floor(info.height / 2)));
  const trimmed = await sharp(src).trim({ threshold: 8 }).toBuffer({ resolveWithObject: true });
  console.log("  trimmed", trimmed.info.width, "x", trimmed.info.height, "ratio", (trimmed.info.width / trimmed.info.height).toFixed(3));
  await sharp(trimmed.data)
    .extend({ top: 4, bottom: 4, left: 4, right: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .resize({ width: 900, withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true, quality: 90 })
    .toFile(out);
}

// Favicon / app icon: hourglass mark only, on a white rounded tile so it reads on dark browser chrome.
const t = await sharp("assets-src/logo-dark-source.png").trim({ threshold: 8 }).toBuffer({ resolveWithObject: true });
const markW = Math.round(t.info.height * 0.85);
const mark = await sharp(t.data).extract({ left: 0, top: 0, width: markW, height: t.info.height }).resize({ height: 200 }).png().toBuffer();
const tile = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="256" height="256" rx="48" fill="#fff"/></svg>`);
await sharp(tile).composite([{ input: mark, gravity: "center" }]).png({ compressionLevel: 9, palette: true }).toFile("src/app/icon.png");
await sharp("src/app/icon.png").resize(180).png({ palette: true }).toFile("src/app/apple-icon.png");
