import fs from "node:fs";
import path from "node:path";
import { createCanvas, loadImage } from "@napi-rs/canvas";
import { pdf } from "pdf-to-img";

const root = process.cwd();
const slidesDir = path.join(root, "public", "media", "slides");
const coversDir = path.join(root, "public", "media", "covers");
const maxWidth = 1200;

const expectedSlides = [
  "metodologia-5s",
  "antidepressivos-na-vet",
  "sarcoma-fusocelular",
  "etica-da-complexidade",
  "plante-e-floresca",
];

fs.mkdirSync(coversDir, { recursive: true });

for (const slug of expectedSlides) {
  const pdfPath = path.join(slidesDir, `${slug}.pdf`);
  const coverPath = path.join(coversDir, `${slug}.webp`);

  if (!fs.existsSync(pdfPath)) {
    console.log(`Ignorado: ${slug}.pdf nao encontrado.`);
    continue;
  }

  const document = await pdf(pdfPath, { scale: 2, format: "png" });
  const firstPage = await document.getPage(1);
  const image = await loadImage(firstPage);
  const width = Math.min(image.width, maxWidth);
  const height = Math.round((image.height / image.width) * width);
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  context.drawImage(image, 0, 0, width, height);
  fs.writeFileSync(coverPath, canvas.toBuffer("image/webp", 82));
  document.destroy();
  console.log(`Capa criada: public/media/covers/${slug}.webp`);
}
