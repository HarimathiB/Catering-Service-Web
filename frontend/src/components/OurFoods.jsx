import React from "react";
import "./OurFoods.css";

const foods = [
  { name: "Paneer Butter Masala", img: "/paneer.jpg" },
  { name: "Chicken Biryani", img: "/biryani.jpg" },
  { name: "Veg Thali", img: "/vegthali.jpg" },
  { name: "Mutton Curry", img: "/mutton.jpg" },
  { name: "Gulab Jamun", img: "/gulabjamun.jpg" },
];

const OurFoods = () => {
  return (
    <section id="ourfoods" className="foods-section">
      <h2>Our Delicious Foods</h2>
      <div className="foods-list">
        {foods.map((item, i) => (
          <div key={i} className="food-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <button className="order-btn">Order Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurFoods;
