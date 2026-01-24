import React from 'react'
import { motion } from 'framer-motion'
import { Award,Sparkles,ArrowRight,DollarSign ,Shield,Target } from 'lucide-react'

const Hero = ({waitlistRef}) => {
 
  const handleScroll = () => {
    waitlistRef?.current.scrollIntoView({behavior: 'smooth'})
  }


  return (
     <section className="relative min-h-screen py-20 px-6 pt-40 flex items-center justify-center overflow-hidden" style={{
       backgroundImage: 'linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)',
       backgroundSize: '60px 60px'
     }}>
           
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
              <div className="flex flex-col items-center justify-center">
                {/* Centered Content */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                    className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20 shadow-lg"
                  >
                    <Award className="text-yellow-300" size={18} />
                    <span className="text-white font-semibold text-xs sm:text-sm">
                      Nigeria's Premium Luxury Car Network
                    </span>
                    <Sparkles className="text-yellow-300" size={16} />
                  </motion.div>
    
                  <h1 className="text-4xl md:text-8xl font-bold font-uni text-white mb-6 leading-tight">
                    <motion.span
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className="block "
                    >
                      Your Luxury Car,
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                      className="block text-gradient-gold"
                    >
                      Working for You.
                    </motion.span>
                    <p className='italic text-2xl text-gray-300'>Stop Letting Depreciation Win.</p>
                  </h1>
    
                  <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="max-w-4xl text-md md:text-lg text-gray-200 mb-8 leading-relaxed font-medium"
                  >
                    Luxy connects Nigerian luxury car owners directly with high-net-worth clients and airline demand. Set your price, keep 100% of earnings, and turn your vehicle into a premium income asset.
                  </motion.p>
    
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4"
                  >
              <motion.button
                onClick={handleScroll}
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                        boxShadow: "0 25px 50px rgba(251, 191, 36, 0.4)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex self-center mx-auto items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 font-sans bg-gradient-gold text-primary-foreground font-bold shadow-gold  hover:scale-[1.02] active:scale-[0.98] sm:py-6 py-3 h-14 rounded-lg sm:px-10 px-6 text-lg group"
              >
                
  
                      <span className="relative z-10 flex items-center">
                        JOIN THE EARLY OWNERS LIST
                        <ArrowRight
                          className="ml-2 group-hover:translate-x-1 transition-transform"
                          size={20}
                        />
                      </span>
                    </motion.button>

                  </motion.div>
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