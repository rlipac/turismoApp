import React from 'react'

 import '../css/home/home.css'

// component
import Header from '../components/Header';
import CardHome from '../components/CardHome';

const Home = () => {
  return (
    <main className='homePage-container'>
      <>
        <Header />
        <div className='mi-container'>
         <CardHome />
        </div>
        
      </>
       

    </main>
  
     
  )
}

export default Home