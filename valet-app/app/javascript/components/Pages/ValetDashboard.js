import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Table, Icon, Button, Col, Row, Input, CollapsibleItem, Collapsible, Modal, DateTime} from 'react-materialize'


class ValetDashboard extends React.Component {

  render () {
    return (
      <div className="container">
        <h1>Valet Dashboard</h1>

        <Row>
          <Input s={12} label="Generic Field.  Meant to allow valet to select start time" validate defaultValue=' ' />
        </Row>

        <Row>
          <Input s={12} label="Search For An Order" validate defaultValue=' ' />
        </Row>

        <Table striped bordered centered>
          <thead >
            <tr >
              <th data-field="Arrival Time">Arrival Time</th>
              <th data-field="Departure Time">Departure Time</th>
              <th data-field="Customer Name">Customer Name</th>
              <th data-field="Make">Make</th>
              <th data-field="Color">Color</th>
              <th data-field="Status">Status</th>
              <th data-field="Details"></th>
            </tr>
          </thead>

          <tbody>
            <tr >
              <td >2:30PM</td>
              <td >10:30PM</td>
              <td >Daniel</td>
              <td >Honda</td>
              <td >Silver</td>
              <td >Pending</td>
              <td><Button waves='light'>Details</Button></td>
            </tr>
            <tr >
              <td >2:30PM</td>
              <td >10:30PM</td>
              <td >Daniel</td>
              <td >Honda</td>
              <td >Silver</td>
              <td >Pending</td>
              <td><Button waves='light'>Details</Button></td>
            </tr>
            <tr >
              <td >2:30PM</td>
              <td >10:30PM</td>
              <td >Daniel</td>
              <td >Honda</td>
              <td >Silver</td>
              <td >Pending</td>
              <td><Button waves='light'>Details</Button></td>
            </tr>
          </tbody>
        </Table>

      </div>
    )
  }
}

export default ValetDashboard
