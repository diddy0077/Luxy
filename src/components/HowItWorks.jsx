import React from "react";
import "./HowItWorks.css";

const HowItWorks = ({howItWorksRef}) => {
  const steps = [
    {
      id: "01",
      title: "Register Your Car",
      description:
        "Pay the ₦50,000 lifetime registration fee and create your Luxy account.",
      icon: "🚗",
    },
    {
      id: "02",
      title: "Upload Documents & Set Price",
      description:
        "Submit your car documents for verification and set your preferred rental rate.",
      icon: "📄",
    },
    {
      id: "03",
      title: "Receive Bookings & Earn",
      description:
        "Start receiving bookings and keep 100% of your rental earnings.",
      icon: "💰",
    },
  ];

  return (
    <section className="how-it-works" ref={howItWorksRef}>
      <div className="container">
        <div className="how-it-works__header">
          <p className="how-it-works__subtitle">Simple & Fast</p>
          <h2 className="how-it-works__title">How Luxy Works</h2>
          <p className="how-it-works__description">
            Three simple steps to start earning with your car.
          </p>
        </div>

        <div className="how-it-works__steps">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="step-card" data-step={step.id}>
                <div className="step-card__number">
                  <span className="step-number">{step.id}</span>
                </div>
                <div className="step-card__icon">
                  <span className="step-icon">{step.icon}</span>
                </div>
                <div className="step-card__content">
                  <h3 className="step-card__title">{step.title}</h3>
                  <p className="step-card__description">{step.description}</p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="chain-connector">
                  <div className="chain-link">
                    <div className="chain-segment"></div>
                    <div className="chain-segment"></div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
