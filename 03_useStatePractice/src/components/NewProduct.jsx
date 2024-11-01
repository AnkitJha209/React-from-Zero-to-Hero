import React from 'react'
import ProductForm from './ProductForm'

const NewProduct = (props) => {

    function savingNewProduct(data){
        console.log('new product component')
        console.log(data)

        props.onSave(data)
    }
  return (
    <div>
      <ProductForm onSavingProduct={savingNewProduct}/>
    </div>
  )
}

export default NewProduct
