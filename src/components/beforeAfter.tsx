"use client";

import { useState, useRef } from "react";
import { beforeAfters } from "../lib/data/data";
import { FadeIn, SectionEyebrow, SectionTitle } from "../components/ui/ui-components";

export function BeforeAfterSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section id="antes-depois" className="w-full bg-[#FAFAFA] py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionEyebrow text="Transformação" />
            <SectionTitle highlight="resultados reais.">Antes e Depois —</SectionTitle>
            <p className="text-sm text-[#6B7280] mt-4 max-w-lg mx-auto leading-relaxed">
              Veja a diferença que um design profissional faz na comunicação visual de uma apresentação.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex justify-center gap-2 mb-10">
            {beforeAfters.map((item, i) => (
              <button key={item.id} onClick={() => { setActiveIndex(i); setSliderPosition(50); }} className={`text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200 ${activeIndex === i ? "bg-purple-700 text-white border-purple-700" : "bg-white text-[#6B7280] border-[#E5E7EB] hover:border-purple-300"}`}>
                {item.title}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div ref={containerRef} className="relative rounded-2xl overflow-hidden cursor-ew-resize select-none" style={{ height: 400 }} onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)} onMouseDown={(e) => handleMove(e.clientX)} onTouchMove={(e) => handleMove(e.touches[0].clientX)} onTouchStart={(e) => handleMove(e.touches[0].clientX)}>
              {/* AFTER */}
              <div className="absolute inset-0 bg-[#0F172A] p-8 flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <div className="w-2 h-2 rounded-full bg-purple-300" />
                  <div className="flex-1 h-1.5 bg-white/20 rounded-full" />
                </div>
                <div className="h-2 w-[60%] bg-purple-500 rounded-full mb-3" />
                <div className="h-1.5 w-[40%] bg-white/30 rounded-full mb-6" />
                <div className="flex items-end gap-2 flex-1 mb-4">
                  {[35, 55, 28, 70, 45, 62, 38].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i === 3 ? "#7C3AED" : i % 2 === 0 ? "#DDD6FE" : "#C4B5FD" }} />
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="rounded-lg p-3" style={{ background: i === 1 ? "#7C3AED" : "rgba(124,58,237,0.15)" }}>
                      <div className="h-2 w-12 rounded-full mb-1" style={{ background: i === 1 ? "white" : "#7C3AED" }} />
                      <div className="h-1 w-8 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
                    </div>
                  ))}
                </div>
                <div className="absolute top-4 right-4 bg-purple-700 text-white text-[10px] font-semibold px-3 py-1.5 rounded-full">DEPOIS</div>
              </div>

              {/* BEFORE */}
              <div className="absolute inset-0 bg-white border border-[#E5E7EB] p-8 flex flex-col overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#D1D5DB]" />
                  <div className="w-2 h-2 rounded-full bg-[#D1D5DB]" />
                  <div className="flex-1 h-1.5 bg-[#E5E7EB] rounded-full" />
                </div>
                <div className="h-2 w-[90%] bg-[#E5E7EB] rounded-full mb-2" />
                <div className="h-2 w-[85%] bg-[#E5E7EB] rounded-full mb-2" />
                <div className="h-2 w-[80%] bg-[#E5E7EB] rounded-full mb-2" />
                <div className="h-2 w-[88%] bg-[#E5E7EB] rounded-full mb-6" />
                <div className="h-2 w-[75%] bg-[#E5E7EB] rounded-full mb-2" />
                <div className="h-2 w-[70%] bg-[#E5E7EB] rounded-full mb-2" />
                <div className="h-2 w-[82%] bg-[#E5E7EB] rounded-full mb-6" />
                <div className="grid grid-cols-2 gap-3 flex-1">
                  <div className="bg-[#F3F4F6] rounded h-full" />
                  <div className="bg-[#F3F4F6] rounded h-full" />
                </div>
                <div className="absolute top-4 left-4 bg-[#E5E7EB] text-[#6B7280] text-[10px] font-semibold px-3 py-1.5 rounded-full">ANTES</div>
              </div>

              {/* Slider handle */}
              <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10" style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border border-[#E5E7EB]">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2v8M8 2v8" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-[#6B7280] mb-2">
                <span className="font-medium text-[#111111]">{beforeAfters[activeIndex].title}</span> — {beforeAfters[activeIndex].category}
              </p>
              <div className="flex items-center justify-center gap-8 text-xs text-[#6B7280]">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#E5E7EB]" /><span>{beforeAfters[activeIndex].beforeDescription}</span></div>
                <div className="w-px h-4 bg-[#E5E7EB]" />
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-700" /><span>{beforeAfters[activeIndex].afterDescription}</span></div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}