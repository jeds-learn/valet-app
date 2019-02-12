import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'

import Valet from './Valet'


class HelloWorld extends React.Component {
  render () {
    return (
      <Router>
       <div>
          <h1> Hi World</h1>
         <Route path="/valet" component={Valet}/>
       </div>
     </Router>



    );
  }
}

export default HelloWorld
