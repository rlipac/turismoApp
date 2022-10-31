
import { Link } from 'react-router-dom'

//css
import '../css/header.css'


const Header = () => {


   const mostrarMenu=()=>{
      const element1 = document.getElementById("menuSmall");
      element1.classList.remove("menu-sm");
      const element2 = document.getElementById("menuSmall");
      element2.classList.add("menu-sm-v");
   }
   const hiddenMenu=()=>{
      const element1 = document.getElementById("menuSmall");
      element1.classList.remove("menu-sm-v");
      const element2 = document.getElementById("menuSmall");
      element2.classList.add("menu-sm");
   }
   return (
      <>

         <div className='header-container'>
            <div className='logo'>
               <Link to="/">
                  <svg  xmlns="http://www.w3.org/2000/svg" width="60" height="60">
                     <g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" />
                        <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" />
                    </g>
                  </svg>
               </Link>

            </div>
            <div className='linea'></div>
            <div className='menu' id='menu'>
               <div className='nav-header'>
                  <nav className=''>
            
                     <ul>
                        <Link className='links' to="/">00 HOME </Link>
                        <Link className='links' to="/destinations">01 DESTINATION </Link>
                        <Link className='links' to="/crew">02 CREW</Link>
                        <Link className='links' to="/technology">03 TECHNOLOGY </Link>
                       
                     </ul>
                  </nav>
               </div>
            </div>
           
         </div>
         {/* header-mobiles */}
         <div className='header-container-sm'>
            <div className='logo-sm'>
               <Link to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                     <g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" />
                        <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" />
                    </g>
                  </svg>
               </Link>

            </div>
            <div className='hamburgesa-sm' onClick={mostrarMenu}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
            </div>
            <div className='menu-sm' id='menuSmall'>              
                    <div className='close' onClick={hiddenMenu}>
                      <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
                     </div>
                  <div className='nav-sm'>
                        <Link className='links-sm' to="/">00 HOME </Link>
                        <Link className='links-sm' to="/destinations">01 DESTINATION </Link>
                        <Link className='links-sm' to="/crew">02 CREW</Link>
                        <Link className='links-sm' to="/technology">03 TECHNOLOGY </Link>
                  </div>
            </div>
         
         </div>
         



      </>

   )
}

export default Header