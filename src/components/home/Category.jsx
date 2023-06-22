import React from 'react'
import "../../css/components/category.css"
import { Link } from "react-router-dom"

function Category() {
     return (
          <div className='category_list'>
               <button className='search_btn'>Category</button>
               {/* Category */}
               <ul className="category grid_two_col">
                    <li className='category_item db'><Link to="/blogs/category=/dsa">Data structure and Algorithm</Link></li>
                    <li className='db'>(7)</li>
               </ul>
               {/* Category */}
               <ul className="category grid_two_col">
                    <li className='category_item db'><Link to="/blogs/category=/dsa">Data structure and Algorithm</Link></li>
                    <li className='db'>(7)</li>
               </ul>
               {/* Category */}
               <ul className="category grid_two_col">
                    <li className='category_item db'><Link to="/blogs/category=/dsa">Data structure and Algorithm</Link></li>
                    <li className='db'>(7)</li>
               </ul>
               {/* Category */}
               <ul className="category grid_two_col">
                    <li className='category_item db'><Link to="/blogs/category=/dsa">Data structure and Algorithm</Link></li>
                    <li className='db'>(7)</li>
               </ul>
               {/* Category */}
               <ul className="category grid_two_col">
                    <li className='category_item db'><Link to="/blogs/category/dsa/page">Data structure and Algorithm</Link></li>
                    <li className='db'>(7)</li>
               </ul>
               {/* Category */}
               <ul className="category grid_two_col">
                    <li className='category_item db'><Link to="/blogs/category=/dsa">Data structure and Algorithm</Link></li>
                    <li className='db'>(7)</li>
               </ul>
          </div>
     )
}

export default Category
