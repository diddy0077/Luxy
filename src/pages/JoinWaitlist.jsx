import React, { useState, useEffect } from "react";
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
import CustomDropdown from "../components/CustomDropdown";

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

  const carData = {
    Acura: ['CL', 'TL', 'RL', 'CDX', 'CSX', 'ILX', 'INTEGRA', 'MDX', 'NSX', 'RDX', 'RLX', 'MDX', 'ZDX', 'TSX', 'RSX'],
    Aeolus: ['AX7', 'YIXUAN'],
    Aion: ['UT', 'Y', 'Y PLUS'],
    Aito: ['M5', 'M7', 'M9'],
    "Alfa Romeo": ['Giulia', 'Stelvio', 'Tonale'],
    "American Motors": ['Ambassador', 'Gremlin', 'Hornet', 'Javelin', 'Matador'],
    Audi: ["100", "A3", "A4", "A5", "A6", "A7", "A8", "ALLROAD", "E-TRON", "S4", "Q2L", "Q3", "Q4 E-TRON", "Q5", "Q6", "Q7", "Q8", "R8", "RS3", "RS5", "RS6", "RS7", "S3", "S5", "S6", "S7", "S8", "SQ5", "SQ8", "TT"],
    Baic: ['BJ40', 'BJ60', 'BJ80', 'X3', 'X5', 'X7'],
    Baojun: ['310W', '510', '560', '730', 'RC-5', 'RM-5'],
    Baw: ['212', 'BJ212'],
    Beijing: ['BJ40', 'BJ60', 'BJ80', 'U5', 'U7', 'X3', 'X5', 'X7'],
    Bentley: ['ARNAGE', 'BENTAYAGA', 'CONTINENTAL', 'FLYING SPUR', 'Mulsanne', 'TURBO-R'],
    Bestune: ['B70', 'T77', 'T99'],
    BMW: ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "6 Series", "7 Series", "8 Series", "ALPINA", "F Series", "G Series", "GRAN TURISMO", "i Series", "I7", "I8", "K Series", "M Series", "R Series", "S Series", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "Z Series", "2002"],
    Borgward: ['BX3', 'BX5', 'BX6', 'BX7'],
    Brilliance: ['H3', 'H530', 'V3', 'V5', 'V6', 'V7'],
    Byd: ["Dolphin", "E2", "FRIGATE 07", "Han", "Han EV", "Leopard", "Qin", "Qin Plus", "S7", "Seagull", "Seal", "Song L", "Song Max", "Song Plus", "Song Pro", "Tang", "Yuan", "Yuan Plus", "Yuan Pro"],
    Cadillac: ["ALLANTE", "ATS", "BROUGHAM", "COMMERCIAL CHASSIS", "CT4", "CT5", "CT6", "CTS", "DEVILLE", "DTS", "ELDORADO", "ELR", "ESCALADE", "FLEETWOOD", "LYRIQ", "PROFESSIONAL CHASSIS", "SEVILLE", "SRX", "STS", "XLR", "XT4", "XT5", "XT6", "XTS"],
    Changan: ["CS15", "CS35", "CS55", "CS55 PLUS", "CS75", "CS95", "EADO", "EADO PLUS", "OSHAN", "OSHAN X5", "OSHAN X7", "OSHAN Z6", "OUSHANG A800", "QIYUAN Q05", "RUICHENG", "UNI-K", "UNI-T", "UNI-V", "UNI-Z", "X5 PLUS", "YIDA", "YUEXIANG"],
    Chery: ['ARRIZO 5', 'ARRIZO 8', 'TIGGO 3', 'TIGGO 3X', 'TIGGO 5', 'TIGGO 7', 'TIGGO 8', 'TIGGO 8X'],
    Chevrolet: ["3500 W", "ASTRO", "AVALANCHE", "AVEO", "BLAZER", "BOLT", "CAMARO", "CAPRICE", "CAPTIVA", "CAVALIER", "CELEBRITY", "CHEVELLE", "CITY EXPRESS", "CLASSIC", "COBALT", "COLORADO", "CORSICA", "CORVAIR", "CORVETTE", "CRUZE", "ECO", "EL CAMINO", "EQUINOX", "EXPRESS", "G SERIES", "HHR", "IMPALA", "K SERIES", "KODIAK", "LUMINA", "MALIBU", "METRO", "MONTE CARLO", "NOVA", "ORLANDO", "P30", "PRIZM", "R SERIES", "S 10", "S-TRUCK", "SILVERADO", "SONIC", "SPARK", "SPORT VAN", "SS", "SSR", "SUBURBAN", "TAHOE", "TRACKER", "TRAILBLAZER", "TRAVERSE", "TRAX", "UPLANDER", "VAN", "VENTURE", "VOLT", "WORK TRUCK"],
    Chry: ["300", "Pacifica"],
    Chrysler: ["300", "Pacifica", "Voyager", "Aspen", "Sebring", "Town & Country"],
    "Citroën": ["C3", "C4", "C5", "Berlingo", "C1", "Jumper"],
    Daewoo: ["Lanos", "Matiz", "Nubira", "Leganza"],
    Datsun: ["Go", "Go+", "redi-Go", "mi-DO", "on-DO"],
    Deepal: ["SL03", "S7"],
    Denza: ["D9", "N7", "N8"],
    Dodge: ["Challenger", "Charger", "Durango", "Hornet", "Journey", "Grand Caravan"],
    Dongfeng: ["Aeolus", "Fengon", "Forthing", "Rich 6"],
    Eagle: ["Talon", "Vision", "Summit"],
    "Faw-Volkswagen": ["Bora", "Magotan", "Sagitar", "Tayron"],
    Fengxing: ["T5", "T5 EVO", "Lingzhi"],
    Ferrari: ["296", "812", "F8", "Roma", "SF90", "Portofino", "Monza"],
    Fiat: ["500", "500X", "Panda", "Tipo", "Ducato"],
    Fisker: ["Ocean", "Karma", "Pear", "Alaska"],
    "Fisker Automotive": ["Karma"],
    Ford: ["Bronco", "Edge", "Escape", "Explorer", "F-150", "Mustang", "Ranger", "Expedition", "Maverick"],
    Forthing: ["T5 Evo", "Yacht", "U-Tour"],
    Gac: ["Aion", "Trumpchi", "Emkoo", "Empow"],
    Geely: ["Coolray", "Emgrand", "Monjaro", "Tugella", "Preface", "Okavango"],
    Gem: ["e2", "e4", "e6"],
    "General Motors": ["EV1"],
    Genesis: ["G70", "G80", "G90", "GV60", "GV70", "GV80"],
    Geo: ["Metro", "Prizm", "Tracker", "Storm"],
    Gmc: ["Acadia", "Canyon", "Sierra", "Terrain", "Yukon", "Hummer EV"],
    "Great Wall": ["Cannon", "Poer", "Tank", "Haval"],
    Haima: ["7X", "8S", "S5"],
    Haval: ["H6", "Jolion", "Big Dog", "H9"],
    Hiphi: ["X", "Y", "Z"],
    Honda: ["Accord", "Civic", "CR-V", "HR-V", "Pilot", "Odyssey", "Ridgeline", "Passport"],
    Hongqi: ["E-HS9", "H5", "H9", "HS5", "HS7"],
    Humm: ["H1", "H2", "H3"],
    Hummer: ["H1", "H2", "H3", "EV"],
    Hyundai: ["Elantra", "Ioniq 5", "Kona", "Palisade", "Santa Fe", "Sonata", "Tucson", "Venue"],
    Ineos: ["Grenadier"],
    Infiniti: ["Q50", "Q60", "QX50", "QX55", "QX60", "QX80"],
    Isuzu: ["D-Max", "MU-X"],
    Jac: ["J7", "JS4", "T6", "T8", "S3"],
    Jagu: ["F-Pace", "XF", "F-Type"],
    Jaguar: ["E-Pace", "F-Pace", "F-Type", "I-Pace", "XE", "XF"],
    Jeep: ["Cherokee", "Compass", "Gladiator", "Grand Cherokee", "Wrangler", "Renegade", "Wagoneer"],
    Jetour: ["X70", "X70 Plus", "X90", "Dashing", "Traveller"],
    Jetta: ["VA3", "VS5", "VS7"],
    Jmc: ["Vigus", "Yusheng"],
    Kaiyi: ["X3", "X3 Pro", "E5"],
    Karma: ["GS-6", "Revero"],
    Kia: ["EV6", "Forte", "K5", "Niro", "Sorento", "Soul", "Sportage", "Telluride", "Carnival", "Seltos"],
    Lamborghini: ["Aventador", "Huracan", "Revuelto", "Urus"],
    "Land Rover": ["Defender", "Discovery", "Range Rover", "Range Rover Evoque", "Range Rover Sport", "Range Rover Velar"],
    Landwind: ["X7"],
    LEAPMOTOR: ["C01", "C11", "T03"],
    Leopaard: ["CS10", "Mattu"],
    Lexus: ["ES", "IS", "LS", "RX", "GX", "LX", "NX", "LC", "RC", "UX", "RZ", "TX"],
    "Li Auto": ["L7", "L8", "L9", "One"],
    Linc: ["Navigator", "Aviator"],
    Lincoln: ["Navigator", "Aviator", "Corsair", "Nautilus"],
    Lonestar: ["LoneStar"],
    Lotus: ["Eletre", "Emira", "Evija", "Emeya"],
    Lucid: ["Air", "Gravity"],
    "Lucid Motors": ["Air"],
    "Lynk & Co": ["01", "02", "03", "05", "06", "09"],
    Maserati: ["Ghibli", "Grecale", "Levante", "MC20", "Quattroporte", "GranTurismo"],
    Maybach: ["57", "62", "S-Class", "GLS"],
    Mazda: ["Mazda3", "Mazda6", "CX-5", "CX-9", "CX-30", "CX-50", "CX-90", "MX-5 Miata"],
    Mbnz: ["C-Class", "E-Class", "S-Class"],
    Mclaren: ["720S", "765LT", "Artura", "GT", "750S"],
    "Mclaren Automotive": ["P1", "Senna", "Speedtail"],
    "Mercedes-Benz": ["A-Class", "C-Class", "E-Class", "G-Class", "GLA", "GLC", "GLE", "GLS", "S-Class", "EQE", "EQS", "CLA", "CLS"],
    Mercury: ["Grand Marquis", "Mariner", "Milan", "Mountaineer", "Sable"],
    Mg: ["HS", "MG3", "MG4", "MG5", "ZS", "Cyberster"],
    Mgb: ["GT", "Roadster"],
    Mini: ["Clubman", "Cooper", "Countryman"],
    Mits: ["Outlander", "Pajero"],
    Mitsubishi: ["Eclipse Cross", "Mirage", "Outlander", "Pajero Sport", "Triton", "ASX"],
    Mjzs: ["ZS"],
    Neta: ["S", "U", "V", "GT"],
    Nio: ["EC6", "EC7", "ES6", "ES7", "ES8", "ET5", "ET7", "ET9"],
    Nissan: ["Altima", "Ariya", "Frontier", "Kicks", "Leaf", "Murano", "Pathfinder", "Rogue", "Sentra", "Titan", "Versa", "Z", "Armada", "Maxima"],
    Oldsmobile: ["Alero", "Aurora", "Bravada", "Intrigue", "Silhouette", "Cutlass"],
    Ora: ["Funky Cat", "Good Cat", "Ballet Cat", "Lightning Cat"],
    Othe: ["Other Model"],
    Other: ["Other Model"],
    Packard: ["Super Eight", "Twelve"],
    Peugeot: ["2008", "208", "3008", "308", "408", "5008", "508", "Rifter"],
    Plymouth: ["Breeze", "Neon", "Prowler", "Voyager", "Acclaim"],
    Polestar: ["1", "2", "3", "4"],
    Pontiac: ["Aztek", "Bonneville", "Firebird", "G6", "Grand Prix", "Vibe", "GTO", "Solstice"],
    Porsche: ["718", "911", "Cayenne", "Macan", "Panamera", "Taycan"],
    Qoros: ["3", "5", "7"],
    Ram: ["1500", "2500", "3500", "ProMaster", "Rampage"],
    Renault: ["Arkana", "Austral", "Captur", "Clio", "Koleos", "Megane", "Zoe", "Espace"],
    Rivian: ["R1S", "R1T"],
    Roewe: ["D7", "i5", "i6", "RX5", "RX8"],
    "Rolls-Royce": ["Cullinan", "Dawn", "Ghost", "Phantom", "Spectre", "Wraith"],
    Saab: ["9-3", "9-5"],
    Saic: ["Maxus", "Roewe", "MG"],
    "Saic Maxus": ["D90", "G10", "G50", "T60", "T70", "T90"],
    "Saic Motor": ["Maxus", "Roewe", "MG"],
    Saturn: ["Aura", "Ion", "Outlook", "Sky", "Vue"],
    Scion: ["FR-S", "iA", "iM", "tC", "xB", "xD"],
    Seres: ["3", "5", "7"],
    Shelby: ["Cobra", "Series 1", "GT350", "GT500"],
    Shenlan: ["S7", "SL03"],
    Skoda: ["Enyaq", "Fabia", "Kamiq", "Karoq", "Kodiaq", "Octavia", "Scala", "Superb"],
    Smart: ["#1", "#3", "EQ fortwo"],
    Stelato: ["S9"],
    Studebaker: ["Avanti", "Lark", "Commander"],
    Subaru: ["Ascent", "Crosstrek", "Forester", "Impreza", "Legacy", "Outback", "Solterra", "WRX", "BRZ"],
    Suzuki: ["Alto", "Baleno", "Celerio", "Dzire", "Ertiga", "Grand Vitara", "Ignis", "Jimny", "S-Cross", "Swift"],
    Swm: ["G01", "G05"],
    Tank: ["300", "400", "500", "700"],
    Tesla: ["Cybertruck", "Model 3", "Model S", "Model X", "Model Y", "Roadster"],
    Toyota: ["4RUNNER", "86", "ASIA DRAGON", "ASIA LION", "AVALON", "BZ4X", "CAMRY", "CAMRY SOLARA", "CELICA GT", "CELICA ST", "C-HR", "COROLLA", "CROWN", "ECHO", "EXTRA LONG", "FJ CRUISER", "FRONTLANDER", "GR 86", "GRAND HIGHLANDER", "GRANVIA", "GR COROLLA", "HIGHLANDER", "HILUX", "IZOA", "LAND CRUISER", "LEVIN", "LONG BED", "MATRIX", "MIRAI", "MR2", "PICKUP", "PRADO", "PRIUS", "RAV4", "SCION", "SEQUOIA", "SHORT BED", "SIENNA", "STANDARD BED", "SUPRA", "T100", "TACOMA", "TUNDRA", "VENZA", "VIOS", "WILDLANDER", "YARIS"],
    "Triumph Car": ["Spitfire", "TR6", "Stag"],
    Venucia: ["D60", "Star", "V-Online"],
    Vinfast: ["VF 3", "VF 5", "VF 6", "VF 7", "VF 8", "VF 9"],
    "Vinfast Trading And Produ": ["VF 8", "VF 9"],
    Volkswagen: ["Atlas", "Golf", "ID.4", "Jetta", "Passat", "Taos", "Tiguan", "Arteon", "ID.Buzz", "Touareg"],
    Volv: ["XC60", "XC90"],
    Volvo: ["C40", "EX30", "EX90", "S60", "S90", "V60", "V90", "XC40", "XC60", "XC90"],
    Voyah: ["Dreamer", "Free", "Passion"],
    Wey: ["Coffee 01", "Coffee 02", "Latte", "Mocha"],
    Willy: ["Jeep"],
    Wuling: ["Air EV", "Bingo", "Hongguang Mini EV"],
    Xiaomi: ["SU7"],
    Xpeng: ["G3", "G6", "G9", "P5", "P7"],
    Yema: ["T70", "T80"],
    Zeekr: ["001", "007", "009", "X"],
    Zotye: ["T300", "T600", "T700"]
  };

  const carMakes = Object.keys(carData);

  const currentYear = new Date().getFullYear();
  const carYears = Array.from(
    { length: currentYear - 2010 + 1 },
    (_, i) => currentYear - i,
  );
  const [error, setError] = useState("");

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
    if (currentStep === 1) {
      if (
        !formData.fullName ||
        !formData.email ||
        !formData.phone ||
        !formData.currentlyRents
      ) {
        setError("All fields are required!");
        setTimeout(() => {
          setError("");
        }, 2000);
        return;
      }
    } else if (currentStep === 2) {
      if (!formData.carMake || !formData.carModel || !formData.carYear) {
        setError("All fields are required!");
        setTimeout(() => {
          setError("");
        }, 2000);
        return;
      }
    }
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
              <div
                className={`w-4 h-4 mx-auto mb-1 border-2 rounded-full ${formData.currentlyRents === "no" ? "border-gold" : "border-muted-foreground"}`}
              ></div>
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
            <CustomDropdown
              options={carMakes}
              value={formData.carMake}
              onChange={(value) =>
                setFormData({
                  ...formData,
                  carMake: value,
                  carModel: "",
                  carYear: "",
                })
              }
              placeholder="Select car make"
              className="pl-10"
            />
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
            <CustomDropdown
              options={formData.carMake ? carData[formData.carMake] : []}
              value={formData.carModel}
              onChange={(value) =>
                setFormData({ ...formData, carModel: value, carYear: "" })
              }
              placeholder="Select car model"
              disabled={!formData.carMake}
              className="pl-10"
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
          <CustomDropdown
            options={carYears}
            value={formData.carYear}
            onChange={(value) => setFormData({ ...formData, carYear: value })}
            placeholder="Select car year"
            disabled={!formData.carModel}
            className="pl-10"
          />
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
              <span className="font-medium text-muted-foreground text-sm">
                Full Name
              </span>
              <span className="text-white text-sm">
                {formData.fullName || "Not provided"}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gold-20">
              <span className="font-medium text-muted-foreground text-sm">
                Email
              </span>
              <span className="text-white text-sm">
                {formData.email || "Not provided"}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gold-20">
              <span className="font-medium text-muted-foreground text-sm">
                Phone
              </span>
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
              <span className="font-medium text-muted-foreground text-sm">
                Car Make
              </span>
              <span className="text-white text-sm">
                {formData.carMake || "Not selected"}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gold-20">
              <span className="font-medium text-muted-foreground text-sm">
                Car Model
              </span>
              <span className="text-white text-sm">
                {formData.carModel || "Not provided"}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-medium text-muted-foreground text-sm">
                Car Year
              </span>
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
              <p className="text-sm">
                • You'll receive a confirmation email within 5 minutes
              </p>
              <p className="text-sm">
                • We'll review your application within 24-48 hours
              </p>
              <p className="text-sm">
                • Early members get exclusive benefits and reduced fees
              </p>
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
    <div className="min-h-screen bg-background pt-24 pb-12 md:py-32 relative">
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
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
              Join the Revolution
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-lg font-medium">
              Be part of the future of car sharing. Early members get exclusive
              benefits and priority access.
            </p>
          </div>

          {/* Optimized Progress Steps */}
          <div
            className="mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center justify-center space-x-2 sm:space-x-6 md:space-x-8">
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
                      <p className="hidden sm:block text-xs text-muted-foreground max-w-20 mt-0.5">
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

          <div
            className="bg-gradient-card backdrop-blur-xl rounded-2xl shadow-elevated border border-gold-20 p-6 md:p-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <AnimatePresence mode="wait">{renderStepContent()}</AnimatePresence>
            {error && (
              <p className="text-red-600 text-sm mt-3 font-semibold">{error}</p>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gold-20">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex text-gray-400 border border-border disabled:text-muted-foreground disabled:border-muted-foreground items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentStep === 1
                    ? "bg-secondary text-muted-foreground/50 cursor-not-allowed"
                    : "bg-secondary text-muted-foreground hover:text-white border border-border"
                }`}
              >
                <span>Previous</span>
              </button>

              <div className="text-xs hidden sm:block text-muted-foreground font-medium bg-secondary px-3 py-1.5 rounded-full border border-border">
                Step {currentStep} of {steps.length}
              </div>
              <div className="text-xs sm:hidden text-muted-foreground font-medium bg-secondary px-3 py-1.5 rounded-full border border-border">
                {currentStep} of {steps.length}
              </div>

              {currentStep < 3 ? (
                <button
                  onClick={nextStep}
                  className="flex items-center space-x-2 bg-gradient-gold text-black px-4 sm:px-6 py-2 rounded-lg font-bold hover:shadow-lg hover:shadow-gold/25 transition-all duration-200"
                >
                  <span>Continue</span>
                  <ChevronRight size={16} />
                </button>
              ) : (
                <button className="flex items-center space-x-2 bg-gradient-gold text-black px-4 sm:px-6 py-2 rounded-lg font-bold hover:shadow-lg hover:shadow-gold/25 transition-all duration-200">
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
