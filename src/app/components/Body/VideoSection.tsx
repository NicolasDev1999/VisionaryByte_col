'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

export default function ScrollControlledVideo() {
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  // Map scroll progress to video playback
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (progress) => {
      const video = videoRef.current;
      if (video) {
        const duration = video.duration || 14; // fallback to 14s
        video.currentTime = progress * duration;
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section className="relative w-full h-[300vh] bg-black" ref={containerRef}>
      {/* Video Fijo */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          playsInline
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Overlay de texto con sombra tornasol */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white text-center bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600 text-transparent bg-clip-text animate-pulse shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Siente la experiencia
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl text-white/90 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Desliza para vivir el momento.
          </motion.p>
        </div>

        {/* Sombra tornasol animada */}
        <div className="absolute inset-0 z-0 pointer-events-none animate-gradient-tornasol"></div>
      </div>
    </section>
  );
}
