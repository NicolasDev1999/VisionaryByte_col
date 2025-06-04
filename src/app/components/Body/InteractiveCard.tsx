'use client';
import { useState } from 'react';

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
    imageUrl: "/img/ScrollZoom/zoom.jpg",
    link: "#"
  },
  {
    title: "Proyecto 3",
    description: "Este es el Proyecto 3. Un resumen sencillo de sus características.",
    imageUrl: "/img/ScrollZoom/zoom.jpg",
    link: "#"
  },
  // Agrega más proyectos según sea necesario
];

export default function InteractiveCard() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`relative w-80 h-96 bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ${hoveredIndex === index ? 'scale-105' : 'scale-100'}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Imagen de la tarjeta */}
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-full object-cover transition-all duration-300 transform"
            />

            {/* Información que aparece al deslizar */}
            <div
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white transition-transform duration-500 ${hoveredIndex === index ? 'transform translate-y-0' : 'transform translate-y-full'}`}
            >
              <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm mb-4">{card.description}</p>
              <a
                href={card.link}
                className="text-blue-500 hover:underline text-sm font-semibold"
              >
                Ver más
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
