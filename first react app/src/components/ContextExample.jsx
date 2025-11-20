import React, { createContext, useContext } from 'react';

const ThemeContext = createContext("light");

const ContextExample = () => {
  return (
    <ThemeContext.Provider value="dark">
      <div style={{ border: "2px solid black", padding: 20 }}>
        <h2>App (Parent)</h2>
        <ComponentA />
      </div>
    </ThemeContext.Provider>
  );
};


function ComponentA(){
  return(
    <div style={{border:'2px solid red',padding:20}}>
      <h2>Component A(Child)</h2>
      <ComponentB/>
    </div>
  )
}

function ComponentB(){
  return(
    <div style={{border:'2px solid green',padding:20}}>
      <h2>Component B(Great Child)</h2>
      <ThemeComponent/>
    </div>
  )
}

function ThemeComponent(){
  const theme =useContext(ThemeContext);
  return(
    <div style={{border:'2px solid yellow',padding:20}}>
      <h2>ThemeComponent(Great-GrandChild)</h2>
      <div>The Current theme is:{theme}</div>
    </div>
  )
}
export default ContextExample