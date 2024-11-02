import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PwdGen from './components/PwdGen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-center items-center bg-gray-900 text-gray-600 min-h-screen w-full'>
      <h1 className='text-5xl font-semibold'>Password Generator</h1>
      <PwdGen />
    </div>
  )
}

export default App
