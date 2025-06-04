'use client';
import { motion } from 'framer-motion';
import { FiGlobe, FiSmartphone, FiZap, FiVideo, FiPenTool, FiUserCheck } from 'react-icons/fi';
import Background from './servicebg/Background';

const services = [
  { icon: <FiGlobe size={32} />, title: 'Desarrollo Web', desc: 'Sitios rápidos y estilizados con alma digital.' },
  { icon: <FiSmartphone size={32} />, title: 'Apps con Flutter', desc: 'Apps móviles pulidas que parecen magia.' },
  { icon: <FiZap size={32} />, title: 'Automatizaciones', desc: 'Scripts que trabajan mientras tú sueñas.' },
  { icon: <FiPenTool size={32} />, title: 'Branding Digital', desc: 'Tu marca en esteroides visuales.' },
  { icon: <FiVideo size={32} />, title: 'Video para Redes', desc: 'Ediciones con flow que atrapan miradas.' },
  { icon: <FiUserCheck size={32} />, title: 'Consultorías Técnicas', desc: 'Asesoría con claridad y sin rodeos.' },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section className="relative py-20 px-6 text-white" id="servicios">
      <Background />
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
          Servicios
        </h2>
        <p className="text-lg text-gray-400 mb-12">¿Qué puedo construir para ti?</p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:shadow-neon transition-all"
            >
              <div className="text-cyan-400 mb-4 flex justify-around">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.desc}</p>
              <a
                href="#contacto"
                className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:scale-105 transition-transform"
              >
                Contáctame
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
