import { createContext, useState } from "react";
import React from 'react'

export const  AppContext=createContext(null)

const ContextStore = (props) => {
  const[dark,setdark]=useState(false)

  function ChangeMode(){
    setdark(!dark)
  }
    return (
       <AppContext.Provider value={{dark,setdark,ChangeMode}}>
        {props.children}
       </AppContext.Provider>
        )
}

export default ContextStore
