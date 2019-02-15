import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavigationBar from './Elements/NavigationBar'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import BookNow from './Pages/BookNow'
import AddVehicle from './Pages/AddVehicle'
import ListOfValets from './Pages/ListOfValets'
import NewOrder from './Pages/NewOrder'




class User extends React.Component {
  render () {
    return (
      <div>
        <NavigationBar userDetails={this.props}/>
          <Router>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/user/new-order" exact component={NewOrder}/>
              <Route path="/user/add-vehicle" exact component={AddVehicle}/>
              <Route path="/list-of-valets" exact component={ListOfValets}/>
              <Route path="/user/book-valet" exact component={BookNow}/>
              <Route component={PageNotFound}/>
            </Switch>
          </Router>
       </div>
    )
  }
}

export default User
