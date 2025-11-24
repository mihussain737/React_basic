import axios from 'axios'
import React, { useState } from 'react';

const api=axios.create({
     baseURL:'https://jsonplaceholder.typicode.com',
     headers:{
          'Authorization':'Bearer <TOKEN>'
     }
});

api.interceptors.request.use(request=>{
     console.log('starting request', request);
     return request;
});

api.interceptors.response.use(response=>{
     console.log("Response", response)
     return response;
})
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
               console.log(response.data);
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