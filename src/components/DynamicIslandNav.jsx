import { motion, AnimatePresence } from "framer-motion";

export default function DynamicIslandNav({ isVisible, currentSection }) {
  const menuItems = [
    { name: "About", id: "about" },
    { name: "Academics", id: "academics" },
    { name: "Projects", id: "projects" },
    { name: "Certifications", id: "certifications" },
    { name: "Internships", id: "internships" }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -100, opacity: 0, scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          style={{ position: 'fixed', top: '1.5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 9999 }}
        >
          {/* Glassmorphic Island Container - Larger Size */}
          <div className="relative backdrop-blur-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 border-2 border-white/30 rounded-full shadow-2xl shadow-blue-500/30 px-8 py-4">
            {/* Liquid Effect Overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />

            {/* Glow Effect Behind */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 rounded-full blur-2xl -z-10 opacity-60" />

            {/* Navigation Items */}
            <div className="relative flex items-center gap-2">
              {/* Logo/Name Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 text-base font-bold bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white rounded-full hover:from-blue-500/40 hover:to-purple-500/40 transition-all duration-300 shadow-lg"
              >
                RT
              </motion.button>

              {/* Divider */}
              <div className="w-px h-8 bg-white/30" />

              {/* Menu Items */}
              <div className="flex items-center gap-1">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      relative px-5 py-2.5 text-base font-medium rounded-full
                      transition-all duration-300
                      ${
                        currentSection === item.id
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }
                    `}
                  >
                    {/* Active Indicator */}
                    {currentSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-full shadow-lg"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30
                        }}
                      />
                    )}

                    <span className="relative z-10">{item.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
