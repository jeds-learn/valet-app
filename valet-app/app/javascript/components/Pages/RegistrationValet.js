import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Icon, Button, Col, Row, Input} from 'react-materialize'
import states from '../Elements/FiftyStates.js'
import * as yup from 'yup'

class RegistrationValet extends React.Component {
    state ={
      states: [],
      valetAttributes:{
      is_valet: true,
      company_name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      email: "",
      phone: "",
      opening_time: "",
      closing_time: "",
      cost_per_hour: 0,
      password: "",
      password_confirmation: "",
      long: null,
      lat: null,
    }
  }

componentDidMount = () => {
  let {state} = this.state
  this.createArrayOfStates(states)
  this.setState({state: state})
}

createArrayOfStates = (array) => {
  let {states} = this.state
   let newArray = array.map(obj => `${obj.name} (${obj.abbreviation})`)
   this.setState({states: newArray})
}

handleChange = (event) => {
  const { valetAttributes } = this.state
  valetAttributes[event.target.name] = event.target.value
  this.setState({ valetAttributes:valetAttributes })
}

getLongandLat = () => {
  let valetAttributes = this.state.valetAttributes
  let fullAddress = `${valetAttributes.address} ${valetAttributes.zip}`
  var res = encodeURI(fullAddress)
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${res}&key=AIzaSyDpZEI65XSi7ZtNpZV6CwwSa6vO28t84lg`
  return fetch(url)
  .then((response) => response.json())
  .then((jsonPayload) => {
    valetAttributes.long =jsonPayload.results[0].geometry.location.lng.toString()
    valetAttributes.lat =  jsonPayload.results[0].geometry.location.lat.toString()
    this.setState({valetAttributes})
    return valetAttributes
  })
}

schema = yup.object().shape({
  company_name: yup.string().required("Please enter a Company Name"),
  address: yup.string().required("Please enter an address"),
  city: yup.string().required("Please enter an address"),
  state: yup.string().required("Please select a state"),
  zip: yup.string().required("Please enter a zip code").length(5, "The zipcode must be 5 numbers long").matches(/\d/, "Zip code must be digits only"),
  email: yup.string().required("Please enter an email"),
  phone: yup.string("Please enter a phone number").required("Please enter a phone number").max(11,"Your cell number cannot exceed 11 characters").min(10, "Your cell number must be a minimum of 10 characters"),
  opening_time: yup.string().required("Please enter an opening time"),
  closing_time: yup.string().required("Please enter an closing time"),
  cost_per_hour: yup.string().required("Please enter a cost per hour"),
  password: yup.string().required("Please enter a password").min(6, "Your password must contain a minimum of 6 characters"),
  password_confirmation: yup.string().min(6, "Your password must contain a minimum of 6 characters").oneOf([yup.ref('password'), null], "Passwords don't match"),
})

validateAndsubmitValetToDb = async (event) => {
  try {
    event.preventDefault()
    await this.schema.validate(this.state.valetAttributes)
    const valetAttributes = await this.getLongandLat()
    const httpResponse = await fetch('/users/create.json', {
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({user:valetAttributes})
    })
    if (httpResponse.status === 422) {
      this.displayToasterError("Email Address is already registered")
    }else {
    window.location='/'
    }
  }catch(error) {
    this.displayToasterError(error.errors)
  }
}

displayToasterError = (errorCode) => {
    return window.Materialize.toast(errorCode, 2000, 'red rounded')
}

  render () {
    return (
      <div className="container">
        <div id="valet-form">
          <Row>
            <form onSubmit={this.validateAndsubmitValetToDb}>
              <Input s={12} onChange={this.handleChange} name="company_name" label="Company Name" />
              <Input s={12} onChange={this.handleChange} name="address" label="Address" />
              <Input s={4} onChange={this.handleChange} name="city" label="City" />
              <Input s={4} type='select' onChange={this.handleChange} name="state" label="State">
                  {this.state.states.map((state, index) => {
                    return(<option key={index} value={state}>{state}</option>
                    )
                  })}
              </Input>
              <Input s={4} onChange={this.handleChange} name="zip" label="Zip Code" />
              <Input s={6} onChange={this.handleChange} name="email" label="Email" />
              <Input s={6} onChange={this.handleChange} name="phone" placeholder="+1" label="Phone Number" />
              <Input s={4} onChange={this.handleChange} name="opening_time" label="Opening Time" />
              <Input s={4} onChange={this.handleChange} name="closing_time" label="Closing Time" />
              <Input s={4} onChange={this.handleChange} placeholder="$" name="cost_per_hour" label="Cost Per Hour" />
              <Input s={6} onChange={this.handleChange} name="password" label="Password" type="password"/>
              <Input s={6} onChange={this.handleChange} name="password_confirmation" label="Reconfirm Password" type="password"/>
              <Button s={12}><Icon left>send</Icon><span id="register">Register</span></Button>
            </form>
          </Row>
        </div>
      </div>
    )
  }
}

export default RegistrationValet
