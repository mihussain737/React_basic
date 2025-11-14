import React, { useEffect, useState } from 'react';
import './UseEffect.css';

const UseEffect = () => {
     const  [count,setcount]=useState(0);

     useEffect(()=>{
          document.title=`Count: ${count +1}`;
     },[count])

     const incrementCount=()=>{
          setcount(count+1);
          // document.title=`Count: ${count +1}`;
     }
  return (
    <div><h1>UseEffect</h1>
    <button onClick={incrementCount}>Increment</button></div>
  )
}

export default UseEffect;