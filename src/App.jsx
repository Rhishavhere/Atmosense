// used visual crossing weather api


import MainForecast from './components/MainForecast'
import OtherForecast from './components/OtherForecast'
import PinnedSection from './components/PinnedSection'


import axios from "axios";
import './styles/App.css'
import { useState, useEffect } from 'react'

function App() {
  const [weather, setWeather] = useState()
  const [searchCity, setCity] = useState("Delhi");
  const [unit, setUnit] = useState(false)
  const [pinnedLocations,setPinnedLocations]=useState([])




  const search = async () => {

    const cityName = encodeURIComponent(searchCity)

    let unitSys=!unit? 'metric':'us'

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
    ${cityName}/next7days?unitGroup=${unitSys}&key=3SDVZNVLW5EJQBE6MZ7QMT3WQ&contentType=json`

    const response = await axios.get(url);
    const data = response.data;

    // console.log(data)

    setWeather({

      lat: data.latitude,
      lon: data.longitude,
      timezone: data.timezone,
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
      sunrise: data.currentConditions.sunrise,
      sunset: data.currentConditions.sunset,
      feelslike: data.currentConditions.feelslike,

      icon: data.currentConditions.icon,

      day0max: data.days[0].tempmax,
      day1max: data.days[1].tempmax,
      day2max: data.days[2].tempmax,
      day3max: data.days[3].tempmax,
      day4max: data.days[4].tempmax,
      day5max: data.days[5].tempmax,
      day6max: data.days[6].tempmax,
      day7max: data.days[7].tempmax,

      day0min: data.days[0].tempmin,
      day1min: data.days[1].tempmin,
      day2min: data.days[2].tempmin,
      day3min: data.days[3].tempmin,
      day4min: data.days[4].tempmin,
      day5min: data.days[5].tempmin,
      day6min: data.days[6].tempmin,
      day7min: data.days[7].tempmin,

      day1icon: data.days[1].icon,
      day2icon: data.days[2].icon,
      day3icon: data.days[3].icon,
      day4icon: data.days[4].icon,
      day5icon: data.days[5].icon,
      day6icon: data.days[6].icon,
      day7icon: data.days[7].icon,

      day1: new Date(data.days[1].datetimeEpoch).getDay(),

      temps: data.days[0].hours.map(hour => hour.temp)




    });
    
    
  };

  const addPinnedLocation=(location)=>{
    if(!pinnedLocations.some(pin=>pin.address===location.address)){
      setPinnedLocations([...pinnedLocations,{
        address:weather.address,
        max:weather.day0max,
        min:weather.day0min
      }])
    }
  }



  useEffect(() => {
    // console.log(searchCity);
    search();
  }, [searchCity,unit]);

  // useEffect(() => {
  //   console.log(weather);
  // }, [weather]);
  
  // useEffect(() => {
  //   console.log(unit);
  // }, [unit]);
  
  const updateCity = (e) => {
    setCity(e);
  };

  const updateUnit=()=>{
    setUnit((unit)=>!unit);
    
  };

  return (
    <div id="body">
      <MainForecast
        {...weather}
        update={updateCity}
        unit={unit} 
        addPinnedLocation={addPinnedLocation}
        ></MainForecast>
      <OtherForecast w={weather} changeUnit={updateUnit}
      unit={unit} ></OtherForecast>
      <PinnedSection
        pinnedLocations={pinnedLocations}
      ></PinnedSection>

    </div>
  )
}

export default App
