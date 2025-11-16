import React, { useEffect, useState } from 'react'
import './css/DigitalClock.css'

const DigitalClock = () => {
     const [time,setTime]=useState(new Date());

     const [timer,setTimer]=useState(5);

     useEffect(()=>{

         const timerId= setInterval(()=>{
               setTime(new Date())
          },1000)

          return()=> clearInterval(timerId);

     },[]);

     const formattedTime=time.toLocaleTimeString('en-US',
          {
               hour: '2-digit',
               minute:'2-digit',
               second:'2-digit'
          }
     );

  return (
    <div className='clock-container'>
     <div className='clock'>
           {time.toLocaleTimeString()}
     </div>
    </div>
  )
}

export default DigitalClock;