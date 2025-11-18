import React, { useEffect, useRef, useState } from 'react'
import '../css/UseRef.css'

const UseRef = () => {
     const [stateCount,setStateCount]=useState(0);
     const refCount=useRef(0);

     useEffect(()=>{
          console.log('component re re render');
          
     });

     const incrementStateCount=()=>{
          setStateCount(stateCount+1);
     }

     const incrementRefCount=()=>{
          refCount.current+=1;
          console.log(refCount.current)
     }

  return (
    <div>
     <p>State Count: {stateCount}</p>
     <button onClick={incrementStateCount}>Increment State Count</button>

     <p>State Count: {refCount.current}</p>
     <button onClick={incrementRefCount}>Increment State Count</button>
    </div>
  )
}

export default UseRef