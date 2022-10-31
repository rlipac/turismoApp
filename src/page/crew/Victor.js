
    // component
import NavCrew from '../../components/NavCrew'
    
    // images
    import images from '../../assets/crew/image-victor-glover.webp' 
    
    
    //constants
    
    import data from '../../constants/index'

    const Victor = () => {
      const { crew } = data;
    
      const piloto = crew[2];
      console.log(piloto);
    
  
      return (
        <div className="crew-container">
        <div className='titulo-crew'>
          <h5> <small>01</small>Meet your crew</h5>
  
        </div>
        <div className='crew-items-container'>
  
          <div className='card-crew'>
            <div className='card'>
              <h3 className='card-role'>{piloto.role}</h3>
              <h2 className='card-name'>{piloto.name}</h2>
              <p className='tex-body'>
                {piloto.bio}
              </p>
  
            </div>
            <NavCrew />
          </div>
          <div className='images'>
            <img src={images} alt="foto-Tripulacion" />
          </div>
        </div>
  
  
      </div>
  
  
      )
      }
   

export default Victor