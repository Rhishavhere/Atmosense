import MainForecast from './components/MainForecast'
import OtherForecast from './components/OtherForecast'
import PinnedSection from './components/PinnedSection'

import axios from "axios";
import './styles/App.css'
import { useState, useEffect } from 'react'

function App() {
  const [weather, setWeather] = useState()
  const [searchCity, setCity] = useState("55 50");

  const search = async () => {

    let [lat,long]=searchCity.split(" ")
    // console.log(lat,long)

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,precipitation,rain,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`

    const response = await axios.get(url);
    const data = response.data;

    console.log(data)

    setWeather({
      // humidity: data.main.humidity,
      // windSpeed: data.wind.speed,
      // temp: Math.floor(data.main.temp),
      // location: data.name,
      // pressure:data.main.pressure,
      // tempMax:data.main.temp_max,
      // tempMin:data.main.temp_min,
      // sunrise:data.sys.sunrise,
      // sunset:data.sys.sunset,
      // timezone:data.timezone,
      // visibility:data.visibility,
      // sky:data.weather[0].description,
      // lat:data.coord.lat,
      // lon:data.coord.lon,
      // time:data.dt

    });
    
  };

  useEffect(() => {
    // console.log(searchCity);
    search();
  }, [searchCity]);

  useEffect(()=>{
    // console.log(weather);
  },[weather]);


  const updateCity = (e) => {
    setCity(e);
  };


  return (
    <div id="body">
      <MainForecast 
        temp={weather?.temp}
        sky={weather?.sky}
        location={weather?.location}
        time={weather?.time}
        
        
        
        
        update={updateCity}></MainForecast>
      <OtherForecast></OtherForecast>
      <PinnedSection></PinnedSection>

    </div>
  )
}

export default App
