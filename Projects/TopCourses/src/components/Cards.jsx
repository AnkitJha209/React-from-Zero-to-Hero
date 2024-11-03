import React, { useEffect, useState } from 'react'
import Card from './Card'

const Cards = (props) => {
  let courses = props.courses
  let category = props.category

  function getCourses(){
    if(category === 'All'){
        let allCourses = [];
      Object.values(courses).forEach(arr => {
        arr.forEach(course => {
          allCourses.push(course)
        })
      })
      return allCourses;
    }
    else{
      return courses[category]
    }
    
  }
  console.log(props.courses)
  return (
    <div className='grid grid-cols-12 gap-5 mt-10 sm:w-[1000px]'>
      {
        getCourses().map(course => (
          <Card key={course.id} course={course} className='col-span-4 rounded-lg bg-gray-600 min-h-fit'/>
        ))
      }
    </div>
  )
}

export default Cards
