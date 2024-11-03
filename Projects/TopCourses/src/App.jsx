import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import FilterData from './components/FilterData'
import { apiUrl, filterData } from './data'
import Cards from './components/Cards'
import { toast } from "react-toastify";
import Spinner from './components/Spinner'

function App() {
  const [category, setCategory] = useState(filterData[0].title)
  const [loading, setLoading] = useState(false)
  const [courses, setCourses] = useState({})

  // console.log(category);

  const fetchData = async () => {
    setLoading(true)
    try{
      const res = await fetch(apiUrl)
      const jsonData = await res.json();
      console.log(jsonData.data)
      setCourses(jsonData.data)
    }
    catch(error){
      // console.log(error)
      toast.error('Network Issue')
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='bg-gray-800 min-h-screen'>
      <NavBar />
      <FilterData setCategory={setCategory} category={category} filterData={filterData}/>
      <div className='flex flex-col items-center justify-center min-h-36'>
      {loading ? <Spinner/> : <Cards courses={courses} category={category}/>}
      </div>
    </div>
  )
}

export default App
