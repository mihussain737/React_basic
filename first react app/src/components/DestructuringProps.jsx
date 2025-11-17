import React from 'react'

const DestructuringProps = ({name,age,hobbies}) => {
  return (
    <div>
      {/* <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <ul>
          {
               props.hobbies.map((hobby,index)=>(
                   <li key={index}>{hobby}</li>
               ))
          }
      </ul> */}

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <ul>
          {
               hobbies.map((hobby,index)=>(
                   <li key={index}>{hobby}</li>
               ))
          }
      </ul>
    </div>
  )
}

export default DestructuringProps