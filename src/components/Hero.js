import React from "react";
import bhome from "../assets/images/bhome.png";
import ard from "../assets/images/ard.png";
import "../App.css"; // ✅ if you keep hero styles here

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <img src={bhome} alt="Construction Site" />
      </div>
      <div className="hero-right">
        <img src={ard} alt="Architecture Design" />
      </div>
    </div>
  );
};

export default Hero;
