import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Pricing from "../components/Pricing";
import Dashboard from "../components/Dashboard";
import { useToast } from "../components/CustomToast";
import Hero from "../components/Hero";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";

import {
  Car,
  DollarSign,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Instagram,
  Twitter,
  Facebook,
  Sparkles,
  Zap,
  Award,
  Target,
  Crown,
  Gem,
  TrendingUp as Growth,
  CreditCard,
  Clock3,
  Brain,
  UserCheck,
  Monitor,
  Headphones,
  Percent,
  Lock,
  Split,
} from "lucide-react";


const HomePage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentlyRents: "",
    carMake: "",
    carModel: "",
    carYear: "",
  });
  const { showToast } = useToast();

  const carMakes = [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Volkswagen",
    "Nissan",
    "Hyundai",
    "Kia",
    "Mazda",
    "Lexus",
    "Acura",
    "Infiniti",
    "Cadillac",
    "Lincoln",
    "Other",
  ];

  const currentYear = new Date().getFullYear();
  const carYears = Array.from({ length: 20 }, (_, i) => currentYear - i);

  const aboutRef = useRef(null);
  const featureRef = useRef(null);
  const waitlistRef = useRef(null);
  const pricingRef = useRef(null);
  const howItWorksRef = useRef(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    showToast(
      "Thank you for joining the Luxy waitlist! We'll be in touch soon."
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        aboutRef={aboutRef}
        featureRef={featureRef}
        waitlistRef={waitlistRef}
        pricingRef={pricingRef}
        howItWorksRef={howItWorksRef}
        isJoin={false}
      />
      <Hero waitlistRef={waitlistRef} />

      {/* Dashboard Preview Section */}
      {/* <section className="py-16 bg-gray-50" ref={dashboardRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#8517B2]/10 to-purple-100 rounded-full px-6 py-3 mb-6 border border-purple-200"
            >
              <TrendingUp className="text-[#8517B2]" size={20} />
              <span className="text-[#8517B2] font-semibold">
                Dashboard Preview
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              See Your{" "}
              <span className="bg-gradient-to-r from-[#8517B2] via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Dashboard
              </span>{" "}
              in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Preview how your car rental business dashboard will look once
              you're onboarded to Luxy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Dashboard />
          </motion.div>
        </div>
      </section> */}

      <div ref={pricingRef}>
        <Pricing />
      </div>

      <About aboutRef={aboutRef} />
      {/* Features Section */}
      <section ref={featureRef} className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8517B2] via-purple-800 to-indigo-900"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(251,191,36,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20"
            >
              <Sparkles className="text-yellow-300" size={20} />
              <span className="text-yellow-300 font-semibold">
                Why Car Owners Love Luxy
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
              Comprehensive tools designed to maximize your car rental business
              potential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: "AI Demand Prediction",
                description: "Smart algorithms predict peak rental periods.",
                color: "from-purple-400 to-indigo-500",
                bgGradient: "from-purple-500/20 to-indigo-600/20",
                borderGradient: "from-purple-400/50 to-indigo-500/50",
              },
              {
                icon: UserCheck,
                title: "Driver Assignment",
                description:
                  "Automated matching with verified professional drivers.",
                color: "from-blue-400 to-cyan-500",
                bgGradient: "from-blue-500/20 to-cyan-600/20",
                borderGradient: "from-blue-400/50 to-cyan-500/50",
              },
              {
                icon: Monitor,
                title: "All-in-One Platform",
                description:
                  "Complete rental business management in one place.",
                color: "from-green-400 to-emerald-500",
                bgGradient: "from-green-500/20 to-emerald-600/20",
                borderGradient: "from-green-400/50 to-emerald-500/50",
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description: "Round-the-clock assistance for car owners.",
                color: "from-orange-400 to-red-500",
                bgGradient: "from-orange-500/20 to-red-600/20",
                borderGradient: "from-orange-400/50 to-red-500/50",
              },
              {
                icon: Percent,
                title: "Keep 100% Earnings",
                description:
                  "Luxy does NOT take any commission from your rental income.",
                color: "from-yellow-400 to-orange-500",
                bgGradient: "from-yellow-500/20 to-orange-600/20",
                borderGradient: "from-yellow-400/50 to-orange-500/50",
              },
              {
                icon: Lock,
                title: "Secure Bookings",
                description:
                  "Verified travelers and secure payment processing.",
                color: "from-pink-400 to-rose-500",
                bgGradient: "from-pink-500/20 to-rose-600/20",
                borderGradient: "from-pink-400/50 to-rose-500/50",
              },
              {
                icon: Split,
                title: "Auto Earnings Split",
                description:
                  "Automated earnings distribution between owner and driver.",
                color: "from-indigo-400 to-purple-500",
                bgGradient: "from-indigo-500/20 to-purple-600/20",
                borderGradient: "from-indigo-400/50 to-purple-500/50",
              },
              {
                icon: Shield,
                title: "Verified Network",
                description:
                  "Every renter is thoroughly vetted with identity verification.",
                color: "from-teal-400 to-cyan-500",
                bgGradient: "from-teal-500/20 to-cyan-600/20",
                borderGradient: "from-teal-400/50 to-cyan-500/50",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`relative bg-gradient-to-br ${feature.bgGradient} backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all group cursor-pointer`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.borderGradient} opacity-50`}
                ></div>

                <div className="relative z-10 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:shadow-lg transition-all relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <feature.icon className="relative text-white" size={20} />
                  </motion.div>

                  <h3 className="text-sm font-bold text-white mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-purple-100 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <HowItWorks howItWorksRef={howItWorksRef} />

      {/* Enhanced Benefits Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(133,23,178,0.08),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(251,191,36,0.08),transparent_50%)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#8517B2]/10 to-purple-100 rounded-full px-6 py-3 mb-6 border border-purple-200"
            >
              <Star className="text-[#8517B2]" size={20} />
              <span className="text-[#8517B2] font-semibold">
                Exclusive Benefits
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join the{" "}
              <span className="bg-gradient-to-r from-[#8517B2] via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Waitlist Now
              </span>
            </h2>
            <p className="text-lg text-gray-700 font-medium max-w-2xl mx-auto">
              By joining the Luxy waitlist, you'll enjoy these exclusive
              advantages:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Early Access",
                description: "Get exclusive early access before public launch",
                icon: Target,
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-500/10 to-pink-500/10",
                borderColor: "border-purple-200 hover:border-purple-300",
              },
              {
                title: "Reduced Fees",
                description:
                  "Enjoy dramatically reduced signup fees for early partners",
                icon: DollarSign,
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-500/10 to-emerald-500/10",
                borderColor: "border-green-200 hover:border-green-300",
              },
              {
                title: "Get Featured",
                description:
                  "Have your car featured during Luxy's launch campaign",
                icon: Award,
                color: "from-yellow-500 to-orange-500",
                bgColor: "from-yellow-500/10 to-orange-500/10",
                borderColor: "border-yellow-200 hover:border-yellow-300",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`relative bg-gradient-to-br ${benefit.bgColor} backdrop-blur-sm rounded-xl p-6 border ${benefit.borderColor} transition-all duration-300 group cursor-pointer`}
              >
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.color} mb-4 group-hover:shadow-lg transition-all`}
                  >
                    <benefit.icon className="text-white" size={20} />
                  </motion.div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full px-6 py-3 border border-yellow-200">
              <Sparkles className="text-orange-600" size={18} />
              <span className="text-orange-700 font-semibold text-sm">
                Limited Time Opportunity
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Contact Form Section */}
      <section ref={waitlistRef} className="py-20 relative overflow-hidden">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(124,58,237,0.02)_50%,transparent_75%)] bg-[length:20px_20px]"></div>

        {/* Floating accent elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  viewport={{ once: true }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2 border border-purple-200"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-purple-700 font-medium text-sm">
                    Join the Future of Car Rentals
                  </span>
                </motion.div>

                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Ready to Start
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent block">
                    Earning Today?
                  </span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Join thousands of car owners who are already earning with
                  Luxy. It takes less than 5 minutes to get started.
                </p>
              </div>

              {/* Benefits list */}
              <div className="space-y-4">
                {[
                  "✓ No upfront fees or hidden costs",
                  "✓ Keep 100% of your rental income",
                  "✓ Professional driver matching included",
                  "✓ 24/7 customer support & protection",
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-green-600" size={12} />
                    </div>
                    <span className="text-gray-700 font-medium">
                      {benefit.replace("✓ ", "")}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl shadow-purple-500/10 border border-gray-100 overflow-hidden">
                {/* Form header */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Join the Waitlist
                  </h3>
                  <p className="text-purple-100">
                    Get early access and exclusive benefits
                  </p>
                </div>

                {/* Form content */}
                <div className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                        Personal Information
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 placeholder-gray-400 outline-none"
                            placeholder="John Doe"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 placeholder-gray-400 outline-none"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 placeholder-gray-400 outline-none"
                          placeholder="+234 xxx xxx xxxx"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Do you currently rent out your car? *
                        </label>
                        <select
                          name="currentlyRents"
                          value={formData.currentlyRents}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 outline-none"
                        >
                          <option value="">Select an option</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    </div>

                    {/* Vehicle Information */}
                    <div className="space-y-4 pt-6 border-t border-gray-100">
                      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                        Vehicle Information
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Car Make *
                          </label>
                          <select
                            name="carMake"
                            value={formData.carMake}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 outline-none"
                          >
                            <option value="">Select car make</option>
                            {carMakes.map((make) => (
                              <option key={make} value={make}>
                                {make}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Car Model *
                          </label>
                          <input
                            type="text"
                            name="carModel"
                            value={formData.carModel}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 placeholder-gray-400 outline-none"
                            placeholder="e.g., Camry, Accord"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Car Year *
                        </label>
                        <select
                          name="carYear"
                          value={formData.carYear}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 outline-none"
                        >
                          <option value="">Select car year</option>
                          {carYears.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <span>Join the Waitlist</span>
                        <ArrowRight
                          className="ml-2 group-hover:translate-x-1 transition-transform"
                          size={20}
                        />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>

                    <p className="text-xs text-gray-500 text-center">
                      By joining, you agree to our terms of service and privacy
                      policy. We'll only contact you about Luxy updates.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      
    </div>
  );
};

export default HomePage;
