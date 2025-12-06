import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "C", "Python"]
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Flask"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Version Control",
      skills: ["Git", "GitHub"]
    },
    {
      title: "CS Fundamentals",
      skills: ["Data Structures & Algorithms"]
    }
  ];

  return (
    <section id="skills" className="relative py-16 md:py-20 px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto w-full"
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
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-1 bg-gradient-to-r from-transparent to-purple-400 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-purple-400" />
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Skills Grid with Card Background */}
        <div className="backdrop-blur-sm bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="space-y-4"
              >
                {/* Category Title */}
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <div className="w-1 h-6 bg-blue-500/50 rounded-full" />
                  <h3 className="text-base font-medium text-white uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-3 pl-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="group"
                    >
                      <div className="text-gray-300 text-base font-light hover:text-white transition-colors duration-300 cursor-default flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-blue-400 group-hover:shadow-lg group-hover:shadow-blue-400/50 transition-all duration-300" />
                        {skill}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
