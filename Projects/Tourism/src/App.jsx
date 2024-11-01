import { useState } from 'react'
import './App.css'
import data from './Data'
import Tours from './components/Tours'

function App() {

  const [tours, setTours] = useState(data)

  const removeTour = (id) => {
    const newTour = tours.filter(tour => tour.id !== id)
    setTours(newTour)
  }
  const handleRefresh = () => {
    setTours(data);
  }

  if(tours.length === 0){
    return (
      <div className='flex justify-center flex-col items-center min-h-screen bg-gray-900'>
        <h1 className='text-3xl mb-2 text-gray-500'>No Tours Left</h1>
        <button className='px-5 py-2 bg-gray-400 hover:bg-gray-600' onClick={handleRefresh}>Refresh</button>
      </div>
    )
  }

  return (
    <div className='bg-gray-900 text-gray-400'>
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  )
}

export default App
