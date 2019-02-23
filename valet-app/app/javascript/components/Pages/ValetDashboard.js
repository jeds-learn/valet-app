
//For Dan and Enrique to Create
import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {Table, Icon, Button, Col, Row, Input, T, Card, CardTitle, CollapsibleItem, Collapsible, Modal, ProgressBar} from 'react-materialize'
import DateTime from 'react-datetime'
import moment from 'moment'
import { Chart } from "react-google-charts"
import 'babel-polyfill';


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
  state ={
    loading: true,
    orders: []
  }

componentDidMount = () => {
  this.getOrders()
}

  convertedTime = (time) => {
    return moment.utc(time).format('LT')
  }
  convertedDate = (time) => {
    return moment.utc(time).format('l')
  }
  getOrders = async () => {
    event.preventDefault()
    let response = await fetch('/valet/orders.json', {
      method:"GET",
      headers: {"Content-Type": "application/json"},
    })
    let json = await response.json()
    await this.setState({orders: json, loading: false})
  }

  updateOrderStatus = async (event) => {
    event.preventDefault()
    console.log(event.currentTarget);
    // let response = await fetch('/valet/orders.json', {
    //   method:"GET",
    //   headers: {"Content-Type": "application/json"},
    // })
    // let json = await response.json()
    // await this.setState({orders: json, loading: false})
  }
  
 rowColorByStatus = (status) => {
  if(status === 'order confirmed'){
  return 'red'}
}

  render () {
    if (this.state.loading === true) {
      return <Row>
              <Col s={12}>
                <ProgressBar />
              </Col>
            </Row>
    }
    console.log(this.props);
    return (
      <div className="container">
        <h1>Valet Dashboard</h1>
        <div>
          <h3>Recent Orders</h3>
        </div>

        <Table striped bordered centered>
          <thead >
            <tr >
              <th data-field="Arrival Date">Arrival Date</th>
              <th data-field="Arrival Time">Arrival Time</th>
              <th data-field="Customer Name">Customer Name</th>
              <th data-field="Make">Make</th>
              <th data-field="Color">License Plate</th>
              <th data-field="Status">Status</th>
              <th data-field="Details"></th>
            </tr>
          </thead>
          <tbody>
          {this.state.orders.map((order, index) => {
            return(
              <tr key={index} id={order.id}>
              <td>{this.convertedDate(order.start_date)}</td>
              <td>{this.convertedTime(order.start_time)}</td>
              <td>{order.customer_first_name} {order.customer_last_name}</td>
              <td>{order.vehicle_make}</td>
              <td>{order.vehicle_license_plate}</td>
              <td>{order.order_status}</td>
              <td><Button id={order.id} onClick={() => {$('#details').modal('open')}} waves='light'>Update Status</Button></td>
              </tr>
            )
          })}
          </tbody>
        </Table>

        <div>
        <Modal className='modal-class'
          id="details"
          header='Vehicle Status Update'
          actions={
            <div>
              <Row>
                <Col s={2} offset="s1">
                  <Button floating flat modal="close" waves="light" icon='thumb_up' tooltip="Client Arrived" onClick={this.updateOrderStatus} className='deep-purple lighten-2 ' ></Button>
                </Col>
                <Col s={2}>
                  <Button floating flat modal="close" waves="light" icon='local_parking' tooltip="Car Parked" className='blue lighten-2'></Button>
                </Col>
                <Col s={2}>
                  <Button floating flat modal="close" waves="light" icon='time_to_leave' tooltip="Ready for Pick-up" className='green lighten-2'></Button>
                </Col>
                <Col s={2}>
                  <Button floating flat modal="close" waves="light" icon='done' tooltip="Order Complete" className='red lighten-2'></Button>
                </Col>
              </Row>
            </div>
          }>

        </Modal></div>
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
