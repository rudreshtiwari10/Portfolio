import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero({ onNavTransform, isNavbarMode }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [techIndex, setTechIndex] = useState(0);
  const [isConnectHovered, setIsConnectHovered] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const greetings = ["Hey!", "Hello!", "Hi there!", "Welcome!", "Namaste!"];
  const techStack = ["UI/UX", "Frontend", "Backend", "Databases", "APIs", "Deployment"];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/rudreshtiwari10", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/rudresh-tiwari-99bb57297", icon: "linkedin" },
    { name: "Email", url: "mailto:rudraprataptiwari786@gmail.com", icon: "email" },
    { name: "WhatsApp", url: "https://wa.me/7388551679", icon: "whatsapp" }
  ];

  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);

    const techInterval = setInterval(() => {
      setTechIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);

    return () => {
      clearInterval(greetingInterval);
      clearInterval(techInterval);
    };
  }, []);

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    if (isMobileSidebarOpen) {
      document.body.style.overflow = 'hidden';
      
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileSidebarOpen]);

  const menuItems = [
    { name: "About Me", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Academics", id: "academics" },
    { name: "Certifications", id: "certifications" }
  ];

  const handleMenuClick = (id) => {
    setIsMobileSidebarOpen(false); // Close mobile sidebar
    onNavTransform(true);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const scrollToTop = () => {
    setIsMobileSidebarOpen(false); // Close mobile sidebar
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSocialClick = () => {
    setIsMobileSidebarOpen(false); // Close mobile sidebar on social link click
  };

  return (
    <>
      {/* Mobile Header - Only visible on mobile screens */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[9999] px-6 py-4 backdrop-blur-2xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 border-b border-white/20 shadow-lg lun">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <motion.button
            onClick={scrollToTop}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-400/60 shadow-lg shadow-blue-500/50">
              <img
                src="rudreshimage.png"
                alt="RT"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:0.875rem;font-weight:bold;color:#60a5fa;">RT</div>';
                }}
              />
            </div>
            <span className="text-lg font-black bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Rudresh Tiwari
            </span>
          </motion.button>

          {/* Hamburger Menu Button */}
          <motion.button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <motion.span
              animate={isMobileSidebarOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-blue-400 rounded-full"
            />
            <motion.span
              animate={isMobileSidebarOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-blue-400 rounded-full"
            />
            <motion.span
              animate={isMobileSidebarOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-blue-400 rounded-full"
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setIsMobileSidebarOpen(false)}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="md:hidden fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm z-[9999] overflow-y-auto"
              style={{
                
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 20%, rgba(6, 182, 212, 0.05) 50%, rgba(59, 130, 246, 0.08) 100%)',
                backdropFilter: 'blur(20px) saturate(200%)',
                WebkitBackdropFilter: 'blur(60px) saturate(200%)',
                border: 'none',
                boxShadow: 'none'
              }}
            >
              <div className="relative h-full flex flex-col p-6">
                {/* Close Button & Logo Section */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <motion.button
                    onClick={scrollToTop}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400/60 shadow-lg shadow-blue-500/50">
                      <img
                        src="rudreshimage.png"
                        alt="RT"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:1rem;font-weight:bold;color:#60a5fa;">RT</div>';
                        }}
                      />
                    </div>
                    <span className="text-xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Rudresh Tiwari
                    </span>
                  </motion.button>

                  {/* Close Button */}
                  <motion.button
                    onClick={() => setIsMobileSidebarOpen(false)}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ rotate: 90 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-gray-400 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                {/* All Menu Items - Natural Spacing */}
                <div className="flex-1 overflow-y-auto py-8">
                  <div className="space-y-12">
                    {/* Navigation Menu Items */}
                    {menuItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleMenuClick(item.id)}
                        className="w-full text-left px-6 py-4 mb-6 rounded-xl backdrop-blur-xl bg-white/5 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/10 border border-white/10 hover:border-blue-400/50 transition-all duration-300 group shadow-lg hover:shadow-blue-500/20 "
                      >
                        <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
                          {item.name}
                        </span>
                      </motion.button>
                    ))}

                    {/* Connect Divider */}
                    <div className="flex items-center gap-3 px-2 py-4 mb-6">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-400/60">
                          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                        </div>
                        <span className="text-sm font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                          CONNECT
                        </span>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
                    </div>

                    {/* Social Links */}
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target={link.icon !== "email" ? "_blank" : undefined}
                        rel={link.icon !== "email" ? "noopener noreferrer" : undefined}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (menuItems.length + index) * 0.05 }}
                        onClick={handleSocialClick}
                        className="flex items-center gap-4 px-6 py-4 mb-6 rounded-xl backdrop-blur-xl bg-white/5 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/10 border border-white/10 hover:border-blue-400/40 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                      >
                        {link.icon === "github" && (
                          <svg className="w-6 h-6 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        )}
                        {link.icon === "linkedin" && (
                          <svg className="w-6 h-6 text-[#0077B5] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        )}
                        {link.icon === "email" && (
                          <svg className="w-6 h-6 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        )}
                        {link.icon === "whatsapp" && (
                          <svg className="w-6 h-6 text-gray-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                        )}
                        <span className="text-base font-medium text-gray-300">{link.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Dual Navbar System when in navbar mode - Hidden on mobile */}
      <AnimatePresence>
        {isNavbarMode && (
          <div className="hidden md:flex fixed top-6 left-[5vw] right-[5vw] z-[9999] items-stretch gap-3">
            {/* Main Navigation Navbar */}
            <motion.nav
              initial={{ y: -100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                width: isConnectHovered ? "20%" : "75%"
              }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="relative"
            >
              <div className="relative backdrop-blur-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 border-2 border-white/30 rounded-full shadow-2xl shadow-blue-500/30 px-8 py-4 h-20 overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 rounded-full blur-2xl -z-10 opacity-60" />

                <div className="relative flex items-center justify-between h-full w-full gap-4">
                  {/* Name/Logo Section */}
                  <motion.button
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-2 py-1 whitespace-nowrap flex-shrink-0 group relative"
                  >
                    {/* Profile Image with Glow */}
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400/60 shadow-lg shadow-blue-500/50 flex-shrink-0 ring-2 ring-blue-400/20 ring-offset-2 ring-offset-transparent">
                        <img
                          src="rudreshimage.png"
                          alt="Rudresh Tiwari"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:1rem;font-weight:bold;color:#60a5fa;">RT</div>';
                          }}
                        />
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-40 blur transition-opacity" />
                    </div>
                    {/* Name with Gradient */}
                    <span className="text-xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
                      Rudresh Tiwari
                    </span>
                  </motion.button>

                  {/* Navigation Menu Items - Hidden when Connect is hovered */}
                  <AnimatePresence>
                    {!isConnectHovered && (
                      <>
                        <motion.div
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: "auto", opacity: 1 }}
                          exit={{ width: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-px h-12 bg-white/30"
                        />

                        <motion.div
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: "100%", opacity: 1 }}
                          exit={{ width: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center justify-evenly flex-1"
                        >
                          {menuItems.map((item, index) => (
                            <motion.button
                              key={item.id}
                              onClick={() => handleMenuClick(item.id)}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ scale: 1.08, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="relative px-6 py-3 text-lg font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 whitespace-nowrap"
                            >
                              <span className="relative z-10">{item.name}</span>
                            </motion.button>
                          ))}
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.nav>

            {/* Connect Navbar */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                width: isConnectHovered ? "75%" : "25%"
              }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onMouseEnter={() => setIsConnectHovered(true)}
              onMouseLeave={() => setIsConnectHovered(false)}
              className="relative"
            >
              <div className="relative backdrop-blur-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 border-2 border-white/30 rounded-full shadow-2xl shadow-purple-500/30 px-8 py-4 h-20 overflow-hidden"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 rounded-full blur-2xl -z-10 opacity-60" />

                <div className="relative flex items-center justify-between h-full w-full gap-4">
                  {/* Connect Label - Always visible, centered when not hovered */}
                  <div className={`flex items-center gap-3 px-2 py-1 whitespace-nowrap flex-shrink-0 group relative ${!isConnectHovered ? 'mx-auto' : ''}`}>
                    {/* Icon with Glow Effect */}
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border-2 border-purple-400/60 shadow-lg shadow-purple-500/50 ring-2 ring-purple-400/20 ring-offset-2 ring-offset-transparent">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 group-hover:opacity-40 blur transition-opacity" />
                    </div>
                    {/* Connect Text with Gradient */}
                    <span className="text-xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
                      Connect
                    </span>
                  </div>

                  {/* Social Links - Show on hover */}
                  <AnimatePresence>
                    {isConnectHovered && (
                      <>
                        <motion.div
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: "auto", opacity: 1 }}
                          exit={{ width: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-px h-12 bg-white/30"
                        />

                        <motion.div
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: "100%", opacity: 1 }}
                          exit={{ width: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center justify-evenly flex-1"
                        >
                          {socialLinks.map((link, index) => (
                            <motion.a
                              key={link.name}
                              href={link.url}
                              target={link.icon !== "email" ? "_blank" : undefined}
                              rel={link.icon !== "email" ? "noopener noreferrer" : undefined}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ scale: 1.08, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="group relative flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 whitespace-nowrap"
                            >
                              {link.icon === "github" && (
                                <>
                                  <svg className="w-6 h-6 text-white transition-colors flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-base font-medium text-white">GitHub</span>
                                </>
                              )}
                              {link.icon === "linkedin" && (
                                <>
                                  <svg className="w-6 h-6 text-[#0077B5] transition-colors flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                  </svg>
                                  <span className="text-base font-medium text-white">LinkedIn</span>
                                </>
                              )}
                              {link.icon === "email" && (
                                <>
                                  <svg className="w-6 h-6 text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                  <span className="text-base font-medium text-white">Email</span>
                                </>
                              )}
                              {link.icon === "whatsapp" && (
                                <>
                                  <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                  </svg>
                                  <span className="text-base font-medium text-white">WhatsApp</span>
                                </>
                              )}
                            </motion.a>
                          ))}
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 pt-24 md:pt-20">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left Side - Profile & Menu (desktop only shows menu, mobile shows nothing) */}
          <div className="hidden lg:block lg:col-span-2">
            <AnimatePresence>
              {!isNavbarMode && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center lg:items-start space-y-0 lg:ml-40"
                >
                {/* Profile Image */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                  style={{ marginBottom: '3.5rem' }}
                >
                  <div className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-blue-400/40 shadow-xl shadow-blue-500/20 hover:border-blue-400 transition-all duration-300">
                    <img
                      src="rudreshimage.png"
                      alt="Rudresh Tiwari"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;font-weight:bold;color:#60a5fa;">RT</div>';
                      }}
                    />
                  </div>
                </motion.div>

                {/* Navigation Menu */}
                <div className="space-y-1" style={{ marginLeft: '144px' }}>
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={() => handleMenuClick(item.id)}
                    >
                      <div className="flex items-center space-x-4 py-3">
                        {/* Animated Line */}
                        <motion.div
                          initial={{ width: "2rem" }}
                          animate={{
                            width: hoveredItem === item.id ? "4rem" : "2rem"
                          }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:from-blue-300 group-hover:to-purple-400"
                        />

                        {/* Menu Text */}
                        <span className="text-lg md:text-xl lg:text-2xl font-medium text-gray-400 group-hover:text-white transition-colors duration-300 tracking-wide">
                          {item.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          </div>

          {/* Right Side - Highlights/Greetings */}
          <div className="col-span-1 lg:col-span-3">
          {/* Mobile Profile Image - Only visible on mobile */}
          <AnimatePresence>
            {!isNavbarMode && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:hidden flex justify-center mb-8"
              >
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-400/40 shadow-xl shadow-blue-500/20">
                  <img
                    src="rudreshimage.png"
                    alt="Rudresh Tiwari"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:bold;color:#60a5fa;">RT</div>';
                    }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!isNavbarMode && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col space-y-8 text-center lg:text-left"
              >
                {/* Rotating Greeting */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="overflow-hidden h-12"
                >
                  <AnimatePresence mode="wait">
                    <motion.h2
                      key={greetingIndex}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                    >
                      {greetings[greetingIndex]}
                    </motion.h2>
                  </AnimatePresence>
                </motion.div>

                {/* Name and Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="space-y-2"
                >
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300">
                    I am <span className="font-bold text-white">Rudresh Tiwari</span>
                  </h1>
                  <h3 className="text-xl md:text-2xl font-medium text-blue-400">
                    Full Stack Developer
                  </h3>
                </motion.div>

                {/* Transitioning Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex items-center justify-center lg:justify-start gap-3 flex-wrap"
                >
                  <span className="text-gray-500 text-sm font-light">Specializing in</span>
                  <div className="overflow-hidden h-6">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={techIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="inline-block text-white font-medium text-sm"
                      >
                        {techStack[techIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <span className="text-gray-500 text-sm font-light">•</span>
                  <span className="text-gray-400 text-sm font-light">
                    {techStack.filter((_, i) => i !== techIndex).join(" • ")}
                  </span>
                </motion.div>

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-2xl"
                >
                  Engineering complete end-to-end digital products with performance, scalability, and clean design at the core.
                </motion.p>

                {/* Welcome Message */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="text-sm md:text-base text-gray-500 font-light"
                >
                  Welcome to my digital space. Let's build something amazing together.
                </motion.p>
                <br></br>
                {/* Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
                >
                  {/* GitHub */}
                  <a
                    href="https://github.com/rudreshtiwari10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    title="GitHub"
                  >
                    <svg className="w-6 h-6 text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">GitHub</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/rudresh-tiwari-99bb57297/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    title="LinkedIn"
                  >
                    <svg className="w-6 h-6 text-[#0077B5] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Connect</span>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:rudraprataptiwari786@gmail.com"
                    className="group flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    title="Email"
                  >
                    <svg className="w-6 h-6 text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Get in Touch</span>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/7388551679"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    title="WhatsApp"
                  >
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">WhatsApp</span>
                    <br></br>
                  </a>
                </motion.div>
                <br></br>

                {/* Resume Download Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  className="flex justify-center lg:justify-start pt-8"
                >
                  <a
                    href="Rudreshresume.pdf"
                    download="Rudresh_Tiwari_Resume.pdf"
                    className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 min-w-[280px] overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
                  >
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                    {/* Content Container */}
                    <div className="relative z-10 flex items-center gap-4">
                      {/* Icon Container */}
                      <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 group-hover:border-blue-400/60 transition-all duration-300">
                        <svg className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                        </svg>
                        <div className="absolute inset-0 rounded-xl bg-blue-400/0 group-hover:bg-blue-400/10 transition-colors duration-300" />
                      </div>

                      {/* Text */}
                      <div className="flex flex-col items-start">
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-blue-300 transition-all duration-300">
                          Download Resume
                        </span>
                        <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300 mt-0.5">
                          PDF • Updated Recently
                        </span>
                      </div>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.6,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1.5 h-1.5 bg-blue-500 rounded-full"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}
