import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Sidebar.css";

function Sidebar() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`sidebar ${theme}`}>
      <ul>
        <li>Bin</li>
        <li>Storage</li>
        <li>Help</li>
        <li>Feedback</li>
      </ul>
    </div>
  );
}

export default Sidebar;
