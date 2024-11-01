import React, { useState } from "react";

const Product = ({ item }) => {
  const [title, setTitle] = useState(item.title);

  const handleClick = () => {
    setTitle("Ankit");
  };
  return (
    <div className="flex justify-center items-center mb-5 bg-gray-700 px-5 py-2 rounded-xl gap-20">
      <span>{title}</span>
      <span className="bg-gray-950 px-5 py-2 rounded-xl">
        {item.date.split("-").map((i, index) => (
          <div key={index}>{i}</div>
        ))}
      </span>
      <button onClick={handleClick}>Add To Cart</button>
    </div>
  );
};

export default Product;
