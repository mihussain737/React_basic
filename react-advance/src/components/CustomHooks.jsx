import useCounter from './useCounter'

const CustomHooks = () => {
     // Custom hooks in React are functions that let you reuse logic across multiple components.
     // Start with use
     const {count,increment,decrement}=useCounter();

  return (
    <div>
          <h1>Count: {count}</h1>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default CustomHooks