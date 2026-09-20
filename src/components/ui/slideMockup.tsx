"use client";

import { SlideImage } from "../../lib/types/types";

export function SlideMockup({ slide, size = "md" }: { slide: SlideImage; size?: "sm" | "md" | "lg" }) {
  const h = size === "lg" ? 200 : size === "md" ? 160 : 120;
  const pad = size === "lg" ? 20 : size === "md" ? 16 : 12;

  return (
    <div className="rounded-lg overflow-hidden flex-shrink-0 w-full" style={{ background: slide.bg, height: h, padding: pad, boxShadow: `0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)` }}>
      {slide.layout === "cover" && (
        <div className="flex flex-col justify-between h-full">
          <div className="w-8 h-1 rounded-full" style={{ background: slide.accent }} />
          <div>
            <div className="h-2 rounded-full mb-2" style={{ width: "70%", background: slide.accent, opacity: 0.9 }} />
            <div className="h-1.5 rounded-full mb-1.5" style={{ width: "45%", background: "rgba(255,255,255,0.25)" }} />
            <div className="h-1 rounded-full" style={{ width: "30%", background: "rgba(255,255,255,0.15)" }} />
          </div>
        </div>
      )}
      {slide.layout === "chart" && (
        <div className="flex flex-col h-full">
          <div className="h-1.5 rounded-full mb-3" style={{ width: "40%", background: "rgba(255,255,255,0.3)" }} />
          <div className="flex items-end gap-1.5 flex-1">
            {[35, 55, 28, 70, 45, 62, 38].map((pct, i) => (
              <div key={i} className="flex-1 rounded-t" style={{ height: `${pct}%`, background: i === 3 ? slide.accent : i % 2 === 0 ? `${slide.accent}55` : `${slide.accent}30` }} />
            ))}
          </div>
        </div>
      )}
      {slide.layout === "text" && (
        <div className="flex flex-col justify-between h-full">
          <div className="h-1.5 w-12 rounded-full" style={{ background: slide.accent }} />
          <div className="space-y-2">
            {[75, 60, 80, 50].map((w, i) => (
              <div key={i} className="h-1 rounded-full" style={{ width: `${w}%`, background: i === 0 ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)" }} />
            ))}
          </div>
          <div className="h-5 rounded" style={{ width: "28%", background: `${slide.accent}80` }} />
        </div>
      )}
      {slide.layout === "split" && (
        <div className="flex gap-3 h-full">
          <div className="flex-1 flex flex-col justify-between">
            <div className="h-1.5 rounded-full" style={{ width: "80%", background: slide.accent }} />
            <div className="space-y-1.5">
              {[65, 80, 55].map((w, i) => (
                <div key={i} className="h-1 rounded-full" style={{ width: `${w}%`, background: "rgba(255,255,255,0.2)" }} />
              ))}
            </div>
          </div>
          <div className="w-2/5 rounded-md" style={{ background: `${slide.accent}25` }} />
        </div>
      )}
      {slide.layout === "data" && (
        <div className="flex flex-col h-full">
          <div className="h-1.5 rounded-full mb-3" style={{ width: "35%", background: "rgba(255,255,255,0.3)" }} />
          <div className="grid grid-cols-3 gap-2 flex-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-md flex flex-col items-center justify-center gap-1" style={{ background: i === 1 ? slide.accent : `${slide.accent}20` }}>
                <div className="h-2 w-8 rounded-full" style={{ background: i === 1 ? "rgba(255,255,255,0.9)" : slide.accent }} />
                <div className="h-1 w-5 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}