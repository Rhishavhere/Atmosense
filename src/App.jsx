import MainForecast from './components/MainForecast'
import OtherForecast from './components/OtherForecast'
import PinnedSection from './components/PinnedSection'

import axios from "axios";
import './styles/App.css'
import { useState, useEffect } from 'react'

function App() {
  const [weather, setWeather] = useState()
  const [searchCity, setCity] = useState("Delhi");

  const search = async () => {

    const cityName = encodeURIComponent(searchCity)

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
    ${cityName}/next7days?unitGroup=metric&key=3SDVZNVLW5EJQBE6MZ7QMT3WQ&contentType=json`

    const response = await axios.get(url);
    const data = response.data;

    // console.log(data)

    setWeather({

      address: data.resolvedAddress,
      temp: data.currentConditions.temp,
      sky: data.currentConditions.conditions,
      time: data.currentConditions.datetimeEpoch,
      rain: data.currentConditions.precipprob,

      uv: data.currentConditions.uvindex,
      visibility: data.currentConditions.visibility,
      windSpeed: data.currentConditions.windspeed,
      windDir: data.currentConditions.winddir,
      humidity: data.currentConditions.humidity,
      pressure: data.currentConditions.pressure,


    });

  };

  useEffect(() => {
    // console.log(searchCity);
    search();
  }, [searchCity]);

  useEffect(() => {
    // console.log(weather);
  }, [weather]);


  const updateCity = (e) => {
    setCity(e);
  };


  return (
    <div id="body">
      <MainForecast
        {...weather}
        update={updateCity}></MainForecast>
      <OtherForecast {...weather}></OtherForecast>
      <PinnedSection></PinnedSection>

    </div>
  )
}

export default App
