import React from "react";
import "./Contact.css";
import logo from "../assets/images/blogo.jpg"; // 👈 replace with actual logo path

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side - Logo */}
        <div className="contact-left">
          <img src={logo} alt="Bhagwat Construction Logo" className="contact-logo" />
        </div>

        {/* Right Side - Addresses */}
        <div className="contact-right">
          <h2 className="contact-title">Contact Us</h2>

          <div className="address-card">
            <h3 className="address-title">🏢 Head Office</h3>
            <p className="address-text">
              Bhagwat Construction <br />
              Near Sahyog Society, Baramati, Pune<br/>
              Maharashtra, India <br />
              Contact Number - 9881-268-777
            </p>
          </div>

          <div className="address-card">
            <h3 className="address-title">🏗️ Site Office</h3>
            <p className="address-text">
              Bhagwat Construction – Project Site <br />
              A/P-Taradgaon, Tal-Phltan, Dist- Satara <br/>
              Maharashtra, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
