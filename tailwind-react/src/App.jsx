import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-100 p-4'>
      <ul className='list-none'>
        <li className='bg-blue-500 text-white p-2 rounded-2xl'>Item 1</li>
        <li className='bg-indigo-500 text-white p-2 rounded-xl'>Item 2</li>
        <li className='bg-custom-blue text-white p-2 rounded-md'>Item 3</li>
        <li className='bg-yellow-700 text-white p-2 rounded-sm'>Item 4</li>
        <li className='bg-lime-600 text-white p-2 rounded-lg'>Item 4</li>
      </ul>
    </div>
  )
}

export default App
