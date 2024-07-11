export default function Pins({location}){
  return(
    <div id="pins">
      <div id="pinmain"> 
        <p>{(location.address).split(',')[0]}</p>
        <p>{location.max}&deg; <span>{location.min}&deg;</span></p>
      </div>
      <div id="pininfo">
        {location.sky}
      </div>
    </div>
  )
}