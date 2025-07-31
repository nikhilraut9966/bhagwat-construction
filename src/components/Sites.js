import React from "react";

// ✅ Import all images
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import ra from "../assets/images/ra.png";
import cc from "../assets/images/cc.png";

const Sites = () => {
  return (
    <section id="Sites" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Sites</h2>
        <div className="row g-4">
          {/* ✅ Each image card */}
          <div className="col-md-4 col-sm-6">
            <div className="project-img">
              <img src={p1} className="img-fluid" alt="Baramati, Jalochi" />
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="project-img">
              <img src={p2} className="img-fluid" alt="Project 2" />
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="project-img">
              <img src={p3} className="img-fluid" alt="Project 3" />
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="project-img">
              <img src={p4} className="img-fluid" alt="Project 4" />
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="project-img">
              <img src={ra} className="img-fluid" alt="Project 5" />
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="project-img">
              <img src={cc} className="img-fluid" alt="Project 6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sites;
