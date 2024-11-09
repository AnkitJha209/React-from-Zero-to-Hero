import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount, reset } from "./features/counter/counterSlice";
import { useState } from "react";

function App() {

  const [amount, setAmount] = useState(0);

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch();

  function handleIncrementClick(){
    dispatch(increment())
  }
  function handleDecrementClick(){
    dispatch(decrement())
  }

  function handleResetClick(){
    dispatch(reset())
  }

  function handleIncrementByAMount(){
    dispatch(incrementByAmount(amount))
    setAmount(0)
  }

  return (
    <div>
      <button onClick={handleIncrementClick}>+</button>
      <h1>Count : {count}</h1>
      <button onClick={handleDecrementClick}>-</button>
      <button onClick={handleResetClick}>Reset</button>
      <br />
      <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} />
      <button onClick={handleIncrementByAMount}>Amount increased</button>
    </div>
  )
}

export default App
