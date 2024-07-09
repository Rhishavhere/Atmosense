export default function Cards({max,min,icon,day}){
  return(
    <div id="cards">
      <p>{day}</p>
      <img src={icon+`.svg`} alt="" />
      <p>{max}&deg; <span>{min}&deg;</span></p>
    </div>
  )
}