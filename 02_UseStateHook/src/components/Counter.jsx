import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        count > 0 ? setCount(count - 1) : alert('Counter is 0')  
    }
  return (
    <div>
      Counter : {count}
      <button onClick={handleIncrement}>Increment</button>
      {count > 0 && <button onClick={handleDecrement}>Decrement</button>}
    </div>
  )
}

export default Counter
