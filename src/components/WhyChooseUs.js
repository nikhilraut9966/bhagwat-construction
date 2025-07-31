import React from "react";

// ✅ Import your images (keep them in src/assets/images/)
import quality from "../assets/images/quality.png";
import experience from "../assets/images/experience.png";
import support from "../assets/images/support.png";



const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Why Choose Us?</h2>
        <div className="row text-center g-4">
          
          {/* ✅ Card 1 */}
          <div className="col-md-4 col-sm-6">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <img src={quality} alt="Quality" style={{ width: "60px", height: "60px", marginBottom: "15px" }} />
              <h4>High Quality Work</h4>
              <p>We ensure top-notch quality in every project, using the best materials and techniques.</p>
            </div>
          </div>

          {/* ✅ Card 2 */}
          <div className="col-md-4 col-sm-6">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <img src={experience} alt="Experience" style={{ width: "60px", height: "60px", marginBottom: "15px" }} />
              <h4>Years of Experience</h4>
              <p>With decades of industry expertise, we bring unmatched knowledge to every site.</p>
            </div>
          </div>

          {/* ✅ Card 3 */}
          <div className="col-md-4 col-sm-6">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <img src={support} alt="Support" style={{ width: "60px", height: "60px", marginBottom: "15px" }} />
              <h4>Dedicated Support</h4>
              <p>We value our clients and offer 24/7 assistance to ensure smooth project execution.</p>
            </div>
          </div>

          {/* ✅ Card 4 */}
          <div className="col-md-4 col-sm-6">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <img src={quality} alt="Projects" style={{ width: "60px", height: "60px", marginBottom: "15px" }} />
              <h4>120+ Successful Projects</h4>
              <p>Building trust one project at a time with proven results and client satisfaction.</p>
            </div>
          </div>

          {/* ✅ Card 5 */}
          <div className="col-md-4 col-sm-6">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <img src={quality} alt="Teamwork" style={{ width: "60px", height: "60px", marginBottom: "15px" }} />
              <h4>Expert Team</h4>
              <p>Our highly skilled team ensures every project is completed with precision and care.</p>
            </div>
          </div>

          {/* ✅ Card 6 */}
          <div className="col-md-4 col-sm-6">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <img src={quality} alt="Innovation" style={{ width: "60px", height: "60px", marginBottom: "15px" }} />
              <h4>Innovative Solutions</h4>
              <p>We adopt modern designs and technologies for smarter, sustainable construction.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
