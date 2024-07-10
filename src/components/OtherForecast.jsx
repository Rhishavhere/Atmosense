import '../styles/otherforecast.css'
import TopSection from './TopSection'
import BottomSection from './BottomSection'
import Header from './Header'

export default function OtherForecast({w,changeUnit,unit}){
  const temp=()=>{
    changeUnit();
  };
  return(
    <div id="otherforecast">
    <Header temp={temp}  ></Header>
   
    <TopSection {...w}></TopSection>
    <h4>Today's Highlights</h4>
    <BottomSection {...w} unit={unit}></BottomSection>

    </div>
  )
}