import React from "react";



const SilentCost = () => {
  
    const items = [
        {
            icon: <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-trending-down w-6 h-6 text-destructive"
            >
              <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
              <polyline points="16 17 22 17 22 11"></polyline>
            </svg>,
            title: "Depreciation without compensation",
            description: `Your ₦50M+ asset loses value daily`
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6 text-destructive"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
            title: 'Unreliable middlemen',
            description: `Agents who underprice your car and delay payments`
        }, 
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert w-6 h-6 text-destructive"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>,
            title: 'High-risk clients',
            description: 'Renters who treat your luxury vehicle carelessly'
        },
         {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-off w-6 h-6 text-destructive"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path><path d="m2 2 20 20"></path></svg>,
            title: 'Zero visibility',
            description: 'No control over who books, when, or for how much'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ban w-6 h-6 text-destructive"><circle cx="12" cy="12" r="10"></circle><path d="m4.9 4.9 14.2 14.2"></path></svg>,
            title: 'Missed premium opportunities',
            description: "Airline partnerships and corporate contracts you can't access alone"
        }
    ]



  return (
    <section
      className="min-h-screen flex flex-col items-center gap-20 p-6 py-20"
      style={{
        background: "#080C16",
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,.01), rgba(255,255,255,.01) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, rgba(255,255,255,.01), rgba(255,255,255,.01) 1px, transparent 1px, transparent 60px)'
      }}
    >
      <h1 className="sm:text-5xl text-4xl font-uni font-bold text-center mb-4 text-white">
        The Silent Cost of{" "}
        <span className="text-gradient-gold">Idle Luxury</span>{" "}
      </h1>

      <div className="flex max-w-4xl flex-col gap-6 w-full">
       {items.map((item, index) => {
        return (
             <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-gradient-card border border-border hover:border-white cursor-pointer transition-all duration-300 w-full"
             onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'hsl(45 93% 47%)';
              e.currentTarget.style.boxShadow = '0 4px 30px -5px hsl(43 74% 49% / .3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '';
              e.currentTarget.style.boxShadow = '';
            }}>
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-destructive-10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
            {item.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1 flex items-center gap-2">
              <span className="text-gold">✓</span>{item.title}
            </h3>
            <p className="text-muted-foreground">
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

export default SilentCost;
