import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavigationBar from './Elements/NavigationBar'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'


class User extends React.Component {
  render () {
    return (
      <div>
        <NavigationBar userDetails={this.props}/>
        <h6> User Page</h6>
          <Router>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route component={PageNotFound}/>
            </Switch>
          </Router>
       </div>

    )
  }
}

export default User
