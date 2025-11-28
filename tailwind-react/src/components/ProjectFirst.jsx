import React from 'react'
import DarkModeToggle from './DarkModeToggle'

const ProjectFirst = () => {
  return (
    <div className='p-4 bg-white min-h-screen dark:bg-gray-900 dark:text-white'>
          <h1 className='text-2xl'>Welcome to Dark Mode App</h1>
          <DarkModeToggle></DarkModeToggle>
          <p>This is an example of Implmenting dark mode using Tailwind CSS</p>
    </div>
  )
}

export default ProjectFirst