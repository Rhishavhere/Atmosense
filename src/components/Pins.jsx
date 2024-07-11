export default function Pins({location}){
  return(
    <div id="pins">
      <p>{location.address}</p>
      <div>
        <p>{location.max}&deg;</p>
        <p>{location.min}&deg;</p>
      </div>
    </div>
  )
}