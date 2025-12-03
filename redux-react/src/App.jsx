import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Display from './Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Welcome!</p>
      <Counter></Counter>
      <Display></Display>
    </div>
  )
}

export default App
