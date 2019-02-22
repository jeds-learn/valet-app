
//For Dan and Enrique to Create
import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Table, Icon, Button, Col, Row, Input, T, Card, CardTitle, CollapsibleItem, Collapsible, Modal} from 'react-materialize'
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
        <div>
          <h3>Recent Orders</h3>
        </div>

        <Modal
          id="details"
          header='Vehicle Status Update '
          actions={
            <div className="container">
              <Row>
                <Col s={2} offset="s2">
                  <Button floating flat modal="close" waves="light" icon='thumb_up' tooltip="Arrived" className='deep-purple lighten-2' ></Button>
                </Col>
                <Col s={2}>
                  <Button floating flat modal="close" waves="light" icon='local_parking' tooltip="Parked" className='blue lighten-2'></Button>
                </Col>
                <Col s={2}>
                  <Button floating flat modal="close" waves="light" icon='time_to_leave' tooltip="Ready" className='green lighten-2'></Button>
                </Col>
                <Col s={2}>
                  <Button floating flat modal="close" waves="light" icon='done' tooltip="done" className='red lighten-2'></Button>
                </Col>
              </Row>
            </div>
          }>
          <p>
           Please update vehicle status:
          </p>
        </Modal>

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
              <td><Button waves='light' onClick={()=> {$('#details').modal('open')}}>Details</Button></td>
            </tr>
            <tr >
              <td >2:30PM</td>
              <td >10:30PM</td>
              <td >Daniel</td>
              <td >slot A1</td>
              <td >Honda</td>
              <td >Silver</td>
              <td >Pending</td>
              <td><Button waves='light' onClick={()=> {$('#details').modal('open')}}>Details</Button></td>
            </tr>
            <tr >
              <td >2:30PM</td>
              <td >10:30PM</td>
              <td >Daniel</td>
              <td >slot A1</td>
              <td >Honda</td>
              <td >Silver</td>
              <td >Pending</td>
              <td><Button waves='light' onClick={()=> {$('#details').modal('open')}}>Details</Button></td>
            </tr>
          </tbody>
        </Table>
        <div>
          <h3>Overview: Order Status</h3>
        </div>

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
      </div>
    )
  }
}

export default ValetDashboard
