import React,{useRef} from 'react'
import '../css/UseRef.css'

const UseRefWithHtml = () => {

     const inputRef=useRef(null);
     const focusInput=()=>{
          console.log(inputRef);
          inputRef.current.focus();
     };
     const focusInputHighlight=()=>{
          console.log(inputRef);
          inputRef.current.focus();
          inputRef.current.style.backgroundColor="yellow";
     };
  return (
    <div>
     <h1>Learn React</h1>
     <input type="text" ref={inputRef} placeholder='Focus me' />
     <br />
     <button onClick={focusInput}>Focus</button>
     <button onClick={focusInputHighlight}>Focus and highlight</button>
    </div>
  )
}

export default UseRefWithHtml