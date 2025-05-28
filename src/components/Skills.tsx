
const Skills = () => {
  const technicalSkills = {
    "Frontend": ["ReactJS", "JavaScript", "TypeScript", "Next.js", "Flutter", "HTML", "Tailwind CSS"],
    "Backend": ["ASP.NET Core", "ASP.NET Web API", "C#", "Laravel"],
    "Database": ["MySQL", "SQL Server", "NoSQL"],
    "Tools": ["GitHub", "Vercel", "Postman"],
    "Other": ["RESTful APIs", "JWT Authentication", "Wireframe Design", "Debugging"]
  };

  const softSkills = [
    "Effective Communication",
    "Team Collaboration", 
    "Problem Solving",
    "Self-learning & Independence",
    "Time Management",
    "Ability to Work Under Pressure"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">🛠 Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="font-semibold text-gray-800 mb-3">{category}:</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => (
                      <span key={idx} className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🤝 Soft Skills</h3>
            <div className="grid grid-cols-1 gap-3">
              {softSkills.map((skill, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-purple-800 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Objective */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">🎯 Career Objective</h3>
          <p className="text-lg leading-relaxed">
            To become a professional Full-stack Developer contributing to impactful software solutions. In the next 1–2 years, I aim to work in a forward-thinking tech company where I can apply my skills to real-world projects, especially in scalable web and mobile development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
