import './App.css'
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return(
   <div className='App'>
      <Header></Header>
      <About></About>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
   </div>
  );
}
export default App;