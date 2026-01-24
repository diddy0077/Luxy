import React from "react";

const Extras = () => {
  return (
    <section className="flex min-h-screen flex-col gap-20 p-6 sm:py-20 py-16 bg-[#080C16] text-white">
      <div className="container mx-auto max-w-4xl flex items-center justify-center flex-col">
        <div class="relative max-w-3xl p-8 md:p-12 rounded-2xl bg-gradient-card border border-gold-30 shadow-card">
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
            class="lucide lucide-quote absolute top-6 left-6 w-12 h-12 text-gold-20"
          >
            <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
          </svg>
          <blockquote class="relative z-10">
            <p class="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic font-serif">
              "Having operated in Nigeria's mobility space for 8 years, we built
              Luxy to solve the exact problems luxury car owners face:
              unreliable agents and untapped premium demand. This isn't another
              rental platform—it's a direct channel to your highest-value
              clients."
            </p>
            <footer class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-gold-20 border border-gold-40 flex items-center justify-center">
                <span class="text-gold font-serif font-bold">L</span>
              </div>
              <div>
                <p class="font-semibold text-foreground">Luxy Founding Team</p>
                <p class="text-sm text-muted-foreground">
                  8+ years in Nigeria's mobility space
                </p>
              </div>
            </footer>
          </blockquote>
        </div>

        <div className="mt-18 flex flex-col items-center justify-center gap-6">
          <h2 className="sm:text-2xl text-xl font-uni font-bold">
            Designed For
          </h2>
          <div class="flex flex-wrap justify-center gap-6">
            <div
              class="flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary-50 border border-border"
              style={{ opacity: 1, transform: "none;" }}
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
                class="lucide lucide-plane w-6 h-6 text-gold"
              >
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
              </svg>
              <span class="text-foreground font-medium">Airlines</span>
            </div>
            <div
              class="flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary-50 border border-border"
              style={{ opacity: 1, transform: "none;" }}
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
                class="lucide lucide-building2 w-6 h-6 text-gold"
              >
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                <path d="M10 6h4"></path>
                <path d="M10 10h4"></path>
                <path d="M10 14h4"></path>
                <path d="M10 18h4"></path>
              </svg>
              <span class="text-foreground font-medium">Private Charters</span>
            </div>
            <div
              class="flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary-50 border border-border"
              style={{ opacity: 1, transform: "none;" }}
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
                class="lucide lucide-briefcase w-6 h-6 text-gold"
              >
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
              </svg>
              <span class="text-foreground font-medium">Corporate Travel</span>
            </div>
            <div
              class="flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary-50 border border-border"
              style={{ opacity: 1, transform: "none;" }}
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
                class="lucide lucide-car w-6 h-6 text-gold"
              >
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                <circle cx="7" cy="17" r="2"></circle>
                <path d="M9 17h6"></path>
                <circle cx="17" cy="17" r="2"></circle>
              </svg>
              <span class="text-foreground font-medium">
                Executive Transport
              </span>
            </div>
          </div>

          <div class="text-center mt-10" style={{ opacity: 1, transform: "none;" }}>
            <h3 class="text-2xl font-serif font-bold mb-4">
              Vehicle Standards
            </h3>
            <p class="text-muted-foreground mb-6">
              Only accepting premium executive vehicles
            </p>
            <div class="flex flex-wrap justify-center gap-3">
              <span
                class="px-4 py-2 rounded-full bg-gold-10 border border-gold/30 text-sm text-gold"
                style={{opacity: 1}}
              >
                Mercedes S-Class
              </span>
              <span
                class="px-4 py-2 rounded-full bg-gold-10 border border-gold/30 text-sm text-gold"
                style={{opacity: 1}}
              >
                BMW 7 Series
              </span>
              <span
                class="px-4 py-2 rounded-full bg-gold-10 border border-gold/30 text-sm text-gold"
                style={{opacity: 1}}
              >
                Range Rover
              </span>
              <span
                class="px-4 py-2 rounded-full bg-gold-10 border border-gold/30 text-sm text-gold"
                style={{opacity: 1}}
              >
                Lexus LX
              </span>
              <span
                class="px-4 py-2 rounded-full bg-gold-10 border border-gold/30 text-sm text-gold"
                style={{opacity:1}}
              >
                Toyota Prado
              </span>
              <span
                class="px-4 py-2 rounded-full bg-gold-10 border border-gold/30 text-sm text-gold"
                style={{opacity:1}}
              >
                Land Cruiser
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extras;
