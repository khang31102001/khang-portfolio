
const Experience = () => {
  const experiences = [
    {
      company: "Bach Long Mobile",
      position: "Frontend Developer",
      period: "Aug 2024 – Present",
      description: [
        "Designed UI wireframes and developed interfaces using Next.js for an e-commerce system.",
        "Maintained daily website operations on Magento platform.",
        "Integrated and handled data from GraphQL APIs to enhance performance and scalability.",
        "Collaborated with cross-functional teams and proposed AI integrations for operational efficiency."
      ],
      technologies: ["ReactJS", "Next.js", "GraphQL", "Tailwind CSS", "Magento"],
      current: true
    },
    {
      company: "NATA Technology JSC",
      position: "Full-stack Developer (Intern)",
      period: "Jan 2024 – May 2024",
      description: [
        "Developed a cross-platform mobile app for wood import/export management using Flutter.",
        "Built backend services with Laravel, optimized MySQL databases, and created RESTful APIs.",
        "Worked closely with team leads to analyze requirements and implement system features."
      ],
      technologies: ["Laravel", "Flutter", "MySQL", "RESTful API"],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">💼 Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              {exp.current && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Current
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">🔸 {exp.company} — {exp.position}</h3>
                <p className="text-blue-600 font-semibold">{exp.period}</p>
              </div>
              
              <ul className="space-y-2 mb-6">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div>
                <p className="text-gray-600 font-semibold mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
