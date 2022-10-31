
import images from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import imagesSM from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import NavTechnology from '../../components/NavTechnology';
//consts

import data from '../../constants/index'

const Vehicule = () => {
  const { technology } =data;
  const techno = technology[0];
  return (
   <> 
        
      <div className='techno-container-items'>
         <NavTechnology />
       <div className='card-tecnology'>
         <div className="card-tec">
            <h5>THE TERMINOLOGY</h5>
            <h3>{techno.name}</h3>
            <p>
            {techno.description}
            </p>
         </div>
         <img  src={images} alt="foto-tecno"/>
      </div>
      </div> 

      <div className='techno-container-sm'>
         
      <div className='card-tecnology'>
         
         <img  src={imagesSM} alt="foto-tecno"/>
          <NavTechnology />
         <div className="card-tec">
            <h5>THE TERMINOLOGY</h5>
            <h3>{techno.name}</h3>
            <p>
            {techno.description}
            </p>
         </div>
      </div>
      </div> 
   </>
   
   
  )
}

export default Vehicule