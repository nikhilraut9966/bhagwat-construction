import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#343a40", color: "white", padding: "30px 0" }}>
      <div className="container">
        <div className="row">
          
          {/* ✅ Company Section */}
          <div className="col-md-3">
            <h5>Company</h5>
            <ul className="footer-links list-unstyled">
              <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About Us</Link></li>
              <li><Link to="/career" style={{ color: "white", textDecoration: "none" }}>Careers</Link></li>
              <li><Link to="/events" style={{ color: "white", textDecoration: "none" }}>Events</Link></li>
              <li><Link to="partners" style={{ color: "white", textDecoration: "none" }}>Partners</Link></li>
            </ul>
          </div>

          {/* ✅ Support Section */}
          <div className="col-md-3">
            <h5>Support</h5>
            <ul className="footer-links list-unstyled">
              <li><Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact Us</Link></li>
              <li><Link to="/service" style={{ color: "white", textDecoration: "none" }}>Service</Link></li>
              <li><Link to="/help center" style={{ color: "white", textDecoration: "none" }}>Help Center</Link></li>
              <li><Link to="/privacy policy" style={{ color: "white", textDecoration: "none" }}>Privacy Policy</Link></li>
            </ul>
          </div>

          {/* ✅ Industries Section */}
          <div className="col-md-3">
            <h5>Industries</h5>
            <ul className="footer-links list-unstyled">
              <li><Link to="manufacturing" style={{ color: "white", textDecoration: "none" }}>Manufacturing</Link></li>
              <li><Link to="utilities" style={{ color: "white", textDecoration: "none" }}>Utilities</Link></li>
              <li><Link to="automation" style={{ color: "white", textDecoration: "none" }}>Automation</Link></li>
              <li><Link to="electronics" style={{ color: "white", textDecoration: "none" }}>Electronics</Link></li>
            </ul>
          </div>

          {/* ✅ Contact Section */}
          <div className="col-md-3">
            <h5>Contact</h5>
            <p>Email: bhagwatconstruction@gmail.com</p>
            <p>Phone: +91-9881268777</p>
            <p>Address1: Jalochi, Baramati, Pune.</p>
            <p>Address2: A/p- Taradgaon, Tal-Phaltan, Dist-Satara</p>
          </div>
        </div>

        {/* ✅ Bottom Copyright */}
        <div className="text-center mt-3">
          &copy; 2025 Bhagwat Construction. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
