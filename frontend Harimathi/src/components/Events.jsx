import React from "react";
import { useNavigate } from "react-router-dom";
import "./Events.css";

const foods = [
  { name: "Engagements", img: "/paneer.jpg" },
  { name: "Marriage", img: "/biryani.jpg" },
  { name: "Birthday Functions", img: "/vegthali.jpg" },
  { name: "Baby Shower", img: "/mutton.jpg" },
  { name: "Nichayadhartham", img: "/gulabjamun.jpg" },
  { name: "Corporate Catering Services", img: "/paneer.jpg" },
  { name: "Grahapravesh", img: "/paneer.jpg" },
];

const OurFoods = () => {
  const navigate = useNavigate();

  return (
    <section id="ourfoods" className="foods-section">
      <h2>Events</h2>
      <div className="foods-list">
        {foods.map((item, i) => (
          <div key={i} className="food-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <button
              className="order-btn"
              onClick={() => navigate(`/event/${encodeURIComponent(item.name)}`)}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurFoods;
