import React from "react";
import { useNavigate } from "react-router-dom";

const LimitedOffer = () => {
  const nav = useNavigate();


  return (
    <section className="flex min-h-screen flex-col sm:p-8 mt-10  bg-gradient-dark text-white">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/[0.08] rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div
            className="max-w-3xl mx-auto text-center"
            style={{opacity: 1, transform: 'none'}}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
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
                className="lucide lucide-clock w-4 h-4 text-gold"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span className="text-gold text-sm font-medium">
                Limited Time Offer
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Secure Your Position in Nigeria's{" "}
              <span className="text-gradient-gold">Premium Mobility Network</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              The ₦50,000 lifetime rate expires when early owner slots fill.
              Public launch will introduce annual fees and tiered commissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => nav('/join-waitlist')}
               className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 font-sans bg-gradient-gold text-primary-foreground font-bold shadow-gold hover:shadow-elevated hover:scale-[1.02] active:scale-[0.98] py-6 h-14 rounded-lg px-10 text-lg group w-full sm:w-auto">
                <span className="flex flex-col items-start">
                  <span className="font-bold">Secure My Early Owner Slot</span>
                  <span className="text-xs opacity-80 font-normal">
                    ₦50,000 Lifetime Rate • Limited Availability
                  </span>
                </span>
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
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 font-sans border-2 border-gold text-foreground bg-transparent hover:bg-gold/10 font-semibold py-6 h-14 rounded-lg px-10 text-lg group w-full sm:w-auto">
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
                  className="lucide lucide-download w-5 h-5"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
                <span className="flex flex-col items-start">
                  <span>Download the Prospectus</span>
                  <span className="text-xs opacity-60 font-normal">
                    Full platform details &amp; case studies
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LimitedOffer;
