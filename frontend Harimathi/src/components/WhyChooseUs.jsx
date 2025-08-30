import React from "react";
import "./WhyChooseUs.css";

const features = [
  { title: "Fresh Ingredients", desc: "We use only fresh & organic products." },
  { title: "Affordable Prices", desc: "Best value catering packages." },
  { title: "Trusted Service", desc: "100+ happy customers." },
];

const WhyChooseUs = () => {
  return (
    <section id="ourservices" className="why-section">
      <h2>Why Choose Us?</h2>
      <div className="why-cards">
        {features.map((f, i) => (
          <div key={i} className="why-card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
