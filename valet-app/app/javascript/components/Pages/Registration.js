import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Icon, Button, Col, Row, Input} from 'react-materialize'


class Registration extends React.Component {
    state ={
      isValet: null
    }

buttonClick = (event) => {
  const { isValet } = this.state
  const choice = event.target.value
  if(choice === 'false'){
    this.setState({isValet: false})
  }else{
    this.setState({isValet:true})
  }
}

  render () {
    console.log("state",this.state);
    return (
      <div>
      <div id="type-of-register">
        <p>Would you like to register as a: </p>
        <Col>
          <Button value="false"onClick={this.buttonClick} name="isValet" waves='light'>Customer<Icon left>directions_run</Icon></Button>
          <Button value="true"onClick={this.buttonClick} name="isValet" waves='light'>Valet Company<Icon left>directions_car</Icon></Button>
        </Col>
      </div>
      </div>
    )
  }
}

export default Registration
