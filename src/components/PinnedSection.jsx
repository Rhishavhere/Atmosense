import '../styles/pinnedsection.css'
import Pins from './Pins'
import { motion } from 'framer-motion'

export default function PinnedSection({pinnedLocations}){
  

  let showpins=(pinnedLocations.length==0)? 
  ( <>
    {/* <img id="globe" src={"globe.svg"} alt="" /> */}
  
  <motion.p 
    initial={{y:50,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration:0.8,delay:1}}
  
  
  style={{
    // width:"200px",
    // textAlign:"center",
    margin:'100px 50px 50px 50px',
    color:"grey",
    fontStyle:"italic"
    }}>Nothing to show here at this moment. Please add some pins.</motion.p></>) :
    (<>
    {pinnedLocations.map((location,index)=>(
      <Pins key={index} location={location} ></Pins>
    ))}</>)

  
  
  return(
    <motion.div id="pinnedsection"
      initial={{scale:0.5,opacity:0}}
      animate={{scale:1,opacity:1}}
      transition={{type:'spring',duration:2}}
    >
      
      <motion.div id="pin-div"
        initial={{scale:1.1,x:100,opacity:0}}
        animate={{scale:1,x:0,opacity:1}}
        transition={{type:'spring',duration:3}}
      >
        {/* <img id="globe" src={"globe.svg"} alt="" /> */}
        <div id="pintop">
        <p>Pinned Locations</p>
        <img src={"arrow down.svg"} alt="" />
        </div>
          {showpins}

      </motion.div>

    </motion.div>
  )
}