import React from "react";
import Engagements from "../components/events/Engagements";
import Marriage from "../components/events/Marriage";
import BirthdayFunctions from "../components/events/BirthdayFunctions";
import BabyShower from "../components/events/BabyShower";
import Nichayadhartham from "../components/events/Nichayadhartham";
import Grahapravesh from "../components/events/Grahapravesh";
import "./MenuPage.css";

const MenuPage = () => {
  return (
    <div className="menu-page">
      <h1>Our Menus by Event</h1>
      <div className="menu-grid">
        <Engagements />
        <Marriage />
        <BirthdayFunctions />
        <BabyShower />
        <Nichayadhartham />
        <Grahapravesh />
      </div>
    </div>
  );
};

export default MenuPage;
