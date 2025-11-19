import React from 'react'

const PropDrilling = () => {

     const theme ='dark';

  return (
     <div style={{border:'2px solid black'}}>
          <h2>App (Parent)</h2>
          <ComponentA theme={theme}/>
     </div>
  );
}

function ComponentA({theme}){
    return (
     <div style={{border:'2px solid black'}}>
          <h2>ComponentA (Child)</h2>
          <ComponentB theme={theme}/>
     </div>
  );
}

function ComponentB({theme}){
    return (
     <div style={{border:'2px solid black'}}>
          <h2>ComponentB (Child)</h2>
          <ThemeComponent theme={theme}/>
     </div>
  );
}

function ThemeComponent({theme}){
     return (
     <div style={{border:'2px solid black'}}>
          <h2>ThemeComponent (Great-GrandChild)</h2>
          <div>The current theme is:{theme}</div>
     </div>
  );
}

export default PropDrilling