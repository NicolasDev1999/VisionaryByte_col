'use client';
import { useState } from 'react';

export default function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // cerrar menú en móvil
    }
  };

  return (
    <nav className="bg-opacity-50 text-white px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          onClick={() => handleScrollTo('home')}
          className="flex items-center space-x-2 cursor-pointer transition hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.7)]"
        >
          <img
            src="/VB.png"
            alt="Logo VisionaryByte"
            className="w-10 h-10 object-contain"
          />
          {/* <span className="hidden md:inline text-2xl font-bold text-white hover:text-green-400 transition">
            VisionaryByte
          </span> */}
        </a>


        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-6">
          {[
            { label: 'Inicio', id: 'home' },
            { label: 'Servicios', id: 'Services' },
            { label: 'Proyectos', id: 'projects' },
            { label: 'Contacto', id: 'contact' },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleScrollTo(id)}
              className="relative group transition-all hover:text-green-400"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-all"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white transition-all hover:text-green-400"
          >
            {isMobileMenuOpen ? 'Cerrar' : 'Menú'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="flex flex-col items-center space-y-4">
          {[
            { label: 'Inicio', id: 'home' },
            { label: 'Servicios', id: 'Services' },
            { label: 'Proyectos', id: 'projects' },
            { label: 'Contacto', id: 'contact' },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleScrollTo(id)}
              className="text-xl hover:text-green-400 transition-all"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav >
  );
}
