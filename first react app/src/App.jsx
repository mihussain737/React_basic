import './App.css';
import { useState } from 'react';
import ProfileCard from './components/ProfileCard';
import First from './components/First';
import Props from './components/Props';
import DestructuringProps from './components/DestructuringProps'
import UseRef from './components/UseRef';
import UseRefWithHtml from './components/UseRefWithHtml';
import PropDrilling from './components/PropDrilling';

function App() {
  const person={name:"Imam", age:34}
  const {name,age}=person;
  return(
    <div>
      {/* <ProfileCard></ProfileCard> */}
      {/* <First></First> */}
      {/* <Props name="Md Imam Hussain" age={25} isLoggedIn={true}></Props>
      <Props name="Chote" age={25} isLoggedIn={false}></Props> */}

      {/* <DestructuringProps name={name} age={age} hobbies={['Reading','Swiming']}></DestructuringProps> */}
      {/* <Form></Form> */}
      {/* <UseRef></UseRef> */}
      {/* <UseRefWithHtml></UseRefWithHtml> */}
      <PropDrilling></PropDrilling>
    </div>
  );
}
export default App;
