import '../styles/otherforecast.css'
import TopSection from './TopSection'
import BottomSection from './BottomSection'
import Header from './Header'
import { useState } from 'react';

export default function OtherForecast({w,changeUnit,unit}){
  const temp=()=>{
    changeUnit();
  };

  const[type,setType]=useState(false)

  // console.log(type)

  return(
    <div id="otherforecast">
    <Header temp={temp} changeType={setType} type={type} ></Header>
   
    <TopSection {...w} type={type} ></TopSection>
    <h4>Today's Highlights</h4>
    <BottomSection {...w} unit={unit}></BottomSection>

    </div>
  )
}