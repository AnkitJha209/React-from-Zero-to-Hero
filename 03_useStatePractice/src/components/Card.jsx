import React from 'react'
import Product from './Product'

const Card = ({products}) => {
  return (
    <div className='rounded-lg border-gray-600 bg-gray-900 px-10 py-5'>
      {
        products.map((item) => (
            <Product item={item} key={item.id}/>
        ))
      }
    </div>
  )
}

export default Card
