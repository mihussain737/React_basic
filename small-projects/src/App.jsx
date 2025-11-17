import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DigitalClock from './components/DigitalClock'
import Portfolio from './components/Portfolio'
import Form from './components/Form'
import ColorPicker from './components/ColorPicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <DigitalClock></DigitalClock> */}
      {/* <Portfolio></Portfolio> */}
      {/* <Form></Form> */}
      <ColorPicker></ColorPicker>
    </>
  )
}

export default App
