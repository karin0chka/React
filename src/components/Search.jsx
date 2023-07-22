import React, {useState} from "react";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmitedCity] = useState("")
  function updateCity(e){
    setCity(e.target.value)
  }
  
  function handleSubmit(event) {
    if(city !== ""){
      event.preventDefault()
      setSubmitedCity(city)
      setCity("")
    }else{
      alert("Please enter a city");
  }
  }

  return (
    <>
      <div className="formPoz">
    <form className="searchForm" onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter your city" id="type-city" 
      value={city}
      onChange={updateCity}/>
      <button type="submit" className="submitButton">
        Search
      </button>
    </form>
      <button className="curTemp" id="currentTemperature">
        Curent
      </button>
      </div>
    {submittedCity !== "" && (
        <h4 className="searchResult">{`It is currently 20°C in ${submittedCity}`}</h4>
      )}
    </>
  );
}
