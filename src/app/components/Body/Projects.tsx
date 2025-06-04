'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface GitRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function ProjectsNeon() {
  const [repos, setRepos] = useState<GitRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch('https://api.github.com/users/NicolasDev1999/repos');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: GitRepo[] = await res.json();
        setRepos(data);
      } catch (err) {
        console.error(err);
        setError('Error al cargar proyectos desde GitHub');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading)
    return <div className="text-center text-white py-20">Cargando proyectos...</div>;
  if (error)
    return <div className="text-center text-red-400 py-20">{error}</div>;

  return (
    <section className="py-20 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600 text-transparent bg-clip-text animate-pulse">
          Mis Proyectos
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {repos.map((repo) => (
            <motion.div
              key={repo.id}
              className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-neon hover:scale-105 transition-transform"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-5">
                <h3 className="text-xl font-semibold text-cyan-300">{repo.name}</h3>
                <p className="text-sm text-gray-300 mb-4">
                  {repo.description ?? 'No hay descripción disponible.'}
                </p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:scale-105 transition-transform"
                >
                  Ver Proyecto
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
