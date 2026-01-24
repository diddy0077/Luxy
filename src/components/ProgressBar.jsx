import React,{useEffect, useState, useRef} from "react";
import { useNavigate } from "react-router-dom";

const ProgressBar = () => {
    const barRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const nav = useNavigate()

   useEffect(() => {
     const observer = new IntersectionObserver(
       ([entry]) => {
         if (entry.isIntersecting) {
           setProgress(56.5);
           observer.disconnect();
         }
       },
       { threshold: 0.4 }
     );

     if (barRef.current) observer.observe(barRef.current);

     return () => observer.disconnect();
   }, []);


  return (
    <section
      ref={barRef}
      className="flex flex-col gap-20 p-6 py-20 bg-[#080C16]"
      style={{
        background: "#080C16",
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(255,255,255,.01), rgba(255,255,255,.01) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, rgba(255,255,255,.01), rgba(255,255,255,.01) 1px, transparent 1px, transparent 60px)",
      }}
    >
      <div
        className="p-8 container mx-auto max-w-4xl rounded-2xl bg-gradient-card border border-gold-30 shadow-card"
        style={{opacity: 1, transform: 'none'}}
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-muted-foreground">
            Early Owner Slots Available
          </span>
          <span className="text-lg font-bold text-gold">113/200</span>
        </div>
        <div className="h-4 bg-secondary rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-gradient-gold rounded-full relative transition-all duration-1000"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => nav('/join-waitlist')} className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 font-sans bg-gradient-gold text-primary-foreground font-bold shadow-gold hover:shadow-elevated hover:scale-[1.02] active:scale-[0.98] py-6 h-14 rounded-lg px-10 text-lg group">
            Secure My Early Owner Slot
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-right w-5 h-5 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgressBar;
