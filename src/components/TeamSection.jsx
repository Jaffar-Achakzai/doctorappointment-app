import React from "react";
import "./TeamSection.css";

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2>Meet Our Team Members</h2>
      <div className="team-grid">
        <div className="team-member"><h4>Dr. Jane Carter</h4><p>Cardiologist</p></div>
        <div className="team-member"><h4>Dr. Sophia Moore</h4><p>Eye Specialist</p></div>
        <div className="team-member"><h4>Dr. Andy Smith</h4><p>Dentist</p></div>
      </div>
    </section>
  );
};

export default TeamSection;
