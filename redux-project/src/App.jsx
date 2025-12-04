import { useState } from 'react'
import './App.css'
import PostList from './PostList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <PostList></PostList>
    </div>
  )
}

export default App
