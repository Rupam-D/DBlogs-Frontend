import React from 'react'
import Navbar from '../home/Navbar'
import Footer from '../home/Footer'
import "../../css/auth/register.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Register() {
     return (<>
          <Navbar />
          <div className='register dflex'>
               <div className="card  ">
                    <form className="form_details  box_bg">
                         <div className="name dflex">
                              <label htmlFor="username">
                                   <span><i class="fa-solid fa-user-tie"></i></span>
                              </label>
                              <input type="text" name="username" id="username" placeholder='username' />
                         </div>
                         <div className="email dflex">
                              <label htmlFor="useremail">
                                   <span><i class="fa-solid fa-at"></i></span>
                              </label>
                              <input type="email" name="useremail" id="useremail" placeholder='email' />
                         </div>
                         <div className="password dflex">
                              <label htmlFor="passowrd">
                                   <span><i class="fa-solid fa-at"></i></span>
                              </label>
                              <input type="passowrd" name="passowrd" id="passowrd" placeholder='passowrd' />
                         </div>
                         <div className="image">
                              <label htmlFor="passowrd">
                                   {/* <span><i class="fa-solid fa-at"></i></span> */}
                              </label>
                              <input type="file" name="image" id="image" placeholder='image' />
                              {/* <div className="image_file">
                                   <div className="1"></div>
                                   <div className="2">
                                        <div className="2.1">
                                             <label htmlFor="">image</label>
                                        </div>
                                   </div>
                              </div> */}
                         </div>


                         <input type="submit" className='search_btn' value="Register" formMethod='POST' id='register_btn' />

                         <div className="login">
                              <Link to="/login">Already a user? Log-in</Link>
                         </div>
                    </form>

                    {/* <div className="img">
                         <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1687403983~exp=1687404583~hmac=415a054715bf4c463df1abd24150e65f9e05a765f28c4aa7184eeccf069d9bb5" alt="" srcset="" />
                    </div> */}
               </div>
          </div>

          <Footer />
     </>

     )
}

export default Register
