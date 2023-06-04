import React from "react";
import Higher from "./Higher";
import './App.css';

const Clickc = ({count, add})=>{
    return(
        <div>

         <h1 className="main">
            HigherOrder:{count}</h1>
            <br/>

            <h3 className='information'>Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component.</h3>
            <br/>
            <button className="button"  onClick={add}>Click me</button>


        </div>
    )
}

export default Higher(Clickc);