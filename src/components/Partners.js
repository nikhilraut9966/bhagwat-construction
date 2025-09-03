import React, { useEffect, useRef } from "react";
import "./Partners.css";

// Import partner logos (save them inside /src/assets/partners/)
import partner1 from "../assets/images/blogo.jpg";
import partner2 from "../assets/images/mimic.png";
import partner3 from "../assets/images/ptc.png";
import partner4 from "../assets/images/reet.png";
import partner5 from "../assets/images/blogo.jpg";
import partner6 from "../assets/images/blogo.jpg";
import partner7 from "../assets/images/blogo.jpg";

const Partners = () => {
  const trackRef = useRef(null);
  let currentIndex = 0;

  useEffect(() => {
    const track = trackRef.current;
    const total = track.children.length;
    const visible = 4; // number of logos visible at once

    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex > total - visible) {
        currentIndex = 0; // reset loop
      }
      track.style.transform = `translateX(-${currentIndex * (100 / visible)}%)`;
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="partners-section py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4"> Our Trusted Partners</h2>
        <div className="partners-slider">
          <div className="partner-track" ref={trackRef}>
            <div className="partner"><img src={partner1} alt="Partner 1" /></div>
            <div className="partner"><img src={partner2} alt="Partner 2" /></div>
            <div className="partner"><img src={partner3} alt="Partner 3" /></div>
            <div className="partner"><img src={partner4} alt="Partner 4" /></div>
            <div className="partner"><img src={partner5} alt="Partner 5" /></div>
            <div className="partner"><img src={partner6} alt="Partner 6" /></div>
            <div className="partner"><img src={partner7} alt="Partner 7" /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
