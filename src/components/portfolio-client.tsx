"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  LuArrowUpRight,
  LuDownload,
  LuFileText,
  LuLock,
  LuSparkles,
} from "react-icons/lu";
import type { SlideWithStatus } from "@/src/lib/data/slides";
import { PdfModal } from "./pdf-modal";

const categoryStyles: Record<string, string> = {
  Corporativo: "bg-blue-50 text-blue-700 ring-blue-100",
  Universitário: "bg-cyan-50 text-cyan-700 ring-cyan-100",
  "Sarcoma Fusocelular": "bg-violet-50 text-violet-700 ring-violet-100",
  Palestra: "bg-amber-50 text-amber-700 ring-amber-100",
};

function Cover({
  slide,
  featured = false,
}: {
  slide: SlideWithStatus;
  featured?: boolean;
}) {
  if (slide.cover && slide.coverExists) {
    return (
      <Image
        src={slide.cover}
        alt={`Capa da apresentação ${slide.title}`}
        fill
        sizes={
          featured
            ? "(min-width: 1024px) 760px, 100vw"
            : "(min-width: 1024px) 520px, 100vw"
        }
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 p-6 text-white">
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
          Capa em breve
        </span>
        <LuFileText className="h-5 w-5 text-blue-200" />
      </div>
      <div>
        <div className="mb-4 h-1 w-14 rounded-full bg-blue-300" />
        <p className="max-w-[18rem] text-2xl font-black leading-tight tracking-tight">
          {slide.title}
        </p>
      </div>
    </div>
  );
}

function OpenButton({
  slide,
  featured = false,
  onOpen,
}: {
  slide: SlideWithStatus;
  featured?: boolean;
  onOpen: () => void;
}) {
  if (!slide.pdfExists) {
    return (
      <button
        type="button"
        disabled
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-400"
      >
        <LuLock className="h-4 w-4" />
        Em breve
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
        featured
          ? "bg-slate-950 text-white shadow-lg shadow-slate-950/15 hover:bg-blue-700"
          : "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
      }`}
    >
      {featured ? "Ver apresentação" : "Ver slide"}
      <LuArrowUpRight className="h-4 w-4" />
    </button>
  );
}

function SlideCard({
  slide,
  onOpen,
}: {
  slide: SlideWithStatus;
  onOpen: () => void;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200"
    >
      <button
        type="button"
        onClick={slide.pdfExists ? onOpen : undefined}
        disabled={!slide.pdfExists}
        className="relative block aspect-[16/10] w-full overflow-hidden text-left disabled:cursor-not-allowed"
        aria-label={
          slide.pdfExists
            ? `Abrir slide ${slide.title}`
            : `Slide ${slide.title} em breve`
        }
      >
        <Cover slide={slide} />
      </button>
      <div className="p-6">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] ring-1 ${
            categoryStyles[slide.category] ??
            "bg-slate-100 text-slate-700 ring-slate-200"
          }`}
        >
          {slide.category}
        </span>
        <h3 className="mt-4 text-xl font-black tracking-tight text-slate-950">
          {slide.title}
        </h3>
        <p className="mt-3 min-h-16 text-sm leading-6 text-slate-500">
          {slide.description}
        </p>
        <div className="mt-6">
          <OpenButton slide={slide} onOpen={onOpen} />
        </div>
      </div>
    </motion.article>
  );
}

function FeaturedSlide({
  slide,
  onOpen,
}: {
  slide: SlideWithStatus;
  onOpen: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/70 to-blue-50 shadow-2xl shadow-blue-950/10"
    >
      <div
        aria-hidden="true"
        className="absolute right-8 top-8 h-28 w-28 rounded-full border border-emerald-200/80"
      />
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <button
          type="button"
          onClick={slide.pdfExists ? onOpen : undefined}
          disabled={!slide.pdfExists}
          aria-label={
            slide.pdfExists
              ? `Abrir apresentação ${slide.title}`
              : `Apresentação ${slide.title} em breve`
          }
          className="relative min-h-[320px] overflow-hidden text-left disabled:cursor-not-allowed md:min-h-[440px]"
        >
          <Cover slide={slide} featured />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/60 to-transparent p-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-emerald-700 shadow-sm backdrop-blur">
              <LuSparkles className="h-3.5 w-3.5" />
              Destaque
            </span>
          </div>
        </button>
        <div className="relative flex flex-col justify-center p-7 md:p-10 lg:p-12">
          <span className="mb-4 inline-flex w-fit rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-emerald-800 ring-1 ring-emerald-200">
            Apresentação especial
          </span>
          <h3 className="max-w-xl text-3xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
            {slide.title}
          </h3>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
            {slide.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <OpenButton slide={slide} featured onOpen={onOpen} />
            {slide.pdfExists && (
              <a
                href={slide.pdf}
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Baixar PDF
                <LuDownload className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function PortfolioClient({ slides }: { slides: SlideWithStatus[] }) {
  const [selected, setSelected] = useState<SlideWithStatus | null>(null);
  const reduceMotion = useReducedMotion();
  const featured = slides.find((slide) => slide.featured);
  const regular = slides.filter((slide) => !slide.featured);

  return (
    <section
      id="portfolio"
      className="w-full bg-slate-50 px-6 py-20 md:px-12 md:py-24 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
            Portfólio
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
            Slides em PDF com presença de projeto real.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-500">
            Uma seleção de apresentações criadas para explicar, emocionar e
            orientar decisões com clareza visual.
          </p>
        </motion.div>

        {featured && (
          <div className="mb-8 md:mb-10">
            <FeaturedSlide slide={featured} onOpen={() => setSelected(featured)} />
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {regular.map((slide) => (
            <SlideCard
              key={slide.id}
              slide={slide}
              onOpen={() => setSelected(slide)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <PdfModal slide={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
