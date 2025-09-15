


import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cloudicon from "../../assets/images/cloudicon.png";
import { ThemeContext } from "../../context/ThemeContext";
import AccountDropdown from "../AccountDropdown/AccountDropdown";

const DashBoardNavbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar fixed-top navbar-expand navbar-${theme} bg-${theme}`}
      style={{ padding: "0 1rem", height: "70px" }}
    >
      <div className="container-fluid">
        {/* Logo navigates to landing page */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={cloudicon} alt="Logo" width="50" height="50" className="me-2" />
          Luna
        </Link>

        {/* Theme toggle */}
        <div className="d-flex align-items-center ms-auto">
          <label
            className={`me-2 ${theme === "dark" ? "text-light" : "text-dark"}`}
            htmlFor="themeSwitch"
            style={{ userSelect: "none", cursor: "pointer" }}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </label>
          <div className="form-check form-switch m-0">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="themeSwitch"
              checked={theme === "dark"}
              onChange={toggleTheme}
              style={{ cursor: "pointer" }}
            />
          </div>

          <AccountDropdown theme={theme} />
        </div>
      </div>
    </nav>
  );
};

export default DashBoardNavbar;
