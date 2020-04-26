import React from "react";
import "./App.css";
import Box1 from "./Day1/box";
import "./Day1/box.css";
import boxChildren from "./Day1/boxChildren";

function App() {
  return (
    <div className="App">
      <Box1>
        <boxChildren class={"box2"}>
          <boxChildren class={"box3"}>
            <boxChildren class={"box4"}></boxChildren>
            <boxChildren class={"box4"}></boxChildren>
          </boxChildren>
        </boxChildren>
      </Box1>
    </div>
  );
}

export default App;
