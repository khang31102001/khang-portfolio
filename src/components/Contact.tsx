
const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">📎 Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <span>leminhkhang.ltp@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <span>0394093912</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <span>Phu Nhuan, HCMC</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">Online Presence</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔗</span>
                <a href="https://github.com/khang31102001" className="hover:text-blue-300 transition-colors">github.com/leminhkhang</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌐</span>
                <a href="#" className="hover:text-blue-300 transition-colors">leminhkhang.dev</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📱</span>
                <span>Wood Import/Export Management App</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-gray-300">
          <p>&copy; 2024 Lê Minh Khang. Built with ReactJS & Vite.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
