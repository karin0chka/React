import React,{useState} from "react";
import CityList from "./CityList";
import Search from "./Search";
import "./AppBody.css";
import Description from "./Description";
import WeatherCard from "./WeatherCard";
import {api} from "../utils/api"


export default function AppBody() {
    const[currentWeather, setCurrentWeather] = useState(null)
    const[forecast, setForecast] = useState(null)
    async function getApiData(lat, lon){
        const wRes = await api.getWeatherByLocation(lat,lon)
        const fRes= await api.get5DaysWeather(lat,lon)
        setCurrentWeather(wRes.data)
        setForecast(fRes.data)
        console.log(fRes,wRes)
    }
    
  return (
    <div className="Container">
      <div className="appBody">
        <p className="date">Sunday 17:52</p>
        <Search  getApiData={getApiData}/>
        <Description currentWeather={currentWeather} forecast={forecast}/>
        <WeatherCard />
      </div>
    </div>
  );
}
