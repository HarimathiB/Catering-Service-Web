import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Events from "../components/Events";
import AboutUs from "../components/AboutUs";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactUs from "../components/ContactUs";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Events />
      <AboutUs />
      <WhyChooseUs />
      <ContactUs />
    </>
  );
};

export default HomePage;
