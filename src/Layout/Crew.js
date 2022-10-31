
import { Outlet ,Link } from "react-router-dom"

//component
import Header from '../components/Header'

// const
import data from '../constants/index'

//css
import styles from '../css/crew.css'



const Crew = () => {


  return (
    <main className='container'>
       <>  
        <Header />
      
        <div className='mi-container'>
        <Outlet />

        </div>
     
        
      </>
    </main>
      
   
  )
}

export default Crew