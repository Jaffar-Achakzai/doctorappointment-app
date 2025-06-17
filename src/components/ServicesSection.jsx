import React from "react";
import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>Services We Provide</h2>
      <div className="services-grid">
        <div className="service-card">
          <h4>Dental Care</h4>
          <p>Best dental surgeons with modern equipment.</p>
        </div>
        <div className="service-card">
          <h4>Child Care</h4>
          <p>Pediatrics with years of experience.</p>
        </div>
        <div className="service-card">
          <h4>Cardiology</h4>
          <p>Top-rated heart specialists available 24/7.</p>
        </div>
        <div className="service-card">
          <h4>Eye Care</h4>
          <p>Get your vision checked by professionals.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
