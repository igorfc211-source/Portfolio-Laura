"use client";

import { useState } from "react";
import { Project } from "../lib/types/types";

function CoverMockup({ project }: { project: Project }) {
  return (
    <div className="absolute inset-0 flex flex-col" style={{ background: project.coverBg }}>
      <div
        className="h-10 flex items-center px-5 gap-2 flex-shrink-0"
        style={{ borderBottom: `1px solid ${project.coverAccent}22` }}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: project.coverAccent }} />
        <div className="w-2 h-2 rounded-full" style={{ background: `${project.coverAccent}50` }} />
        <div className="flex-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
      </div>
      <div className="flex-1 flex flex-col justify-between p-5">
        <div className="w-10 h-0.5 rounded-full" style={{ background: project.coverAccent }} />
        <div>
          <div className="h-2 rounded-full mb-2" style={{ width: "65%", background: project.coverAccent, opacity: 0.9 }} />
          <div className="h-1.5 rounded-full mb-1.5" style={{ width: "42%", background: "rgba(255,255,255,0.2)" }} />
          <div className="h-1 rounded-full" style={{ width: "28%", background: "rgba(255,255,255,0.12)" }} />
        </div>
        <div className="flex gap-2 items-end">
          {[38, 55, 30, 62, 45].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{ height: h, background: i === 3 ? project.coverAccent : `${project.coverAccent}35` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function PortfolioCard ({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const isWide = index === 0;

  return (
    <div
      className={`group relative cursor-pointer ${isWide ? "lg:col-span-2" : ""}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Cover */}
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{ height: isWide ? 288 : 224 }}
      >
        <CoverMockup project={project} />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to top, ${project.coverBg}f0 0%, transparent 55%)`,
            opacity: hovered ? 1 : 0.65,
          }}
        >
          <div
            className="transition-transform duration-300"
            style={{ transform: hovered ? "translateY(0)" : "translateY(6px)" }}
          >
            <span
              className="text-[10px] font-bold tracking-[2px] uppercase mb-1.5 block"
              style={{ color: project.coverAccent }}
            >
              {project.category}
            </span>
            <span className="text-white font-serif text-lg font-semibold block leading-snug">
              {project.name}
            </span>
            <span className="text-xs mt-0.5 block" style={{ color: "rgba(255,255,255,0.5)" }}>
              {project.client} · {project.year}
            </span>
          </div>
        </div>

        {/* "Ver projeto" pill */}
        <div
          className="absolute top-4 right-4 flex items-center gap-1.5 bg-white text-[#0F172A] text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-300 shadow-sm"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0) scale(1)" : "translateY(-4px) scale(0.95)",
          }}
        >
          Ver projeto
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 8l6-6M3 2h5v5" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Card info */}
      <div className="pt-3.5 pb-1">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-base font-semibold text-[#0F172A] tracking-tight">{project.name}</h3>
          <span
            className="text-xs font-medium text-blue-600 transition-opacity duration-200"
            style={{ opacity: hovered ? 1 : 0 }}
          >
            {project.category}
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-0.5">{project.client}</p>
      </div>
    </div>
  );
}