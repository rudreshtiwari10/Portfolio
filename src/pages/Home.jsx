import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Background from "../components/Background";
import CustomCursor from "../components/CustomCursor";
import Hero from "../components/Hero";
import DynamicIslandNav from "../components/DynamicIslandNav";
import About from "../components/About";
import Skills from "../components/Skills";
import Academics from "../components/Academics";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Internships from "../components/Internships";

export default function Home() {
  console.log('Home component rendering...');

  const [showNav, setShowNav] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Show nav if scrolled past 100px
      if (scrollPosition > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }

      // Determine current section based on scroll position
      const sections = ["home", "about", "skills", "projects", "experience", "academics"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showNav]);

  const handleNavTransform = (show) => {
    setShowNav(show);
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Background */}
      <Background />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* All Content Container */}
      <div className="relative w-full" style={{ zIndex: 10 }}>
        {/* Hero Section with built-in navbar transformation */}
        <Hero onNavTransform={handleNavTransform} isNavbarMode={showNav} />

        {/* Other Sections */}
        <About />
        <Skills />
        <Projects />
        <Internships />
        <Academics />
        <Certifications/>
      </div>

      {/* Footer */}
      <footer className="relative py-12 text-center border-t border-white/10" style={{ zIndex: 10 }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold mb-4">Rudresh Tiwari</h3>
              <p className="text-gray-400 text-sm">Full Stack Developer</p>
             
            </div>

            <div className="text-center">
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="flex gap-4 justify-center">
                <a href="https://github.com/rudreshtiwari10" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/rudresh-tiwari-99bb57297/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>

            <div className=" md:text-right">
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 text-sm">rudraprataptiwari78@gmail.com</p>
               <a href="https://github.com/rudreshtiwari10" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  GitHub 
                </a>
                <br></br>
                <a href="https://www.linkedin.com/in/rudresh-tiwari-99bb57297/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  LinkedIn
                </a>

              
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-gray-400 text-sm">&copy; 2024 Rudresh Tiwari. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}