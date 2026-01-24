import React from "react";

const HowItWorks = () => {
  const items = [
    {
      icon:  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-car w-8 h-8 text-gold"
                    >
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                      <circle cx="7" cy="17" r="2"></circle>
                      <path d="M9 17h6"></path>
                      <circle cx="17" cy="17" r="2"></circle>
                    </svg>,
                    title: 'List Your Car',
                    number: 1,
                    description: 'Set your price, availability, and preferences in 10 minutes'
    },
    {
      icon: <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-users-round w-8 h-8 text-gold"
                    >
                      <path d="M18 21a8 8 0 0 0-16 0"></path>
                      <circle cx="10" cy="8" r="5"></circle>
                      <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
                    </svg>,
                    title: 'Get Matched',
                    number: 2,
                    description: "Our platform connects you with verified corporate and executive clients"
    },
    {
      icon:  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-wallet w-8 h-8 text-gold"
                    >
                      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                    </svg>,
                    title: 'Earn with Peace of Mind',
                    number: 3,
                    description: 'Track earnings, manage bookings, and receive automated payments'
    }
  ]


  return (
    <section className="how-it-works bg-[#080C16] py-20 min-h-screen text-white">
      <h1 className="sm:text-6xl text-4xl font-uni font-bold text-center mb-28">
        How It <span className="text-gradient-gold">Works</span>{" "}
      </h1>

      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8 relative">
            <div class="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
            {items.map((item, index) => {
              return (
                <div key={index} class="relative overflow-visible" style={{opacity: 1, transform: 'none'}}>
              <div class="text-center p-4">
                <div class="relative inline-block mb-6 h-full">
                  <div class="w-20 h-20 rounded-2xl bg-gradient-card border-2 border-gold-40 flex items-center justify-center shadow-gold mx-auto relative z-10">
                    {item.icon}
                  </div>
                  <span class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gold text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {item.number}
                  </span>
                </div>
                <h3 class="text-2xl font-serif font-bold text-foreground mb-3">
                 {item.title}
                </h3>
                <p class="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
