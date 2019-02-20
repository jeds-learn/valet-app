import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavigationBar from './Elements/NavigationBar'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import ListOfOrders from './Pages/ListOfOrders'
import AddVehicle from './Pages/AddVehicle'
import ListOfValets from './Pages/ListOfValets'
import NewOrder from './Pages/NewOrder'
import ValetDashboard from './Pages/ValetDashboard'




class User extends React.Component {
  render () {
    return (
      <div>
        <NavigationBar userDetails={this.props}/>
          <Router>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route userDetails={this.props} path="/user/new-order/:valet_id" exact component={NewOrder}/>
              <Route path="/user/add-vehicle" exact component={AddVehicle}/>
              <Route path="/user/valet-dashboard" exact component={ValetDashboard}/>
              <Route path="/list-of-valets" exact component={ListOfValets}/>
              <Route path="/user/list-of-orders" exact component={ListOfOrders}/>
              <Route component={PageNotFound}/>
            </Switch>
          </Router>
       </div>
    )
  }
}

export default User
