import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  const [like, setLike] = useState(true);
  let course = props.course;
  console.log(course);
  const des = `${course.description.substring(0,100)}...`

  const handleClick = () => {
    setLike(!like);
    if (like) {
      toast.success("Liked Succesfully");
    } else {
      toast.error("Liked Removed");
    }
  };
  return (
    <div className={props.className}>
      <div>
        <img
          src={course.image.url}
          alt={course.image.alt}
          className="rounded-lg"
        />
      </div>
      <h2 className="text-xl font-semibold text-gray-900 flex justify-evenly items-center m-3">
        {course.title}{" "}
        <div onClick={handleClick} className="cursor-pointer">
          {like ? <FcLikePlaceholder /> : <FcLike />}
        </div>
      </h2>
      <div className="text-lg px-5 font-medium text-gray-400 mb-10">
        {des}
      </div>
    </div>
  );
};

export default Card;
