import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData();// u can use useffect to fetch data but for optimization we used loader and useLoaderdata to optimize it
    // const  [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(dataholder => setData(dataholder))
    // })
  return (
    <div className='text-5xl text-gray-400 font-bold hover:shadow-xl hover:shadow-gray-400 px-5 py-3 rounded-lg cursor-pointer'>
        <img src={data.avatar_url} className='rounded-full h-52' alt="" />
      <div>{data.name}</div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/AnkitJha209')
    return res.json();
}   
