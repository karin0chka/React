import React from "react"
import "./Search.css"

export default function Search(){
    return(
        <form class="searchForm">
            <input
              type="text"
              placeholder="Enter your city"
              id="type-city"
            />
            <button type="submit" class="submitButton">
              Search
            </button>
            <button class="curTemp" id="currentTemperature">
              Curent
            </button>
          </form>

    )
}