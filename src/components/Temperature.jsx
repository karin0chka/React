import React from "react"


export default function Temperature(props){

        return(
            <div>
          <p>It is {props.temp} ({props.temp >= 20 ? "Warm" : "Cold"}) in {props.city}</p>
        </div>

)

}