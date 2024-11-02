import React, {useState, useEffect} from 'react'

const PwdGen = () => {
    const [length, setLength] = useState(8)
    const [symAllowed, setSymAllowed] = useState(false)
    const [numAllowed, setNumAllowed] = useState(false)
    const [pass, setPass] = useState('')

    const passwordGenerator = () => {
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        let pwd = ''
        if(symAllowed){
            str += '~!@#$%^&*()_+=-`}{][|":?/><'
        }
        if(numAllowed){
            str += '1234567890'
        }

        for (let i = 0; i < length; i++) {
            pwd += str[Math.floor(Math.random()*str.length)]
        }
        setPass(pwd)
    }

    useEffect(()=>{
        passwordGenerator();
    },[length, symAllowed, numAllowed, setPass])

  return (
    <div className='mt-4 grid grid-cols-12 gap-5'>
      <input type="text" readOnly value={pass} className='col-span-12 rounded-md px-5 py-2 bg-gray-600 text-white text-center'/>
      <label className='col-span-4'>Length : {length}</label>
      <input type="range" min='8' max={60} onChange={(e)=> setLength(e.target.value)} className='col-span-8'/>
      <label className='col-span-3'>Numbers </label>
      <input className='col-span-3' type="checkbox" onClick={()=>setNumAllowed(!numAllowed)}/>
      <label className='col-span-4'>Special Characters </label>
      <input className='col-span-2' type="checkbox" onClick={()=>setSymAllowed(!symAllowed)}/>
    </div>
  )
}

export default PwdGen
