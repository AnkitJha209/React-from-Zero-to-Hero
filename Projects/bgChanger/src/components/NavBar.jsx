import React from 'react'

const NavBar = ({value}) => {
  return (
    <div className='h-[60px] w-full bg-gray-700 flex justify-center items-center gap-10'>
      <button className='border-2 border-black px-5 py-1 rounded-xl bg-red-700 text-white' onClick={()=> value('#b91c1c')}>Red</button>
      <button className='border-2 border-black px-5 py-1 rounded-xl bg-gray-800 text-white' onClick={()=> value('#1f2937')}>Gray</button>
      <button className='border-2 border-black px-5 py-1 rounded-xl bg-blue-600 text-white' onClick={()=> value('#2563eb')}>Blue</button>
    </div>
  )
}

export default NavBar
