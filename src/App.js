import React from "react";
import "./App.css";
import Navigation from "./Day1/navigation";
import "./Day1/navigation.css";
import LandingPage from "./Day1/services";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <LandingPage></LandingPage>
    </div>
  );
}

export default App;
