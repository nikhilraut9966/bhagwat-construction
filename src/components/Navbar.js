import React from "react";
import logo from "../assets/images/blogo.jpg";
import './navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="Logo" className="me-2" style={{ height: "40px" }} />
          <span className="text-warning fw-bold">Bhagwat</span>
          <span className="text-light fw-bold ms-1">Construction</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="home.html" style={{ color: "white" }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="service.html" style={{ color: "white" }}>Service</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="industryDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "white" }}
              >
                Industry
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Electronics</a></li>
                <li><a className="dropdown-item" href="#">Information Technology</a></li>
                <li><a className="dropdown-item" href="#">Automotive Industry</a></li>
                <li><a className="dropdown-item" href="#">Pharma Industry</a></li>
                <li><a className="dropdown-item" href="#">Mechanical Industry</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="product.html" style={{ color: "white" }}>Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html" style={{ color: "white" }}>About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html" style={{ color: "white" }}>Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="career.html" style={{ color: "white" }}>Careers</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
