import '../styles/otherforecast.css'
import TopSection from './TopSection'
import BottomSection from './BottomSection'
import Header from './Header'

export default function OtherForecast(){
  return(
    <div id="otherforecast">
    <Header></Header>
    <TopSection></TopSection>
    <h4>Today's Highlights</h4>
    <BottomSection></BottomSection>

    </div>
  )
}