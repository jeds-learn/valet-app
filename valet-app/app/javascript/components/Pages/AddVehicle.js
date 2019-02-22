import React from "react"
import PropTypes from "prop-types"
import {Redirect } from 'react-router-dom'
import {Icon, Button, Col, Row, Input, Table} from 'react-materialize'

class AddVehicle extends React.Component {
  state = {
    responseOk: false,
    cars: [],
    vehicleAttributes :{
    license_plate: null,
    make: null,
    model: null,
    color: null
  }
}

componentDidMount(){
  this.getCars()
}

getCars = () => {
  //talk to the end point to get all dvds
    fetch('/vehicles.json')
    //when promise is fufilled parse to json
    .then((response) => response.json())
    //then set state of dvds to the json payload
    .then((json) => {
      this.setState({cars: json})
    })
    .catch((e)=>{
      console.log("Error", e)
    })
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
  .then((response)=>{
    this.getCars()
  })
}


deleteVehicle = (event) => {
  event.preventDefault()
  let url = `/vehicles/${event.currentTarget.id}.json`
  console.log(url);
  //talk to the end point to get all dvds
  fetch(url, {
    method:"DELETE",
    headers: {"Content-Type": "application/json"},
  })
    //when promise is fufilled parse to json
    .then((response) => alert('Your vehicle has been deleted'))
    .then((response) => this.getCars())
    //then set state of dvds to the json payload
    .catch((e)=>{
      console.log("Error", e)
    })
}

render() {
  const {responseOk} = this.state
  return (
    <div className="container">
      <div>
          <Row>
          <h4>Add A Vehicle</h4>
            <form onSubmit={this.submitVehicleToDb}>
              <Input s={12} onChange={this.onChange} name="make" label="Make" />
              <Input s={12} onChange={this.onChange} name="model" label="Model" />
              <Input s={12} onChange={this.onChange} name="color" label="Color" />
              <Input s={12} onChange={this.onChange} name="license_plate" label="License Plate" />
              <Button className="right-align" s={12}><Icon left>directions_car</Icon>Add Car</Button>
            </form>
          </Row>
          </div>
          <Row>
          <h4 className="right-align">Your Vehicles</h4>
          <Table bordered centered hoverable>
            <thead>
              <tr>
                <th>Make</th>
                <th>Model</th>
                <th>Color</th>
                <th>License Plate</th>
              </tr>
            </thead>
            <tbody>
              {this.state.cars.map((car, index) => {
                return(
                  <tr key={index}>
                    <td>{car.make}</td>
                    <td>{car.model}</td>
                    <td>{car.color}</td>
                    <td>{car.license_plate}</td>
                    <td><Button id={car.id}  onClick={this.deleteVehicle} floating className='red' waves='light' icon='delete_outline'></Button></td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          </Row>
        </div>
      )
    }
  }

export default AddVehicle
