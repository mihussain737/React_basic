import axios from 'axios'
import React, { useState } from 'react';
import api from '../Utils/Api';

const PostApi = () => {
     const [data,setData]=useState(); 
     const handleSubmit=(event)=>{
          event.preventDefault();
          const newPost={
               title:"test",
               body:"test body",
               userId:1
          }
          api.post('/posts',newPost)
          .then((response)=>{
               console.log("New post Added ",response.data);
               setData([response.data])
          });
     };

  return (
    <div>
     <h1>API's in React</h1>
     <form onSubmit={handleSubmit}>
          <button type='submit'>Add Post</button>
     </form>
    </div>
  )
}

export default PostApi