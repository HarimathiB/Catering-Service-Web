import React from "react";
import "./EventStyles.css";

const BabyShower = () => {
  const dishes = [
    "Chicken Biryani",
    "Raita",
    "Brinjal Gravy",
    "Chicken Salna",
    "Chicken 65",
  ];

  // Function to handle order action
  const handleOrder = () => {
    // You can replace this with WhatsApp, email, or API order call
    const message = encodeURIComponent(
      "Hi! I would like to place an order for the Baby Shower menu."
    );
    window.open(`https://wa.me/916379966297?text=${message}`, "_blank");
  };

  return (
    <div className="menu-card">
      <h2>Baby Shower</h2>
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

export default BabyShower;
