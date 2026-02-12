import { motion } from "framer-motion";

export default function Internships() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "WelthWest AI (OPC) Private Limited",
      period: "July 2025 - Present",
      type: "Internship",
      description: "Co-developed an AI-powered financial analytics and backtesting platform at WelthWest AI, contributing across full-stack engineering, system architecture, LLM integration, and scalable UI/UX design",
      responsibilities: [
        "Co-developing the primary web platform with scalable architecture and modular codebase",
        "Designing modern, intuitive UI/UX interfaces optimized for user flow and analytical visualization",
        "Implementing an advanced payment gateway integration to enable secure user onboarding and subscription-based access",
        "Developing a financial Large Language Model (LLM) for research automation, chatbot interactions, and intelligent market insights",
        "Developing backend services using Node.js, Express, Flask, and structuring APIs for real-time financial analytics",
        "Managing data pipelines and storage using MongoDB and MySQL for high-volume financial data handling",
        "Contributing to AI-driven backtesting engines, strategy automation, and market data processors",
        "Collaborating with the team using Git/GitHub, Agile workflows, CI/CD and clean development practices"
      ]
    }
  ];

  return (
    <section id="experience" className="flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-16 md:py-20 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl backdrop-blur-sm bg-black/20 rounded-3xl p-6 md:p-8 border border-white/5"
      >
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white">Work </span>
              <span className="bg-gradient-to-r from-green-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-1 bg-gradient-to-r from-transparent to-green-400 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-teal-400 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-teal-400" />
              <div className="w-8 h-1 bg-gradient-to-r from-teal-400 to-transparent rounded-full" />
            </div>
          </motion.div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">{exp.title}</h3>
                  <p className="text-xl text-blue-400 mb-1">{exp.company}</p>
                  <p className="text-gray-300 mb-2">{exp.description}</p>
                </div>
                <div className="text-left md:text-right flex-shrink-0">
                  <p className="text-gray-400 text-lg mb-1">{exp.period}</p>
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30 text-sm">
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-400 mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
