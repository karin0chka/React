import React from "react"


export default function WeatherCard(){
    

    const cardWrap ={
            display: "flex",
            flexDirection:"column",   
            alignItems:"center",
            overFlowX: "scroll",
            overFlowY: "hidden"
          
    }
    
    return(
        <>
        <div className="weatherWrapper" style={cardWrap}>
            <p className="date">25 Tuesday</p>
            <p className="time"></p>
            <p className="description">Cloud</p>
            <p className="temperature">23°C</p>
        </div>

        </>
    )
}