import React, { useState, useEffect } from "react";
import "./Navbar.css";
import image2 from "./../../assets/img/image2.svg";
import image1 from "./../../assets/img/image1.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  // Apply theme class to document element when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
    // Save preference to localStorage
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-logo" id="coo">
          Jamal
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <Link to="">About me</Link>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="navbar-theme">
          <button onClick={toggleTheme} aria-label="Toggle dark mode" id="cooo">
            <img src={darkMode ? image1 : image2} alt="" />
          </button>
        </div>
      </nav>
    </Router>
  );
};

export default Navbar;
