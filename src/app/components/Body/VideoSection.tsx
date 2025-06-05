'use client';

import { useRef, useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';

const TOTAL_FRAMES = 35;

function pad(num: number, size: number = 3) {
  return num.toString().padStart(size, '0');
}

export default function ScrollControlledSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Precarga de imágenes
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    const prefix = isMobile
      ? 'lv_0_20250604195628_'
      : 'lv_0_20250604164854_';

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/frames/${prefix}${pad(i)}.jpg`;
      loadedImages.push(img);
    }

    setImages(loadedImages);
  }, [isMobile]);

  // Render de imagenes al hacer scroll
  useEffect(() => {
    if (!canvasRef.current || images.length === 0) return;

    const ctx = canvasRef.current.getContext('2d');
    const canvas = canvasRef.current;

    const render = (frameIndex: number) => {
      const img = images[frameIndex];
      if (!img.complete) return;

      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.clearRect(0, 0, img.width, img.height);
      ctx?.drawImage(img, 0, 0, img.width, img.height);
    };

    const unsubscribe = scrollYProgress.on('change', (progress) => {
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(progress * TOTAL_FRAMES)
      );
      render(frameIndex);
    });

    return () => unsubscribe();
  }, [images, scrollYProgress]);

    return (
    <section ref={containerRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 h-screen w-full">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Capa de sombra degradada */}
        <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* Contenido de texto encima */}
        <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-2xl text-center px-4">
            Siente la magia de la animación
          </h1>
        </div>
      </div>
    </section>
  );
}
