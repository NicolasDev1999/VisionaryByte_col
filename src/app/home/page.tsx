import Projects from "../components/Body/Projects";
import SkillsSection from "../components/Body/SkillsSection";
import Articles from "../components/Body/Articles";
import InteractiveCard from "../components/Body/InteractiveCard";

export const metadata = {
  title: 'Mi Portafolio',
  description: 'Bienvenido a mi portafolio',
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-sans">
      <main className="flex-1 py-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4">¡Bienvenido a mi portafolio!</h1>
        <p className="text-xl mb-10">Aquí podrás ver algunos de mis proyectos y habilidades.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="https://github.com" className="p-6 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition">
            <h3 className="text-2xl font-semibold mb-2">Proyecto 1 &rarr;</h3>
            <p>Descripción breve del proyecto 1.</p>
          </a>

          <a href="https://github.com" className="p-6 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition">
            <h3 className="text-2xl font-semibold mb-2">Proyecto 2 &rarr;</h3>
            <p>Descripción breve del proyecto 2.</p>
          </a>
        </div>
         
        <div className="mt-10">
          <a
            href="https://github.com"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Ver más proyectos
          </a>
        </div>
        <SkillsSection />
        <Projects />
        <Articles />
        <InteractiveCard />
        
      </main>

      <footer className="py-4 text-center text-sm text-gray-500">
        <p>Hecho con ❤️ por [Tu Nombre]</p>
      </footer>
    </div>
  );
}
