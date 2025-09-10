import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Sidebar.css";
import CustomButton from "../../context/customButton";

function Sidebar() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`sidebar ${theme}`}>
      <ul>
          <CustomButton className="custom-button" theme={theme}><b>+</b>&nbsp;  New</CustomButton>
        <li>Bin</li>
        <li>Storage</li>
        <li>Help</li>
        <li>Feedback</li>
      </ul>
    </div>
  );
}

export default Sidebar;
