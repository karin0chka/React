import React, {useState} from "react";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  function handleSubmit(event) {
    event.preventDefault();

  }
  function updateCity(event){
    setCity(event.target.value)
  }


  return (
    <div>
    <form class="searchForm" onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter your city" id="type-city" 
      value={city}
      onChange={updateCity}/>
      <button type="submit" class="submitButton">
        Search
      </button>

      <button class="curTemp" id="currentTemperature">
        Curent
      </button>
    </form>
    <h4 className="searshResult">{city}</h4>
    </div>
  );
}
