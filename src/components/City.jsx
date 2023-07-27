import React from "react"

export default function  City({cities}){

    return(
        <>
        <ul>
           {cities.map((city, index) => {
            return(
                <li key={index}>It is {city.temp} in <strong>{city.name}</strong></li>
            )
           })

           }
        </ul>
        </>
    )
}