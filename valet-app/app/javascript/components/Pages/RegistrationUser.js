import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Icon, Button, Col, Row, Input} from 'react-materialize'


class RegistrationUser extends React.Component {
    state ={
      customerAttributes:{
      isValet: false,
      first_name: null,
      last_name: null,
      phone: null,
      email: null,
    },
    vehicleAttributes:{
      license_plate: null,
      make: null,
      model: null,
      color: null,
    }
  }

handleChangeCustomer = (event) => {
  const { customerAttributes } = this.state
  customerAttributes[event.target.name] = event.target.value
  this.setState({ customerAttributes:customerAttributes })
}
handleChangeVehicle = (event) => {
  const { vehicleAttributes } = this.state
  vehicleAttributes[event.target.name] = event.target.value
  this.setState({ vehicleAttributes:vehicleAttributes })
}

submitCustomerToDb = (event) => {
  event.preventDefault()
  console.log("I need to send to DB");
}

  render () {
    console.log("state",this.state);
    return (
      <div>
        <div id="customer-form">
          <Row>
            <form onSubmit={this.submitCustomerToDb}>
              <Input s={6} onChange={this.handleChangeCustomer} name="first_name" label="First Name" />
              <Input s={6} onChange={this.handleChangeCustomer} name="last_name" label="Last Name" />
              <Input s={6} onChange={this.handleChangeCustomer} name="email" label="Email" />
              <Input s={6} onChange={this.handleChangeCustomer} name="phone" placeholder="+1" label="Cell Number" />
              <Input s={6} onChange={this.handleChangeVehicle} name="license_plate" label="License Plate" />
              <Input s={6} onChange={this.handleChangeVehicle} name="make" label="Make" />
              <Input s={6} onChange={this.handleChangeVehicle} name="model" label="Model" />
              <Input s={6} onChange={this.handleChangeVehicle} name="color" label="Color" />
              <Button s={12}><Icon left>directions_car</Icon>Register</Button>
            </form>
          </Row>
        </div>
      </div>
    )
  }
}

export default RegistrationUser
