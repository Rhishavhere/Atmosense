import MainForecast from './components/MainForecast'
import OtherForecast from './components/OtherForecast'
import PinnedSection from './components/PinnedSection'

import axios from "axios";
import './styles/App.css'
import { useState, useEffect } from 'react'

function App() {
  const [weather, setWeather] = useState()
  const [searchCity, setCity] = useState("london");

  const search = async () => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=
      ${searchCity}&units=metric&appid=${import.meta.env.VITE_api}`

    const response = await axios.get(url);
    const data = response.data;

    console.log(data);

    setWeather({
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      temperature: Math.floor(data.main.temp),
      location: data.name,
    });
    
  };

  useEffect(() => {
    console.log(searchCity);
    search();
  }, [searchCity]);

  useEffect(()=>{
    console.log(weather);
  },[weather]);

  const updateCity = (e) => {
    setCity(e);
  };

  return (
    <div id="body">
      <MainForecast temp={weather?.temperature} update={updateCity}></MainForecast>
      <OtherForecast></OtherForecast>
      <PinnedSection></PinnedSection>

    </div>
  )
}

export default App
