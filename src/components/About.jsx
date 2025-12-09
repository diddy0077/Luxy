import React from 'react'
import { motion } from 'framer-motion'
import { Award,Car,Zap,Shield,Target } from 'lucide-react'


const About = ({aboutRef}) => {
  return (
    <section ref={aboutRef} className="py-16 relative overflow-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(133,23,178,0.05),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(251,191,36,0.05),transparent_50%)]"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-2 mb-4 border border-purple-200"
            >
              <Award className="text-purple-600" size={20} />
              <span className="text-purple-800 font-semibold">
                Revolutionary Platform
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 bg-clip-text text-transparent">
                Luxy?
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your vehicle into a profit-generating asset with
              cutting-edge technology and unmatched security.
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="relative bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-2xl p-8 shadow-xl border border-purple-100 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/3 via-transparent to-yellow-400/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  viewport={{ once: true }}
                  className="flex justify-center mb-6"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30"></div>
                    <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-4">
                      <Car className="text-white" size={32} />
                    </div>
                  </div>
                </motion.div>

                {/* Description */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Where Technology Meets{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Opportunity
                    </span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Luxy revolutionizes how car owners monetize their vehicles
                    through intelligent automation, verified customers, and
                    bulletproof security systems.
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Zap,
                      title: "Smart Automation",
                      description:
                        "AI-powered booking management with instant confirmations and automated scheduling.",
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      icon: Shield,
                      title: "Verified Network",
                      description:
                        "Every renter is thoroughly vetted with identity verification and background checks.",
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      icon: Target,
                      title: "Guaranteed Payments",
                      description:
                        "Escrow-protected transactions ensure you get paid every time, on time.",
                      color: "from-purple-500 to-pink-500",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center group/feature bg-white rounded-lg p-4 shadow-md"
                    >
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} mb-3 group-hover/feature:shadow-lg transition-all`}
                      >
                        <item.icon className="text-white" size={20} />
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mt-8"
                >
                  <p className="text-gray-700 leading-relaxed">
                    Turn your car into a{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                      passive income machine
                    </span>{" "}
                    while you focus on what matters most.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  )
}

export default About