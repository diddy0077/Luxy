import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is the ₦50,000 a one-time payment?",
      answer: "Yes, the ₦50,000 is a one-time lifetime access fee for early owners. Future members will pay annual fees."
    },
    {
      question: "What if I don't have clients immediately?",
      answer: "Luxy markets your vehicle to our network of pre-vetted corporate and high-net-worth clients to ensure high utilization rates."
    },
    {
      question: "How are clients vetted?",
      answer: "We conduct strict identity verification, background checks, and require security deposits for all renters to ensure your asset is safe."
    },
    {
      question: "Can I remove my car anytime?",
      answer: "Yes, you retain full ownership and control. You can remove your vehicle from the platform at any time without penalty."
    },
    {
      question: "What happens after I join the waitlist?",
      answer: "You'll receive a confirmation email and priority access to onboard your vehicle when we launch in your area."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex pb-16 flex-col p-4 py-8 mt-10  bg-background text-white">
      <section className="py-0 bg-background relative">
        <div className="container mx-auto px-2">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Frequently Asked <span class="text-gradient-gold">Questions</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border border-border rounded-xl px-4 bg-gradient-card transition-colors ${
                    openIndex === index ? "border-gold/40" : ""
                  }`}
                >
                  <h3 className="flex">
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="flex text-sm sm:text-md flex-1 items-center justify-between text-left text-lg font-medium hover:no-underline hover:text-gold py-6 transition-all"
                    >
                      {faq.question}
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
                        className={`lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>
                  <div
                    className={`overflow-hidden text-sm transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FAQ;
