import '../styles/mainforecast.css'
import { useState } from 'react';

export default function MainForecast({temp,update,sky,location,time}){
  const [currCity,setCity]=useState(null);
  const searchClick=()=>{
    update(currCity);
  };

  let date=new Date(time)
  let dayIndex=date.getDay()
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day=daysOfWeek[dayIndex]
 

  let hours=date.getHours()
  let minutes=date.getMinutes()


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
      <p>{day}</p>
      <p>{hours} : {minutes}</p>
    </div>
    <div id="weather">
      <img src={"cloud.svg"} alt="" />
      <p>{String(sky).toUpperCase()}</p>
    </div>
    <div id="rain">
      <img src={"water.svg"} alt="" />
      <p>Rain-30%</p>
    </div>
    <div id="cityName">
      <p>{location}</p>
      <img src={"pin.svg"} alt="" />
    </div>
    </div>
  )
}