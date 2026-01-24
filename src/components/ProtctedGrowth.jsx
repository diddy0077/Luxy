import React from "react";

const ProtctedGrowth = () => {
  return (
    <section className="flex min-h-screen flex-col p-8 mt-10 bg-[#080C16] text-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" style={{opacity: 1, transform: 'none',}}>
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
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
              class="lucide lucide-shield w-5 h-5 text-green-500"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
            <span class="text-green-500 font-medium">Protected Investment</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-serif font-bold mb-4">
            Protected Growth,{" "}
            <span class="text-gradient-gold">Zero Compromise</span>
          </h2>
        </div>
        <div class="max-w-2xl mx-auto">
          <div class="space-y-4">
            <div
              class="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border"
              style={{opacity: 1, transform: 'none',}}
            >
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
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
                  class="lucide lucide-check w-5 h-5 text-green-500"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              <span class="text-foreground">
                No lock-in contracts – Cancel anytime
              </span>
            </div>
            <div
              class="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border"
              style={{opacity: 1, transform: 'none',}}
            >
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
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
                  class="lucide lucide-check w-5 h-5 text-green-500"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              <span class="text-foreground">
                Full pricing control – You set every rate
              </span>
            </div>
            <div
              class="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border"
              style={{opacity: 1, transform: 'none',}}
            >
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
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
                  class="lucide lucide-check w-5 h-5 text-green-500"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              <span class="text-foreground">
                Client vetting – All renters verified and insured
              </span>
            </div>
            <div
              class="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border"
              style={{opacity: 1, transform: 'none',}}
            >
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
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
                  class="lucide lucide-check w-5 h-5 text-green-500"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              <span class="text-foreground">
                Secure payments – Automated deposits and settlements
              </span>
            </div>
            <div
              class="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border"
              style={{opacity: 1, transform: 'none',}}
            >
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
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
                  class="lucide lucide-check w-5 h-5 text-green-500"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              <span class="text-foreground">
                Premium positioning – Your car never competes with budget
                vehicles
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtctedGrowth;
