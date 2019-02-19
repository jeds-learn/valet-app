import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Table, Icon, Button, Col, Row, Input, CollapsibleItem, Collapsible, Modal} from 'react-materialize'
import DateTime from 'react-datetime'
import moment from 'moment'

class ValetDashboard extends React.Component {

//Do not need all these object keys. We could get rid of some
//Need to add filter bar to the left next to time field
  state ={
    orderDetails:{
    start_date_time: null,
    end_date_time: null,
    total_price: null,
  },
    valetDetails: []
  }

// this field is to search by date. Need to connect it to filter bar
  getStartTime = (date) => {
    let {start} = this.state
    this.setState({start:date})
  }


  render () {
    return (
      <div className="container">
        <h1>Valet Dashboard</h1>
        <Row>
            <Icon left>access_alarm</Icon><DateTime className="col s5" defaultValue={"Drop Off Time"} timeConstraints={ {minutes: { step: 15 }}} onChange={this.getStartTime} name="start-date" />
            <Icon left>access_alarm</Icon><DateTime className="col s5" defaultValue={"Collection Time"} timeConstraints={ {minutes: { step: 15 }}} onChange={this.getStartTime} name="start-date" />
            <Input s={12} label="Search For An Order" validate defaultValue='filter bar' />
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
