import React, { useContext } from "react";
import cloudicon from "../../assets/images/cloudicon.png";
import { ThemeContext } from "../../context/ThemeContext";
import AccountDropdown from "../AccountDropdown/AccountDropDown";

const DashBoardNavbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar fixed-top navbar-expand navbar-${theme} bg-${theme}`}
      style={{ padding: "0 1rem", height: "70px" }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={cloudicon} alt="Logo" width="50" height="50" className="me-2" />
          Luna
        </a>

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
