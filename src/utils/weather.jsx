import axios from "axios"
let city="New York"
export const getLocation=async()=>{
  const apiurl=`https://geocoding-api.open-meteo.com/v1/search?name=newyork&count=10&language=en&format=json`
  const location=await axios.get(apiurl)
  let l=location.data
  console.log(l)
}


export const getWeather=async()=>{
  // let long="55"
  // let lat="55"

}