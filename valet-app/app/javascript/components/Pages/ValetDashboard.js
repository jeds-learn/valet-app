import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Table, Icon, Button, Col, Row, Input, CollapsibleItem, Collapsible, Modal} from 'react-materialize'
import DateTime from 'react-datetime'
import moment from 'moment'
import { Chart } from "react-google-charts"

// variables for Orders Chart
const data = [
  ["Order Status", "Number of orders"],
  ["Orders Pending", 11],
  ["Orders Completed", 2],
  ];
const options = {
  title: "All Orders",
  pieHole: 0.4,
  is3D: false
  };

// Variables for Revenues Chart
const revData = [
  ["Revenues Status", "Revenues"],
  ["Revenues Pending", 11],
  ["Revenues Collected", 2],
  ];
const revOptions = {
  title: "Revenues",
  pieHole: 0.4,
  is3D: false
  };

// Variables for Activity Chart
  const columns = [
  {
    label: "Time",
    type: "number"
  },
  {
    label: "Vehicles",
    type: "number"
  }
];

// first part of index refers to time, second part refers to number of vehicles.  ex: [1, 3] indicates that at 1 o'clock there will be 3 vehicles
const rows = [[1, 3], [2, 5], [3, 1]];

class ValetDashboard extends React.Component {

//Do not need all these object keys. We could get rid of some
//Need to add filter bar to the left next to time field
// details button currently inoperorable.  Must be able to take changes to the order.
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
          <Col>
          <Input label="filter bar" validate defaultValue='' />
          </Col>
        </Row>
        <Row>
          <Col s={4}>
            <Icon left>access_alarm</Icon><DateTime className="col s5" defaultValue={"Drop Off Time"} timeConstraints={ {minutes: { step: 15 }}} onChange={this.getStartTime} name="start-date" />
          </Col>
          <Col s={4}>
            <Icon left>access_alarm</Icon><DateTime className="col s5" defaultValue={"Collection Time"} timeConstraints={ {minutes: { step: 15 }}} onChange={this.getStartTime} name="start-date" />
          </Col>
        </Row>
        <div className="App">
          <Chart
            chartType="AreaChart"
            width="100%"
            height="400px"
            legendToggle
            rows={rows}
            columns={columns}
          />
        </div>
        <Row >
          <Col s={6}>
            <div className={"my-pretty-chart-container"}>
              <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
                legendToggle
              />
            </div>
          </Col>
          <Col s={6}>
            <div className={"my-pretty-chart-container"}>
              <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={revData}
                options={revOptions}
                legendToggle
              />
            </div>
          </Col>
        </Row>


        <Table striped bordered centered>
          <thead >
            <tr >
              <th data-field="Arrival Time">Arrival Time</th>
              <th data-field="Departure Time">Departure Time</th>
              <th data-field="Customer Name">Customer Name</th>
              <th data-field="Location">Location</th>
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
              <td >slot A1</td>
              <td >Honda</td>
              <td >Silver</td>
              <td >Pending</td>
              <td><Button waves='light'>Details</Button></td>
            </tr>
            <tr >
              <td >2:30PM</td>
              <td >10:30PM</td>
              <td >Daniel</td>
              <td >slot A1</td>
              <td >Honda</td>
              <td >Silver</td>
              <td >Pending</td>
              <td><Button waves='light'>Details</Button></td>
            </tr>
            <tr >
              <td >2:30PM</td>
              <td >10:30PM</td>
              <td >Daniel</td>
              <td >slot A1</td>
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
