"use client";
import React, { useState, useEffect } from 'react';
import "./navbar.css"
import Image from 'next/image';

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModePreference = localStorage.getItem("liferunnertheme") === "dark";
    setIsDarkMode(darkModePreference);
    document.documentElement.classList.toggle("dark", darkModePreference);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const theme = !isDarkMode ? "dark" : "light";
    document.documentElement.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("liferunnertheme", theme);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Image
          className="nav-icon"
          src="/images/logo.png"
          alt="Next.js logo"
          width={98}
          height={44}
          priority
        />

        <ul className="nav-links">
          <li><a href="#" className="nav-link">Services</a></li>
          <li><a href="#" className="nav-link">About</a></li>
          <li><a href="#" className="nav-link">Pricing</a></li>
          <li><a href="#" className="nav-link">Contact</a></li>
          <li>
            <button className="toggle-button-theme" onClick={toggleDarkMode}>
              {isDarkMode ? "🌙" : "☀️ "}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
