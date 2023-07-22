import React  from "react";
import CityList from "./CityList"
import Search from "./Search";
import Description from "./Description"
import "./AppBody.css"


export default function AppBody(){
    return(
        <div className="Container">
            <div className="appBody">
                <p className="date">Sunday 17:52</p>
                <CityList />
                <Search />
                <Description temperature={10}/>
                </div>    
        </div>
    )
}