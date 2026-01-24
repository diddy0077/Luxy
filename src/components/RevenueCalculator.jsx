import React,{useState, useEffect, useRef} from "react";

const CheckMark = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
  )
}

const RevenueCalculator = ({isOpen, setIsOpen}) => {
  const [input, setInput] = useState('55,000');
  const [selectedDays, setSelectedDays] = useState(20);


  const options = [5, 10, 15, 20, 25, 30]

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // If the ref exists and the clicked element is NOT inside the ref
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
       setIsOpen(false)
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up the listener on unmount
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

 

  return (
    <section className="flex min-h-screen relative flex-col p-6 sm:py-5 py-3 bg-[#080C16] text-white my-10">
     
      <div className="inline-flex self-center items-center gap-2 px-4 py-2 rounded-full bg-gold-10 border border-gold-30 mb-6">
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
          className="lucide lucide-calculator w-5 h-5 text-gold"
        >
          <rect width="16" height="20" x="4" y="2" rx="2"></rect>
          <line x1="8" x2="16" y1="6" y2="6"></line>
          <line x1="16" x2="16" y1="14" y2="18"></line>
          <path d="M16 10h.01"></path>
          <path d="M12 10h.01"></path>
          <path d="M8 10h.01"></path>
          <path d="M12 14h.01"></path>
          <path d="M8 14h.01"></path>
          <path d="M12 18h.01"></path>
          <path d="M8 18h.01"></path>
        </svg>
        <span className="text-gold font-medium">Earnings Calculator</span>
      </div>
      <p className="font-uni font-bold sm:text-5xl text-3xl self-center text-center">
        What Could Your Car{" "}
        <span className="text-gradient-gold">Earn?</span>{" "}
      </p>

      <div className="p-8 md:p-10 mt-8 container mx-auto max-w-2xl rounded-2xl bg-gradient-card border border-gold-30 shadow-elevated">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm text-muted-foreground mb-2">
              Rent Per Day Price (₦)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                ₦
              </span>
              <input
                type="text"
                className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus:border-gold focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:ring-[hsl(43_74%_49%)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-8 bg-secondary border-border text-foreground"
                placeholder="Enter daily rental price"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="relative">
            <label className="block text-sm text-muted-foreground mb-2">
              Rental Days/Month
            </label>
            <button
              type="button"
              role="combobox"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 items-center justify-between rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(43_74%_49%)] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-full bg-secondary border-border text-foreground"
            >
              <span style={{ pointerEvents: "none" }}>{selectedDays} days</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`lucide lucide-chevron-down h-4 w-4 opacity-50 transition-transform ${isOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            {isOpen && (
              <div className="absolute top-full left-0 z-50 mt-2 w-full rounded-md border border-border bg-secondary shadow-md">
                <div ref={dropdownRef} className="py-1 bg-background">
                  {options.map((option) => (
                    <button
                      ref={dropdownRef}
                      key={option}
                      type="button"
                      onClick={() => {
                        setSelectedDays(option);
                        setIsOpen(false);
                      }}
                      className={`relative group transition-all duration-200 ease-in-out flex w-full hover:bg-gold hover:text-black cursor-pointer select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-gold-10 ${
                        selectedDays === option ? "bg-gold text-black" : ""
                      }`}
                    >
                      {selectedDays === option && <div className="absolute left-2 top-2">
                        <svg className={`${selectedDays === option ? "group-hover:fill-black" : "fill-white"} `} xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill=""><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                      </div>}
                      <span>{option} days</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="p-6 rounded-xl bg-gold-5 border border-gold-20">
          <div className="flex items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-trending-up w-5 h-5 text-gold"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
            <span className="text-sm text-muted-foreground">
              Estimated Earnings for {selectedDays} days
            </span>
          </div>
          {input ? (<div className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-bold text-gradient-gold mb-2">
              ₦{(parseInt(input.replace(/[^0-9]/g, "") || "0") * selectedDays).toLocaleString()}
            </div>
            <p className="text-sm text-gold">₦{input} × {selectedDays} days</p>
          </div>) : (
            <div class="text-xl text-muted-foreground">Enter your daily rental price to see earnings</div>
          )}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-6">
          <span className="text-gold font-medium">You keep 100%.</span> No
          commissions.
        </p>
        
      </div>
      <p class="text-center text-xs text-muted-foreground mt-4">*Based on your set rental rate. Actual earnings depend on bookings and availability.</p>
    </section>
  );
};

export default RevenueCalculator;
