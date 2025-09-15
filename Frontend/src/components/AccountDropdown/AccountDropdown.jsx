

import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../../services/api"; // Adjust the path if needed
import "./AccountDropdown.css";
import { Link } from "react-router-dom";

function AccountDropdown({ theme }) {
  const navigate = useNavigate();

  // Get user info from localStorage
  const user = JSON.parse(localStorage.getItem("user")) || { username: "Guest", email: "" };

  const handleSignOut = () => {
    // Clear auth token and user info
    setAuthToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login"); // Redirect to login on sign out
  };

  return (
    <div className={`dropdown account-dropdown`}>
      <button
        className={`btn dropdown-toggle d-flex align-items-center ${
          theme === "dark" ? "text-light" : "text-dark"
        }`}
        type="button"
        id="accountDropdownMenu"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ background: "transparent", border: "none", padding: 0 }}
      >
        <FaUserCircle size={28} />
      </button>

      <ul
        className={`dropdown-menu dropdown-menu-end ${
          theme === "dark" ? "dropdown-menu-dark bg-dark" : ""
        }`}
        aria-labelledby="accountDropdownMenu"
        style={{ borderRadius: "10px", boxShadow: "0px 4px 12px rgba(0,0,0,0.15)" }}
      >
        <li>
          <h6 className="dropdown-header">{user.username || "John Doe"}</h6>
          <p className="dropdown-text">{user.email || "email@example.com"}</p>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="/storage">
            Storage
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/profile">
            Account Info
          </a>
        </li>
        <li>
          <button className="dropdown-item text-danger" type="button" onClick={handleSignOut}>
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
}

export default AccountDropdown;
