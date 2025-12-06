import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative aspect-video bg-white/5 rounded-xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-300">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex]}
            alt={`Screenshot ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center"><span class="text-white/50 text-base">Project Image</span></div>';
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-blue-400 w-6' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "WelthWest.com",
      description: "A scalable AI-driven financial research and backtesting platform enabling real-time market analysis, strategy testing, and intelligent insights through NLP-based automation.",
      images: ["welthwest-1.png", "welthwest-2.png", "welthwest-3.png", "welthwest-4.png"],
      technologies: ["React", "Flask", "MongoDB", "TailwindCSS", "Google Gemini API", "Python"],
      features: [
        "AI-powered financial research & chatbot system for automated market insights",
        "Strategy backtesting engine for evaluating trading performance over historical data",
        "Integrated secure payment gateway enabling subscription-based user access"
      ],
      links: {
        live: "https://welthwest.com",
        github: "#"
      }
    },
    
    {
      title: "Explore Indian Islands",
      description: "Real-time chat application with user authentication, multiple chat rooms, and instant messaging capabilities using WebSocket technology.",
      images: ["homeexplore.png", "andamanhome.png", "imagegallery.png", "cuisine.png"],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      features: [
        "Real-time messaging with WebSockets",
        "User authentication and authorization",
        "Multiple chat rooms support"
      ],
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "SkillMatch Resume Analyzer",
      description: "Resume optimization tool that calculates ATS scores, provides improvement suggestions, and analyzes skill match against job descriptions.",
      images: ["Upload Interface", "ATS Score View", "Suggestions Panel", "Skills Analysis"],
      technologies: ["Python", "NLP", "Streamlit", "Machine Learning"],
      features: [
        "ATS score calculation",
        "Keyword optimization suggestions",
        "Skill gap analysis"
      ],
      links: {
        live: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white">My </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-1 bg-gradient-to-r from-transparent to-blue-400 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              <div className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
                {/* Project Image Carousel */}
                <div className="lg:col-span-2">
                  <ImageCarousel images={project.images} />
                </div>

                {/* Project Details */}
                <div className="lg:col-span-3 space-y-7">
                  {/* Title */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div>
                    <h4 className="text-base uppercase tracking-wider text-gray-500 mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-400 text-base flex items-start gap-3">
                          <span className="text-white/30 mt-1.5">•</span>
                          <span className="font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-base uppercase tracking-wider text-gray-500 mb-4">
                      Technologies Used
                    </h4><br></br>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 text-sm font-light text-gray-300 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <br></br>

                  {/* Links */}
                  <div className="flex gap-4 pt-3">
                    {project.links.live && project.links.live !== "#" && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 text-base font-medium text-white border border-white/20 rounded-md hover:bg-white/5 transition-all duration-200"
                      >
                        View Live →
                      </a>
                    )}
                    {project.links.github && project.links.github !== "#" && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 text-base font-medium text-gray-400 border border-white/10 rounded-md hover:text-white hover:border-white/20 transition-all duration-200"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <br></br>

              {/* Divider */}
              {index < projects.length - 1 && (
                <div className="mt-24 h-px bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
    
  );
  
}