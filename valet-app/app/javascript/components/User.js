import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavigationBar from './Elements/NavigationBar'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import BookNow from './Pages/BookNow'
import AddVehicle from './Pages/AddVehicle'

import MyValets from './Pages/MyValets'
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
<<<<<<< HEAD
              <Route path="/user/book-valet" exact component={BookNow}/>
=======
              <Route path="/user/book_valet" exact component={BookNow}/>
              <Route path="/user/book_valet/details" exact component={BookDetails}/>
              <Route path="/user/my_valets" exact component={MyValets}/>
>>>>>>> 6ea04cfc93a8fe95d4f4b0ca51693f34a7948580
              <Route component={PageNotFound}/>
            </Switch>
          </Router>
       </div>
    )
  }
}

export default User
