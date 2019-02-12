import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'

import Valet from './Valet'


class User extends React.Component {
  render () {
    return (
      <Router>
       <div>
          <h1> User Page</h1>

       </div>
     </Router>



    );
  }
}

export default User
