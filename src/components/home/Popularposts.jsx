import React from 'react'
import "../../css/components/popularposts.css"

function Popularposts() {
     return (
          <div className='popular_posts'>
               <button className='search_btn'>Popular Topics</button>
               {/* Post */}
               <div className="post grid_two_col">
                    <img src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    <div className="post_about">
                         <h3 className='inb'>My name is Rupam Das</h3>
                    </div>
               </div>
               {/* Post */}
               <div className="post grid_two_col">
                    <img src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    <div className="post_about">
                         <h3 className='inb'>My name is Rupam Das</h3>
                    </div>
               </div>
               {/* Post */}
               <div className="post grid_two_col">
                    <img src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    <div className="post_about">
                         <h3 className='inb'>My name is Rupam Das</h3>
                    </div>
               </div>
               {/* Post */}
               <div className="post grid_two_col">
                    <img src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    <div className="post_about">
                         <h3>My name is Rupam Das</h3>
                    </div>
               </div>
               {/* Post */}
               <div className="post grid_two_col">
                    <img src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    <div className="post_about">
                         <h3 className='inb'>My name is Rupam Das</h3>
                    </div>
               </div>
          </div>
     )
}

export default Popularposts
