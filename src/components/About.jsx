import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl"
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
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                About
              </span>
              <span className="text-white"> Me</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-1 bg-gradient-to-r from-transparent to-blue-400 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-purple-400" />
              <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-transparent rounded-full" />
            </div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            I am <span className="text-white font-normal">Rudresh Tiwari</span>, a Full Stack Developer with a strong grounding in Computer Science fundamentals, Data Structures and Algorithms, and System Design principles. I work extensively across Java, Python, TypeScript, React, Node.js, Express, Flask, MongoDB, and MySQL, with a particular interest in architecting scalable, maintainable applications and AI-driven software ecosystems.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            My professional focus lies in backend engineering, automation pipelines, and human-centric UI/UX development. I enjoy tackling complex engineering challenges, optimizing systems for performance and scalability, and translating ideas into elegant, production-ready solutions. Guided by curiosity and technical discipline, I continue to explore domains such as machine learning, distributed computing, cloud infrastructure, and advanced application architecture.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            I view technology as a medium of impact—each line of code is an opportunity to innovate, solve real problems, and engineer systems that are robust, intelligent, and future-ready.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
