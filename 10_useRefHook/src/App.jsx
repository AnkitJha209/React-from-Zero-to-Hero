import { useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  // const [count, setCount] = useState(0);
  // let val = 0
  // let value = useRef(0)
  // const handleIncrement = () => {
  //   val = val + 1
  //   value.current = value.current + 1
  //   console.log(`This does not persist value at every render = ${val}`) // in this case across re-render the value of val remain 1 and then 1 + 1  will become 2 so that's why it will always show 2 in console
  //   console.log(`This does persist value at every render = ${value.current}`)
  //   setCount(count + 1)
  // }

  // // note: useState always trigger re-render but in case of useRef it doesn't

  // // let x = useRef(0) so the value is at the current 
  // // ex x.current will be equal to 0
  
  // let btnRef = useRef();
  // const changeColor = () => {
  //   btnRef.current.style.backgroundColor = 'red'
  // }

  // useEffect(()=>{
  //  console.log("Rendered again") 
  // })

  let timerRef = useRef(null)
  const startTimer = () => {
    timerRef.current = setInterval(()=>{
      setTime(time => time + 1)
    },1000)
  }
  const stopTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = null;
  }
  const resetTimer = () => {
    stopTimer()
    setTime(0)
  }
  return (
    <div>
      <h1>StopWatch : {time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )}
  
  export default App
  //(
  //   <div>
  //     <h2>Hello Jee</h2>
  //     <button onClick={handleIncrement} ref={btnRef}>
  //       Increment
  //     </button>
  //     <button onClick={changeColor}>
  //       Change Color of first button
  //     </button>
  //     <h2>Count :- {count}</h2>
  //   </div>
  // )



// use cases of useRef
// if we want any variable that persist it values across re-render 

// main useCase := is just to attact to some dom and directly update them with that reference 

