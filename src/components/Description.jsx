import React from "react";
import "./Description.css";
import Units from "./Units";

export default function Description({ currentWeather }) {
  async function displayWeatherDescription() {}
  return (
    <>
      {currentWeather && (
        <div className="Description">
          <div className="gridItemOne">
              <h1>{currentWeather.name}</h1>
            <p className="weatherDescription" style={{textTransform:'capitalize'}}>
              {currentWeather.weather[0].description}
            </p>
            {!!currentWeather}
            <p id="weatherSituation">
              Humidity: {currentWeather.main.humidity}%
              <br />
              Wind speed: {Math.round(currentWeather.wind.speed)} mph
            </p>
          </div>
          <div className="gridItemTwo">
            <Units temperature={Math.round(currentWeather.main.temp)} />
          </div>
        </div>
      )}
    </>
  );
}
