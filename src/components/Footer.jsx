import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

const Footer = () => {

  return (
    <>
      {/* Arrow Divider */}
      <div className="relative -mb-1">
        <svg
          className="w-full h-16 md:h-20 fill-current text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      </div>

      {/* Modern Footer */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.1),transparent_50%)]"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-400/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pink-400/30 rounded-full animate-pulse delay-500"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30"></div>
                  <img
                    src="/logo-purple.png"
                    alt="Luxy"
                    className="relative h-12 w-auto filter brightness-0 invert"
                  />
                </motion.div>
                <span className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                  Luxy
                </span>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Revolutionizing car rental for African owners with 
                <span className="text-purple-400 font-semibold"> smart technology</span>, 
                <span className="text-pink-400 font-semibold"> transparent systems</span>, and 
                <span className="text-yellow-400 font-semibold"> real income opportunities</span>.
              </p>
              
              <div className="flex items-center space-x-2 text-yellow-400">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="font-semibold">Launching Soon - Join the Waitlist</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              {[
                { name: 'About Us', href: '#about' },
                { name: 'How It Works', href: '#how-it-works' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'Dashboard', href: '#dashboard' },
                { name: 'Features', href: '#features' }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
              {[
                { icon: Mail, text: 'hello@luxy.africa', href: 'mailto:hello@luxy.africa' },
                { icon: Phone, text: '+234 (0) 123 456 789', href: 'tel:+234123456789' },
                { icon: MapPin, text: 'Lagos, Nigeria', href: '#' }
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  <contact.icon size={16} />
                  <span>{contact.text}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 mb-12 border border-purple-500/20"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Luxy
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest updates on our launch, exclusive early access offers, and car rental tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Social Media & Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 font-medium">Follow us:</span>
                {[
                  { icon: Facebook, href: "#", color: "hover:text-blue-400" },
                  { icon: Twitter, href: "#", color: "hover:text-blue-300" },
                  { icon: Instagram, href: "#", color: "hover:text-pink-400" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-400 ${social.color} transition-all duration-200 p-2 rounded-lg hover:bg-white/10`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>

              {/* Copyright & Legal */}
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
                <span>© 2024 Luxy. All rights reserved.</span>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  )
}

export default Footer