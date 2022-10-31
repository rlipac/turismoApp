import { Outlet, Link } from "react-router-dom"

import  styles from '../css/destinations.css'


//component
import Header from '../components/Header'


const Destinations = () => {
  return (
    <main className='destino-container'>
     <>
      <Header />  
       
        <div className='mi-container'>
        <Outlet />

        </div>
    </>

    </main> 
   
  )
}

export default Destinations