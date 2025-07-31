import React from "react";
import lv2 from "../assets/images/lv2.png";
import cc from "../assets/images/cc.png";
import ra from "../assets/images/ra.png";

const OngoingProjects = () => {
  return (
    <section id="ongoing-projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Our Ongoing Projects</h2>
        <p className="text-center mb-5">
          We are committed to delivering high-quality construction projects on
          time and with excellence.
        </p>
        <div className="row g-4">
          {/* ✅ Luxury Villas – Baramati */}
          <div className="col-md-4 col-sm-6">
            <div className="card h-100 shadow-sm border-0">
              <img
                src={lv2}
                className="ongoing-img"
                alt="Luxury Villas – Baramati"
              />
              <div className="card-body">
                <h5 className="card-title">Luxury Villas – Baramati</h5>
                <p className="card-text">
                  Exclusive villa project with modern amenities and premium
                  design.
                </p>
              </div>
            </div>
          </div>

          {/* ✅ Commercial Complex – Pune */}
          <div className="col-md-4 col-sm-6">
            <div className="card h-100 shadow-sm border-0">
              <img
                src={cc}
                className="ongoing-img"
                alt="Commercial Complex – Pune"
              />
              <div className="card-body">
                <h5 className="card-title">Commercial Complex – Pune</h5>
                <p className="card-text">
                  A state-of-the-art commercial hub catering to multiple
                  businesses.
                </p>
              </div>
            </div>
          </div>

          {/* ✅ Residential Apartments – Satara */}
          <div className="col-md-4 col-sm-6">
            <div className="card h-100 shadow-sm border-0">
              <img
                src={ra}
                className="ongoing-img"
                alt="Residential Apartments – Satara"
              />
              <div className="card-body">
                <h5 className="card-title">Residential Apartments – Satara</h5>
                <p className="card-text">
                  Affordable and elegant living spaces for families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;
