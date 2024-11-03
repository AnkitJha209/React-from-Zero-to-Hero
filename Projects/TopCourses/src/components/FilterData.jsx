import React from 'react'

const FilterData = (props) => {


    const handleClick= (item) => {
        props.setCategory(item.title)
    }
  return (
    <div className='flex gap-5 justify-center items-center text-gray-400 mt-5'>
      {
        props.filterData.map((item)=>(
            <div className={`border-2 px-5 rounded-md border-gray-900 py-1 cursor-pointer
             hover:bg-gray-900 ${props.category == item.title ? 'bg-gray-900' :  'bg-gray-600'}`} key={item.id} onClick={() => handleClick(item)}>{item.title}</div>
        ))
      }
    </div>
  )
}

export default FilterData
