import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [color, setColor] = useState('Black')

  return (
    <>
      <div className='w-full h-screen text-gray-500 flex justify-between flex-col items-center'
      style={{backgroundColor : color}}
      >
        <NavBar value={setColor}/>
      </div>
    </>
  )
}

export default App
