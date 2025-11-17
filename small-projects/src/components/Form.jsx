import React from 'react';
import './css/Form.css'
import { useState } from 'react';

const Form = () => {
     const [formData,setFormData]=useState({
          text:"",
          checkbox:false,
          radio:"",
          select:""
     });

     const handleChange=(e)=>{
          const{name,value,type,checked}=e.target;

          setFormData({
               ...formData,
               [name]: type==='checkbox'? checked: value
          })
     }
  return (
    <div className='form-container'>
          <h1>Form Example</h1>

          <form>
               <div>
                    <div className='form-field'>
                         <label>Text:</label>
                         <input type="text" name='text' value={formData.text} onChange={handleChange}/>
                    </div>

                    <div className='form-field'>
                         <label>Checkbox:</label>
                         <input type="checkbox" name='checkbox' value={formData.checkbox} onChange={handleChange}/>
                    </div>

                    <div className='form-field'>
                         <label>Option1</label>
                         <input type="radio" name='radio' value={formData.radio==='option1'} onChange={handleChange}/>
                         <label>Option2</label>
                         <input type="radio" name='radio' value={formData.radio==='option2'} onChange={handleChange}/>
                    </div>
                    
                    <div className='form-field'>
                         <select name="select" id="">
                              <option value="">Please choose an option</option>
                              <option value="select1">Select1</option>
                              <option value="select2">Select2</option>
                         </select>
                    </div>

                    <div className='form-data'>
                         <h3>Form Data</h3>
                         <p><strong>Text:</strong>{formData.text ||'N/A'}</p>
                    </div>
               </div>
          </form>
    </div>
  )
}

export default Form;