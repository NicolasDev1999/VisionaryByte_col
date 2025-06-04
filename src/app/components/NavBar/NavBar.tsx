'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-opacity-50 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <h1 className="text-3xl font-bold transition-all hover:text-green-400">VisionaryByte</h1>
          </Link>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-6">
          {['Inicio', 'Proyectos', 'Sobre mí', 'Contacto'].map((label, i) => {
            const path = ['home', 'proyectos', 'sobre-mi', 'contacto'][i];
            return (
              <Link
                key={path}
                href={`/${path}`}
                className="relative group transition-all hover:text-green-400"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-all"></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white transition-all hover:text-green-400"
          >
            {isMobileMenuOpen ? 'Cerrar' : 'Menú'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu animado */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          <Link href="/" className="text-xl hover:text-green-400 transition-all">Inicio</Link>
          <Link href="/proyectos" className="text-xl hover:text-green-400 transition-all">Proyectos</Link>
          <Link href="/sobre-mi" className="text-xl hover:text-green-400 transition-all">Sobre mí</Link>
          <Link href="/contacto" className="text-xl hover:text-green-400 transition-all">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
