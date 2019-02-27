
//For Dan and Enrique to Create
import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {Table, Icon, Button, Col, Row, Input, T, Card, CardTitle, CollapsibleItem, Collapsible, Modal, ProgressBar, Tag} from 'react-materialize'
import DateTime from 'react-datetime'
import moment from 'moment'
import { Chart } from "react-google-charts"
import 'babel-polyfill';
import CollectionChips from '../Elements/CollectionChips'

// variables for Orders Chart
const data = [
  ["Order Status", "Number of orders"],
  ["Orders Pending", 11],
  ["Orders Completed", 2],
  ];

const options = {
  title: "Orders Status for Today",
  pieHole: 0.4,
  is3D: false
  };

class ValetDashboard extends React.Component {
  state ={
    loading: true,
    orders: [],
    lastButtonClicked: null,
    order_status: null,
    todaysOrders: [],
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
    let sortedOrderd = await this.sortOrders(json)
    await this.setState({orders: sortedOrderd, loading: false})
    await this.getTodaysOrders()
  }

  sortOrders = async (arrayOfOrders) =>{
    arrayOfOrders.sort(function(a,b){
      return new Date(b.start_time) - new Date(a.start_time);
    })
    return arrayOfOrders.reverse()
  }

  captureOrderIdAndOpenModal = (event) => {
    let {lastButtonClicked} = this.state
    this.setState({lastButtonClicked: parseInt(event.target.id)})
    $('#details').modal('open')
  }

  updateOrderStatus = async (event) => {
    event.preventDefault()
    let status = event.currentTarget.name
    let {lastButtonClicked} = this.state
    let url = `/orders/${lastButtonClicked}.json`
    fetch(url, {
      method:"PUT",
      body: JSON.stringify({order:{order_status: status}}),
      headers: {"Content-Type": "application/json"},
    })
    .then(alert('The order has been updated'))
      //when promise is fufilled parse to json
      .then(this.getOrders())
      //then set state of dvds to the json payload
      .catch((e)=>{
        console.log("Error", e)
      })
  }

  isToday = (orderObj) => {
    let orderDateAsMoment = moment(orderObj.start_time)
    if (orderDateAsMoment.isSame(new Date(), "day")){
      return orderObj
    }
  }

  getTodaysOrders = async () => {
    let {orders, todaysOrders, gotTodaysOrder} = this.state
    let todaysOrdersArray = orders.filter(this.isToday)
    this.setState({todaysOrders: todaysOrdersArray})
  }

  createChips = () => {
    let {orders} = this.state
    let filteredOrders = orders.filter(order => order.order_status === 'Pick Up Requested')
    if (filteredOrders.length > 0){
      return(
      <React.Fragment>
      <p className="flow-text">Collections Requested</p>
        <Row>
          <Col s={12}>
          {filteredOrders.map((object, index) => <CollectionChips key={index} chipTitle={`${object.vehicle_make} - ${object.vehicle_license_plate}`}/> )}
          </Col>
        </Row>
      </React.Fragment>
      )
    }
  }

  todaysTotal = () => {
    let {todaysOrders} = this.state
    if (todaysOrders.length >0){
    let todaysTotal = todaysOrders.map(item => item.total_price).reduce((prev, next) => prev + next);
      return (<React.Fragment><p className='flow-text'>Today's Revenue</p>
        <h3>${todaysTotal}</h3></React.Fragment>)
    }else{
      return <p className='flow-text'>No Orders Today ...</p>
    }
  }

  totalOrders = () => {
    let {todaysOrders} = this.state
    return (<React.Fragment><p className='flow-text'>Total Jobs for Today</p>
      <h3>{todaysOrders.length}</h3></React.Fragment>)
  }

pieChartData = () =>{
  let {todaysOrders} = this.state
  let [ordersComplete, ordersIncomplete] = [["Orders Completed"], ["Orders Pending"]]
  let [ordersCompleteCount, ordersIncompleteCount ] = [0,0]
  let data = [["Order Status", "Number of orders"]]
  for (let order of todaysOrders){
    if (order.order_status === "Order Complete"){
      ordersCompleteCount++
    }else{
      ordersIncompleteCount++
    }
  }
  ordersComplete.push(ordersCompleteCount)
  ordersIncomplete.push(ordersIncompleteCount)
  data.push(ordersComplete,ordersIncomplete)
  return data
}

  render () {
    console.log(this.state);
    if (this.state.loading === true) {
      return <Row>
              <Col s={12}>
                <ProgressBar />
              </Col>
            </Row>
    }

    return (
      <div className="container">
        <h1>Valet Dashboard</h1>
        <div className="chips-collections-row">
        {this.createChips()}
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
              <td>{this.convertedDate(order.start_time)}</td>
              <td>{this.convertedTime(order.start_time)}</td>
              <td>{order.customer_first_name} {order.customer_last_name}</td>
              <td>{order.vehicle_make}</td>
              <td>{order.vehicle_license_plate}</td>
              <td>{order.order_status}</td>
              <td><Button id={order.id} onClick={this.captureOrderIdAndOpenModal} waves='light'>Update Status</Button></td>
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
                  <Button floating flat modal="close" waves="light" icon='thumb_up' name="Client Arrived" tooltip="Client Arrived" onClick={this.updateOrderStatus} className='deep-purple lighten-2 ' ></Button>
                </Col>
                <Col s={2}>
                  <Button floating flat modal="close" waves="light" icon='local_parking' name="Car Parked" tooltip="Car Parked" onClick={this.updateOrderStatus} className='blue lighten-2'></Button>
                </Col>
                <Col s={2}>
                  <Button floating flat modal="close" waves="light" icon='time_to_leave' name="Ready To Drive Away" tooltip="Ready for Pick-up" onClick={this.updateOrderStatus} className='green lighten-2'></Button>
                </Col>
                <Col s={2}>
                  <Button floating flat modal="close" waves="light" icon='done' name="Order Complete" tooltip="Order Complete" onClick={this.updateOrderStatus} className='red lighten-2'></Button>
                </Col>
              </Row>
            </div>
          }>
        </Modal>
        </div>
        <hr></hr>
          <Row>
          <Col s={6}>
          <Card children={<Chart
            chartType="PieChart"
            width="100%"
            height="300px"
            data={this.pieChartData()}
            options={options}
            legendToggle
          />}/>
          </Col>
          <Col s={6}>
          <Card className='total-card' children={this.todaysTotal()}/>
          <Card className='total-card' children={this.totalOrders()}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ValetDashboard
