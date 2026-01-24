import React from "react";
import Logo2 from '../assets/l-logo.png'

const Footer = () => {
  return (
    <footer class="py-16 bg-navy-light border-t border-border relative">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" style={{opacity: 1, transform: 'none'}}>
          <div class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold/10 border border-gold/30">
            <span class="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span class="text-gold font-medium">
              200 early owner slots available across Nigeria. 113 already
              reserved.
            </span>
          </div>
        </div>
        <div class="flex flex-wrap justify-center gap-6 mb-12">
          <div class="flex items-center gap-2 text-muted-foreground">
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
              class="lucide lucide-shield w-5 h-5 text-gold"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
            <span class="text-sm">Fully Insured Operations</span>
          </div>
          <div class="flex items-center gap-2 text-muted-foreground">
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
              class="lucide lucide-award w-5 h-5 text-gold"
            >
              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
              <circle cx="12" cy="8" r="6"></circle>
            </svg>
            <span class="text-sm">Registered in Nigeria</span>
          </div>
          <div class="flex items-center gap-2 text-muted-foreground">
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
              class="lucide lucide-file-check w-5 h-5 text-gold"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="m9 15 2 2 4-4"></path>
            </svg>
            <span class="text-sm">Partner Insurance Agreements</span>
          </div>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-between gap-6  border-t border-border">
          <img src={Logo2} alt="logo" className="w-40 h-40"/>
          <div class="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a
              href="mailto:support@luxy.ng"
              class="flex items-center gap-2 hover:text-gold transition-colors"
            >
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
                class="lucide lucide-mail w-4 h-4"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              support@luxy.ng
            </a>
            <div class="flex items-center gap-2">
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
                class="lucide lucide-map-pin w-4 h-4"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Lagos • Abuja • Port Harcourt
            </div>
          </div>
        </div>
        <div class="text-center pt-8 border-t border-border">
          <p class="text-sm text-muted-foreground">
            © 2026 Luxy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
