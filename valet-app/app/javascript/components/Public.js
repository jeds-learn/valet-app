import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'

import NavigationBar from './Elements/NavigationBar'

class Public extends React.Component {
  render () {
    return (
      <Router>
       <div>
        <NavigationBar/>
          <h1> Public Path</h1>


       </div>
     </Router>



    );
  }
}

export default Public
