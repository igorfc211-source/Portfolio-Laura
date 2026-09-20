"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LuDownload, LuExternalLink, LuFileText, LuX } from "react-icons/lu";
import type { SlideWithStatus } from "@/src/lib/data/slides";

function ModalCover({ slide }: { slide: SlideWithStatus }) {
  if (slide.cover && slide.coverExists) {
    return (
      <Image
        src={slide.cover}
        alt={`Capa da apresentação ${slide.title}`}
        fill
        sizes="100vw"
        className="object-cover"
      />
    );
  }

  return (
    <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-blue-950 via-slate-950 to-slate-900 text-center text-white">
      <div>
        <LuFileText className="mx-auto mb-5 h-12 w-12 text-blue-200" />
        <p className="text-2xl font-black tracking-tight">{slide.title}</p>
      </div>
    </div>
  );
}

export function PdfModal({
  slide,
  onClose,
}: {
  slide: SlideWithStatus;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [showMobileFallback, setShowMobileFallback] = useState(() =>
    typeof window === "undefined"
      ? false
      : window.matchMedia("(max-width: 767px)").matches
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex='-1'])"
        )
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const handleMediaChange = (event: MediaQueryListEvent) =>
      setShowMobileFallback(event.matches);
    mobileQuery.addEventListener("change", handleMediaChange);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      mobileQuery.removeEventListener("change", handleMediaChange);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col bg-slate-950 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-modal-title"
      ref={dialogRef}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-slate-950/95 px-4 py-3 backdrop-blur md:px-6">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
            Apresentação
          </p>
          <h3 id="pdf-modal-title" className="text-base font-bold md:text-lg">
            {slide.title}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={slide.pdf}
            download
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <LuDownload className="h-4 w-4" />
            Baixar PDF
          </a>
          <a
            href={slide.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <LuExternalLink className="h-4 w-4" />
            Abrir em nova aba
          </a>
          <button
            type="button"
            onClick={onClose}
            ref={closeRef}
            aria-label="Fechar visualização do PDF"
            className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-950 transition-colors hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <LuX className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative flex-1 bg-slate-900">
        {showMobileFallback ? (
          <div className="grid h-full place-items-center p-6">
            <div className="w-full max-w-sm text-center">
              <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <ModalCover slide={slide} />
              </div>
              <p className="text-sm leading-6 text-slate-300">
                Se o PDF não abrir embutido no seu navegador, use uma das opções
                abaixo para visualizar ou baixar o arquivo.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={slide.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white"
                >
                  Abrir em nova aba
                </a>
                <a
                  href={slide.pdf}
                  download
                  className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white"
                >
                  Baixar
                </a>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            title={`PDF da apresentação ${slide.title}`}
            src={slide.pdf}
            className="h-full w-full border-0"
            loading="lazy"
          />
        )}
      </div>
    </motion.div>
  );
}
