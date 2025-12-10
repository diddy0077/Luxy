import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Car, Crown, Sparkles,Tag,LayoutDashboard,Settings } from "lucide-react";
import logo from '../assets/logo-purple.png'
import logo2 from '../assets/l-logo.png'
import { useNavigate, Link,useLocation } from "react-router-dom";



const Header = ({ aboutRef,featureRef,waitlistRef,pricingRef,howItWorksRef,isJoin }) => {
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
    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };
  const nav = useNavigate()

  const navLinks = [
    {
      label: "About",
      ref: aboutRef,
      icon: Crown,
      gradient: "from-purple-400 to-pink-400",
      hideOnPaths: ['/join-waitlist'],
    },
    {
      label: "How it works",
      ref: howItWorksRef,
      icon: Settings,
      gradient: "from-purple-400 to-pink-400",
      hideOnPaths: ['/join-waitlist'],
    },
    {
     label: "Pricing",
      ref: pricingRef,
      icon: Tag,
      gradient: "from-purple-400 to-pink-400",
      hideOnPaths: ['/join-waitlist'],
    },
    {
      label: "Features",
      ref: featureRef,
      icon: Car,
      gradient: "from-blue-400 to-cyan-400",
      hideOnPaths: ['/join-waitlist'],
    },
    {
      label: "Join Waitlist",
      ref: '/join-waitlist',
      to: '/join-waitlist',
      icon: Sparkles,
      gradient: "from-yellow-400 to-orange-400",
      isCTA: true,
    },
  ];

  const location = useLocation(); 
  const currentPath = location.pathname; 

  // 1. Filter the links array based on the current path
  const visibleLinks = navLinks.filter(link => {
    if (!link.hideOnPaths) {
      return true; 
    }
    return !link.hideOnPaths.includes(currentPath);
  });


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
      className={`fixed top-0 left-0 right-0 z-40 pointer-events-auto transition-all duration-500
  ${
    isScrolled
      ? "bg-white/95 backdrop-blur-md shadow-2xl border-b border-purple-100"
      : isJoin
      ? "bg-gradient-to-br from-[#8517B2] via-purple-800 to-indigo-900"
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
                <img src={window.scrollY > 50 ? logo : logo2} alt="Luxy logo" className="w-35 h-35 " />
                </div>
              </Link>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            {visibleLinks.map((link, index) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(link)}
                className={`
                  relative group px-4 py-3 text-sm rounded-2xl font-semibold transition-all duration-300
                  ${
                    link.isCTA
                      ? "bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 text-white shadow-lg hover:shadow-yellow-500/30 ml-12"
                      : isScrolled
                      ? "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                      : "text-white hover:text-yellow-300 hover:bg-white/10"
                  }
                `}
              >
                <div className="flex items-center space-x-2">
                  <link.icon
                    size={18}
                    className={`${
                      link.isCTA ? "text-white" : ""
                    } group-hover:scale-110 transition-transform`}
                  />
                  <span>{link.label}</span>
                </div>

                {/* Gradient border effect for CTA */}
                {link.isCTA && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-600 via-yellow-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    layoutId="cta-glow"
                  />
                )}
              </motion.button>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-3 rounded-2xl transition-all duration-300 ${
              isScrolled
                ? "text-gray-700 hover:bg-purple-50"
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
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-purple-100"
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {visibleLinks.map((link, index) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleNavClick(link.ref)}
                    className={`
                      flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold text-left transition-all duration-300
                      ${
                        link.isCTA
                          ? "bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 text-white shadow-lg"
                          : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                      }
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
