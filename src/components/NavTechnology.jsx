import React from 'react'
import { Link } from 'react-router-dom'

const NavTechnology = () => {
    return (
        <nav className='nav-technology'>
            <ul>
                <div className="links"><Link className='link-li' to="/technology">1</Link></div>
                <div className="links"><Link className='link-li' to="/technology/space-port">2</Link></div>
                <div className="links"><Link className='link-li' to="/technology/space-capsule">3</Link></div>
            </ul>
        </nav>
    )
}

export default NavTechnology