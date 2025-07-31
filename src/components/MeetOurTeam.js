import React from "react";
import img1 from "../assets/images/002.jpg";
import img2 from "../assets/images/nik.jpg";
import img3 from "../assets/images/sonya.png";
import img4 from "../assets/images/002.jpg";

function MeetOurTeam() {
  return (
    <section id="our-team" className="py-5" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <h2 className="text-center mb-5">Meet Our Team</h2>
        <div className="row text-center">
          <div className="col-md-3 col-sm-6 mb-4">
            <img src={img1} alt="Team Member 1" className="rounded-circle mb-3" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
            <h5>Manoj Bhagwat</h5>
            <p className="text-muted">CEO (Satara Site)</p>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <img src={img2} alt="Team Member 2" className="rounded-circle mb-3" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
            <h5>Abhijit Bhagwat</h5>
            <p className="text-muted">CEO (Baramati Site)</p>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <img src={img3} alt="Team Member 3" className="rounded-circle mb-3" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
            <h5>Yashpal Bhagwat</h5>
            <p className="text-muted">Civil Engineer</p>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <img src={img4} alt="Team Member 4" className="rounded-circle mb-3" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
            <h5>Aakash Bhagwat</h5>
            <p className="text-muted">Architecture</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetOurTeam;
