import './App.css'
import ProfileCard from './components/ProfileCard';

function App() {

  // API call-> fetching name from the server
  return(
    <div>
      <ProfileCard name="Mike" isMember="true"/>
      <ProfileCard name="John" isMember={false}/>
    </div>
  );
}
export default App;