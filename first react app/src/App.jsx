import './App.css';
import ProfileCard from './components/ProfileCard';

function App() {

  return (
    <div>
      <h1>Hello</h1>
      <ProfileCard name="Mike" age={25} isMember={true} hobbies={['Reading','cooking']}/>
      <ProfileCard name="John" age="30" isMember={false} hobbies={['Swimming','Hiking']}/>
    </div>
  );
}

export default App;
