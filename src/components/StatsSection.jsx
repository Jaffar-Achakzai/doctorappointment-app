import React from "react";
import "./StatsSection.css";

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stat-box"><h2>99%</h2><p>Customer satisfaction</p></div>
      <div className="stat-box"><h2>15+</h2><p>Specialists available</p></div>
      <div className="stat-box"><h2>120+</h2><p>Patients treated</p></div>
      <div className="stat-box"><h2>240+</h2><p>Consultations</p></div>
    </section>
  );
};

export default StatsSection;
