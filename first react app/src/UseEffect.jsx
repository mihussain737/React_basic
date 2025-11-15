import React, { useEffect, useState } from 'react';
import './UseEffect.css';

const UseEffect = () => {
     const  [count,setcount]=useState(0);
     const [anotherVale,setAnotherValue]=useState(10);

     useEffect(()=>{
          document.title=`Count: ${count +1}`;
          console.log("use effect triggered");
     },[count])

     useEffect(()=>{
          document.title=`Count: ${count +1}`;
          console.log("use effect triggered");
     })

     const incrementCount=()=>{
          setcount(count+1);
     }
     const incrementValue=()=>{
          setAnotherValue(anotherVale+1)
     }
  return (
    <div><h1>UseEffect</h1>
    <button onClick={incrementCount}>Increment</button>
    <button onClick={incrementValue}>Another Value</button>
    </div>
  )
}

export default UseEffect;