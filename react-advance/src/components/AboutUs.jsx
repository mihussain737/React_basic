import React from 'react'
import { Outlet ,Link, useSearchParams} from 'react-router-dom'
import Team from './Team'

const AboutUs = () => {

  const [searchParams,setSearchParams]=useSearchParams();
  const topic=searchParams.get("topic")|| "general";
  const urlParams= new URLSearchParams(window.location.search);
  const topicFromURL=urlParams.get("topic");
  console.log("useSearchParams: " ,topic);
  console.log("urlSearchParams: " ,topicFromURL);
  const handleTopic=(newTopic)=>{
    setSearchParams({topic:newTopic})
  };

   return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50 w-full left-0'>
     <h2 className='text-3xl font-bold text-blue-600'>About Page</h2>
     <p className='text-gray-700 mt-4 text-lg'>This page gives information about us</p>

     <nav className='mt-6'>
      <ul className='flex space-x-4'>
        <li><Link to="team" className="text-blue-400 hover:underline">Our Team</Link></li>
        <li><Link to="/" className="text-blue-400 hover:underline">Back To Home</Link></li>
      </ul>
     </nav>

      <div className='mt-6'>
        <h3 className='text-xl text-gray-800'>Choose a Topic:</h3>
        <div className='flex space-x-4 mt-4'>
          <button className='text-white px-4 py-2 bg-blue-500 rounded-lg hover:bg-slate-950'
           onClick={()=> handleTopic("Team")}>Team</button>
          <button className='text-white px-4 py-2 bg-blue-500 rounded-lg hover:bg-slate-950'
          onClick={()=> handleTopic("Mission")} >Mission</button>
          <button className='text-white px-4 py-2 bg-blue-500 rounded-lg hover:bg-slate-950'
          onClick={()=> handleTopic("Vision")}>Vision</button>
        </div>
      </div>

      <div className='mt-8 text-lg text-gray-700'>
        <p>Current Topic: {topic}</p>
      </div>

     <div className='mt-8 w-full max-w-4xl'>
      <Outlet><Team></Team></Outlet>
     </div>
    </div>
  )
}

export default AboutUs