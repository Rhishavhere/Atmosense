
import '../styles/header.css'


export default function Header({temp,changeType,type}){
  const temp2=()=>{
    temp();
  }

  function changeTypeToday(){
    changeType(true)
  }
  function changeTypeWeek(){
    changeType(false)
  }
  
  return(
    <div id="header">
      <div id="left">
        <p onClick={changeTypeToday} className={type?"selected":null}  >Today</p>
        <p onClick={changeTypeWeek}  className={!type?"selected":null} >Week</p>
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