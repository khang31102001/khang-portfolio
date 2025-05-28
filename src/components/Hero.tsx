
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6">
          <span className="text-lg text-blue-600 font-medium">🎯 Hello, I'm</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent animate-fade-in">
          LÊ MINH KHANG
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
          ReactJS & .NET Developer
        </h2>
        
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Building intuitive user interfaces and robust backend systems with passion for high-quality, scalable software solutions.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-600">
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>Phu Nhuan, HCMC</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📧</span>
            <span>leminhkhang.ltp@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span>0394093912</span>
          </div>
        </div>

        <div className="mt-12">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Explore My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
