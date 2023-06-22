import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "../../css/components/navbar.css"

function Navbar() {
     return (
          <nav className='section container dflex navbar'>
               <div className="logo">
                    <Link to="/">Dblogs.</Link>
               </div>
               <div className="navigation_menu">
                    <ul>
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="/">About</Link></li>
                         {/* <li><Link to="/">Login</Link></li> */}
                         <li><Link to="/register">Become a member</Link></li>
                    </ul>
               </div>
          </nav>
     )
}

export default Navbar
