import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const ApiWork = () => {
     const [data,setData]=useState([]);
     const [loading,setLoading]=useState(false);
     const [error,setError]=useState(null);


     useEffect(()=>{
          setLoading(true);
     fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
          setData(json);
          setLoading(false);
          throw new Error('Something went wrong');
      }).catch(error=>{
          console.error(`Error fetching data:`,error);
          setError('Failed to fetch the data')
      })
     },[]);

     if(loading){
          return <>Loading...</>
     }

     if(error){
          return <p>{error}</p>
     }
  return (
    <div>
     <h1>APIs</h1>
     <ul>
          {
               data.map((post)=>(
                    <li key={post.id}>
                         <h2>{post.title}</h2>
                         <p>{post.body}</p>
                    </li>
               ))
          }
     </ul>
    </div>
  )
}

export default ApiWork