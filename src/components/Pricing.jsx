import React from "react";
import { motion } from "framer-motion";
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
      ],
      cta: "Register for ₦50,000",
      ctaStyle:
        "bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 hover:from-yellow-500 hover:via-orange-600 hover:to-yellow-700",
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
      ctaStyle:
        "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800",
      icon: Star,
      gradient: "from-gray-500 to-gray-600",
      bgGradient: "from-gray-500/10 to-gray-600/10",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(133,23,178,0.08),transparent_50%)]"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(251,191,36,0.08),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#8517B2]/10 to-purple-100 rounded-full px-6 py-3 mb-6 border border-purple-200"
          >
            <Crown className="text-[#8517B2]" size={20} />
            <span className="text-[#8517B2] font-semibold">
              Choose Your Path
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Early Bird vs. Standard Pricing
          </h2>
          <p className="text-lg text-gray-700 font-medium max-w-3xl mx-auto">
            Lock in your forever price today or pay 5x more when we launch
            nationwide.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-white rounded-3xl p-8 shadow-2xl border-2 transition-all duration-500 ${
                plan.popular
                  ? "border-yellow-300 shadow-yellow-500/20"
                  : "border-gray-200 hover:border-purple-300"
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${plan.badgeColor} text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg`}
                >
                  {plan.badge}
                </motion.div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} mb-4`}
                >
                  <plan.icon className="text-white" size={28} />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 font-medium mb-4">
                  {plan.subtitle}
                </p>

                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-black text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-lg text-gray-600 ml-2">
                    / {plan.period}
                  </span>
                </div>

                <p className="text-gray-700 font-medium">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
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
                    className="flex items-start space-x-3"
                  >
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mt-0.5`}
                    >
                      <Check className="text-white" size={14} />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
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
                className={`w-full py-4 px-6 rounded-2xl text-white font-bold text-lg shadow-lg transition-all duration-300 ${plan.ctaStyle}`}
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
                  className="text-center text-green-600 font-bold text-sm mt-4"
                >
                  {plan.savings}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#8517B2]/10 to-purple-100 rounded-2xl p-8 border border-purple-200">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="flex justify-center mb-4"
            >
              <div className="bg-gradient-to-r from-[#8517B2] to-purple-600 p-3 rounded-2xl">
                <TrendingUp className="text-white" size={24} />
              </div>
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Why Early Bird Pricing Matters
            </h3>
            <p className="text-gray-700 font-medium max-w-2xl mx-auto">
              Join the founding car owners and secure your spot in Nigeria's
              most innovative car rental platform. Early supporters get lifetime
              benefits and premium positioning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
