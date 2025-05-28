
const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">🎓 Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Greenwich Vietnam</h3>
              <p className="text-gray-600 mb-2">(FPT University Partner)</p>
              <p className="text-blue-600 font-semibold mb-2">2019 – 2024</p>
              <p className="text-gray-700"><strong>Major:</strong> Information Technology</p>
              <p className="text-gray-700"><strong>Degree:</strong> Bachelor of Computer Science</p>
            </div>
            <div className="md:w-32 md:h-32 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              🎓
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
