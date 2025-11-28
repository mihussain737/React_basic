import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-100 justify-center items-center h-screen'>
      <div className='bg-white p-8 rounded-l shadow-lg'>
        <h1 className='text-2xl font-bold text-gray-700'>Hello, Tailwind css in React</h1>
        <p className='text-gray-500'>This is a simple example using tailwind css in react project</p>
      </div>
    </div>
  )
}

export default App
