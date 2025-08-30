import React from "react";
import "./EventStyles.css";

const Engagements = () => {
  const dishes = [
    "ARCOT NUTS MAKKAN PEDA",
    "DRY FRUITS DATES BARFI",
    "CASHEW ADA PRADHAMAN PAYASAM",
    "BHINDHI KURKUREE",
    "KASHMIRI PULAO",
    "MATAR MASALA",
    "WHITE RICE",
    "KADHAMBA SAMBAR",
    "ENNAI KATHIRI KARA KUZHAMBU",
    "TOMATO PEPPER RASAM",
    "PORICHA VENDAIKKAI MORR KUZHAMBU",
    "VAZHAIKKAI PODIMAS",
    "RIDGE GOURD PARUPPU KOOTU",
    "MALABAR AVIYAL",
    "MATAR ALOO KARA CURRY",
    "LIME PICKLE",
    "APPALAM",
    "THAYIR VADA TOPPED WITH KARABOONDHI",
    "SCOOP OF ICE CREAM",
  ];

  // Handle WhatsApp Order
  const handleOrder = () => {
    const message = encodeURIComponent(
      "Hi! I would like to place an order for the Engagements menu."
    );
    window.open(`https://wa.me/916379966297?text=${message}`, "_blank");
  };

  return (
    <div className="menu-card">
      <h2>Engagements</h2>
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

export default Engagements;
