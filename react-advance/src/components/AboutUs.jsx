import React from 'react'
import { Outlet ,Link} from 'react-router-dom'
import Team from './Team'

const AboutUs = () => {
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
     
     <div className='mt-8 w-full max-w-4xl'>
      <Outlet><Team></Team></Outlet>
     </div>
    </div>
  )
}

export default AboutUs