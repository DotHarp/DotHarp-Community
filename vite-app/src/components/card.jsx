import React, { useContext, useState } from 'react'
import {Users} from "../Contributors"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AppContext } from '../context';
import SearchIcon from '@mui/icons-material/Search';
const Card = () => {

    const {dark,ChangeMode}=useContext(AppContext)
    const[name,Setname]=useState()
    const [foundUser, setFoundUser] = useState(null)

 function InputValue(event){
   Setname(event.target.value)
   console.log(name)
 }

  function FindUser(){
    const exist=Users.some(user=>user.name===name)
   if(exist){
    console.log('ok')
    // const srchCrd=document.getElementsByClassName('srch-crd')
    // srchCrd.style.display="block"
    setFoundUser(name)
   }
   else{
    setFoundUser("not found")
}  }


  return (<>
    <div className=' mt-[2%] border-green-400 m-2 flex flex-col'>
   
    <div className='m-2'>
    <h1
        className={`text-${dark ? "white":"black"} text-3xl ml-[5%] font-bold`}>Contributors - {Users.length}</h1>

        <div className={` p-4 m-4  text-${dark?"white":"black"} `}>   <h2 className='ml-4' ><b> FIND USER</b></h2>
        <input className="border-2 ml-4  mt-2 rounded-[15px] px-4 py-1 w-[140px] bg-transparent"   type="text"  name="username"  
        value={name} onChange={InputValue}
        placeholder="your name" />
        <button className={`   rounded-[10px] ml-2 text-${dark ? 'green-500' : 'black'}`} onClick={FindUser}><SearchIcon className={`text-${dark ? "purple-600":"red-600"} `}/></button>
  
        </div>
        
        <div className='srch-crd m-2 flex flex-wrap justify-center w-[30vmin] h-[50%] '>
  {foundUser !== null ? (
    Users.some(item => item.name === foundUser) ? (
      Users.map(item => {
        if (item.name === foundUser) {
          return (
            <div key={item.name} className='border-2 rounded-[30px] mt-2 mx-2 p-6 py-10 w-[30vmin] h-[auto] text-center flex flex-col justify-around'>
              <div className='flex flex-col justify-between'>
                <h2 className={`text-${dark ? 'white' : 'black'} font-bold text-xl`}>{item.name}</h2>
                <div className='flex justify-around mt-[30%]'> 
                  <a href={item.Github} className='text-purple-600'>
                    <GitHubIcon />
                  </a>
                  <h2 className='text-blue-600'>
                    <LinkedInIcon />
                  </h2>
                </div>
                <h1 className={`text-${dark ? "white":"black"} mt-[15%] h-[100%] text-blue-300`}>{item.About}</h1>
              </div>
            </div>
          );
        }
        return null;
      })
    ) : (
      <p>Contributor not found</p>
    )
  ) : null}
</div>


    </div>
    <div></div>
    <div className=' m-2  flex flex-wrap justify-center'>
    { Users.map((item)=>{
        return(<>
        <div className='border-2 rounded-[30px] mt-2 mx-2 p-6  py-10 w-[40vmin]  h-[auto]  text-center flex flex-col ' >
        <h2
        className={`text-${dark ? "white":"black"} font-bold  text-[3vmin]`}
        >{item.name}</h2> 
         <div className='mb-4 flex justify-around mt-[25%]'>
        <a href={item.Github}
        className='text-purple-600 '
        ><GitHubIcon style={{fontSize:"4vmin"}}/></a>
        
        <h2
        className='text-blue-600'><LinkedInIcon  style={{fontSize:"4vmin"}}/></h2>
        </div>
        <h2  className={`text-${dark ? "white":"black"} mt-[15%] h-[100%] text-blue-300`}>"{item.About}"</h2>
        </div>
        </>)
    })
        
    }</div>    </div>
    </>)
}

export default Card
