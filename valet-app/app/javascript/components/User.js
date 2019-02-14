import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavigationBar from './Elements/NavigationBar'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import BookNow from './Pages/BookNow'
import BookDetails from './Pages/BookDetails'
import AddVehicle from './Pages/AddVehicle'




class User extends React.Component {
  render () {
    return (
      <div>
        <NavigationBar userDetails={this.props}/>
          <Router>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/user/add_vehicle" exact component={AddVehicle}/>
              <Route path="/user/book_valet" exact component={BookNow}/>
              <Route path="/user/book_valet/details" exact component={BookDetails}/>
              <Route component={PageNotFound}/>
            </Switch>
          </Router>
       </div>
    )
  }
}

export default User
