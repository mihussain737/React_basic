import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DigitalClock from './components/DigitalClock'
import Portfolio from './components/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <DigitalClock></DigitalClock> */}
      <Portfolio></Portfolio>
    </>
  )
}

export default App
