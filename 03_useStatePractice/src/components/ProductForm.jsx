import React from "react";
import { useState } from "react";

const ProductForm = (props) => {
  const [val, setVal] = useState("");
  const [date, setDate] = useState('')

  const handleOnChange = (e) => {
    setVal(e.target.value);
    // console.log(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value)
    // console.log(date)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const productData = {
        title: val,
        newDate: date,
    }

    props.onSavingProduct(productData)

    setVal('')
    setDate('')
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className="bg-gray-700 rounded-xl">
      <div className="px-5 py-2 rounded-lg mb-4">
        <label className="mr-3">Title : </label>
        <input className="rounded-md px-3" type="text" value={val} onChange={handleOnChange} />
      </div>
      <div className="mb-4">
        <label className="mr-3">Date : </label>
        <input type="date" min="2023-01-01" value={date} onChange={handleDateChange} />
      </div>
      <button type="submit" className="mb-3">Add Product</button>
    </div>
    </form>
  );
};

export default ProductForm;
