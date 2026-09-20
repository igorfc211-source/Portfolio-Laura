import fs from "node:fs";
import path from "node:path";
import { slides, type SlideWithStatus } from "../data/slides";

function publicFileExists(publicPath?: string) {
  if (!publicPath) return false;
  const normalized = publicPath.replace(/^\//, "");
  return fs.existsSync(path.join(process.cwd(), "public", normalized));
}

export function getSlidesWithStatus(): SlideWithStatus[] {
  return slides.map((slide) => ({
    ...slide,
    pdfExists: publicFileExists(slide.pdf),
    coverExists: publicFileExists(slide.cover),
  }));
}
