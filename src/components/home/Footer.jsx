import React from 'react'
import "../../css/components/footer.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Footer() {
     return (
          <footer className='footer'>
               <Link to="/"><p>Made with ❤ by Rupam</p></Link>
          </footer>
     )
}

export default Footer
