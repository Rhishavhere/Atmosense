import '../styles/otherforecast.css'
import TopSection from './TopSection'
import BottomSection from './BottomSection'
import Header from './Header'
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function OtherForecast({w,changeUnit,unit}){
  const temp=()=>{
    changeUnit();
  };

  const[type,setType]=useState(false)

  // console.log(type)

  return(
    <motion.div id="otherforecast"

      variants={{
        hidden:{scale:0.5,opacity:0},
        visible:{scale:1,opacity:1}
      }}

      initial="hidden"
      animate="visible"
      exit="visible"
      transition={{type:'spring',duration:2}}

    >
      <motion.img id= "world" src={"worldmap.svg"} alt="" initial={{scale:0.5,y:200}}
      animate={{scale:1,y:0}} transition={{duration:1}}  />
    <Header temp={temp} changeType={setType} type={type} ></Header>
   
    <TopSection {...w} type={type} ></TopSection>
    <h4>Today's Highlights</h4>
    <BottomSection {...w} unit={unit}></BottomSection>

    </motion.div>
  )
}