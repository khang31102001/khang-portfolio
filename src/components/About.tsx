
import { useState, useEffect } from 'react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Parallax background elements */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollY * 0.1}px) translateX(${scrollY * 0.05}px)`,
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-100/50 to-blue-100/50 rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollY * -0.1}px) translateX(${scrollY * -0.05}px)`,
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 transform hover:scale-105 transition-transform duration-300">
            🌟 About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded transform hover:w-32 transition-all duration-300"></div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-500 group">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></div>
          </div>
          
          {/* 3D floating elements */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full transform rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-pink-100 to-blue-100 rounded-lg transform -rotate-12 group-hover:rotate-12 transition-transform duration-500"></div>
          
          <p className="text-lg text-gray-700 leading-relaxed relative z-10 transform group-hover:scale-105 transition-transform duration-300">
            I am a full-stack developer specializing in ReactJS and .NET Core, passionate about building intuitive user interfaces and robust backend systems. I strive to deliver high-quality, scalable software solutions and enjoy working in Agile and collaborative environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
