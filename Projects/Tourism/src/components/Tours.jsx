import React from 'react'
import Card from './Card'

const Tours = ({tours, removeTour}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div><h2 className='text-6xl border-dashed border-gray-500 border-4 px-5 py-2 mb-5 rounded-xl'>Plan With Ankit</h2></div>
      <div className='grid grid-cols-12 gap-5 rounded-md'>
        {tours.map(item => (
            <Card item={item} removeTour={removeTour} className='col-span-4 mb-5 shadow-md shadow-white rounded-lg' key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default Tours

