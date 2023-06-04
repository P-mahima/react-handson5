import { useState } from "react";
import Mypure from "./Mypure";
import Click from "./Click.js";
// import Higher from "./Higher";
import Hover from "./Hover.js";

function App(){
  const[count,setCount]= useState(0);
  const plus =()=>{
    setCount(count+1)
  };
  return(
    <div>
      <h1 className="main">Pure Component:{count}</h1>
      <Mypure/>
      <br/>
      <br/>

      <button className="button" onClick={()=>{
        plus();
      }}>Click Me</button>
      <br/>
      <br/>

    <Click/>
   
      <br/>
      <br/>
    <Hover/>
    </div>
  )
}
export default App;



