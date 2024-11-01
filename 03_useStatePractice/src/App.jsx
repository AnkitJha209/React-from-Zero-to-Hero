import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import NewProduct from './components/newProduct'

function App() {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      date: "2024-19-10"
    },
    {
      id: 'p2',
      title: 'Surf Excel',
      date: "2024-19-10"
    },
    {
      id: 'p3',
      title: 'Tide',
      date: "2024-19-10"
    },
    {
      id: 'p4',
      title: 'Wheel',
      date: "2024-19-10"
    },
  ]

  function saveNewProduct(data){
    console.log('App.jsx')
    console.log(data)
  }

  return (
    <div>
      <NewProduct onSave={saveNewProduct}/>
      <Card products={products}/>
    </div>
  )
}

export default App
