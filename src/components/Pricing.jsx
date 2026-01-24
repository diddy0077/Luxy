import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Check,
  Crown,
  Star,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Target,
} from "lucide-react";

const Pricing = () => {
  const nav = useNavigate()
  const plans = [
    {
      name: "Early Bird",
      subtitle: "Pay Less Now",
      price: "₦50,000",
      period: "forever",
      description: "One-time registration, lifetime price",
      badge: "RECOMMENDED",
      badgeColor: "from-yellow-400 to-orange-500",
      popular: true,
      savings: "Save ₦200,000 by registering today!",
      features: [
        "Lifetime renewal at ₦50,000 forever",
        "Get listed before nationwide launch",
        "Become a founding car owner",
        "Earn from day one",
        "Set your own rental price",
        "Keep 100% of what you charge",
        "Instant visibility to travelers & corporate clients",
        "Early access to Luxy's premium tools",
        'Founder-level support',
        'First access'
      ],
      cta: "Register for ₦50,000",
      to: '/join-waitlist',
      ctaStyle:
        "inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 font-sans bg-gradient-gold text-primary-foreground font-bold shadow-gold  hover:scale-[1.02] active:scale-[0.98] py-6 h-14 rounded-lg px-5 text-md group",
      icon: Crown,
      gradient: "from-purple-600 via-pink-500 to-orange-400",
      bgGradient: "from-purple-500/10 via-pink-500/10 to-orange-400/10",
    },
    {
      name: "Standard",
      subtitle: "Pay More Later",
      price: "₦250,000",
      period: "yearly",
      description: "Standard pricing after launch",
      badge: null,
      popular: false,
      features: [
        "Standard renewal price of ₦250,000",
        "No early-owner privileges",
        "Added to waitlist after early customers",
        "Limited visibility at launch",
      ],
      cta: "Join Waitlist",
      to: '/join-waitlist',
      ctaStyle:
        "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800",
      icon: Star,
      gradient: "from-gray-500 to-gray-600",
      bgGradient: "from-gray-500/10 to-gray-600/10",
    },
  ];

  return (
    <section className="py-5 sm:py-0 relative overflow-hidden bg-[#080C16]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#8517B2]/20 to-purple-800/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-purple-500/30"
          >
            <Crown className="text-[#8517B2]" size={20} />
            <span className="text-purple-300 font-semibold">
              Choose Your Path
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Early Bird vs. Standard Pricing
          </h2>
          <p className="text-lg text-gray-300 font-medium max-w-3xl mx-auto">
            Lock in your forever price today or pay 5x more when we launch
            nationwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-gray-800/50 backdrop-blur-md rounded-3xl p-6 shadow-2xl border-2 transition-all duration-500 ${
                plan.popular
                  ? "border-yellow-300 shadow-yellow-500/20"
                  : "border-gray-600/30 hover:border-purple-400/50"
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className={`absolute z-40 -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${plan.badgeColor} text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg`}
                >
                  {plan.badge}
                </motion.div>
              )}

              {/* Header */}
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-card border-2 border-gold-40 mb-4`}
                >
                  <plan.icon className="text-gold" size={28} />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-300 font-medium mb-4">
                  {plan.subtitle}
                </p>

                <div className="mb-4">
                  <span className="text-3xl md:text-4xl font-black text-white">
                    {plan.price}
                  </span>
                  <span className="text-lg text-gray-300 ml-2">
                    / {plan.period}
                  </span>
                </div>

                <p className="text-gray-300 font-medium">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + index * 0.1 + featureIndex * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock w-8 h-8 text-gold mb-4"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    </div>
                    <span className="text-gray-300 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                onClick={()  => nav(plan.to)} 
                className={`w-full py-3 px-4 rounded-2xl text-white font-bold text-base shadow-lg transition-all duration-300 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </motion.button>

              {/* Savings Message */}
              {plan.savings && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="text-center text-green-400 font-bold text-sm mt-4"
                >
                  {plan.savings}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>

        
      
      </div>
    </section>
  );
};

export default Pricing;
