import axios from "axios";

const apiKey = `138f825d07c82965807b0b7b403a564d`;

async function getCityList(city) {
  return await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}&units=metric`
  );
}
async function getWeatherByLocation(lat, lon) {
  return await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
}
async function get5DaysWeather(lat, lon) {
  return await axios.get(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );
}

export const api = { getCityList, getWeatherByLocation, get5DaysWeather };
