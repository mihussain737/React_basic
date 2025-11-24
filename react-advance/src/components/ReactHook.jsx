import React, { useState } from 'react'
import '../css/ReactHook.css'

const ReactHook = () => {

     const [formData, setFormData]=useState({
          name:'',
          email:''
     })
     const handleSubmit=(e)=>{
          e.preventDefault();
          console.log('form data submited ',formData);
     };
     const handleChange=(e)=>{
          setFormData({...formData ,[e.target.name]:[e.target.value], [e.target.name]:[e.target.value]})
     };

  return (
    <div>
     <h1>Forms in React</h1>

     <form onSubmit={handleSubmit}>
          <label>
               Name:
          </label>
          <input type="text" name='name' value={formData.name}  onChange={handleChange} />

          <label>
               Email:
          </label>
          <input type="email" name='email' value={formData.email}  onChange={handleChange} />

          <button type='submit'>Submit</button>
     </form>
    </div>
  )
}

export default ReactHook