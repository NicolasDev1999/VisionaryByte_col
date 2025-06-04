'use client';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const cardData = [
  {
    title: "Proyecto 1",
    description: "Descripción de lo que hace el Proyecto 1. Breve pero interesante.",
    imageUrl: "/img/ScrollZoom/zoom.jpg",
    link: "#"
  },
  {
    title: "Proyecto 2",
    description: "Descripción del Proyecto 2. Aquí explicamos más sobre lo que representa.",
    imageUrl: "/img/ScrollZoom/image2.png",
    link: "#"
  },
  {
    title: "Proyecto 3",
    description: "Este es el Proyecto 3. Un resumen sencillo de sus características.",
    imageUrl: "/img/ScrollZoom/image.png",
    link: "#"
  },
];

export default function InteractiveCard() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {cardData.map((card, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className={`relative group rounded-2xl overflow-hidden shadow-xl transition-all duration-500 transform ${
                isMobile ? '' : isActive ? 'scale-105' : 'scale-100'
              }`}
              onClick={() => isMobile && setActiveIndex(isActive ? null : index)}
              onMouseEnter={() => !isMobile && setActiveIndex(index)}
              onMouseLeave={() => !isMobile && setActiveIndex(null)}
            >
              {/* Imagen de fondo */}
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className={`absolute inset-0 bg-black/60 backdrop-blur-md p-6 text-white flex flex-col justify-end transition-all duration-500 ${
                isActive || !isMobile ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-white/80 mb-4">{card.description}</p>
                <div className="flex items-center justify-between">
                  <a
                    href={card.link}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors"
                  >
                    Ver más <ArrowRight size={16} />
                  </a>
                  {isMobile && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveIndex(null);
                      }}
                      className="text-sm text-white/60 hover:text-white"
                    >
                      Cerrar
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
