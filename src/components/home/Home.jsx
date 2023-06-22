import React from 'react'
import Navbar from './Navbar'
import Searchboxmini from './Searchboxmini'
import Popularposts from './Popularposts'
import Category from './Category'
import Tags from './Tags'
import Homearticles from "./Homearticles"
import { Switch, Route } from 'react-router-dom';
import CategoryArticle from './CategoryArticle'
import TagArticle from './TagArticle'
import BlogDetails from './BlogDetails'
import Footer from './Footer'

function Home() {
     return (
          <>
               <div className="home">
                    <Navbar />
                    <main>
                         <section className='container section home_main'>
                              <div className="left">
                                   <Switch>
                                        <Route path="/" component={Homearticles} exact />
                                        <Route path="/blogs/:page" component={Homearticles} exact />
                                        {/* Read Blog */}
                                        <Route path="/blog/read/:slug" component={BlogDetails} exact />
                                        {/* Categorywise Blog Route */}
                                        <Route path="/blogs/category=/:categorySlug/:page?" component={CategoryArticle} exact />
                                        {/* Tagwise Blog Route */}
                                        <Route path="/blogs/tags=/:tagSlug/:page?" component={TagArticle} exact />
                                   </Switch>

                              </div>
                              <div className="right">
                                   <Searchboxmini />
                                   <Popularposts />
                                   <Category />
                                   <Tags />
                              </div>
                         </section>
                    </main>
               </div>
               <Footer />
          </>
     )
}

export default Home
