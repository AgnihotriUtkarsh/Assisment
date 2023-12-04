import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Your Logo
        </Link>

        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <Link to="/" className="navbar-item" onClick={toggleNavbar}>
            Home
          </Link>
          <Link to="/about" className="navbar-item" onClick={toggleNavbar}>
            About
          </Link>
          <Link to="/contact" className="navbar-item" onClick={toggleNavbar}>
            Contact
          </Link>
        </div>

        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className={`bar ${isOpen ? "bar1" : ""}`} />
          <span className={`bar ${isOpen ? "bar2" : ""}`} />
          <span className={`bar ${isOpen ? "bar3" : ""}`} />
        </div>
      </div>
    </nav>
  );
};

export default HomePage;
