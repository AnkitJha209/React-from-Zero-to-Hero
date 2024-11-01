import React from "react";
import { useState } from "react";

const Card = ({ removeTour, item, className}) => {
  const { name, image, price, info, id} = item
    const [readMore, setReadMore] = useState(false);
    const description = `${info.substring(0,200)}...`

    const handleReadMore = () => {
        setReadMore(!readMore)
    }

  return (
    <div className={`max-h-fit w-[400px] p-4 ${className}`}>
      <div>
        <img className="w-[350px] h-[450px] object-cover mb-2" src={image} alt="" />
      </div>
      <div>
        <h2 className="mb-1 text-2xl text-green-600">${price}</h2>
        <h3 className="mb-2 text-xl font-bold">{name}</h3>
      </div>
      <div className="text-gray-300 mb-5">
        {readMore ? info : description}
        <span className="text-blue-500 cursor-pointer" onClick={handleReadMore}>
            {readMore ? ' show less': ' read more'}
        </span>
      </div>
      <div className="text-center">
        <button className="border-2 border-gray-500 px-9 py-2 rounded-lg hover:bg-gray-700 hover:text-white" onClick={()=>removeTour(id)}>Not Interested</button>
      </div>
    </div>
  );
};

export default Card;
