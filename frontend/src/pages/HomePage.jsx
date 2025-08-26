import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import OurFoods from "../components/OurFoods";
import AboutUs from "../components/AboutUs";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactUs from "../components/ContactUs";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <OurFoods />
      <AboutUs />
      <WhyChooseUs />
      <ContactUs />
    </>
  );
};

export default HomePage;
