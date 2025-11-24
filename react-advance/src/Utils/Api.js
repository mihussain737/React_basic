import axios from "axios";

const api=axios.create({
     baseURL:'https://jsonplaceholder.typicode.com',
     headers:{
          'Authorization':'Bearer <TOKEN>',
          'Content-Type':'application/json'
     }
});


api.interceptors.request.use(request=>{
     console.log('starting request', request);
     return request;
},
(config)=>{
     const token=localStorage.getItem('token');
     if(token){
          config.headers.Authorization=`Bearer ${token}`
     }
},
(error)=>{
     console.error('Request Error ',error);
     return Promise.reject(error);
}
);

api.interceptors.response.use(response=>{
     console.log("Response", response)
     return response;
}, (error)=>{
     if(error.response && error.response.status==401){
          console.log('Unauthorized');
     }
     if(error.response && error.response.status==500){
          console.log('Server Error');
     }
     return Promise.reject(error)
});
export default api;