'use client';

export default function Footer() {
  return (
    <footer className="w-full px-6 py-8 border-t border-white/10 bg-transparent backdrop-blur-sm text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        <p className="text-center text-white/70">
          © {new Date().getFullYear()} VisionaryByte. Todos los derechos reservados.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:text-cyan-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:text-cyan-400"
          >
            LinkedIn
          </a>
          <a
            href="/contacto"
            className="transition-all hover:text-cyan-400"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
