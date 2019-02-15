import React from "react"
import PropTypes from "prop-types"
import {Redirect } from 'react-router-dom'
import {Icon, Button, Col, Row, Input} from 'react-materialize'

class AddVehicle extends React.Component {
  state = {
    responseOk: false,
    vehicleAttributes :{
    license_plate: null,
    make: null,
    model: null,
    color: null
  }
}

onChange = (event) => {
  let { vehicleAttributes } = this.state
  vehicleAttributes[event.target.name] = event.target.value
  this.setState({vehicleAttributes:vehicleAttributes})
}

submitVehicleToDb = (event) => {
  event.preventDefault()
  fetch('/vehicles.json', {
    method:"POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({vehicle:this.state.vehicleAttributes})
  })
  .then((response)=>{
    alert(`Your ${this.state.vehicleAttributes.make} has been added to your account`)
    this.setState({responseOk:true})
  })
}

//Redirect to list of valets

  render () {
    const {responseOk} = this.state
    return (
      <div className="container">
      {responseOk && <Redirect to="/list-of-valets" />}
          <Row>
            <form onSubmit={this.submitVehicleToDb}>
              <Input s={12} onChange={this.onChange} name="make" label="Make" />
              <Input s={12} onChange={this.onChange} name="model" label="Model" />
              <Input s={12} onChange={this.onChange} name="color" label="Color" />
              <Input s={12} onChange={this.onChange} name="license_plate" label="License Plate" />
              <Button s={12}><Icon left>directions_car</Icon>Add Car</Button>
            </form>
          </Row>
        </div>
    )
  }
}

export default AddVehicle
