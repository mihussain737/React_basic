import './App.css'
import ProfileCard from './components/ProfileCard';

function App() {

  // API call-> fetching name from the server
  return(
    <div>
      <ProfileCard name="Mike"/>
      <ProfileCard name="John"/>
    </div>
  );
}
export default App;