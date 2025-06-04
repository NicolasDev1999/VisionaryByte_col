'use client';
import { useState, useEffect } from 'react';

export default function StrongScrollParallaxComponent() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex justify-center items-center">
      <div className="flex items-center space-x-8 max-w-7xl mx-auto">
        {/* Imagen con movimiento y zoom fuerte */}
        <div
          className="relative w-1/2 h-96 overflow-hidden rounded-xl shadow-xl"
          style={{
            transform: `translateY(${scrollY * 0.4}px) scale(${1 + scrollY * 0.003})`, // Zoom fuerte y parallax fuerte
            transition: 'transform 0.1s ease-out',
          }}
        >
          <img
            src="/img/ScrollZoom/zoom.jpg"
            alt="Imagen de ejemplo"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Texto */}
        <div className="w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Impactante Título</h2>
          <p className="text-lg text-gray-700">
            Este es un texto con un parallax de desplazamiento fuerte que hace que la imagen se mueva y aumente de tamaño
            conforme haces scroll. La animación y la interacción con el usuario están diseñadas para ser impresionantes y
            destacadas.
          </p>
        </div>
      </div>
    </div>
  );
}
