import React,{ useState }  from "react";
import "./Description.css";

export default function Temperature(props) {
    let [temperature, setTemperature] = useState(props.temperature);
    function showFahrenheit(event) {
        event.preventDefault();
        setTemperature(Math.round(props.temperature * 9) / 5 + 32);
      }
      function showCelsius(event){
        event.preventDefault()
        setTemperature(props.temperature)
      }
  return (
    <div>
      <div className="Description">
        <p className="cityName">{props.city}</p>
        <p className="weatherDescription">Overcast Clouds</p>

        <div className="showTemp">
          <i className="fa-solid fa-cloud-sun-rain"></i>
          <strong>{temperature}</strong>
          <section className="units" >
            <a href="#" id="celsius-link" onClick={showCelsius}>
              °C
            </a>
            |
            <a href="#" id="fahrenheit-link" onClick={showFahrenheit}>
              °F
            </a>
          </section>
        </div>
      </div>
      <section className="weatherSituation">
        <p  id="weatherSituation">
          Humidity: 89%
          <br />
          Wind speed: 8 mph
        </p>
      </section>
    </div>
  );
}
