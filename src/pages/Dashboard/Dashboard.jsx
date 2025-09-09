import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashBoardNavbar from "../../components/DashBoardNavbar/DashBoardNavbar";

import "./Dashboard.css";
import FileGrid from "../../components/FileTem/FileGrid";

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <DashBoardNavbar />
      <Sidebar />
      <div className="dashboard-main">
      <FileGrid/>
      </div>
    </div>
  );
}

export default Dashboard;


