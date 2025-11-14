import React, { useState } from 'react'
import './project2.css'

const Project2 = () => {

     const [backgroundColor,setBackgroundColor]=useState('white');

     const colors=['#ff0000','#14ea0dff','#131deaff','#00010fff','#c4e80cff'];

     const handleColorChange=(color)=>{
          setBackgroundColor(color)
     }

  return (
    <div style={{backgroundColor}} className='app-container'>
          <h1>Color Picker</h1>
          <div className='color-palette'>
               {colors.map((color,index)=>(
                    <div 
                         key={index} 
                         className='color-box'
                         style={{backgroundColor: color}}
                         onClick={()=>{handleColorChange(color)}}
                    ></div>
               ))}
          </div>
          <div className='custom-color-picker'>
               <input type="color" value={backgroundColor} onChange={(e)=>handleColorChange(e.target.value)}/>
          </div>
     </div>
     
  )
}

export default Project2