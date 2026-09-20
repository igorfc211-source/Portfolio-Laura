"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function FlipbookViewer({ pages }: { pages: string[] }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => Math.min(Math.max(prev + dir, 0), pages.length - 1));
  }, [pages.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [paginate]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-slate-950">
      <div className="relative w-full max-w-4xl h-[60vh] md:h-[70vh] [perspective:1500px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, rotateY: direction > 0 ? 45 : -45, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            exit={{ opacity: 0, rotateY: direction > 0 ? -45 : 45, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.4, ease: smoothEase }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x * velocity.x;
              if (swipe < -10000) paginate(1);
              else if (swipe > 10000) paginate(-1);
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing rounded-xl overflow-hidden shadow-2xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src={pages[current]}
              alt={`Slide ${current + 1}`}
              fill
              className="object-contain pointer-events-none"
              sizes="(max-width: 768px) 100vw, 1000px"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controles minimalistas */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-6 text-white">
        <button 
          onClick={() => paginate(-1)} 
          disabled={current === 0}
          className="p-3 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 disabled:opacity-30 transition-colors"
        >
          ←
        </button>
        <span className="text-sm font-mono w-16 text-center">
          {current + 1} / {pages.length}
        </span>
        <button 
          onClick={() => paginate(1)} 
          disabled={current === pages.length - 1}
          className="p-3 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 disabled:opacity-30 transition-colors"
        >
          →
        </button>
      </div>
    </div>
  );
}
