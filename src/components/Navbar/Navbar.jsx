import React, { useContext } from "react";
import cloudicon from "../../assets/images/cloudicon.png";
import { ThemeContext } from "../../context/ThemeContext";
import CustomButton from "../../context/customButton";

import "./Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img src={cloudicon} alt="Logo" width="50" height="50" />
          Luna
        </a>
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Menu items */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex flex-column flex-lg-row align-items-lg-center text-end text-lg-start">
            <li className="nav-item my-1 my-lg-0 ms-lg-2 mx-3">
              <a href="/register">
                <CustomButton theme={theme}>Create Account</CustomButton>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item my-1 my-lg-0 ms-lg-2">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            {/* Theme toggle switch */}
            <div className="form-check form-switch ms-lg-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="themeSwitch"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <label className="form-check-label" htmlFor="themeSwitch">
                {theme === "dark" ? "Dark" : "Light"} Mode
              </label>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
