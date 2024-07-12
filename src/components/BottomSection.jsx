// import Highlights from "./Highlights"
import '../styles/bottomsection.css'
import { motion } from 'framer-motion'

export default function BottomSection({ uv, visibility,
  windSpeed, windDir, humidity, pressure, sunrise, sunset,
  feelslike, timezone, unit
}) {

  let disunit = !unit ? 'km' : 'miles'

  return (
    <>
      <motion.div id="bottomsection"
       
        initial={{y:-50,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{type:'spring',duration:2,delay:0.5}}
      >
        <div className="highlight">
          <div id="circle"></div>
          <p>UV Index</p>
          <p>{uv}%</p>
          <p>Measure of uv radiation</p>
        </div>
        <div className="highlight">
          <div id="circle"></div>
          <p>Visibility</p>
          <p>{visibility} {disunit}</p>
          <p>Measure of clearance</p>
        </div>
        <div className="highlight">
          <div id="circle"></div>
          <p>Winds</p>
          <p>{windSpeed} {disunit}/hr</p>
          <p>Direction : {windDir}</p>
        </div>
        <div id="suntime" className="highlight">
          <div id="circle"></div>
          <p>Sunrise & Sunset</p>
          <div>
            <img src={"sunrise.svg"} alt="" />
            <p>rise :</p>
            <p>{sunrise}</p>
          </div>
          <div>
            <img src={"sunset.svg"} alt="" />
            <p>set :</p>
            <p>{sunset}</p>
          </div>

        </div>
      </motion.div>
      <motion.div id="bottomsection"
        initial={{y:-50,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{type:'spring',duration:2,delay:0.6}}
      >
        <div className="highlight">
          <div id="circle"></div>
          <p>Humidity</p>
          <p>{humidity}%</p>
          <p>Measure of air vapour</p>
        </div>
        <div className="highlight">
          <div id="circle"></div>
          <p>Air Pressure</p>
          <p>{pressure} mb</p>
          <p>Atm: {(pressure / 1013).toFixed(2)}</p>
        </div>
        <div className="highlight">
          <div id="circle"></div>
          <p>Feels Like</p>
          <p>{feelslike}&deg;</p>
          <p>Perceptual Temperature</p>
        </div>
        <div id="timezone" className="highlight">
          <div id="circle"></div>
          <p>Timezone</p>
          <p>{timezone}</p>
          {/* <p>Percent</p> */}
        </div>

      </motion.div>
    </>
  )
}