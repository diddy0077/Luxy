import React from 'react'
import { motion } from 'framer-motion'
import { Award,Sparkles,ArrowRight,DollarSign ,Shield,Target } from 'lucide-react'

const Hero = () => {
  return (
     <section className="relative min-h-screen py-20 flex items-center justify-center overflow-hidden">
           
            <div className="absolute inset-0 bg-gradient-to-br from-[#8517B2] via-purple-800 to-indigo-900"></div>
    
           
            <div className="absolute inset-0">
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                  filter: "brightness(0.7) contrast(1.1) saturate(1.2)",
                }}
              />
    
              {/* Car Image Overlay Effects */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 1 }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"
              />
    
              {/* Additional Car Enhancement Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,215,0,0.05),transparent_40%)]"
              />
            </div>
    
            {/* Enhanced Gradient Overlays for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,black/30)]"></div>
    
            {/* Premium Ambient Effects */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-10 right-10 w-[32rem] h-[32rem] bg-gradient-to-r from-yellow-400/20 to-pink-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.25, 0.1],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-20 left-20 w-[40rem] h-[40rem] bg-gradient-to-r from-purple-400/25 to-indigo-600/25 rounded-full blur-3xl"
            />
    
            {/* Floating Geometric Elements Around Car */}
            <motion.div
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-32 left-32 w-20 h-20 border-2 border-yellow-300/40 rounded-xl rotate-45 backdrop-blur-sm"
            />
            <motion.div
              animate={{
                y: [0, 25, 0],
                x: [0, -20, 0],
                rotate: [360, 180, 0],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-48 right-40 w-16 h-16 border-2 border-pink-300/40 rounded-full backdrop-blur-sm"
            />
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-40 left-1/4 w-12 h-12 border-2 border-blue-300/30 rounded-lg transform rotate-12 backdrop-blur-sm"
            />
    
            {/* Hero Content with Enhanced Layout */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-left"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                    className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20 shadow-lg"
                  >
                    <Award className="text-yellow-300" size={18} />
                    <span className="text-white font-semibold">
                      AI-Powered Platform
                    </span>
                    <Sparkles className="text-yellow-300" size={16} />
                  </motion.div>
    
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    <motion.span
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className="block"
                    >
                      Let Your Car{" "}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                      className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent"
                    >
                      Work Smarter
                    </motion.span>
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0, duration: 0.8 }}
                      className="text-2xl md:text-3xl font-medium text-purple-100 mt-4"
                    >
                      with{" "}
                      <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-bold">
                        Luxy
                      </span>
                    </motion.p>
                  </h1>
    
                  <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="text-lg md:text-xl text-purple-100 mb-8 leading-relaxed font-medium"
                  >
                    Turn your vehicle into a profit-generating asset with our{" "}
                    <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-semibold">
                      AI-powered platform
                    </span>
                    , connecting you with verified renters for seamless earnings.
                  </motion.p>
    
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4"
                  >
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                        boxShadow: "0 25px 50px rgba(251, 191, 36, 0.4)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-2xl hover:shadow-yellow-500/30 transition-all overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-yellow-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 flex items-center">
                        Join the Waitlist
                        <ArrowRight
                          className="ml-2 group-hover:translate-x-1 transition-transform"
                          size={20}
                        />
                      </span>
                    </motion.button>
    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.6, duration: 0.8 }}
                      className="flex items-center space-x-2 text-purple-200"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">
                        Launching in Nigeria Soon
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>
    
                {/* Right Content - Stats/Cards */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="space-y-6"
                >
                  {/* Key Benefits Cards */}
                  {[
                    {
                      icon: DollarSign,
                      title: "Earn More",
                      description: "Turn your parked car into passive income",
                      gradient: "from-green-400 to-emerald-600",
                      delay: 1.8,
                    },
                    {
                      icon: Shield,
                      title: "100% Secure",
                      description: "Verified renters with escrow protection",
                      gradient: "from-blue-400 to-cyan-600",
                      delay: 2.0,
                    },
                    {
                      icon: Target,
                      title: "Full Control",
                      description: "Set your prices and availability",
                      gradient: "from-purple-400 to-pink-600",
                      delay: 2.2,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: item.delay, duration: 0.6 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all group"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center group-hover:shadow-lg transition-all`}
                        >
                          <item.icon className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">
                            {item.title}
                          </h3>
                          <p className="text-purple-200 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
    
            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-white/60 rounded-full mt-2"
                />
              </motion.div>
            </motion.div>
          </section>
  )
}

export default Hero