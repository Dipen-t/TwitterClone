import React from "react";
import World from "../assets/World.svg";
function Middle() {
  const[value,setValue]=React.useState("");
  return <>
      <div className="middle-container">
        <div className="midHead">
            <span><b>For you</b></span>            
            <span><b>Following</b></span>            
        </div>  
        <div className="upload">
          <div className="write">
          <span className='dpcont'><img className='dp' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXK50_He6FefRJX9bL996m2gGhkKsUzWbDnA&s" alt="" /></span>
          <input type="text" className="tweet" placeholder="What's happening?!" onChange={(e)=>setValue(e.target.value)}/>
          <br />
  
          </div>
          </div>
          
           </div>

  </>;
}

export default Middle;
