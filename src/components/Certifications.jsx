import { useState } from "react";
import { motion } from "framer-motion";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    { 
      name: "Programming in Java", 
      issuer: "NPTEL (IIT Kharagpur)", 
      year: "2025",
      img: "/javanptel.png",
      learning: "Core Java, OOP concepts, multithreading, exception handling."
    },
    { 
      name: "Database Management Systems", 
      issuer: "NPTEL (IIT Kharagpur)", 
      year: "2025",
      img: "/dbms.png",
      learning: "Relational models, SQL, transaction control, normalization."
    },
    { 
      name: "Design & Analysis of Algorithms", 
      issuer: "NPTEL (IIT Kharagpur)", 
      year: "2024",
      img: "/daa.png",
      learning: "Time complexity, greedy, divide & conquer, dynamic programming."
    },
    { 
      name: "MERN Full-Stack Development", 
      issuer: "Apna College", 
      year: "2025",
      img: "/MERN.png",
      learning: "React, Node, Express, MongoDB, full-stack application building."
    },
    { 
      name: "Data Structures & Algorithms", 
      issuer: "Apna College", 
      year: "Oongoing",
      learning: "Array, LinkedList, Tree, Graphs & problem-solving skills."
    },
  ];

  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24 py-16 bg-transparent">
      <div className="w-full max-w-6xl backdrop-blur-sm bg-black/20 rounded-3xl p-6 md:p-8 border border-white/5">
        
        <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          <span className="text-blue-400">Certifications</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {certifications.map((cert, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col md:flex-row gap-5 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-purple-500/50">
              
              {/* LEFT IMAGE SECTION */}
              <div className="flex justify-center items-center md:w-1/2">
                <img src={cert.img} alt={cert.name}
                  onClick={() => setSelectedCert(cert.img)}
                  className="w-full rounded-lg cursor-pointer hover:scale-105 duration-300 border border-purple-400/30" />
              </div>

              {/* RIGHT DETAILS SECTION */}
              <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                <p className="text-purple-400 font-medium">{cert.issuer}</p>
                <p className="text-gray-300 text-sm">{cert.year}</p>
                <p className="text-gray-400 mt-2">{cert.learning}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* POPUP IMAGE VIEWER */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50">
            <div className="relative max-w-3xl flex flex-col items-center">
              <button 
                onClick={() => setSelectedCert(null)}
                className="mb-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
              >
                ✕ Close
              </button>
              <img src={selectedCert} className="rounded-lg shadow-xl w-full border border-white/20" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}