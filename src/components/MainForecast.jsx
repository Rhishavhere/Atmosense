import '../styles/mainforecast.css'
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function MainForecast({temp,update,sky,
  address,time,rain,icon,unit,addPinnedLocation
}){
  const [currCity,setCity]=useState(null);
  
  const searchClick=()=>{
    update(currCity);
  };

  let date=new Date(time*1000)
  let dayIndex=date.getDay()
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day=daysOfWeek[dayIndex]
 
  let tempunit=!unit?'C':'F'

  let hours=date.getHours()
  let minutes=date.getMinutes()


  return(
    <motion.div id="mainforecast"
      initial={{scale:1.1,x:-100,opacity:0}}
      animate={{scale:1,x:0,opacity:1}}
      transition={{type:'spring',duration:3}}
    > 
   
    <div id="search">
      <img src={'search-button.svg'} alt="" onClick={()=>searchClick()}/>
      <input type="text" placeholder="Search For A City" onChange={(e)=>setCity(e.target.value)}/>
    </div>

    <div id="sky-icon">
      <img src={icon+`.svg`} alt="" />
    </div>
    <div id="temperature">
      {temp}<sup>&deg;{tempunit}</sup>
    </div>
    <div id="date">
      <p>{day}</p>
      <p>{hours} : {minutes}</p>
    </div>
    <div id="weather">
      <img src={"cloud.svg"} alt="" />
      <p>{sky}</p>
    </div>
    <div id="rain">
      <img src={"water.svg"} alt="" />
      <p>Rain-{rain}%</p>
    </div>
    <div id="cityName">
      <p>{address}</p>
      <img src={"pin.svg"} alt="" 
        onClick={addPinnedLocation}
      />
    </div>
    <div id="info">click on Today to see hourly graph</div>
    </motion.div>
  )
}