'use client';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa'; // Importar iconos de react-icons

export default function SkillsSection() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-8">Mis Habilidades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Habilidad 1: HTML */}
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-6xl text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">HTML</h3>
            <div className="w-full bg-gray-300 rounded-full h-2 mt-4">
              <div className="bg-orange-600 h-2 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>

          {/* Habilidad 2: CSS */}
          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-6xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">CSS</h3>
            <div className="w-full bg-gray-300 rounded-full h-2 mt-4">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>

          {/* Habilidad 3: React */}
          <div className="flex flex-col items-center">
            <FaReact className="text-6xl text-cyan-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">React</h3>
            <div className="w-full bg-gray-300 rounded-full h-2 mt-4">
              <div className="bg-cyan-600 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>

          {/* Habilidad 4: Node.js */}
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-6xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Node.js</h3>
            <div className="w-full bg-gray-300 rounded-full h-2 mt-4">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
