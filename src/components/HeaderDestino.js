import {Link} from 'react-router-dom'

const HeaderDestino = () => {
  return (
    <div className='moon-menu'>
    <nav>
      <ul> 
      <Link  to="/destinations/"><div className='links nav-text'>MOON </div></Link>
      <Link  to="/destinations/mars"><div className='links nav-tex'>MARS </div></Link>
      <Link  to="/destinations/europa"><div className='links nav-tex'>EUROPA </div></Link>
      <Link  to="/destinations/titan"><div className='links nav-tex'>TITAN </div></Link>
        
      </ul>
  </nav>
</div>
  )
}

export default HeaderDestino