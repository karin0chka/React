import React from "react";
import "./Description.css";

export default function Temperature() {
  return (
    <div>
      <div className="Description">
        <p className="cityName">London</p>
        <p className="weatherDescription">Overcast Clouds</p>

        <div className="showTemp">
          <i class="fa-solid fa-cloud-sun-rain"></i>
          <strong>19</strong>
          <span class="units">
            <a href="#" id="celsius-link" class="active">
              °C{" "}
            </a>
            |
            <a href="#" id="fahrenheit-link">
              °F
            </a>
          </span>
        </div>
      </div>
      <section class="weatherSituation">
        <p  id="weatherSituation">
          Humidity: 89%
          <br />
          Wind speed: 8 mph
        </p>
      </section>
    </div>
  );
}
