import { motion } from "framer-motion"

export default function Pins({location}){
  return(
    <motion.div id="pins"
      initial={{y:-20,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{type:'spring',duration:1}}
    
    >
      <div id="pinmain"> 
        <p>{(location.address).split(',')[0]}</p>
        <p>{location.max}&deg; <span>{location.min}&deg;</span></p>
      </div>
      <motion.div id="pininfo"
        initial={{x:-20,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{type:'spring',duration:1.5,}}
      
      >
        {location.sky}
      </motion.div>
    </motion.div>
  )
}