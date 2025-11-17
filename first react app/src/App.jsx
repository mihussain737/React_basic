import './App.css';
import { useState } from 'react';
import ProfileCard from './components/ProfileCard';
import First from './components/First';
import Props from './components/Props';

function App() {
  
  return(
    <div>
      {/* <ProfileCard></ProfileCard> */}
      {/* <First></First> */}
      <Props name="Md Imam Hussain" age={25} isLoggedIn={true}></Props>
      <Props name="Chote" age={25} isLoggedIn={false}></Props>
    </div>
  );
}
export default App;
