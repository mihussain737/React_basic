import React from 'react'
import { useLocation } from 'react-router-dom'

const CurrentLocation = () => {
     const location=useLocation();

  return (
     <div><h3>Current Path: {location.pathname}</h3></div>
  )
}

export default CurrentLocation