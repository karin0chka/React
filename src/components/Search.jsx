import React, { useState } from "react";
import { api } from "../utils/api.js";
import "./Search.css";
import CityList from "./CityList.jsx";

export default function Search({getApiData}) {
  const [city, setCity] = useState(null);
  const [cityList, setCityList] = useState(null);

  function updateCity(e) {

    setCity(e.target.value);
  }

  async function handleSubmit(event) {
    
    event.preventDefault();
    if (city) {
      const response = await api.getCityList(city);
      setCityList(response.data);
      console.log(cityList);
    } else {
      alert("Please enter both city and country");
    }
  }

   function handleSelect(city){
    setCityList(null)
    getApiData(city.lat, city.lon)

  }

  return (
    <>
    <CityList />
      <div className="formPoz">
        <form className="searchForm" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter your city"
            id="type-city"
            value={city}
            onChange={updateCity}
          />
          <button type="submit" className="submitButton">
            Search
          </button>
          {cityList && cityList.length && (
            <ul>
              {cityList.map((city, index) => (
                <li key={index + "cityName"} onClick={()=> handleSelect(city)}>
                  {city.name}, {city.state}
                </li>
              ))}
            </ul>
          )}
        </form>
        <button className="curTemp" id="currentTemperature">
          Curent
        </button>
      </div>
    </>
  );
}
