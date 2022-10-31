import React from 'react'

import { Link, Outlet } from "react-router-dom"
//component
import Header from '../components/Header'

import '../css/technology.css'

const Technology = () => {
  return (
    <main className='techno-container'>
    <>
     <Header />
      
     <div className='mi-container'>
       <div className='technology-container'>
          <h2 className='title-tecnology'><small>03</small> SPACE LOUCH <small>101</small> </h2>
        
          <Outlet />
        </div>
     
     </div>
     
      
   </>

   </main> 
    
  )
}

export default Technology