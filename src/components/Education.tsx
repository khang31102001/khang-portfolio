
import { useState, useEffect } from 'react';

const Education = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const element = document.getElementById('education');
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="education" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"
        style={{
          transform: `translateY(${scrollY * 0.05}px) scale(${isVisible ? 1 : 0.95})`,
          transition: 'transform 0.5s ease-out',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 transform hover:scale-105 transition-transform duration-300">
            🎓 Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded transform hover:w-32 transition-all duration-300"></div>
        </div>
        
        <div 
          className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden transform transition-all duration-1000 hover:scale-105 hover:shadow-2xl ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* 3D background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 transform perspective-1000 rotateX-12"></div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
            <div className="flex-1 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Greenwich Vietnam</h3>
              <p className="text-gray-600 mb-2">(FPT University Partner)</p>
              <p className="text-blue-600 font-semibold mb-2">2019 – 2024</p>
              <p className="text-gray-700"><strong>Major:</strong> Information Technology</p>
              <p className="text-gray-700"><strong>Degree:</strong> Bachelor of Computer Science</p>
            </div>
            <div className="md:w-32 md:h-32 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg transform hover:scale-110 hover:rotate-6 transition-all duration-300 hover:shadow-2xl">
              🎓
            </div>
          </div>

          {/* Floating particles */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-8 right-8 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-6 left-8 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Education;
