import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Icon, Button, Col, Row, Input} from 'react-materialize'


class RegistrationUser extends React.Component {
    state ={
      customerAttributes:{
      is_valet: false,
      first_name: null,
      last_name: null,
      phone: null,
      email: null,
      password: null,
      password_confirmation: null,

    }
  }

handleChangeCustomer = (event) => {
  const { customerAttributes } = this.state
  customerAttributes[event.target.name] = event.target.value
  this.setState({ customerAttributes:customerAttributes })
}

submitCustomerToDb = (event) => {
  event.preventDefault()
  fetch('/users/create.json', {
    method:"POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({user:this.state.customerAttributes})
  })
  .then((response)=>{
    this.setState({responseOk:true})
  })
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
              <Input s={6} onChange={this.handleChangeCustomer} name="phone" label="Cell Number" />
              <Input s={6} onChange={this.handleChangeCustomer} name="password" label="Password" />
              <Input s={6} onChange={this.handleChangeCustomer} name="password_confirmation" label="Reconfirm Password" />
              <Button s={12}><Icon left>directions_car</Icon>Register</Button>
            </form>
          </Row>
        </div>
      </div>
    )
  }
}

export default RegistrationUser
