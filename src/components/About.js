import React from "react";
import blogo from "../assets/images/blogo.jpg"; // ✅ Import your image correctly

const About = () => {
  return (
    <section id="about" className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row align-items-center border border-3 border-warning rounded p-4">
          
          {/* ✅ Left Column - Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src={blogo} // ✅ Use the imported image variable
              alt="B Logo"
              className="img-fluid shadow"
              style={{ maxHeight: "300px" }}
            />
          </div>

          {/* ✅ Right Column - Text */}
          <div className="col-md-7">
            <h2>
              About <strong>Bhagwat Construction</strong>
            </h2>
            <p>
              At <strong>Bhagwat Construction</strong>, we are committed to
              transforming both <strong>cities</strong> and <strong>villages</strong> with innovative and sustainable construction solutions. From modern infrastructure in urban landscapes to essential facilities in rural areas, we bring the same level of dedication, quality, and expertise to every project.
            </p>
            <p>
              Our team of skilled professionals ensures that each project reflects excellence, whether it’s developing residential spaces, commercial complexes, or community structures. We believe in building not just buildings, but trust and a better future for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
