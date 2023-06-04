import React, { useState } from "react";



const Higher = (Increment) =>{
    const Ncomp =()=>{
        const [count, setcount] = useState(0);
        const adding =()=>{
            setcount(count+1);
        }
        return (<Increment count={count} add={adding} />)
    }
    return Ncomp
}
export default Higher;
