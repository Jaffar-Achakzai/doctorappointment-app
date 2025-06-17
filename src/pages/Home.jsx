import React from "react";
import HeroSection from "../components/HeroSection";
import SearchSection from "../components/SearchSection";
import StatsSection from "../components/StatsSection";
import ServicesSection from "../components/ServicesSection";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection";
import "../pages/Home.css"; // Home.css for styling
const Home = () => {
  return (
    <div>
      <HeroSection />
      <SearchSection />
      <StatsSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
