import React, { useEffect ,useState} from 'react';
import axios from 'axios'

const AxiosDemo = () => {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);

   useEffect(()=>{
            setLoading(true);
            axios.all([
              axios.get('https://jsonplaceholder.typicode.com/posts'),
              axios.get('https://jsonplaceholder.typicode.com/users'),
            ])
        .then(axios.spread((posts,users) => {
          console.log(posts);
          console.log(users);
            setData(posts.data);
            setLoading(false);
        }))
        .catch(error=>{
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

export default AxiosDemo;