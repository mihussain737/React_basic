import './App.css'

function App() {
  const name="Alice";
  const btnlabel="Click Me";
    return (
    <>
    <h1 className='greeting'>Hello, {name}</h1>
    <button style={{background:'green',color:'white'}}>{btnlabel}</button>
    <button onClick={()=>alert(`Button Clicked`)}>Alert Me</button>
    <img src='https://placehold.co/100x100'></img>
    </>
  )
}

export default App
