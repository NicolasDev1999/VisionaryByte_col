'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    imageDesktop: 'img/Molars_img_desk.png',
    imageMobile: 'img/Molars_img_mob.png',
    title: 'Landing page para startup tech',
    subtitle: 'Diseño responsivo, animaciones interactivas y performance A+',
    cta: 'Ver proyecto',
    href: 'https://mi-proyecto1.com',
  },
  {
    imageDesktop: 'img/EcoBarf_img_desk.png',
    imageMobile: 'img/EcoBarf_img_mob.png',
    title: 'E-commerce personalizado',
    subtitle: 'Integración de pagos, carrito dinámico y panel de admin',
    cta: 'Explorar tienda',
    href: 'https://mi-proyecto2.com',
  },
  {
    imageDesktop: 'img/VB.png',
    imageMobile: 'img/VB.png',
    title: 'Dashboard empresarial',
    subtitle: 'Datos en tiempo real, UX moderna y accesibilidad total',
    cta: 'Probar demo',
    href: 'https://mi-proyecto3.com',
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slide = slides[index];
  const backgroundImage = isMobile ? slide.imageMobile : slide.imageDesktop;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(10,10,30,0.8), rgba(0,0,0,0.95)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.9)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <motion.div
          key={slide.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 max-w-3xl"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(128,0,255,0.8)] animate-pulse">
            {slide.title}
          </h1>
          <p className="text-base md:text-xl text-gray-300 drop-shadow-md">{slide.subtitle}</p>
          <a
            href={slide.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300"
          >
            {slide.cta}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
