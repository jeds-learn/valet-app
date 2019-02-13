import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NavigationBar from './Elements/NavigationBar'
import Registration from './Pages/Registration'
import PageNotFound from './Pages/PageNotFound'
import RegistrationUser from './Pages/RegistrationUser'
import RegistrationValet from './Pages/RegistrationValet'

class Public extends React.Component {
  render () {
    return (
      <Router>
       <div>
        <NavigationBar/>
          <h6> Public Path</h6>
             <Route path="/registration" exact component={Registration}/>
             <Route path="/registration/user" exact component={RegistrationUser}/>
             <Route path="/registration/valet" exact component={RegistrationValet}/>
       </div>
     </Router>



    );
  }
}

export default Public
