import React from 'react'

const Props = (props) => {
  return (
    <div>
          This is my name:{props.name}
          <p>Your age is:{props.age}</p>
          <p>LoggedIn:{props.isLoggedIn?"LoggedIn":"not LoggedIn"}</p>
    </div>
  )
}

export default Props