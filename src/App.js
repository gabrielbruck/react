import React from "react";
import "./App.css";
import CenteredGrid from "./Day1/Ninja/gridlayout";

function App() {
  return (
    <div className="landingpage">
      <CenteredGrid></CenteredGrid>
      {/* <div className="navigation-bar"></div>
      <div className="content-part">
        <div className="content-top">
          <div className="notification-content">
            <div className="tasks"></div>
            <div className="sales"></div>
          </div>
          <div className="calendar-content">
            <div className="calendar"></div>
            <div className="activity"></div>
          </div>
        </div>
        <div className="content-bottom">
          <div className="new-clients"></div>
          <div className="top-states"></div>
        </div>
      </div> */}
    </div>
  );
}
export default App;
