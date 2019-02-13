import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NavigationBar from './Elements/NavigationBar'
import Registration from './Pages/Registration'
import PageNotFound from './Pages/PageNotFound'

class Public extends React.Component {
  render () {
    return (
      <Router>
       <div>
        <NavigationBar/>
          <h6> Public Path</h6>
             <Route path="/registration" exact component={Registration}/>
       </div>
     </Router>



    );
  }
}

export default Public
