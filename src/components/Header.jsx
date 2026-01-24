import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Car, Crown, Sparkles,Tag,LayoutDashboard,Settings,ArrowRight } from "lucide-react";
import logo from '../assets/logo-purple.png'
import logo2 from '../assets/l-logo.png'
import { useNavigate, Link,useLocation } from "react-router-dom";



const Header = ({ isJoin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    setIsMobileMenuOpen(false);
    if (ref?.current) {
      setTimeout(() => {
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  };
  const nav = useNavigate()

  const navLinks = [
    {
      label: "Join Early Access",
      ref: '/join-waitlist',
      to: '/join-waitlist',
      icon: ArrowRight,
      isCTA: true,
    },
  ];

  const location = useLocation(); 


  // 1. Filter the links array based on the current path
 


 const handleNavClick = (link) => {
  if (link.to) {
    nav(link.to);
  } else {
    scrollToSection(link.ref);
  }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 pointer-events-auto transition-all duration-500
  ${
    isScrolled
      ? "bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-purple-500/20"
      : isJoin
      ? ""
      : "bg-transparent"
  }
`}

    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to='/'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-50"
              />
             
              <Link to='/'>
                 <div className="relative pointer-events-auto">
                <img src={window.scrollY > 50 ? logo2 : logo2} alt="Luxy logo" className="w-35 h-35 " />
                </div>
              </Link>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(link)}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-gradient-gold text-primary-foreground font-bold shadow-gold  hover:scale-[1.02] active:scale-[0.98] py-3 rounded-lg px-5 text-sm group"
              >
                <div className="flex items-center space-x-2">
                  
                  <span>{link.label}</span>
                  <link.icon
                    size={18}
                    className={`${
                      link.isCTA ? "text-black" : ""
                    } group-hover:scale-110 transition-transform`}
                  />
                </div>

                
              </motion.button>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-3 rounded-2xl transition-all duration-300 ${
              isScrolled
                ? "text-gray-300 hover:bg-purple-900/30"
                : "text-white hover:bg-white/10"
            }`}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-purple-500/20"
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleNavClick(link)}
                    className={`inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-gradient-gold text-primary-foreground font-bold shadow-gold hover:scale-[1.02] active:scale-[0.98] py-3 rounded-lg px-5 text-sm group ${
                      link.isCTA
                        ? "bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 text-white shadow-lg"
                        : "text-gray-300 hover:text-purple-400 hover:bg-purple-900/30"
                    } flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold text-left transition-all duration-300
                    `}
                  >
                    <link.icon size={20} />
                    <span>{link.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};





export default Header;
