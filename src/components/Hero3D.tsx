
import { useState, useEffect } from 'react';

const Hero3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`,
          }}
        />
      </div>
      
      {/* 3D Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.1) 25%, rgba(59, 130, 246, 0.1) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.1) 75%, rgba(59, 130, 246, 0.1) 76%, transparent 77%, transparent),
              linear-gradient(transparent 24%, rgba(59, 130, 246, 0.1) 25%, rgba(59, 130, 246, 0.1) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.1) 75%, rgba(59, 130, 246, 0.1) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px',
            transform: `perspective(1000px) rotateX(60deg) translateZ(-100px)`,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6">
          <span className="text-lg text-blue-600 font-medium">🎯 Hello, I'm</span>
        </div>
        
        <h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * -5}deg) rotateY(${mousePosition.x * 5}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          LÊ MINH KHANG
        </h1>
        
        <h2 
          className="text-2xl md:text-3xl text-gray-700 mb-8 font-light"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * -3}deg) rotateY(${mousePosition.x * 3}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          ReactJS & .NET Developer
        </h2>
        
        <p 
          className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * -2}deg) rotateY(${mousePosition.x * 2}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          Building intuitive user interfaces and robust backend systems with passion for high-quality, scalable software solutions.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-600 mb-12">
          <div className="flex items-center gap-2 transform hover:scale-105 transition-transform">
            <span>📍</span>
            <span>Phu Nhuan, HCMC</span>
          </div>
          <div className="flex items-center gap-2 transform hover:scale-105 transition-transform">
            <span>📧</span>
            <span>leminhkhang.ltp@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 transform hover:scale-105 transition-transform">
            <span>📞</span>
            <span>0394093912</span>
          </div>
        </div>

        <div>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * -3}deg) rotateY(${mousePosition.x * 3}deg)`,
              transition: 'transform 0.1s ease-out, background-color 0.3s, box-shadow 0.3s',
            }}
          >
            Explore My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
