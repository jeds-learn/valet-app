import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import {Icon, Button, Col, Row, Input, Toast} from 'react-materialize'
import * as yup from 'yup'
import 'babel-polyfill';

class RegistrationUser extends React.Component {
    state ={
      customerAttributes:{
      is_valet: false,
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      password: "",
      password_confirmation: "",

    }
  }

handleChangeCustomer = (event) => {
  const { customerAttributes } = this.state
  customerAttributes[event.target.name] = event.target.value
  this.setState({ customerAttributes:customerAttributes })
}

validateAndsubmitCustomerToDb = (event) => {
  event.preventDefault()
  this.schema.validate(this.state.customerAttributes)
  .then(function(payload) {
    fetch('/users/create.json', {
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({user:payload})
    }).then(() => window.location='/user/add-vehicle')
  })
  .catch(function(err) {
    window.Materialize.toast(err.errors, 2000, 'red rounded')
    return false
  });
}

schema = yup.object().shape({
  password: yup.string().required("Please enter a password").min(6, "Your password must contain a minimum of 6 characters"),
  password_confirmation: yup.string().min(6, "Your password must contain a minimum of 6 characters").oneOf([yup.ref('password'), null], "Passwords don't match"),
  first_name: yup.string().required("Please enter a first name"),
  last_name: yup.string().required("Please enter a last name"),
  email: yup.string().required("Please enter an email"),
  phone: yup.string("Please enter a phone number").required("Please enter a cell number").max(11,"Your cell number cannot exceed 11 characters").min(10, "Your cell number must be a minimum of 10 characters"),
})

  render () {
    return (
      <div className="container">
        <div id="customer-form">
          <Row>
            <form onSubmit={this.validateAndsubmitCustomerToDb}>
              <Input s={6} onChange={this.handleChangeCustomer} name="first_name" label="First Name" />
              <Input s={6} onChange={this.handleChangeCustomer} name="last_name" label="Last Name" />
              <Input s={6} onChange={this.handleChangeCustomer} name="email" label="Email" />
              <Input s={6} onChange={this.handleChangeCustomer} name="phone" label="Cell Number" />
              <Input s={6} onChange={this.handleChangeCustomer} name="password" label="Password" type="password"/>
              <Input s={6} onChange={this.handleChangeCustomer} name="password_confirmation" label="Reconfirm Password" type="password"/>
              <Button s={12}><Icon left>directions_car</Icon>Register</Button>
            </form>
          </Row>
        </div>
      </div>
    )
  }
}

export default RegistrationUser
