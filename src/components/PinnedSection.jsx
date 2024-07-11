import '../styles/pinnedsection.css'
import Pins from './Pins'

export default function PinnedSection({pinnedLocations}){
  

  let showpins=(pinnedLocations.length==0)? 
  ( <>
    {/* <img id="globe" src={"globe.svg"} alt="" /> */}
  
  <p style={{
    // width:"200px",
    // textAlign:"center",
    margin:'100px 50px 50px 50px',
    color:"grey",
    fontStyle:"italic"
    }}>Nothing to show here at this moment. Please add some pins.</p></>) :
    (<>
    {pinnedLocations.map((location,index)=>(
      <Pins key={index} location={location} ></Pins>
    ))}</>)

  
  
  return(
    <div id="pinnedsection">
      
      <div id="pin-div">
        {/* <img id="globe" src={"globe.svg"} alt="" /> */}
        <div id="pintop">
        <p>Pinned Locations</p>
        <img src={"arrow down.svg"} alt="" />
        </div>
          {showpins}

      </div>

    </div>
  )
}