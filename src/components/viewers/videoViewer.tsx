"use client";

import { useRef, useState, useEffect } from "react";

export function VideoViewer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
    } else {
      videoRef.current?.pause();
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      const current = videoRef.current.currentTime;
      setProgress((current / duration) * 100);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => setShowControls(false), 3000);
  };

  return (
    <div 
      className="relative w-full h-full bg-black flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlay}
        className="max-h-full max-w-full"
      />
      
      {/* Barra de progresso */}
      <div className={`absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-500 ${showControls ? "opacity-100" : "opacity-0"}`}>
        <div className="max-w-4xl mx-auto">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer">
            <div 
              className="h-full bg-white rounded-full" 
              style={{ width: `${progress}%` }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
