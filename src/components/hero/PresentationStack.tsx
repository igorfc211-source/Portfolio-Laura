"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Project } from "@/src/lib/types/types";

export function PresentationStack({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), { stiffness: 150, damping: 20 });

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, projects.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div 
      className="relative w-full max-w-[500px] h-[320px] md:h-[400px] [perspective:1200px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsPaused(true)}
    >
      {projects.map((project, index) => {
        const offset = index - active;
        const isActive = index === active;
        
        // Calcula posição no stack
        const zIndex = projects.length - Math.abs(offset);
        const scale = isActive ? 1 : 1 - Math.abs(offset) * 0.05;
        const y = isActive ? 0 : Math.abs(offset) * 20;
        const blur = isActive ? 0 : Math.abs(offset) * 2;
        const opacity = Math.abs(offset) > 2 ? 0 : 1;

        return (
            <motion.a
            key={project.id}
            href={project.presentationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl cursor-pointer outline-none"
            style={{
              zIndex,
              opacity,
              filter: `blur(${blur}px)`,
              backgroundColor: project.coverAccent, // Adiciona a cor de fundo enquanto a imagem carrega
              rotateX: isActive ? rotateX : 0,
              rotateY: isActive ? rotateY : 0,
              transformStyle: "preserve-3d",
            }}
            animate={{
              scale,
              y,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            tabIndex={isActive ? 0 : -1}
          >
          <Image
  src={project.cover}
  alt={`Capa: ${project.name}`}
  fill
  // Se existir coverBlur, usa blur. Senão, usa "empty" (fundo normal).
  placeholder={project.coverBlur ? "blur" : "empty"}
  blurDataURL={project.coverBlur}
  className="object-cover pointer-events-none"
  sizes="(max-width: 768px) 100vw, 500px"
  priority={index < 2}
/>
            {/* Gradiente para legenda */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-xs uppercase tracking-widest opacity-80">{project.category}</p>
              <h3 className="text-xl font-bold">{project.name}</h3>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}
