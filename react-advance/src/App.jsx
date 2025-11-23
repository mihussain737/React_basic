import { useState } from 'react'
import './App.css'
import CustomHooks from './components/CustomHooks'
import ApiWork from './components/ApiWork'
import AxiosDemo from './components/AxiosDemo'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      {/* <CustomHooks></CustomHooks> */}
      {/* <ApiWork></ApiWork> */}
      <AxiosDemo></AxiosDemo>
    </div>
  )
}

export default App
 