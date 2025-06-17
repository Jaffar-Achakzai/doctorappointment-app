import React from "react";
import "./TestimonialsSection.css";

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Patients Say</h2>
      <div className="testimonials-grid">
        <div className="testimonial">
          <p>"Amazing service, very professional doctors!"</p>
          <strong>- Sarah</strong>
        </div>
        <div className="testimonial">
          <p>"I booked my appointment easily and quickly."</p>
          <strong>- Ahmed</strong>
        </div>
        <div className="testimonial">
          <p>"Best healthcare platform I've used."</p>
          <strong>- Amina</strong>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
