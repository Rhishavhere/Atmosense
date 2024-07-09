// import Highlights from "./Highlights"
import '../styles/bottomsection.css'

export default function BottomSection({uv,visibility,
  windSpeed,windDir,humidity,pressure
}){
  return(
    <>
    <div id="bottomsection">
      <div className="highlight">
      <p>UV Index</p>
      <p>{uv}</p>
      <p>Percent</p>
      </div>
      <div className="highlight">
      <p>Visibility Index</p>
      <p>{visibility}</p>
      <p>Percent</p>
      </div>
      <div className="highlight">
      <p>Winds (km/h)</p>
      <p>{windSpeed}</p>
      <p>{windDir}</p>
      </div>
    </div>
    <div id="bottomsection">
      <div className="highlight">
      <p>Humidity</p>
      <p>{humidity}</p>
      <p>Percent</p>
      </div>
      <div className="highlight">
      <p>Pressure</p>
      <p>{pressure}</p>
      <p>Percent</p>
      </div>
      <div className="highlight">
      <p>UV Index</p>
      <p>{uv}</p>
      <p>Percent</p>
      </div>
  
    </div>
    </>
  )
}