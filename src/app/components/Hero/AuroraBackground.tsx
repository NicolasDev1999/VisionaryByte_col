'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AuroraThreeJS() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
 
  useEffect(() => {
    let mauseX = 0;
    let mauseY = 0;


    const handleMauseMove = (event: MouseEvent) => {
      mauseX = event.clientX;
      mauseY = event.clientY;
    }
    window.addEventListener('mousemove', handleMauseMove);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current!, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Fondo transparente  

    // Mantener el canvas dentro del div sin desbordar
    const canvasContainer = document.getElementById('canvas-container');
    if (canvasContainer) {
      canvasContainer.appendChild(renderer.domElement);
    }

    // Crear una aurora boreal con partículas
    const loader = new THREE.TextureLoader();
    const auroraGeometry = loader.load('./img/ScrollZoom/particle2.png');
    const particles = new THREE.BufferGeometry();
    const particleMaterial = new THREE.PointsMaterial({map: auroraGeometry, color: 0xFFAA, size: 10 , sizeAttenuation: true, transparent: true, opacity: 0.8 });

    const particlePositions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
       particlePositions[i * 3] = Math.random() * 2000 - 1000; // x
      particlePositions[i * 3 + 1] = Math.random() * 1000 - 500; // y
      particlePositions[i * 3 + 2] = Math.random() * 2000 - 1000; // z
    }
    particles.setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3));

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 500;

    // Animación de partículas
    const animate = () => {
      requestAnimationFrame(animate);

      particleSystem.rotation.x +=(mauseY * 0.5/ window.innerHeight) * 0.01;
      particleSystem.rotation.y += (mauseX * 0.5 / window.innerWidth) * 0.01;
      particleSystem.rotation.z += (mauseX * 0.5 / window.innerWidth) * 0.01;
      particleSystem.material.opacity = 0.8 + Math.sin(Date.now() * 0.001) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // Resizer
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMauseMove);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden" id="canvas-container">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>
      <div className="relative z-10 text-white text-center py-50">
        <h1 className="text-5xl font-bold">Bienvenido a mi sitio web</h1>
        <p className="mt-4 text-lg">Conoce mis proyectos y habilidades.</p>
      </div>
    </div>
  );
}
