import React, { useState } from "react";
import "./SearchSection.css";

const mockDoctors = [
  { id: 1, name: "Dr. Ali", specialization: "Cardiologist", available: true, fee: 1200 },
  { id: 2, name: "Dr. Sana", specialization: "Neurologist", available: false, fee: 1800 }, // filtered out
  { id: 3, name: "Dr. Hamza", specialization: "Cardiologist", available: true, fee: 1400 },
  { id: 4, name: "Dr. Ayesha", specialization: "Cardiologist", available: false, fee: 1600 }, // filtered out
  { id: 5, name: "Dr. Zara", specialization: "Neurologist", available: true, fee: 1500 },
];

const SearchSection = () => {
  const [searchName, setSearchName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [results, setResults] = useState([]);
  const [alternatives, setAlternatives] = useState([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    date: "",
  });
  const [confirmed, setConfirmed] = useState(false);

  const handleSearch = () => {
    const nameMatch = mockDoctors.find(
      (doc) =>
        doc.name.toLowerCase().includes(searchName.toLowerCase()) &&
        doc.specialization.toLowerCase() === specialization.toLowerCase() &&
        doc.fee <= 1500
    );

    if (nameMatch && nameMatch.available) {
      setResults([nameMatch]);
      setAlternatives([]);
    } else {
      const sameFieldDoctors = mockDoctors.filter(
        (doc) =>
          doc.specialization.toLowerCase() === specialization.toLowerCase() &&
          (!nameMatch || doc.name !== nameMatch.name) &&
          doc.fee <= 1500
      );
      setResults([]);
      setAlternatives(sameFieldDoctors);
    }

    setSelectedDoctorId(null);
    setConfirmed(false);
  };

  const renderAppointmentForm = (doc) => (
    <div className="appointment-form">
      <h4>Appointment with {doc.name}</h4>
      {confirmed ? (
        <p className="success-message">✅ Appointment confirmed for {appointmentData.name}!</p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setConfirmed(true);
            console.log("Saved Appointment:", { ...appointmentData, doctor: doc.name });
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            value={appointmentData.name}
            onChange={(e) => setAppointmentData({ ...appointmentData, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Age"
            required
            value={appointmentData.age}
            onChange={(e) => setAppointmentData({ ...appointmentData, age: e.target.value })}
          />
          <select
            required
            value={appointmentData.gender}
            onChange={(e) => setAppointmentData({ ...appointmentData, gender: e.target.value })}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <input
            type="tel"
            placeholder="Mobile Number"
            required
            value={appointmentData.mobile}
            onChange={(e) => setAppointmentData({ ...appointmentData, mobile: e.target.value })}
          />
          <input
            type="email"
            placeholder="Gmail Address"
            required
            value={appointmentData.email}
            onChange={(e) => setAppointmentData({ ...appointmentData, email: e.target.value })}
          />
          <input
            type="date"
            required
            value={appointmentData.date}
            onChange={(e) => setAppointmentData({ ...appointmentData, date: e.target.value })}
          />
          <input type="text" value={`${doc.fee} PKR`} readOnly />
          <button type="submit">Confirm Appointment</button>
        </form>
      )}
    </div>
  );

  return (
    <section className="search-section">
      <div className="container">
        <h2>Find A Doctor</h2>

        <div className="search-form">
          <input
            type="text"
            placeholder="Enter doctor name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {(results.length > 0 || alternatives.length > 0) && (
          <div className="search-results">
            {results.map((doc) => (
              <div key={doc.id} className="doctor-card">
                <p><strong>Name:</strong> {doc.name}</p>
                <p><strong>Specialization:</strong> {doc.specialization}</p>
                <p><strong>Status:</strong> Available</p>
                <p><strong>Fee:</strong> {doc.fee} PKR</p>
                <button onClick={() => setSelectedDoctorId(doc.id)}>Book Appointment</button>
                {selectedDoctorId === doc.id && renderAppointmentForm(doc)}
              </div>
            ))}

            {alternatives.length > 0 && (
              <>
                <h3>Not available. Other options in same field:</h3>
                {alternatives.map((doc) => (
                  <div key={doc.id} className="doctor-card">
                    <p><strong>Name:</strong> {doc.name}</p>
                    <p><strong>Specialization:</strong> {doc.specialization}</p>
                    <p><strong>Status:</strong> {doc.available ? "Available" : "Unavailable"}</p>
                    <p><strong>Fee:</strong> {doc.fee} PKR</p>
                    {doc.available && (
                      <>
                        <button onClick={() => setSelectedDoctorId(doc.id)}>Book Appointment</button>
                        {selectedDoctorId === doc.id && renderAppointmentForm(doc)}
                      </>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchSection;
