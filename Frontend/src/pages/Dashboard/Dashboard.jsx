


import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashBoardNavbar from "../../components/DashBoardNavbar/DashBoardNavbar";
import FileGrid from "../../components/FileTem/FileGrid";
import { ThemeContext } from "../../context/ThemeContext";

import "./Dashboard.css";

function Dashboard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`dashboard-wrapper ${theme}`}>
      
      <DashBoardNavbar />
      <Sidebar />
      <div className="dashboard-main">
        <FileGrid />
      </div>
    </div>
  );
}

export default Dashboard;

