import './App.css';
import ProfileCard from './components/ProfileCard';

function App() {

  const handleHobbyClick=(hobby)=>{
    alert(`You clicked on: ${hobby}`)
  }
  return (
    <div>
      <ProfileCard name="Mike" age={25} isMember={true} hobbies={['Reading','cooking']} onHobbyClick={handleHobbyClick}/>
      <ProfileCard name="John" age="30" isMember={false} hobbies={['Swimming','Hiking']} onHobbyClick={handleHobbyClick}/>
    </div>
  );
}
export default App;
