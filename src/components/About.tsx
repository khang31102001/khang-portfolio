
const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">🌟 About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16"></div>
          
          <p className="text-lg text-gray-700 leading-relaxed relative z-10">
            I am a full-stack developer specializing in ReactJS and .NET Core, passionate about building intuitive user interfaces and robust backend systems. I strive to deliver high-quality, scalable software solutions and enjoy working in Agile and collaborative environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
