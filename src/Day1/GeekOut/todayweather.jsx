import React from "react";

function TodayWeather() {
  return (
    <div className="weather-top-box">
      <div>
        <img
          className="weather-status"
          src="https://cdn1.iconfinder.com/data/icons/weather-status-flat-1/64/weather-01-512.png"
        ></img>
      </div>
      <div className="weather-information-box">
        <div className="weather-country">Serbia</div>
        <div className="weather-city">Belgrade</div>
        <div className="weather-information">Sunny 19 °C</div>
      </div>
    </div>
  );
}

export default TodayWeather;
