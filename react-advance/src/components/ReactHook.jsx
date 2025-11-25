import React, { useEffect, useState } from 'react'
import '../css/ReactHook.css'
import {useForm} from 'react-hook-form';

const ReactHook = () => {

     const {register,handleSubmit,watch}=useForm();

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
          <input {...register('name')} />
          <label>
               Email:
          </label>
          <input {...register('email')} />
          <button type='submit'>Submit</button>
     </form>
    </div>
  )
}

export default ReactHook