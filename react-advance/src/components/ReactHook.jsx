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
          <input {...register('name', {required:true ,minLength:2})} />
          <label>
          {errors.name && <p>Name is Required and should be atleaset 2 char</p>}
          
               Email:
          </label>
          <input {...register('email',{required:true ,minLength:5})} />
          {errors.email && <p>Email is Required and should be atleaset 5 char</p>}
          <button type='submit'>Submit</button>
     </form>
    </div>
  )
}

export default ReactHook