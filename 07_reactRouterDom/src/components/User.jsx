import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
    const upper = userid.toString().toUpperCase()
    const spillt = upper.split('-').join(' ');
  return (
    <div className='text-5xl text-gray-400 font-bold hover:shadow-xl hover:shadow-gray-400 px-5 py-3 rounded-lg cursor-pointer'>
      User : {spillt}
    </div>
  )
}

export default User
