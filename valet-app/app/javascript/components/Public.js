import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NavigationBar from './Elements/NavigationBar'
import ListOfValets from './Pages/ListOfValetsUnathenticated'
import Registration from './Pages/Registration'
import PageNotFound from './Pages/PageNotFound'
import RegistrationUser from './Pages/RegistrationUser'
import RegistrationValet from './Pages/RegistrationValet'
import Home from './Pages/Home'
import Test from './Pages/Test'


class Public extends React.Component {
  render () {
    return (
      <div>
      <NavigationBar userDetails={this.props}/>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/test" exact component={Test}/>
          <Route path="/list-of-valets" exact component={ListOfValets}/>}/>
          <Route path="/registration" exact component={Registration}/>
          <Route path="/registration/user" exact component={RegistrationUser}/>
          <Route path="/registration/valet" exact component={RegistrationValet}/>
          <Route component={PageNotFound}/>
       </Switch>
     </Router>
     </div>
    )
  }
}

export default Public
