import axios from 'axios'
import React, { useState } from 'react'

const PostApi = () => {
     const [data,setData]=useState();
     const handleSubmit=(event)=>{
          event.preventDefault();
          const newPost={
               title:"test",
               body:"test body",
               userId:1
          }
          axios.post('https://jsonplaceholder.typicode.com/posts',newPost)
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