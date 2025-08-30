import React from "react";
import "./EventStyles.css";

const Nichayadhartham = () => {
  const dishes = [
    "GULKAND GULAB JAMUN",
    "STEAMED PONNI RICE",
    "VARUTHARACHA MANGAAI SAMBAR",
    "SPL MANATHAKKALI VATHAL KUZHAMBU",
    "TOMATO PEPPER RASAM",
    "THICK CURD",
    "MORR MILAGAAI",
    "GREEN PEAS NATIONAL PORIYAL",
    "DEEP FRIED POTATO ROAST",
    "RAW CUT MANGO PICKLE",
    "APPALAM",
    "PARUPPU VADA",
    "CASHEW SEMIYA PAAL PAYASAM",
    "ICE CREAM",
  ];

  // Function to handle WhatsApp order
  const handleOrder = () => {
    const message = encodeURIComponent(
      "Hi! I would like to place an order for the Nichayadhartham menu."
    );
    window.open(`https://wa.me/916379966297?text=${message}`, "_blank");
  };

  return (
    <div className="menu-card">
      <h2>Nichayadhartham</h2>
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

export default Nichayadhartham;
