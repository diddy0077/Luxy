import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Pricing from "../components/Pricing";
import Dashboard from "../components/Dashboard";
import Hero from "../components/Hero";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import { motion } from "framer-motion";
import NextToHero from "../components/NextToHero";

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
import SilentCost from "../components/SilentCost";
import DirectAccess from "../components/DirectAccess";
import ProgressBar from "../components/ProgressBar";
import Extras from "../components/Extras";
import RevenueCalculator from "../components/RevenueCalculator";
import ProtctedGrowth from "../components/ProtctedGrowth";
import LimitedOffer from "../components/LimitedOffer";
import FAQ from "../components/FAQ";

const HomePage = () => {

  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const aboutRef = useRef(null);
  const featureRef = useRef(null);
  const waitlistRef = useRef(null);
  const pricingRef = useRef(null);
  const howItWorksRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#080C16] relative">
       {isOpen && <div onClick={() => setIsOpen(false)} className="min-h-screen z-50 bg-transparent inset-0 w-full absolute"></div>}
      <Header
        aboutRef={aboutRef}
        featureRef={featureRef}
        waitlistRef={waitlistRef}
        pricingRef={pricingRef}
        howItWorksRef={howItWorksRef}
        isJoin={false}
      />
      <Hero waitlistRef={waitlistRef} />
      <NextToHero />
      <SilentCost/>
      <DirectAccess/>
      <HowItWorks/>
  

      <div ref={pricingRef}>
        <Pricing />
      </div>
      <ProgressBar/>
      <Extras/>
      <RevenueCalculator isOpen={isOpen} setIsOpen={setIsOpen}/>
     <ProtctedGrowth/>
     <LimitedOffer/>
     <FAQ/>
    </div>
  );
};

export default HomePage;
