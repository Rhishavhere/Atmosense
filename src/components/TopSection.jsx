import Cards from "./Cards";
import Charts from "./Charts";
import "../styles/topsection.css"
import "../styles/chart.css"
import { AnimatePresence, motion } from "framer-motion";
export default function TopSection({
  day1max,
  day2max,
  day3max,
  day4max,
  day5max,
  day6max,
  day7max,
  day1min,
  day2min,
  day3min,
  day4min,
  day5min,
  day6min,
  day7min,
  day1icon,
  day2icon,
  day3icon,
  day4icon,
  day5icon,
  day6icon,
  day7icon,
  day1,
  type,
  hours,
  temps,

}){

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day1Name=daysOfWeek[day1+1]
  let day2Name=daysOfWeek[day1+2]
  let day3Name=daysOfWeek[day1+3]
  let day4Name=daysOfWeek[day1+4]
  let day5Name=daysOfWeek[day1+5]
  let day6Name=daysOfWeek[day1+6]
  let day7Name=daysOfWeek[day1+7]

  
  let content= !type? (  <motion.div id="cards-section"
    initial={{y:50,opacity:0}}
    animate={{y:0,opacity:1}}
    exit={{y:50,opacity:0}}
    transition={{type:'spring',duration:1}}
  
  > <Cards 
    max={day1max}
    min={day1min}
   icon={day1icon}
    day={day1Name}
 ></Cards>
 <Cards 
    max={day2max}
    min={day2min}
   icon={day2icon}
   day={day2Name}
 ></Cards>
 <Cards 
    max={day3max}
    min={day3min}
   icon={day3icon}
   day={day3Name}
 ></Cards>
 <Cards 
    max={day4max}
    min={day4min}
   icon={day4icon}
   day={day4Name}
 ></Cards>
 <Cards 
    max={day5max}
    min={day5min}
   icon={day5icon}
   day={day5Name}
 ></Cards>
 <Cards 
    max={day6max}
    min={day6min}
   icon={day6icon}
   day={day6Name}
 ></Cards>
 <Cards 
    max={day7max}
    min={day7min}
   icon={day7icon}
   day={day7Name}
 ></Cards></motion.div> ) :
 (
  <motion.div id="chart-div"
    initial={{y:50,opacity:0}}
    animate={{y:0,opacity:1}}
    exit={{y:50,opacity:0}}
    transition={{type:'spring',duration:1}}
  >
  <Charts hours={hours} temps={temps} ></Charts>
  </motion.div>
 )

  return(
    <AnimatePresence>
    <motion.div id="topsection"
      initial={{y:50,opacity:0}}
      animate={{y:0,opacity:1}}
      exit={{y:50,opacity:0}}
      transition={{type:'spring',duration:2,delay:0.6}}
    
    >
      {content}
   
    </motion.div>
    </AnimatePresence>
  )
}