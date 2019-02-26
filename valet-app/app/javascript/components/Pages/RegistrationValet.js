import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Icon, Button, Col, Row, Input} from 'react-materialize'
import DateTime from 'react-datetime';
import moment from 'moment'

//50 states in javascript file used for US state dropdown in form.
import states from '../Elements/FiftyStates.js'

class RegistrationValet extends React.Component {
    state ={
      states: [],
      valetAttributes:{
      is_valet: true,
      company_name: null,
      address: null,
      city: null,
      state: null,
      zip: null,
      email: null,
      phone: null,
      opening_time: null,
      closing_time: null,
      cost_per_hour: null,
      password: null,
      password_confirmation: null,
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

getOpeningTime = (date) => {
    let {opening_time} = this.state
    this.setState({opening_time:date})
}

getClosingTime = (date) => {
    let {closing_time} = this.state
    this.setState({closing_time:date})
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

submitValetToDb = async (event) => {
  event.preventDefault()
  let valetAttributes = await this.getLongandLat()
  let response = await fetch('/users/create.json', {
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({user:valetAttributes})
    })
    window.location='/valet/valet-dashboard'
}

  render () {
    console.log("State status:  ", this.state);
    return (
      <div className="container">
        <div id="valet-form">
          <Row>
            <form onSubmit={this.submitValetToDb}>
              <Input s={12} onChange={this.handleChange} name="company_name" label="Company Name" />
              <Input s={12} onChange={this.handleChange} name="address" label="Address" />
              <Input s={4} onChange={this.handleChange} name="city" label="City" />
              <Input s={4} type='select' onChange={this.handleChange} name="state" label="States" defaultValue='6'>
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
              <Button s={12}><Icon left>send</Icon>Register</Button>
            </form>
          </Row>
        </div>
      </div>
    )
  }
}

export default RegistrationValet
