
import '../styles/header.css'


export default function Header({temp}){
  const temp2=()=>{
    temp();
  }
  return(
    <div id="header">
      <div id="left">
        <p>Today</p>
        <p>Week</p>
      </div>
      <div id="right">
        
        <div class="toggle-button-cover">
          <div class="button r" id="button-3" onClick={()=>temp2()}>
            <input type="checkbox" class="checkbox" />
            <div class="knobs"></div>
            <div class="layer"></div>
          </div>
        </div>
        
        <img src={"pfp.jpg"} alt="" />


      </div>
    </div>
  )
}