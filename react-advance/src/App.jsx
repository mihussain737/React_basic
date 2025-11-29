import { useState } from 'react'
import './App.css'
import CustomHooks from './components/CustomHooks'
import ApiWork from './components/ApiWork'
import AxiosDemo from './components/AxiosDemo'
import PostApi from './components/PostApi'
import ReactHook from './components/ReactHook'
import Routing from './components/Routing'
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
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
      <div className='bg-blue-600 p-4 w-full fixed top-0 left-0'>
      <nav className='bg-blue-600 p-4'>
        <ul className='flex justify-center space-x-6'>
          <li><Link className='text-white hover:text-yellow-300 font-medium transition duration-300'
          to='/'>Home</Link></li>
          <li><Link className='text-white hover:text-yellow-300 font-medium transition duration-300'
          to='/about'>About</Link></li>
          <li><Link className='text-white hover:text-yellow-300 font-medium transition duration-300'
          to='/contact'>contact</Link></li>
        </ul>
      </nav>
      </div>
      <div className='container mx-auto pt-20'>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
    </Router>
  )
}

export default App
 