'use client';
import { useState, useEffect } from 'react';

interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
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
      },
      {
        id: '2',
        title: 'Componentes en React',
        description: 'Todo lo que necesitas saber sobre los componentes de React.',
        url: 'https://www.example.com',
      },
      {
        id: '3',
        title: 'Cómo optimizar tu página web',
        description: 'Técnicas avanzadas para mejorar el rendimiento de tu sitio web.',
        url: 'https://www.example.com',
      },
    ];

    setTimeout(() => {
      setArticles(mockData);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <div>Cargando artículos...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-8">Últimos Artículos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{article.title}</h3>
              <p className="text-lg text-gray-700 mb-4">{article.description || 'No hay descripción disponible.'}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Leer artículo
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
