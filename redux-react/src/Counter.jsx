import {useSelector,useDispatch} from 'react-redux';
import {increment} from './store/actions/action';
import {decrement} from './store/actions/action';

/*
     useSelector is a React-redux hook that lets your React component
     access data from the Redux store.

     useDispatch is another React-Redux hook that lets your component
     send actions to the Redux store.
*/

const Counter = () => {

     const count=useSelector(state=>state.counter.count);
     const dispatch=useDispatch();
  return (
    <div>
          <h2>Count in counter Component: {count}</h2>
          <button onClick={()=>dispatch(increment())}>Increment</button>
          <br /> <br />
          <button onClick={()=>dispatch(decrement())}>Decrement</button>
     </div>
  )
}

export default Counter