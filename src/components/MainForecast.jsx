import '../styles/mainforecast.css'
// import '../images/sun and rain.svg'
export default function MainForecast(){
  return(
    <div id="mainforecast"> 
    <div id="search">
      <button>Search for a City</button>
    </div>
    <div id="sky-icon">
      <img src={'sun and rain.svg'} alt="" />
    </div>
    <div id="temperature">
      12 C
    </div>
    <div>
      <p>Monday,</p>
      <p>16:00</p>
    </div>
    <div>
      <p>Mostly Cloudy</p>
    </div>
    <div>
      <p>Rain-30%</p>
    </div>
    <div>
      <p>New York, NY, USA</p>
    </div>
    </div>
  )
}