import React, { useEffect, useState } from 'react'
import '../css/ReactHook.css'
import {useForm} from 'react-hook-form';

const ReactHook = () => {

     const {register,handleSubmit,reset,watch,formState:{errors}}=useForm();

     const existingUsernames= ['admin','user123', 'john']
      const checkIfUsername= async (username)=>{
          await new Promise((resolve)=>setTimeout(resolve,1000));
          return existingUsernames.includes(username);
     };

     const onSubmit=(data)=> {
          console.log(data);
          reset();
     }

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
                          checkUsername: async (value)=>{
                              const exist=await checkIfUsername(value);
                              return !exist || 'Username already taken'
                          }
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