

// import { useState, useEffect } from 'react'
// import {Link} from 'react-router-dom'

// import styles from '../../css/moon.css'

import data from '../../constants/index'

import images from '../../assets/destination/image-europa.webp'

import HeaderDestino from '../../components/HeaderDestino'





const Europa = () => {
  const { destinations } = data;

  const destino = destinations[2];

 

  return (
    <div className='header-destination'>

    <div className='luna'>
      <h5> <small>01</small>Pick your destination</h5>
      <img src={images} alt='foto-luna' />
    </div>
    <div className='card-luna'>
      <HeaderDestino />
      <div className='body-card'>
        <h2>{destino.name}</h2>
        <p className='tex-body'>{destino.description} </p>
      </div>
      <div className='footer-card'>
        <hr></hr>
        <div className='footer-items'>
          <div className='item'>
            <h5 className='subheadin2'>Avg. distance</h5>
            <p className='subheadin'>{destino.distance}</p>
          </div>
          <div className='item'>
            <h5 className='subheadin2'>Est. travel time</h5>
            <p className='subheadin'>{destino.travel}</p>
          </div>
        </div>
      </div>
  </div>

</div>
  )
}

export default Europa