import React from "react";
import "./Dashboard.css";
import DashboardMain from "./DashboardMain";
import DashboardMenu from "./DashboardMenu";

function Dashboard() {
  return (
    <div
      className="dashboardContainer
  "
    >
      <DashboardMain />
      <DashboardMenu />
    </div>
  );
}

export default Dashboard;
