import React, { useContext } from 'react'
import "../index.css"
import { AppContext } from '../context'
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Headers = () => {
  const {dark, setdark,ChangeMode}=useContext(AppContext)
  return (
    <>
    <div className=' m-2 border-red-600 flex justify-between px-2'>
      <h2 className={` font-bold text-[1.3rem] text-${dark ? "white":"black"}`} style={{letterSpacing:"1px"}}>.harp</h2>
      <button onClick={ChangeMode}> <DarkModeIcon className={`text-${dark ? "gray-200":"black"} `}/>  </button>
    </div>
    </>
  )
}

export default Headers
 {/* <h2 className={
      `text-${dark ? "green-600" : "red-600" }`
    } >COLO</h2> */}