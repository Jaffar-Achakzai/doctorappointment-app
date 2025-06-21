import React, { useState } from "react";
import "./Services.css";

const doctorList = [
  { id: 1, name: "Dr. Ali Raza", specialization: "Cardiologist", fee: 1200 },
  { id: 2, name: "Dr. Sana Khan", specialization: "Neurologist", fee: 1500 },
  { id: 3, name: "Dr. Hamza Qureshi", specialization: "Dermatologist", fee: 1000 },
  { id: 4, name: "Dr. Ayesha Noor", specialization: "Pediatrician", fee: 1300 },
];

const Services = () => {
  const [selectedDoctorId, setSelectedDoctorId] = useState(doctorList[0].id);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    date: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedDoctor = doctorList.find((doc) => doc.id === parseInt(selectedDoctorId));
    const newAppointment = {
      ...formData,
      doctorName: selectedDoctor.name,
      doctorSpecialization: selectedDoctor.specialization,
      fee: selectedDoctor.fee,
      createdAt: new Date().toISOString(),
    };

    setAppointments([...appointments, newAppointment]);
    console.log("Saved Appointments:", [...appointments, newAppointment]);

    setSubmitted(true);

    // Reset form
    setFormData({
      name: "",
      age: "",
      gender: "",
      mobile: "",
      email: "",
      date: "",
    });

    // Reset message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const selectedDoctor = doctorList.find((doc) => doc.id === parseInt(selectedDoctorId));

  return (
    <section className="services-section">
      <div className="container">
        <h2>Book an Appointment</h2>

        <form className="appointment-form" onSubmit={handleSubmit}>
          <label>Select Doctor</label>
          <select
            value={selectedDoctorId}
            onChange={(e) => setSelectedDoctorId(e.target.value)}
            required
          >
            {doctorList.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.name} - {doc.specialization}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <input
            type="number"
            placeholder="Age"
            required
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />

          <select
            required
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input
            type="tel"
            placeholder="Mobile Number"
            required
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          />

          <input
            type="email"
            placeholder="Gmail Address"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <input
            type="date"
            required
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />

          <input type="text" readOnly value={`${selectedDoctor.fee} PKR`} />

          <button type="submit">Confirm Appointment</button>

          {submitted && (
            <p className="success-message">
              ✅ Appointment confirmed with {selectedDoctor.name}!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Services;
