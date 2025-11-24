import { useState } from 'react'
import './App.css'
import CustomHooks from './components/CustomHooks'
import ApiWork from './components/ApiWork'
import AxiosDemo from './components/AxiosDemo'
import PostApi from './components/PostApi'
import ReactHook from './components/ReactHook'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      {/* <CustomHooks></CustomHooks> */}
      {/* <ApiWork></ApiWork> */}
      {/* <AxiosDemo></AxiosDemo> */}
      {/* <PostApi></PostApi> */}
      <ReactHook/>
    </div>
  )
}

export default App
 