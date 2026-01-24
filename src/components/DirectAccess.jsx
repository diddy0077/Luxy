import React from "react";

const DirectAccess = () => {
 
  const items = [
    {
      icon:  <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-dollar-sign w-7 h-7 text-gold"
              >
                <line x1="12" x2="12" y1="2" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>,
              titile: 'You Set the Price',
              description: 'Full control over daily/weekly rates that reflect your car\'s true premium value'

    },
    {
      icon:  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-percent w-7 h-7 text-gold"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>,
      title: 'You Keep 100%',
      description: 'No agent commissions. No hidden fees. What you charge is what you earn.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crown w-7 h-7 text-gold"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>,
      title: 'Premium Clients Only',
      description: 'Access verified executives, airline transfer contracts, and private charter partners',
    },
    {
      icon:  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column w-7 h-7 text-gold"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>,
      title: 'Complete Transparency',
      description: 'Real-time dashboard showing bookings, earnings, and client details'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check w-7 h-7 text-gold"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>,
      title: 'Secure & Automated',
      description: 'Guaranteed payments, insurance-backed agreements, and digital contracts'
    }
  ]




  return (
    <section
      className="min-h-screen text-white sm:py-20 py-8 px-4"
      style={{
        background: "#080C16",
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(255,255,255,.01), rgba(255,255,255,.01) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, rgba(255,255,255,.01), rgba(255,255,255,.01) 1px, transparent 1px, transparent 60px)",
      }}
    >
      <h1 className="sm:text-5xl text-4xl font-uni font-bold text-center mb-28">
        Direct Access to Premium Demand,{" "}
        <span className="text-gradient-gold">100% Control</span>{" "}
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((item, index) => {
          return (
            <div key={index} className="group" style={{ opacity: 1, transform: "none" }}>
          <div
            className="h-full p-8 rounded-2xl bg-gradient-card border border-border transition-all duration-300"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'hsl(45 93% 47%)';
              e.currentTarget.style.boxShadow = '0 4px 30px -5px hsl(43 74% 49% / .3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <div className="w-14 h-14 rounded-xl bg-gold-10 border border-gold-30 flex items-center justify-center mb-6 group-hover:bg-gold-20 transition-colors">
              {item.icon}
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-3">
              {item.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
          )
        })}
      </div>
    </section>
  );
};

export default DirectAccess;
