"use client";

import { Project } from "../../lib/types/types";

export function CoverMockup({ project }: { project: Project }) {
  return (
    <div className="absolute inset-0 flex flex-col" style={{ background: project.coverBg }}>
      <div className="h-10 flex items-center px-5 gap-2 flex-shrink-0" style={{ borderBottom: `1px solid ${project.coverAccent}22` }}>
        <div className="w-2 h-2 rounded-full" style={{ background: project.coverAccent }} />
        <div className="w-2 h-2 rounded-full" style={{ background: `${project.coverAccent}60` }} />
        <div className="flex-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
      </div>
      <div className="flex-1 flex flex-col justify-between p-5">
        <div className="w-10 h-0.5 rounded-full" style={{ background: project.coverAccent }} />
        <div>
          <div className="h-2 rounded-full mb-2" style={{ width: "65%", background: project.coverAccent, opacity: 0.9 }} />
          <div className="h-1.5 rounded-full mb-1.5" style={{ width: "42%", background: "rgba(255,255,255,0.2)" }} />
          <div className="h-1 rounded-full" style={{ width: "28%", background: "rgba(255,255,255,0.12)" }} />
        </div>
        <div className="flex gap-2">
          {[40, 55, 35, 62, 48].map((h, i) => (
            <div key={i} className="flex-1 rounded-t" style={{ height: h, background: i === 3 ? project.coverAccent : `${project.coverAccent}35` }} />
          ))}
        </div>
      </div>
    </div>
  );
}