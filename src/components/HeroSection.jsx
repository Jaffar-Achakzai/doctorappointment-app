import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Providing Quality <span className="highlight-blue">Healthcare</span> For A
          <br />
          <span className="highlight-green">Brighter</span> And <span className="highlight-green">Healthy</span> Future
        </h1>
        <p>
          At our hospital, we are dedicated to providing exceptional medical care to
          our patients and their families. Our experienced team of medical
          professionals, cutting-edge technology, and compassionate approach make us
          a leader in the healthcare industry.
        </p>

        <div className="hero-buttons">
          <button className="btn-appointment">Appointments</button>
          <button className="btn-video">
            <span className="play-icon">▶</span> Watch Video
          </button>
        </div>
      </div>

      <div className="hero-right">
        <img src="./images/Group 3.png" alt="Doctor" className="doctor-image" />
        <div className="badge-service">24/7 <span>Service</span></div>
        <div className="badge-professionals">
          <img src="./images/Vector.png" alt="Our Professionals" />
          <span>+30</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
