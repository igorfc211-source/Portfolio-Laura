"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Project } from "@/src/lib/types/types";
import { FlipbookViewer } from "../components/viewers/flipbookviewer";
import { VideoViewer } from "../components/viewers/videoViewer";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(onClose, 200);
  }, [onClose]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [handleClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isClosing ? 0 : 1 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col"
    >
      {/* Toolbar Superior */}
      <div className="flex items-center justify-between p-4 md:p-6 text-white z-10">
        <div>
          <h3 className="text-lg font-bold">{project.name}</h3>
          <p className="text-xs text-slate-400">{project.client} · {project.year}</p>
        </div>
        <button 
          onClick={handleClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Fechar modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Área Principal do Viewer */}
      <div className="flex-1 relative">
        {project.previewType === "flipbook" && project.pages ? (
          <FlipbookViewer pages={project.pages} />
        ) : project.previewType === "video" && project.video ? (
          <VideoViewer src={project.video} />
        ) : (
          <div className="flex items-center justify-center h-full text-slate-400">
            Prévia não disponível.
          </div>
        )}
      </div>

      {/* Footer com Link Externo */}
      <div className="p-4 md:p-6 flex justify-center">
        <a
          href={project.presentationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white bg-white/10 hover:bg-white/20 px-6 py-2.5 rounded-full transition-colors"
        >
          Abrir apresentação original ↗
        </a>
      </div>
    </motion.div>
  );
}