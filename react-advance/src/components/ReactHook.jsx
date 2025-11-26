import React, { useEffect, useState } from 'react'
import '../css/ReactHook.css'
import {useForm} from 'react-hook-form';

const ReactHook = () => {

     const {register,handleSubmit,reset,watch,formState:{errors}}=useForm();

     const onSubmit=(data)=> {
          console.log(data);
          reset();
     }

     // const validateName=(value)=>{
     //      if(value=='admin'){
     //           return 'only admin is not allowed';
     //      }
     // }

  return (
    <div>
     <h1>Forms in React</h1>

     <form onSubmit={handleSubmit(onSubmit)}>
          <label>
               Name:
          </label>
          <input {...register('name', 
               {
                    required:"Name is Required" 
                    ,minLength: {value:4, message:"Name should be at least 4 char"},
                    // ,validate:validateName
                    // ,validate:(value)=> value!=='admin'||'Admin is not allowed'
                     validate: {
                          notAdmin: (value) => value !== "admin" || "Admin is not allowed",
                          isNotNumber: (value) => isNaN(value) || "Name cannot be number",
                    }
               })} />
          <label>
          {errors.name && <p>{errors.name.message}</p>}
          
               Email:
          </label>
          <input {...register('email',{required:"Email is required" ,minLength:{value:5, message:"Email should be atleast 5 char"}, pattern: {value:/^[^@]+@[^@]+\.[^@]+$/, message:"Email should be valid"} })} />
          {errors.email && <p>{errors.email.message}</p>}
          <button type='submit'>Submit</button>
          <button type='button' onClick={()=>reset()}>Reset</button>
     </form>
    </div>
  )
}

export default ReactHook