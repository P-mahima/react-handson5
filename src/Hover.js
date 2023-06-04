import React from "react";
import Higher from "./Higher";
import './App.css';

const Hover = ({count,add})=>{
    return (
        <div>

        <h1 className="main">
           Hover:{count}</h1>
           

           <h3 className='information'> we'll change the any proprty when the mouse is over the button or text or image, and then return it to its default style when the mouse is removed. Here onMouseOver it will Increment the value by 1.</h3>
            <br/>
           <button className="button"  onMouseOver={add}>Click me</button>


       </div>
    )
}

export default Higher(Hover);