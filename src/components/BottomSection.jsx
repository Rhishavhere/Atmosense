// import Highlights from "./Highlights"
import '../styles/bottomsection.css'

export default function BottomSection({uv,visibility,
  windSpeed,windDir,humidity,pressure,sunrise,sunset,
  feelslike,timezone
}){
  return(
    <>
    <div id="bottomsection">
      <div className="highlight">
        <div id="circle"></div>
      <p>UV Index</p>
      <p>{uv}%</p>
      <p>Measure of uv radiation</p>
      </div>
      <div className="highlight">
      <div id="circle"></div>
      <p>Visibility</p>
      <p>{visibility} km</p>
      <p>Measure of clearance</p>
      </div>
      <div className="highlight">
      <div id="circle"></div>
      <p>Winds</p>
      <p>{windSpeed} km/hr</p>
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
    </div>
    <div id="bottomsection">
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
      <p>Atm: {(pressure/1013).toFixed(2)}</p>
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
  
    </div>
    </>
  )
}