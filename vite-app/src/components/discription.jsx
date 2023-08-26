import React, { useContext } from 'react'
import { AppContext } from '../context'
import "../index.css"

const Discription = () => {
    const {dark,ChangeMode}=useContext(AppContext)
    
  return (
    <div className={` m-2  text-${dark ? "white":"black"} text-[2vmin] font-sans p-6 text-center`} style={{ fontFamily: ''}}
    >
      <h2 className='font-bold  text-[4vmin] pb-6 pt-8 text-underline ' >Welcome to <b className={`text-${dark ? "blue-400" :"green-400"} bg-clip-text     text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`} style={{fontFamily:'Arthead'}}>DotHarp </b>Community Page</h2>
      {/* <h3 className='font-bold ' style={{fontSize:"13px"}}> Join the community by following the instructions in the <b className='text-red-600'>README</b> file. */}
     {/* </h3> */}

    </div>
  )
}

export default Discription
