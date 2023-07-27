import React, { useState } from "react";
import { api } from "../utils/api";
import { Audio } from  'react-loader-spinner'

export default function Weather() {
  let [temperature, setTemperature] = useState(null);

  async function getWeatherByCityName() {
    let curTemp = Math.round(
      (await api.getWeatherByCityName({ city })).data.main.temp
    );
    setTemperature(curTemp);
  }
  getWeatherByCityName();

  if (temperature) {
    return (
      <p>
        The weather in {city} is {temperature}
      </p>
    );
  } else {
    return (
        <Audio
        height = "80"
        width = "80"
        radius = "9"
        color = 'green'
        ariaLabel = 'three-dots-loading'     
        wrapperStyle
        wrapperClass
      />
    );
  }
}
