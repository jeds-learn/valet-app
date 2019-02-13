import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Icon, Button, Col, Row, Input} from 'react-materialize'


class RegistrationValet extends React.Component {
    state ={
      valetAttributes:{
      isValet: true,
      company_name: null,
      first_name: null,
      last_name: null,
      phone: null,
      email: null,
    }
  }

handleChange = (event) => {
  const { valetAttributes } = this.state
  valetAttributes[event.target.name] = event.target.value
  this.setState({ valetAttributes:valetAttributes })
}

submitCustomerToDb = (event) => {
  event.preventDefault()
  console.log("I need to send to DB");
}

  render () {
    console.log("state",this.state);
    return (
      <div>
        <div id="valet-form">
          <Row>
            <form onSubmit={this.submitCustomerToDb}>
              <Input s={12} onChange={this.handleChange} name="company_name" label="Company Name" />
              <Input s={6} onChange={this.handleChange} name="email" label="Email" />
              <Input s={6} onChange={this.handleChange} name="phone" placeholder="+1" label="Phone Number" />
              <Input s={4} onChange={this.handleChange} name="opening_time" label="Opening Time" />
              <Input s={4} onChange={this.handleChange} name="closing_time" label="Closing Time" />
              <Input s={4} onChange={this.handleChange} value="$" name="cost" label="Cost Per Hour" />
              <Button s={12}><Icon left>send</Icon>Register</Button>
            </form>
          </Row>
        </div>
      </div>
    )
  }
}

export default RegistrationValet
