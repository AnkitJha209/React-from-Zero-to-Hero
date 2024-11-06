import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center gap-5 text-xl bg-slate-600 text-gray-300 px-5 py-3 rounded-lg'>
      <NavLink><img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="logo" className='h-10' /></NavLink>
      <div>
        <ul className='flex gap-10'>
            <li><NavLink to='/' className={({isActive})=>`border-gray-200 border-2 px-5 py-1 rounded-lg ${isActive ? 'bg-gray-600' : "bg-gray-500"} hover:bg-gray-700 `}>Home</NavLink></li>
            <li><NavLink to='About' className={({isActive})=>`border-gray-200 border-2 px-5 py-1 rounded-lg ${isActive ? 'bg-gray-600' : "bg-gray-500"} hover:bg-gray-700 `}>About</NavLink></li>
            <li><NavLink to='/contact' className={({isActive})=>`border-gray-200 border-2 px-5 py-1 rounded-lg ${isActive ? 'bg-gray-600' : "bg-gray-500"} hover:bg-gray-700 `}>Contact</NavLink></li>
            <li><NavLink to='/github-profile' className={({isActive})=>`border-gray-200 border-2 px-5 py-1 rounded-lg ${isActive ? 'bg-gray-600' : "bg-gray-500"} hover:bg-gray-700 `}>GitHub</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
