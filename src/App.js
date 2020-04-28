import React from "react";
import "./App.css";
import SearchBar from "./Day1/GeekOut/searchbar";
import TodayWeather from "./Day1/GeekOut/todayweather";
import Forecast from "./Day1/GeekOut/weatherforecast";
const api = {
  key: "4a61e732e28d4db683cc14ed0901c5cf",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div>
      <div className="top_part">
        <SearchBar></SearchBar>
        <TodayWeather></TodayWeather>
      </div>
      <div className="bottom_part">
        <Forecast
          day={"mo"}
          date={"16.02"}
          image={
            "https://cdn1.iconfinder.com/data/icons/weather-status-flat-1/64/weather-01-512.png"
          }
          condition={"Sunny"}
          degrees={"19°C"}
          wind={"4mph"}
          humidity={"63%"}
          probabilty={"14%"}
        ></Forecast>
        <Forecast
          day={"tu"}
          date={"17.02"}
          image={
            "https://cdn1.iconfinder.com/data/icons/weather-2-colored/512/heavy_rainy-512.png"
          }
          condition={"Rain"}
          degrees={"14°C"}
          wind={"10mph"}
          humidity={"75%"}
          probabilty={"95%"}
        ></Forecast>
        <Forecast
          day={"we"}
          date={"18.02"}
          image={
            "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-sunny-512.png"
          }
          condition={"Cloudy"}
          degrees={"17°C"}
          wind={"15mph"}
          humidity={"55%"}
          probabilty={"40%"}
        ></Forecast>
      </div>
    </div>
  );
}

export default App;
