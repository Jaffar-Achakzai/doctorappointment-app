import React from "react";
import "./TeamSection.css";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Ali Raza",
    specialization: "Cardiologist",
    image: "./images/Dr.qureshi.jpg",
  },
  {
    id: 2,
    name: "Dr. Sana Khan",
    specialization: "Neurologist",
    image: "./images/dr.sana.png",
  },
  {
    id: 3,
    name: "Dr. Hamza Qureshi",
    specialization: "Dermatologist",
    image: "./images/dr.qureshii.png",
  },
  {
    id: 4,
    name: "Dr. Ayesha Noor",
    specialization: "Pediatrician",
    image: "./images/Dr.Ayesha.webp",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.specialization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
