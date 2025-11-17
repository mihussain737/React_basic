import React from 'react'
import './css/ColorPicker.css'
import { useState } from 'react'

const ColorPicker = () => {
  const [backgroundColor,setBackgroundColor]=useState();
  const colors=['white','red','yellow','green','blue','black','cyan'];

  const handleColorChange=(color)=>{
    setBackgroundColor(color)
  }
  return (
    <div className='app-container' style={{backgroundColor}}>
      <div >
        <h1>Color Picker</h1>
        <div className='color-palette'>
           {
            colors.map((color,index)=>(
              <div key={index} className='color-box' style={{backgroundColor:color}} onClick={()=>handleColorChange(color)}>
                
              </div>
            ))
           }
        </div>
      </div>
      
    </div>
  )
}

export default ColorPicker