import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Check,
  User,
  Car,
  Star,
  Phone,
  Mail,
  Calendar,
  MapPin,
  Shield,
  Clock,
} from "lucide-react";
import Header from "../components/Header";

const JoinWaitlist = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    currentlyRents: "",

    // Vehicle Information
    carMake: "",
    carModel: "",
    carYear: "",
  });

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

  const steps = [
    {
      id: 1,
      title: "Personal Info",
      description: "Tell us about yourself",
      icon: User,
    },
    {
      id: 2,
      title: "Vehicle Info",
      description: "Details about your car",
      icon: Car,
    },
    {
      id: 3,
      title: "Confirmation",
      description: "Review & submit",
      icon: Check,
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStepStatus = (stepId) => {
    if (stepId < currentStep) return "completed";
    if (stepId === currentStep) return "current";
    return "upcoming";
  };

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
          <User className="text-white" size={16} />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Let's get to know you
        </h2>
        <p className="text-gray-600 text-sm">
          Share your details so we can personalize your experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-800">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 outline-none"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-800">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 outline-none"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-800">
          Phone Number
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-800">
          Do you currently rent out your car?
        </label>
        <div className="grid grid-cols-2 gap-3">
          <motion.button
            type="button"
            onClick={() => setFormData({ ...formData, currentlyRents: "yes" })}
            className={`p-3 rounded-xl border-2 transition-all duration-200 ${
              formData.currentlyRents === "yes"
                ? "border-purple-500 bg-purple-50 text-purple-700"
                : "border-gray-200 hover:border-gray-300 text-gray-600"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-center">
              <Check
                className={`mx-auto mb-1 ${
                  formData.currentlyRents === "yes"
                    ? "text-purple-600"
                    : "text-gray-400"
                }`}
                size={16}
              />
              <span className="font-medium text-sm">Yes</span>
            </div>
          </motion.button>
          <motion.button
            type="button"
            onClick={() => setFormData({ ...formData, currentlyRents: "no" })}
            className={`p-3 rounded-xl border-2 transition-all duration-200 ${
              formData.currentlyRents === "no"
                ? "border-purple-500 bg-purple-50 text-purple-700"
                : "border-gray-200 hover:border-gray-300 text-gray-600"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-center">
              <div className="w-4 h-4 mx-auto mb-1 border-2 border-current rounded-full"></div>
              <span className="font-medium text-sm">No</span>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
          <Car className="text-white" size={16} />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Tell us about your car
        </h2>
        <p className="text-gray-600 text-sm">
          This helps us provide better service and recommendations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-800">
            Car Make
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Car className="h-4 w-4 text-gray-400" />
            </div>
            <select
              name="carMake"
              value={formData.carMake}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 appearance-none"
            >
              <option value="">Select car make</option>
              {carMakes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-800">
            Car Model
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              name="carModel"
              value={formData.carModel}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
              placeholder="e.g., Camry, Accord"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-800">
          Car Year
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Calendar className="h-4 w-4 text-gray-400" />
          </div>
          <select
            name="carYear"
            value={formData.carYear}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 appearance-none"
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

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Shield className="text-white" size={16} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              Why do we need this information?
            </h3>
            <p className="text-gray-600 text-sm">
              This helps us verify your vehicle and provide accurate pricing
              estimates. Your information is secure and will only be used for
              service verification.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
          <Star className="text-white" size={16} />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Ready to join Luxy?
        </h2>
        <p className="text-gray-600 text-sm">
          Review your information and become part of the future of car sharing
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Your Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-green-200/50">
              <span className="font-medium text-gray-700 text-sm">Full Name</span>
              <span className="text-gray-600 text-sm">
                {formData.fullName || "Not provided"}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-green-200/50">
              <span className="font-medium text-gray-700 text-sm">Email</span>
              <span className="text-gray-600 text-sm">
                {formData.email || "Not provided"}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-green-200/50">
              <span className="font-medium text-gray-700 text-sm">Phone</span>
              <span className="text-gray-600 text-sm">
                {formData.phone || "Not provided"}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-medium text-gray-700 text-sm">
                Currently Rents Car
              </span>
              <span className="text-gray-600 text-sm">
                {formData.currentlyRents === "yes"
                  ? "Yes"
                  : formData.currentlyRents === "no"
                  ? "No"
                  : "Not specified"}
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-green-200/50">
              <span className="font-medium text-gray-700 text-sm">Car Make</span>
              <span className="text-gray-600 text-sm">
                {formData.carMake || "Not selected"}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-green-200/50">
              <span className="font-medium text-gray-700 text-sm">Car Model</span>
              <span className="text-gray-600 text-sm">
                {formData.carModel || "Not provided"}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-medium text-gray-700 text-sm">Car Year</span>
              <span className="text-gray-600 text-sm">
                {formData.carYear || "Not selected"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Clock className="text-white" size={16} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              What happens next?
            </h3>
            <div className="text-gray-600 space-y-1">
              <p className="text-sm">• You'll receive a confirmation email within 5 minutes</p>
              <p className="text-sm">• We'll review your application within 24-48 hours</p>
              <p className="text-sm">• Early members get exclusive benefits and reduced fees</p>
              <p className="text-sm">
                • Be among the first to experience the future of car sharing
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br py-30 from-gray-50 via-white to-purple-50 relative">
      {/* Optimized Car Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            filter: "brightness(0.3) contrast(0.5) saturate(1.0)",
            transform: "translateZ(0)",
          }}
        />

        {/* Simplified Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
      </div>

      {/* Header */}
      <div className="relative z-10">
        <Header isJoin={true} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Optimized Hero Section */}
          <div className="text-center mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
              Join the Revolution
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-lg font-medium">
              Be part of the future of car sharing. Early members get exclusive
              benefits and priority access.
            </p>
          </div>

          {/* Optimized Progress Steps */}
          <div className="mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center space-x-6 md:space-x-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        getStepStatus(step.id) === "completed"
                          ? "bg-gradient-to-r from-green-500 to-emerald-500 border-green-500 text-white shadow-green-500/25"
                          : getStepStatus(step.id) === "current"
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 border-purple-600 text-white shadow-purple-500/25"
                          : "bg-white/90 border-gray-300 text-gray-400 shadow-gray-400/25 backdrop-blur-sm"
                      }`}
                    >
                      {getStepStatus(step.id) === "completed" ? (
                        <Check size={18} />
                      ) : (
                        <step.icon size={18} />
                      )}
                    </div>
                    <div className="mt-2 text-center">
                      <p
                        className={`text-xs font-semibold ${
                          getStepStatus(step.id) === "current"
                            ? "text-white"
                            : getStepStatus(step.id) === "completed"
                            ? "text-green-400"
                            : "text-gray-300"
                        }`}
                      >
                        {step.title}
                      </p>
                      <p className="text-xs text-gray-300 max-w-20 mt-0.5">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block w-12 h-0.5 bg-gray-300/50 mx-6"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Optimized Form Container */}
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6 md:p-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <AnimatePresence mode="wait">{renderStepContent()}</AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentStep === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <span>Previous</span>
              </button>

              <div className="text-xs text-gray-500 font-medium bg-gray-100 px-3 py-1.5 rounded-full">
                Step {currentStep} of {steps.length}
              </div>

              {currentStep < 3 ? (
                <button
                  onClick={nextStep}
                  className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
                >
                  <span>Continue</span>
                  <ChevronRight size={16} />
                </button>
              ) : (
                <button
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all duration-200"
                >
                  <span>Join the Waitlist</span>
                  <Check size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinWaitlist;
