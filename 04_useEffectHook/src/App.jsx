import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [size, setSize] = useState(window.innerWidth)

  // variation 1 := for every render
  // useEffect(()=>{
  //   console.log('UI Rendering Done')
  // })

  // variation 2 := for only first time rendering
  // useEffect(() => {
  //   console.log('UI rendering only first time')
  // },[])

  // variation 3 := on first render + whenever dependecy changes
  // useEffect(() => {
  //   console.log('Changing')
  // },[text])

  // variation 4 := to handle unmounting of a component
  // useEffect(() => {
  //   console.log('Listener added')
  //   return () => {
  //     console.log('Listener Removed')
  //   }
  // },[text])

  // assignment

  const handleResize = () => {
    setSize(window.innerWidth);
  };

  useEffect(()=>{

    // Add the event listener
    window.addEventListener('resize', handleResize);

    // Call the handler once to set initial width
    // handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

  return (
    <div>

      <h2>Window Size : {size}</h2>
    </div>
  )
}

export default App
