import { useState } from 'react'
import './App.css'
import CustomHooks from './components/CustomHooks'
import ApiWork from './components/ApiWork'
import AxiosDemo from './components/AxiosDemo'
import PostApi from './components/PostApi'
import ReactHook from './components/ReactHook'
import Routing from './components/Routing'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)
  return (
    // <div>
    //   <CustomHooks></CustomHooks>
    //   <ApiWork></ApiWork>
    //   <AxiosDemo></AxiosDemo>
    //   <PostApi></PostApi>
    //   <ReactHook/>
    //   <Routing></Routing>
    // </div>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App
 