
import { useEffect, useState } from 'react';

const ParallaxBanner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-96 overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-cover bg-center opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="text-center text-white"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
          }}
        >
          <h2 className="text-6xl font-bold mb-4 drop-shadow-lg">
            Creative Developer
          </h2>
          <p className="text-xl drop-shadow-md">
            Bringing ideas to life with code
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParallaxBanner;
