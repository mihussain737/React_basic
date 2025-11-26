import React, { useEffect, useState } from 'react'
import '../css/ReactHook.css'
import {useForm} from 'react-hook-form';

const ReactHook = () => {

     const {register,handleSubmit,watch,formState:{errors}}=useForm();

     const onSubmit=(data)=> console.log(data);

     // console.log(watch('name'));
     const watchedName=watch('name');
     const watchedEmail=watch('email');

     useEffect(()=>{
          console.log('Name ',watchedName);
     },[watchedName]);

     useEffect(()=>{
          console.log('Email ',watchedEmail);
     },[watchedEmail])

  return (
    <div>
     <h1>Forms in React</h1>

     <form onSubmit={handleSubmit(onSubmit)}>
          <label>
               Name:
          </label>
          {/* <input {...register('name', {required:true ,minLength:2})} /> */}
          <input {...register('name', 
               {required:"Name is Required" ,minLength: {value:4, message:"Name should be at least 4 char"}}
               )} />
          <label>
          {errors.name && <p>{errors.name.message}</p>}
          
               Email:
          </label>
          <input {...register('email',{required:"Email is required" ,minLength:{value:5, message:"Email should be atleast 5 char"}, pattern: {value:/^[^@]+@[^@]+\.[^@]+$/, message:"Email should be valid"} })} />
          {errors.email && <p>{errors.email.message}</p>}
          <button type='submit'>Submit</button>
     </form>
    </div>
  )
}

export default ReactHook