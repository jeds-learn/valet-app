import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Icon, Button, Col, Row, Input} from 'react-materialize'


class AddVehicle extends React.Component {


  // <div id="customer-form">
  render () {
    return (
      <div className="container">
          <Row>
            <form>
              <Input s={6} name="make" label="make" />
              <Input s={6} name="Model" label="Model" />
              <Input s={6} name="Color" label="Color" />
              <Input s={6} name="License Plate" label="License Plate" />
            </form>
          </Row>
          <Button s={12}><Icon left>directions_car</Icon>Add Car</Button>
        </div>
    )
  }
}

export default AddVehicle
