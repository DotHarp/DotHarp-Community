import React, { useContext } from 'react'
import Headers from './headers'
import Discription from './discription'
import Card from './card'
import "../index.css"
import { AppContext } from '../context'
import { styled } from '@mui/material'

const Page = () => {
    const {dark,setdark,ChangeMode}=useContext(AppContext)
  return (
         <>
    <div className={` full-page h-[auto] p-[2vmax] bg-${dark ? "[#161b22]" :"gray-100" } `}

    >
      <Headers/>
      <Discription/>
      <Card/>
    </div>
    </>
  )
}

export default Page
