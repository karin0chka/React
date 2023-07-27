import React,{useState} from "react"


export default function Units(props){
    let [temperature, setTemperature] = useState(props.temperature)
    function showFahrenheit(event){
        event.preventDefault();
        let fahrenheit = Math.round((props.temperature * 9) / 5 + 32);
        setTemperature(fahrenheit)
      }
      function showCelsius(event){
        event.preventDefault()
        setTemperature(props.temperature)
      } 
      const units = {
        display:'flax',
        flexDirection:'row',



      }
      return(
        <div className="showTemp">
          <div style={{display:"flex", flexDirection:"row", fontSize:"50px", justifyContent:"center"}} >
          <i className="fa-solid fa-cloud-sun-rain" style={{display:"flex", alignItems:"center", margin:"4px"}}></i>
          <strong style={{margin:"3px"}}>{temperature}</strong>
          <section className="units" style={{fontSize:"18px",display:"flex", alignItems:"start"}}>
            <a href="#" id="celsius-link" onClick={showCelsius} style={{margin:"2px"}}>
              °C
            </a>
            |
            <a href="#" id="fahrenheit-link" onClick={showFahrenheit} style={{margin:"2px"}}>
              °F
            </a>
          </section>
          </div>
        </div>
      )
}
