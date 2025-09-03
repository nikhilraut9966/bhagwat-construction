import React from "react";
import img1 from "../assets/images/002.jpg";
import img2 from "../assets/images/nik.jpg";
import img3 from "../assets/images/sonya.png";
import img4 from "../assets/images/002.jpg";
import "../components/MeetOurTeam.css";

function MeetOurTeam() {
  const team = [
    { img: img1, name: "Manoj Bhagwat", role: "CEO (Satara Site)" },
    { img: img2, name: "Abhijit Bhagwat", role: "CEO (Baramati Site)" },
    { img: img3, name: "Yashpal Bhagwat", role: "Civil Engineer" },
    { img: img4, name: "Aakash Bhagwat", role: "Architecture" },
  ];

  return (
    <section id="our-team" className="our-team-section">
      <div className="container">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="row text-center">
          {team.map((member, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div className="team-member">
                <img src={member.img} alt={member.name} className="team-img" />
                <h5>{member.name}</h5>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MeetOurTeam;
