import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "#aboutus" },
    { name: "Events", path: "#events" },
    { name: "Menu", path: "/menu" }, // 🔥 Dedicated Menu Page
    { name: "Our Services", path: "#ourservices" },
    { name: "Contact Us", path: "#contactus" },
  ];

  return (
    <nav className="navbar">
      <div className="logo">🍽️ Catering</div>
      <ul className="nav-links">
        {navItems.map((item, index) => (
          <li key={index}>
            {item.path.startsWith("#") ? (
              // Scroll within HomePage
              <a href={item.path}>{item.name}</a>
            ) : (
              // Navigate to another page (Menu or Home)
              <Link to={item.path}>{item.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
