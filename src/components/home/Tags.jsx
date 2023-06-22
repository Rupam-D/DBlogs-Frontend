import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "../../css/components/tags.css"

function Tags() {
     return (
          <div className='tags box_bg'>
               <button className='search_btn'>Popular Tags</button>
               <div className="tags grid_two_col grid_two_row">
                    <li><Link to="/blogs/tags=/tagSlug">Programing & Tech</Link></li>
                    <li><Link to="/blogs/tags=/tagSlug">Programing & Tech</Link></li>
                    <li><Link to="/blogs/tags=/tagSlug">Programing & Tech</Link></li>
                    <li><Link to="/blogs/tags=/tagSlug">Programing & Tech</Link></li>
               </div>


          </div>
     )
}

export default Tags
