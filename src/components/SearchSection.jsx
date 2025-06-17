import React from "react";
import "./SearchSection.css";

const SearchSection = () => {
  return (
    <section className="search-section">
      <input type="text" placeholder="Doctor Name" />
      <input type="text" placeholder="Specialization" />
      <input type="text" placeholder="Availability" />
      <button>Search</button>
    </section>
  );
};

export default SearchSection;
