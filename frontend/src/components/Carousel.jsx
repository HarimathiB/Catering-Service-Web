import React, { useState, useEffect } from "react";
import "./Carousel.css";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel" id="home">
      <img src={images[index]} alt="slideshow" className="carousel-img" />
    </div>
  );
};

export default Carousel;
