import React from "react";
import "./Industry.css";
import { FaIndustry, FaWater, FaBuilding, FaCogs, FaProjectDiagram } from "react-icons/fa";

const Industry = () => {
  return (
    <div className="industry-section">
      <div className="container">
        {/* Heading */}
        <div className="industry-header text-center">
          <h1>Our Work in Industries</h1>
          <p>
            At <span className="highlight">Bhagwat Construction</span>, we take pride 
            in working across multiple industries, government initiatives, and 
            large-scale water projects. Our expertise ensures quality and 
            reliability in every project we deliver.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="industry-grid">
          <div className="industry-card">
            <FaIndustry className="industry-icon" />
            <h3>Multiple Industries</h3>
            <p>
              Delivering projects in electronics, IT, automotive, mechanical, 
              and pharma sectors with precision and innovation.
            </p>
          </div>

          <div className="industry-card">
            <FaBuilding className="industry-icon" />
            <h3>Government Projects</h3>
            <p>
              Partnering with government bodies to execute infrastructure and 
              public development projects of national importance.
            </p>
          </div>

          <div className="industry-card">
            <FaWater className="industry-icon" />
            <h3>Water Projects</h3>
            <p>
              Expertise in water supply, treatment, and infrastructure projects 
              to support sustainable development.
            </p>
          </div>

          <div className="industry-card">
            <FaCogs className="industry-icon" />
            <h3>Engineering Excellence</h3>
            <p>
              Combining technology and engineering expertise to deliver 
              innovative and reliable solutions.
            </p>
          </div>

          <div className="industry-card">
            <FaProjectDiagram className="industry-icon" />
            <h3>Turnkey Solutions</h3>
            <p>
              Offering end-to-end solutions, from planning to execution, 
              ensuring seamless delivery of every project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industry;
