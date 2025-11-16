import React from 'react'

const First = () => {
     const name="Alice";
     const btnlabel="Click Me";

     const isLoggedIn=false;
  return (
    <div>
          <h1 className='greeting'>Hello {name}</h1>
          <button>{btnlabel}</button>
          <button onClick={()=>alert(`Button Clicked`)}>Alert Me</button>

          <p>{isLoggedIn?"LoggedIn":"Not Logged"}</p>
    </div>
  )
}

export default First