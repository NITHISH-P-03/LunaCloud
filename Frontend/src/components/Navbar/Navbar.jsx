import React, { useContext } from "react";
import cloudicon from "../../assets/images/cloudicon.png";
import { ThemeContext } from "../../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../context/customButton";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={cloudicon} alt="Logo" width="50" height="50" />
          Luna
        </Link>

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
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            {!user ? (
              <>
               <li className="nav-item me-2 mb-2 mb-lg-0">
  {theme === "light" ? (
    <CustomButton theme={theme} size="sm">
      <Link
        to="/register"
        style={{ textDecoration: "none", color: "white" }}
      >
        Create Account
      </Link>
    </CustomButton>
  ) : (
    <Link className="nav-link" to="/register">
      Create Account
    </Link>
  )}
</li>

                <li className="nav-item mb-2 mb-lg-0">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item mb-2 mb-lg-0">
                <CustomButton theme={theme} onClick={handleLogout}>
                  Logout
                </CustomButton>
              </li>
            )}

            {/* About Us */}
            <li className="nav-item my-1 my-lg-0 ms-lg-2 mb-2 mb-lg-0">
              <a className="nav-link" href="/about">
                About Us
              </a>
            </li>

            {/* Theme toggle */}
            <li className="nav-item ms-lg-3 mb-2 mb-lg-0">
              <div className="form-check form-switch">
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
