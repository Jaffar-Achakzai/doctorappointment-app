import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo192.png" alt="Logo" className="logo" />
        <span className="brand-name">Healthcare</span>
      </div>

      <ul className="navbar-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Service</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
      </ul>

      <div className="navbar-right">
        <Link to="/signup" className="signup-link">Sign Up</Link>
        <Link to="/login" className="login-button">Log In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
