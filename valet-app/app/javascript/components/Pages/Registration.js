import React from "react"
import PropTypes from "prop-types"
import {Icon, Button, Col, Row} from 'react-materialize'
import {BrowserRouter as Router, Link, Redirect } from 'react-router-dom'

import RegistrationUser from '../Pages/RegistrationUser'
import RegistrationValet from '../Pages/RegistrationValet'


class Registration extends React.Component {
  render () {
    return (
        <div>
          <p>Would you like to register as a:</p>
          <Link className="btn" to={'/registration/user'} component={RegistrationUser}>Customer</Link>
          <Link className="btn" to={'/registration/valet'} component={RegistrationValet}>Valet</Link>
        </div>
    )
  }
}

export default Registration
