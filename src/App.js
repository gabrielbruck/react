import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Travel from "./Day1/travel";
import "./Day1/travel.css";
import Box1 from "./Day1/box";

function App() {
  return (
    <div>
      <Travel
        name={"Munich"}
        imageUrl={
          "https://www.muenchen.de/media/shutterstock-2017/sehenswuerdigkeiten-2/rathaus-sonne-hp.jpg"
        }
        location={
          "https://www.google.com/maps?q=munchen&rlz=1C5CHFA_enIL829IL829&um=1&ie=UTF-8&sa=X&ved=2ahUKEwisg_ek-4XpAhWFQEEAHfT6A_AQ_AUoAnoECDEQBA"
        }
      ></Travel>
      <Travel
        name={"Istanbul"}
        imageUrl={"https://wallpapercave.com/wp/wp1813723.jpg"}
        location={
          "https://https://www.google.com/maps?q=istanbul+wallpaper&rlz=1C5CHFA_enIL829IL829&hl=en&um=1&ie=UTF-8&sa=X&ved=2ahUKEwijz4Cq_4XpAhVSoVwKHc2ZAOwQ_AUoA3oECCMQBQ.google.com/maps?q=munchen&rlz=1C5CHFA_enIL829IL829&um=1&ie=UTF-8&sa=X&ved=2ahUKEwisg_ek-4XpAhWFQEEAHfT6A_AQ_AUoAnoECDEQBA"
        }
      ></Travel>
    </div>
  );
}

export default App;

// Excercise 1
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Itc react app</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Click Me
//         </a>
//       </header>
//     </div>
//   );
// }

// Excercise 2
// <div>
// <Travel
//   name={"Munich"}
//   imageUrl={
//     "https://www.muenchen.de/media/shutterstock-2017/sehenswuerdigkeiten-2/rathaus-sonne-hp.jpg"
//   }
//   location={
//     "https://www.google.com/maps?q=munchen&rlz=1C5CHFA_enIL829IL829&um=1&ie=UTF-8&sa=X&ved=2ahUKEwisg_ek-4XpAhWFQEEAHfT6A_AQ_AUoAnoECDEQBA"
//   }
// ></Travel>
// <Travel
//   name={"Istanbul"}
//   imageUrl={"https://wallpapercave.com/wp/wp1813723.jpg"}
//   location={
//     "https://https://www.google.com/maps?q=istanbul+wallpaper&rlz=1C5CHFA_enIL829IL829&hl=en&um=1&ie=UTF-8&sa=X&ved=2ahUKEwijz4Cq_4XpAhVSoVwKHc2ZAOwQ_AUoA3oECCMQBQ.google.com/maps?q=munchen&rlz=1C5CHFA_enIL829IL829&um=1&ie=UTF-8&sa=X&ved=2ahUKEwisg_ek-4XpAhWFQEEAHfT6A_AQ_AUoAnoECDEQBA"
//   }
// ></Travel>
// </div>
// );
// }
