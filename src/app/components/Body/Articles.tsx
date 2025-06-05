'use client';
import { useState, useEffect } from 'react';
import { FaFileDownload } from 'react-icons/fa';

interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
  pdf: string;
}

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const mockData: Article[] = [
      {
        id: '1',
        title: 'Introducción a Next.js',
        description: 'Aprende a crear tu primer proyecto con Next.js.',
        url: 'https://www.example.com',
        pdf: '/pdfs/nextjs.pdf',
      },
      {
        id: '2',
        title: 'Componentes en React',
        description: 'Todo sobre componentes y hooks modernos en React.',
        url: 'https://www.example.com',
        pdf: '/pdfs/react-componentes.pdf',
      },
      {
        id: '3',
        title: 'Optimización Web',
        description: 'Mejora el rendimiento de tu sitio web como un profesional.',
        url: 'https://www.example.com',
        pdf: '/pdfs/optimizacion.pdf',
      },
      {
        id: '4',
        title: 'Diseño UI/UX efectivo',
        description: 'Claves visuales para retener usuarios.',
        url: 'https://www.example.com',
        pdf: '/pdfs/uiux.pdf',
      },
      {
        id: '5',
        title: 'Autenticación con Firebase',
        description: 'Crea login seguro con Firebase Auth y Firestore.',
        url: 'https://www.example.com',
        pdf: '/pdfs/firebase-auth.pdf',
      },
      {
        id: '6',
        title: 'Deploy con Vercel y GitHub',
        description: 'Publica tus proyectos como un dev pro.',
        url: 'https://www.example.com',
        pdf: '/pdfs/deploy-vercel.pdf',
      },
    ];

    setTimeout(() => {
      setArticles(mockData);
      setLoading(false);
    }, 1200);
  }, []);

  if (loading) return <div className="text-white text-center py-20">Cargando artículos...</div>;

  return (
    <div className="min-h-screen bg-black/60 px-6 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12 drop-shadow-lg">Temas de Asesoría y Recursos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-gradient-to-br from-gray-900/60 to-gray-800/70 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl transition hover:shadow-2xl hover:scale-105 duration-300">
              <h3 className="text-2xl font-semibold text-white mb-3">{article.title}</h3>
              <p className="text-gray-300 mb-4">{article.description}</p>
              <div className="flex justify-between items-center">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition underline"
                >
                  Leer artículo
                </a>
                <a
                  href={article.pdf}
                  download
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition"
                >
                  <FaFileDownload className="text-lg" />
                  Descargar PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
