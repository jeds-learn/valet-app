import React from "react"
import PropTypes from "prop-types"
import {Icon, Button, Col, Row} from 'react-materialize'
import {Link} from 'react-router-dom'

class Registration extends React.Component {
  render () {
    return (
        <div className="container">
          <p className="flow-text">Register as a...</p>
          <Link className="waves-effect waves-light btn register-btn" to={'/registration/user'}><i className="material-icons left">directions_car</i>Customer</Link>
          <Link className="waves-effect waves-light btn register-btn" to={'/registration/valet'}><i className="material-icons left">location_city</i>Valet</Link>
        </div>
    )
  }
}

export default Registration
