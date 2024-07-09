import '../styles/pinnedsection.css'
import Pins from './Pins'

export default function PinnedSection(){
  return(
    <div id="pinnedsection">
      
      <div id="pin-div">
        <div id="pintop">
        <p>Pinned Locations</p>
        <img src={"arrow down.svg"} alt="" />
        </div>

        <Pins></Pins>
        <Pins></Pins>
        <Pins></Pins>

      </div>

    </div>
  )
}