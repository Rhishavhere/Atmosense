import '../styles/mainforecast.css'
import { useState } from 'react';

export default function MainForecast({temp,update}){
  const [currCity,setCity]=useState(null);
  const searchClick=()=>{
    update(currCity);
  };

  return(
    <div id="mainforecast"> 
   
    <div id="search">
      <img src={'search-button.svg'} alt="" onClick={()=>searchClick()}/>
      <input type="text" placeholder="Search For A City" onChange={(e)=>setCity(e.target.value)}/>
    </div>

    <div id="sky-icon">
      <img src={'sun and rain.svg'} alt="" />
    </div>
    <div id="temperature">
      {temp}<sup>&deg;C</sup>
    </div>
    <div id="date">
      <p>Monday,</p>
      <p>16:00</p>
    </div>
    <div id="weather">
      <img src={"cloud.svg"} alt="" />
      <p>Mostly Cloudy</p>
    </div>
    <div id="rain">
      <img src={"water.svg"} alt="" />
      <p>Rain-30%</p>
    </div>
    <div id="cityName">
      <p>New York</p>
      <img src={"pin.svg"} alt="" />
    </div>
    </div>
  )
}