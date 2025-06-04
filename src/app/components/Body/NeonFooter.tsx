export default function NeonFooter() {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-gray-200 relative overflow-hidden select-none">
      {/* Fondo animado con SVG - efecto abstracto suave */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="30" />
          </filter>
        </defs>
        <circle cx="200" cy="200" r="150" fill="url(#grad1)" filter="url(#blur)">
          <animate
            attributeName="cx"
            values="200;600;200"
            dur="20s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="600" cy="150" r="100" fill="url(#grad1)" filter="url(#blur)">
          <animate
            attributeName="cx"
            values="600;200;600"
            dur="25s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo + Branding */}
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-10 h-10 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l9 21H3L12 2z" />
            </svg>
          </div>
          
        </div>

        {/* Navegación */}
        <nav className="flex flex-wrap justify-center gap-10 font-semibold text-lg text-gray-300">
          {['Inicio', 'Proyectos', 'Servicios', 'Sobre mí', 'Contacto'].map((item) => (
            <a
              key={item}
              href="#"
              className="relative group cursor-pointer transition-colors hover:text-white"
            >
              {item}
              <span
                className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 transition-all group-hover:w-full"
                aria-hidden="true"
              ></span>
            </a>
          ))}
        </nav>

        {/* Redes Sociales */}
        <div className="flex gap-8 text-gray-300 hover:text-white transition-colors">
          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group"
          >
            <svg
              className="w-7 h-7 group-hover:text-pink-500 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .5C5.7.5.5 5.7.5 12.2c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.3.8-.6v-2.1c-3.1.7-3.7-1.5-3.7-1.5-.5-1.3-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.3 1.2 2.8.9.1-.7.3-1.2.6-1.5-2.5-.3-5.1-1.3-5.1-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.4.1-3 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.9 0c2.1-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.7.1 3 .8.8 1.2 1.8 1.2 3.1 0 4.5-2.6 5.5-5.1 5.8.4.4.7 1 .7 2v3c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.7 18.3.5 12 .5z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group"
          >
            <svg
              className="w-7 h-7 group-hover:text-pink-500 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.98 3.5C3.34 3.5 2 4.85 2 6.5s1.34 3 2.98 3 3-1.35 3-3-1.36-3-3-3zM2.4 8.9h5.2V21H2.4zM9.4 8.9h5v1.7h.1c.7-1.3 2.5-2.7 5.1-2.7 5.4 0 6.4 3.5 6.4 8V21h-5.2v-6.3c0-1.5 0-3.5-2.1-3.5-2.1 0-2.4 1.6-2.4 3.4V21h-5.2z" />
            </svg>
          </a>
          {/* Twitter */}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="group"
          >
            <svg
              className="w-7 h-7 group-hover:text-pink-500 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14.86 4.48 4.48 0 0 0 1.96-2.47c-.88.52-1.86.9-2.9 1.1A4.52 4.52 0 0 0 16.3 2c-2.54 0-4.6 2.08-4.6 4.65 0 .36.04.7.12 1.03-3.82-.2-7.2-2.03-9.46-4.82a4.56 4.56 0 0 0-.62 2.34c0 1.6.82 3.02 2.07 3.85a4.5 4.5 0 0 1-2.09-.57v.06c0 2.27 1.57 4.15 3.65 4.57a4.56 4.56 0 0 1-2.08.08c.59 1.8 2.3 3.12 4.32 3.16A9 9 0 0 1 2 19.54a12.74 12.74 0 0 0 6.92 2.02c8.3 0 12.85-6.9 12.85-12.87 0-.2 0-.41-.02-.6A9.3 9.3 0 0 0 23 3z" />
            </svg>
          </a>
        </div>
      </div>

      <p className="relative z-10 text-center text-gray-400 text-sm select-text pb-6">
        &copy; 2025 Nico. Todos los derechos reservados.
      </p>
    </footer>
  );
}
