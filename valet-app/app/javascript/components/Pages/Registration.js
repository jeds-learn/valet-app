import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Icon, Button, Col} from 'react-materialize'


class Registration extends React.Component {
    state ={
      isValet: null
    }

buttonClick = (event) => {

}

  render () {
    console.log(this.state);
    return (
      <div>
        <p>Would you like to register as a: </p>
        <Col>
          <Button waves='light'>Customer<Icon left>directions_run</Icon></Button>
          <Button waves='light'>Valet Company<Icon left>directions_car</Icon></Button>
        </Col>
      </div>
    )
  }
}

export default Registration
