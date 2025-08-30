import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./EventMenu.css"; // make sure you create this file

const menus = {
  Engagements: ["Paneer Tikka", "Veg Biryani", "Gulab Jamun"],
  Marriage: ["Mutton Biryani", "Chicken Curry", "Kesari"],
  "Birthday Functions": ["Cake", "Pizza", "Juice"],
  "Baby Shower": ["Veg Meals", "Payasam", "Vada"],
  Nichayadhartham: ["Idly", "Sambar", "Rasam"],
  "Corporate Catering Services": ["Buffet Lunch", "Snacks", "Drinks"],
  Grahapravesh: ["Full Veg Meals", "Sweet", "Curry"],
};

const EventMenu = () => {
  const { eventName } = useParams();
  const menuItems = menus[eventName] || [];

  const [selectedItems, setSelectedItems] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "",
  });

  // handle checkbox selection
  const toggleItem = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  // handle input changes
  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  // send details via WhatsApp
  const handleWhatsAppOrder = () => {
    if (selectedItems.length === 0) {
      alert("Please select at least one menu item.");
      return;
    }

    const message = `
📌 Event: ${eventName}
🍴 Selected Menu: ${selectedItems.join(", ")}
👤 Name: ${userDetails.name}
📞 Phone: ${userDetails.phone}
📅 Date: ${userDetails.date}
👥 Guests: ${userDetails.guests}
    `;

    const whatsappNumber = "916383429393"; // replace with your WhatsApp number
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="event-menu">
      <h2>{eventName} Menu</h2>
      <p>Select the items you’d like to include:</p>

      <div className="menu-list">
        {menuItems.map((item, index) => (
          <label key={index} className="menu-item">
            <input
              type="checkbox"
              checked={selectedItems.includes(item)}
              onChange={() => toggleItem(item)}
            />
            {item}
          </label>
        ))}
      </div>

      <h3 style={{ marginTop: "30px" }}>Enter Your Details</h3>
      <form className="order-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={userDetails.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={userDetails.phone}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={userDetails.date}
          onChange={handleChange}
        />
        <input
          type="number"
          name="guests"
          placeholder="No. of Guests"
          value={userDetails.guests}
          onChange={handleChange}
        />
      </form>

      <button className="final-order-btn" onClick={handleWhatsAppOrder}>
        Send Order via WhatsApp
      </button>
    </div>
  );
};

export default EventMenu;

