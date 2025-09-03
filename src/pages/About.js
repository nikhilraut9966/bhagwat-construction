import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Bhagwat Construction</h2>
        <p className="about-text">
          At <strong>Bhagwat Construction</strong>, we take pride in being a trusted name
          in the construction industry. With years of experience, we have delivered
          projects that reflect our commitment to quality, safety, and innovation.
        </p>
        <p className="about-text">
          Our team of skilled engineers, architects, and professionals ensure every
          project is executed with precision and excellence. From residential to
          commercial and industrial spaces, we build with a vision to shape a better
          tomorrow.
        </p>
        <p className="about-text highlight">
          Our mission is to deliver high-quality infrastructure while building strong
          relationships with our clients and communities.
        </p>
      </div>
    </section>
  );
};

export default About;
