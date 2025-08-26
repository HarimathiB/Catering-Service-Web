import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const navItems = ["Home", "About Us", "Our Foods", "Our Services", "Contact Us"];

  return (
    <nav className="navbar">
      <div className="logo">🍽️ Catering</div>
      <ul className="nav-links">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={`#${item.replace(" ", "").toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
