import React from "react";
import "./Careers.css";

const Careers = () => {
  return (
    <section className="careers-section">
      <div className="careers-container">
        <h2 className="careers-title">Careers at Bhagwat Construction</h2>
        <p className="careers-intro">
          At <strong>Bhagwat Construction</strong>, we believe our strength lies in
          our people. We are always looking for passionate, skilled, and dedicated
          individuals who want to contribute to building a better tomorrow.
        </p>

        <div className="job-listings">
          {/* Job 1 */}
          <div className="job-card">
            <h3 className="job-title">Site Engineer</h3>
            <p className="job-location">📍 Pune, Maharashtra</p>
            <p className="job-desc">
              Responsible for managing on-site construction activities, ensuring
              quality, safety, and timely project completion.
            </p>
            <p className="job-exp">Experience: 2–4 years</p>
            <button className="apply-btn">Apply Now</button>
          </div>

          {/* Job 2 */}
          <div className="job-card">
            <h3 className="job-title">Project Manager</h3>
            <p className="job-location">📍 Taradgaon, Satara</p>
            <p className="job-desc">
              Lead multiple construction projects, coordinate with clients,
              vendors, and ensure adherence to deadlines and budgets.
            </p>
            <p className="job-exp">Experience: 5–8 years</p>
            <button className="apply-btn">Apply Now</button>
          </div>

          {/* Job 3 */}
          <div className="job-card">
            <h3 className="job-title">Civil Supervisor</h3>
            <p className="job-location">📍 Baramati, Maharashtra</p>
            <p className="job-desc">
              Supervise labor teams, maintain quality standards, and report
              progress to management.
            </p>
            <p className="job-exp">Experience: 1–3 years</p>
            <button className="apply-btn">Apply Now</button>
          </div>

          {/* Job 4 */}
<div className="job-card">
  <h3 className="job-title">Architect</h3>
  <p className="job-location">📍 Pune, Maharashtra</p>
  <p className="job-desc">
    Design building plans, prepare layouts, and ensure innovative and sustainable construction designs.
  </p>
  <p className="job-exp">Experience: 3–5 years</p>
  <button className="apply-btn">Apply Now</button>
</div>

{/* Job 5 */}
<div className="job-card">
  <h3 className="job-title">Safety Officer</h3>
  <p className="job-location">📍 Satara, Maharashtra</p>
  <p className="job-desc">
    Oversee site safety compliance, conduct safety training, and ensure adherence to safety standards and regulations.
  </p>
  <p className="job-exp">Experience: 2–4 years</p>
  <button className="apply-btn">Apply Now</button>
</div>

{/* Job 6 */}
<div className="job-card">
  <h3 className="job-title">Quantity Surveyor</h3>
  <p className="job-location">📍 Baramati, Maharashtra</p>
  <p className="job-desc">
    Estimate project costs, prepare BOQs, track budgets, and assist management with cost control.
  </p>
  <p className="job-exp">Experience: 3–6 years</p>
  <button className="apply-btn">Apply Now</button>
</div>
{/* Job 7 */}
<div className="job-card">
  <h3 className="job-title">Electrical Engineer</h3>
  <p className="job-location">📍 Pune, Maharashtra</p>
  <p className="job-desc">
    Responsible for electrical system design, installation, and maintenance on construction sites.
  </p>
  <p className="job-exp">Experience: 2–5 years</p>
  <button className="apply-btn">Apply Now</button>
</div>

{/* Job 8 */}
<div className="job-card">
  <h3 className="job-title">Procurement Officer</h3>
  <p className="job-location">📍 Satara, Maharashtra</p>
  <p className="job-desc">
    Manage purchasing of materials, negotiate with vendors, and ensure timely delivery of construction supplies.
  </p>
  <p className="job-exp">Experience: 3–6 years</p>
  <button className="apply-btn">Apply Now</button>
</div>

        </div>

        <p className="careers-footer">
          Don’t see a role that fits? Send us your resume at{" "}
          <a href="mailto:bhagwatconstruction@gmail.com">
            bhagwatconstruction@gmail.com
          </a>{" "}
          – we’re always open to new talent!
        </p>
      </div>
    </section>
  );
};

export default Careers;
