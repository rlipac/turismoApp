
import { Link } from "react-router-dom"

// import styles from '../css/crew.css'

const NavCrew = () => {
  return (
    <div className="nav-crew">

      <nav>
        <ul>
           <Link to="/crew"><div  className="links-crew"></div></Link>
            <Link to="/crew/mark-shuttleworth"><div  className="links-crew"></div></Link>
            <Link to="/crew/victor-glover"><div  className="links-crew"></div></Link>
            <Link to="/crew/anousheh-ansari"><div  className="links-crew"></div></Link>
        </ul>
      </nav>

  </div>
  )
}

export default NavCrew