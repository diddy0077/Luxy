import React, { useState,useEffect } from "react";
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
  }, [])

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
        <div className="w-12 h-12 bg-gold-10 border border-gold-30 rounded-full flex items-center justify-center mx-auto mb-3">
          <User className="text-gold" size={20} />
        </div>
        <h2 className="text-xl font-bold text-white mb-2">
          Let's get to know you
        </h2>
        <p className="text-muted-foreground text-sm">
          Share your details so we can personalize your experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-foreground">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
              <User className="h-4 w-4" />
            </div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2.5 bg-secondary border border-border rounded-xl focus:ring-1 focus:ring-gold focus:border-gold text-foreground placeholder:text-muted-foreground transition-all duration-200 outline-none"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-foreground">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
              <Mail className="h-4 w-4" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2.5 bg-secondary border border-border rounded-xl focus:ring-1 focus:ring-gold focus:border-gold text-foreground placeholder:text-muted-foreground transition-all duration-200 outline-none"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-foreground">
          Phone Number
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
            <Phone className="h-4 w-4" />
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-2.5 bg-secondary border border-border rounded-xl focus:ring-1 focus:ring-gold focus:border-gold text-foreground placeholder:text-muted-foreground transition-all duration-200 outline-none"
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-foreground">
          Do you currently rent out your car?
        </label>
        <div className="grid grid-cols-2 gap-3">
          <motion.button
            type="button"
            onClick={() => setFormData({ ...formData, currentlyRents: "yes" })}
            className={`p-3 rounded-xl border-2 transition-all duration-200 ${
              formData.currentlyRents === "yes"
                ? "border-gold bg-gold-10 text-gold"
                : "border-border hover:border-gold-30 text-muted-foreground bg-secondary"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-center">
              <Check
                className={`mx-auto mb-1 ${
                  formData.currentlyRents === "yes"
                    ? "text-gold"
                    : "text-muted-foreground"
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
                ? "border-gold bg-gold-10 text-gold"
                : "border-border hover:border-gold-30 text-muted-foreground bg-secondary"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-center">
              <div className={`w-4 h-4 mx-auto mb-1 border-2 rounded-full ${formData.currentlyRents === "no" ? "border-gold" : "border-muted-foreground"}`}></div>
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
        <div className="w-12 h-12 bg-gold-10 border border-gold-30 rounded-full flex items-center justify-center mx-auto mb-3">
          <Car className="text-gold" size={20} />
        </div>
        <h2 className="text-xl font-bold text-white mb-2">
          Tell us about your car
        </h2>
        <p className="text-muted-foreground text-sm">
          This helps us provide better service and recommendations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-foreground">
            Car Make
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
              <Car className="h-4 w-4" />
            </div>
            <select
              name="carMake"
              value={formData.carMake}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2.5 bg-secondary border border-border rounded-xl focus:ring-1 focus:ring-gold focus:border-gold text-foreground transition-all duration-200 appearance-none outline-none"
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
          <label className="block text-sm font-semibold text-foreground">
            Car Model
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
              <MapPin className="h-4 w-4" />
            </div>
            <input
              type="text"
              name="carModel"
              value={formData.carModel}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2.5 bg-secondary border border-border rounded-xl focus:ring-1 focus:ring-gold focus:border-gold text-foreground placeholder:text-muted-foreground transition-all duration-200 outline-none"
              placeholder="e.g., Camry, Accord"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-foreground">
          Car Year
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
            <Calendar className="h-4 w-4" />
          </div>
          <select
            name="carYear"
            value={formData.carYear}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-2.5 bg-secondary border border-border rounded-xl focus:ring-1 focus:ring-gold focus:border-gold text-foreground transition-all duration-200 appearance-none outline-none"
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

      <div className="bg-gold-5 rounded-xl p-4 border border-gold-20">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-gold-10 rounded-full flex items-center justify-center flex-shrink-0">
            <Shield className="text-gold" size={16} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-1">
              Why do we need this information?
            </h3>
            <p className="text-muted-foreground text-sm">
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
        <div className="w-12 h-12 bg-gold-10 border border-gold-30 rounded-full flex items-center justify-center mx-auto mb-3">
          <Star className="text-gold" size={20} />
        </div>
        <h2 className="text-xl font-bold text-white mb-2">
          Ready to join Luxy?
        </h2>
        <p className="text-muted-foreground text-sm">
          Review your information and become part of the future of car sharing
        </p>
      </div>

      <div className="bg-secondary rounded-xl p-4 border border-gold-20">
        <h3 className="text-lg font-semibold text-white mb-4">
          Your Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gold-20">
              <span className="font-medium text-muted-foreground text-sm">Full Name</span>
              <span className="text-white text-sm">
                {formData.fullName || "Not provided"}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gold-20">
              <span className="font-medium text-muted-foreground text-sm">Email</span>
              <span className="text-white text-sm">
                {formData.email || "Not provided"}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gold-20">
              <span className="font-medium text-muted-foreground text-sm">Phone</span>
              <span className="text-white text-sm">
                {formData.phone || "Not provided"}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-medium text-muted-foreground text-sm">
                Currently Rents Car
              </span>
              <span className="text-white text-sm">
                {formData.currentlyRents === "yes"
                  ? "Yes"
                  : formData.currentlyRents === "no"
                  ? "No"
                  : "Not specified"}
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gold-20">
              <span className="font-medium text-muted-foreground text-sm">Car Make</span>
              <span className="text-white text-sm">
                {formData.carMake || "Not selected"}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gold-20">
              <span className="font-medium text-muted-foreground text-sm">Car Model</span>
              <span className="text-white text-sm">
                {formData.carModel || "Not provided"}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-medium text-muted-foreground text-sm">Car Year</span>
              <span className="text-white text-sm">
                {formData.carYear || "Not selected"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gold-5 rounded-xl p-4 border border-gold-20">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-gold-10 rounded-full flex items-center justify-center flex-shrink-0">
            <Clock className="text-gold" size={16} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-1">
              What happens next?
            </h3>
            <div className="text-muted-foreground space-y-1">
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
    <div className="min-h-screen bg-background py-30 relative">
      {/* Optimized Car Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            filter: "brightness(0.6) contrast(0.2) saturate(1.0)",
            transform: "translateZ(0)",
          }}
        />

        {/* Simplified Gradient Overlays */}
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-transparent to-background" />
      </div>

      {/* Header */}
      <div className="relative z-50">
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
                          ? "bg-gold text-black border-gold shadow-gold"
                          : getStepStatus(step.id) === "current"
                          ? "bg-gold text-black border-gold shadow-gold"
                          : "bg-secondary border-border text-muted-foreground"
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
                            ? "text-gold"
                            : getStepStatus(step.id) === "completed"
                            ? "text-gold"
                            : "text-muted-foreground"
                        }`}
                      >
                        {step.title}
                      </p>
                      <p className="text-xs text-muted-foreground max-w-20 mt-0.5">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block w-12 h-0.5 bg-border mx-6"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Optimized Form Container */}
          <div className="bg-gradient-card backdrop-blur-xl rounded-2xl shadow-elevated border border-gold-20 p-6 md:p-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <AnimatePresence mode="wait">{renderStepContent()}</AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gold-20">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex text-gray-400 border border-border disabled:text-muted-foreground disabled:border-muted-foregrounditems-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentStep === 1
                    ? "bg-secondary text-muted-foreground/50 cursor-not-allowed"
                    : "bg-secondary text-muted-foreground hover:text-white border border-border"
                }`}
              >
                <span>Previous</span>
              </button>

              <div className="text-xs text-muted-foreground font-medium bg-secondary px-3 py-1.5 rounded-full border border-border">
                Step {currentStep} of {steps.length}
              </div>

              {currentStep < 3 ? (
                <button
                  onClick={nextStep}
                  className="flex items-center space-x-2 bg-gradient-gold text-black px-6 py-2 rounded-lg font-bold hover:shadow-lg hover:shadow-gold/25 transition-all duration-200"
                >
                  <span>Continue</span>
                  <ChevronRight size={16} />
                </button>
              ) : (
                <button
                  className="flex items-center space-x-2 bg-gradient-gold text-black px-6 py-2 rounded-lg font-bold hover:shadow-lg hover:shadow-gold/25 transition-all duration-200"
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
