import './App.css';
import ProfileCard from './components/ProfileCard';

function App() {

  const handleHobbyClick=(hobby)=>{
    alert(`You clicked on: ${hobby}`)
  }

  const AliceProfile={
    name:"Mike", age:25, isMember:true, hobbies:['Reading','cooking'], onHobbyClick:handleHobbyClick
  }
  const JohnProfile={
    name:"John", age:30, isMember:false, hobbies:['Swimming','Hiking'], onHobbyClick:handleHobbyClick
  }
  return (
    <div>
      <ProfileCard {...AliceProfile}/>
      <ProfileCard {...JohnProfile}/>
    </div>
  );
}
export default App;
