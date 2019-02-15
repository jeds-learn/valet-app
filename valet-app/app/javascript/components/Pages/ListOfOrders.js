import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Table, Icon, Button, Col, Row, Input} from 'react-materialize'


class ListOfOrders extends React.Component {
  render () {
    return (
      <div className="container">
        <h1>My Bookings</h1>

        <Table striped bordered centered>
          <thead >
            <tr >
              <th data-field="Booking">Booking</th>
              <th data-field="Location">Location</th>
              <th data-field="Arrival Time">Arrival Time</th>
              <th data-field="Price">Price</th>
              <th data-field="Status">Status</th>
              <th data-field="Details"></th>
            </tr>
          </thead>

          <tbody>
            <tr >
              <td >Current booking</td>
              <td >Location</td>
              <td >2:30 PM</td>
              <td >Price</td>
              <td >Pending</td>
              <td><Button waves='light'>Details</Button></td>
            </tr>
            <tr >
              <td >Previous Booking</td>
              <td >Location</td>
              <td >11:45 AM</td>
              <td >Price</td>
              <td >Canceled</td>
              <td><Button waves='light'>Details</Button></td>
            </tr>
            <tr >
              <td >Last Years Booking</td>
              <td >Location</td>
              <td >1:00 PM</td>
              <td >Price</td>
              <td >Complete</td>
              <td><Button waves='light'>Details</Button></td>
            </tr>
          </tbody>
        </Table>

      </div>
    )
  }
}

export default ListOfOrders
