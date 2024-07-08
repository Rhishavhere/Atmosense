import '../styles/mainforecast.css'



export default function MainForecast(){
  return(
    <div id="mainforecast"> 
    <div id="search">
      <img src={'search-button.svg'} alt="" />
      <input type="text" placeholder="Search For A City"/>
    </div>
    <div id="sky-icon">
      <img src={'sun and rain.svg'} alt="" />
    </div>
    <div id="cityName">
      <p>New York, NY, USA</p>
    </div>
    <div id="temperature">
      12<sup>&deg;C</sup>
    </div>
    <div id="date">
      <p>Monday,</p>
      <p>16:00</p>
    </div>
    <div id="weather">
      <img src={"cloud.svg"} alt="" />
      <p>Mostly Cloudy</p>
    </div>
    <div id="rain">
      <img src={"water.svg"} alt="" />
      <p>Rain-30%</p>
    </div>
    </div>
  )
}