import React, { useState } from 'react'
import "../../css/components/searchbox.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Searchboxmini() {
     const [value, setValue] = useState(" ")
     const searchValue = (e) => {
          console.log(e.target.value)
          console.log("stage 1 passed")
          setValue(e.target.value)
          console.log("stage 2 passed")
          console.log(value)
          console.log("stage 3 passed")
     }
     return (
          <div className='search_box'>
               <p>Search</p>
               <input type="text" name="search" id="search" onChange={searchValue} placeholder='whats on your mind...' />
               <Link to={`/blogs/search=/${value}`}><button className='search_btn'>Search</button></Link>
          </div>
     )
}

export default Searchboxmini
