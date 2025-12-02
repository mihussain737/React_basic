import { useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Welcome!</p>
      <Counter></Counter>
    </div>
  )
}

export default App
