import { useState } from 'react'
import './App.css'
import CustomHooks from './components/CustomHooks'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <CustomHooks></CustomHooks>
    </div>
  )
}

export default App
