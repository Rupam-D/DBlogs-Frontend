import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home'
import Register from './components/auth/Register';
import Login from './components/auth/Login';


function App() {
     return (
          <>
               <Router>
                    <Switch>
                         {/* Default */}
                         <Route path="/" component={Home} exact />
                         {/* Pagination */}
                         <Route path="/blogs/:page" component={Home} exact />
                         {/* Register */}
                         <Route path="/register" component={Register} exact />
                         {/* Login */}
                         <Route path="/login" component={Login} exact />
                         {/* Search */}
                         <Route path="/blogs/search=/:searchValue" component={Home} exact />
                         {/* Read */}
                         <Route path="/blog/read/:slug" component={Home} exact />
                         {/* Category */}
                         <Route path="/blogs/category=/:categorySlug/:page?" component={Home} exact />
                         {/* Tags */}
                         <Route path="/blogs/tags=/:tagSlug/:page?" component={Home} exact />
                    </Switch>
               </Router>
          </>
     )
}

export default App
