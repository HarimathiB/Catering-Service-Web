import React from "react";
import "./EventStyles.css";

const Grahapravesh = () => {
  const dishes = [
    "Idli",
    "Pongal",
    "Poori",
    "Chenna Masala",
    "Vadai",
    "Sambhar",
    "Coconut Chutney",
    "Kara Chutney",
    "Filter Coffee",
    "Mineral Water",
    "Leaves Cups",
    "Paper roll",
  ];

  // Function to handle order action
  const handleOrder = () => {
    const message = encodeURIComponent(
      "Hi! I would like to place an order for the Grahapravesh menu."
    );
    window.open(`https://wa.me/916379966297?text=${message}`, "_blank");
  };

  return (
    <div className="menu-card">
      <h2>Grahapravesh</h2>
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

export default Grahapravesh;
