import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
     const navigate=useNavigate();

    const handleLogout=()=>{
          navigate('/')
     }
  return (
    <div>
     <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50 w-full left-0'>
     <h2 className='text-3xl font-bold text-blue-600'>Dashboard Page</h2>
     <p className='text-gray-700 mt-4 text-lg'>welcome to dashboard page</p>
     <button className='text-white mt-4 text-lg bg-gray-900 p-4' onClick={handleLogout}>Logout</button>
    </div>
    </div>
  )
}

export default Dashboard