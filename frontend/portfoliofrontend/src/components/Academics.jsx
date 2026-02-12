import { motion } from "framer-motion";

export default function Academics() {
  return (
    <section id="academics" className="flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-16 md:py-20 bg-transparent">
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
              <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Academic
              </span>
              <span className="text-white"> Background</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-1 bg-gradient-to-r from-transparent to-orange-400 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-orange-400" />
              <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-8 h-1 bg-gradient-to-r from-yellow-400 to-transparent rounded-full" />
            </div>
          </motion.div>
        </div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                  Bachelor of Technology
                </h3>
                <p className="text-xl text-teal-400 mb-2">Computer Science and Engineeering</p>
                <p className="text-xl text-blue-400 mb-2">SR Institue of Management and Technology</p>
              </div>
              <div className="text-left md:text-right">
                
                <div className="mt-2">
                    <br></br>
                  <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30 font-semibold">
                    2022-2026
                  </span>
                </div>
              </div>
            </div>

            {/* <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-400 mb-2">Key Subjects</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>• Data Structures & Algorithms</li>
                  <li>• Object-Oriented Programming</li>
                  <li>• Database Management Systems</li>
                  <li>• Operating Systems</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-400 mb-2">Achievements</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>• Consistent 8+ CGPA throughout</li>
                  <li>• Active participation in coding competitions</li>
                  <li>• Multiple HackerRank certifications</li>
                </ul>
              </div>
            </div> */}
            <br></br>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                  Senior Secondary 
                </h3>
                <p className="text-xl text-teal-400 mb-2">  Central Boards of Secondary Education </p>
                <p className="text-xl text-blue-400 mb-2">Ram Lakhan Public school , Varanasi </p>
                
              </div>
              <div className="text-left md:text-right">
                <br></br>
                <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30 font-semibold">
                    2020-2021
                  </span>
                <div className="mt-2">
                  
                </div>
              </div>
            </div>
            <br></br>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                  High school
                </h3>
                <p className="text-xl text-teal-400 mb-2">  Central Boards of Secondary Education </p>
                <p className="text-xl text-blue-400 mb-2">Ram Lakhan Public school , Varanasi </p>
                
              </div>
              <div className="text-left md:text-right">
                <br></br>
                <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30 font-semibold">
                    2018-2019
                  </span>
                <div className="mt-2">
                  
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}