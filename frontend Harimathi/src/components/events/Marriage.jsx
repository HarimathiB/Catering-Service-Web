import React from "react";
import "./EventStyles.css";

const Marriage = () => {
  const dishes = [
    "PULPY ORANGE LEMONADE",
    "KARUPATTI NUTS PARUTHIPAAL HALWA",
    "CRISPY CAULIFLOWER WINGS",
    "POTATO CHIPS",
    "GHEE CHAPATHY",
    "PANEER PASANDHA GRAVY",
    "HEART IDLI",
    "DEEP FRIED ONION COCONUT CHUTNEY",
    "CHENDI MIRAM",
    "POMEGRANATE IDIYAPPAM",
    "NILGIRI VEG KORMA",
    "AVAL DOSA",
    "CHINNA ULLI SAMBAR",
    "FLAVORY MIXED VEG BIRYANI",
    "CUCUMBER ONION RAITHA",
    "PEPPER BRINJAL THALCHA",
    "VANILLA SCOOP WITH HOT JAMUN TOPPED WITH CHOCO SYRUP & CHIPS",
  ];

  // Function to handle WhatsApp order
  const handleOrder = () => {
    const message = encodeURIComponent(
      "Hi! I would like to place an order for the Marriage menu."
    );
    window.open(`https://wa.me/916379966297?text=${message}`, "_blank");
  };

  return (
    <div className="menu-card">
      <h2>Marriage</h2>
      <ul>
        {dishes.map((dish, i) => (
          <li key={i}>{dish}</li>
        ))}
      </ul>
      <button className="order-btn" onClick={handleOrder}>
        Order Now
      </button>
    </div>
  );
};

export default Marriage;
