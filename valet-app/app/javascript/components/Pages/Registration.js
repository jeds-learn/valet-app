import React from "react"
import PropTypes from "prop-types"
import {Icon, Button, Col, Row} from 'react-materialize'
// import {BrowserRouter as Router, Link, Redirect } from 'react-router-dom'

class Registration extends React.Component {
  render () {
    return (
        <div>
          <p>Would you like to register as a:</p>
          <Button href='/registration/user'>Customer<Icon left>directions_run</Icon></Button>
          <Button href='/registration/valet'>Valet Company<Icon left>directions_car</Icon></Button>
        </div>
    )
  }
}

export default Registration
