import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import {Table, Icon, Button, Col, Row, Input, Modal, T, Card, CardTitle} from 'react-materialize'
import moment from 'moment'
import DateTime from 'react-datetime';

import CarCard from '../images/card-order-details.jpg';


class OrderDetails extends React.Component {
  state={
    unEditable: true,
    booking: []
  }

componentDidMount = () => {
  this.getBookingDetails(this.props.match.params.order_id)
}

convertTime = (time) => {
  return moment.utc(time).format('l LT')
}

getBookingDetails = (order_id) => {
  let url = `/orders/${order_id}.json`
  fetch(url)
  .then((response) => response.json())
  .then((json) => {
    this.setState({booking: json})
    console.log(this.state);
  })
  .catch((e) =>{
    console.log("Error", e);
  })
}

calculatePercentage = (amount, percentageIncrease) => {
  let newTotal = parseFloat(amount) * percentageIncrease
  let fixedNumber = newTotal.toFixed(2);
  return fixedNumber
}

deleteBooking = (event) => {
    event.preventDefault()
    let url = `/orders/${event.currentTarget.id}.json`
    console.log(url);
    //talk to the end point to get all dvds
    fetch(url, {
      method:"DELETE",
      headers: {"Content-Type": "application/json"},
    })
      //when promise is fufilled parse to json
      .then((response) => alert('Your booking has been deleted'))
      .then((response)=>{
        this.props.history.push('/user/list-of-orders')
      })
      //then set state of dvds to the json payload
      .catch((e)=>{
        console.log("Error", e)
      })
}

updateStatus = (event) => {
    event.preventDefault()
    let url = `/orders/${event.currentTarget.id}.json`
    console.log(url);
    //talk to the end point to get all dvds
    fetch(url, {
      method:"PUT",
      body: JSON.stringify({order:{order_status:"Pick Up Requested"}}),
      headers: {"Content-Type": "application/json"},
    })
      //when promise is fufilled parse to json
      .then((response) => alert('Your request has been recieved by the valet company'))
      .then((response)=>{
        this.props.history.push('/user/list-of-orders')
      })
      //then set state of dvds to the json payload
      .catch((e)=>{
        console.log("Error", e)
      })
  }

tip = (event) => {
  event.preventDefault()
  let tipTotal = parseFloat(event.target.value) * this.state.booking.total_price
  let fixedNumber = tipTotal.toFixed(2)
  let url = `/orders/${this.state.booking.id}.json`
  fetch(url, {
    method:"PUT",
    body: JSON.stringify({order:{tip:fixedNumber}}),
    headers: {"Content-Type": "application/json"},
  })
    //when promise is fufilled parse to json
    .then((response)=>{
      this.getBookingDetails(this.state.booking.id)
    })
    .catch((e)=>{
      console.log("Error", e)
    })

}

calculateTotal = (price, tip) =>{
  return parseFloat(price) + parseFloat(tip)
}

  render () {
    let {booking, unEditable} = this.state
    return (
      <div className="container">
      <h4>Booking Details</h4>
      <Col s={12}>
        <Card horizontal header={<CardTitle image={CarCard}></CardTitle>}>
            <p>{booking.valet_company_name}</p>
            <p>{booking.valet_address}. {booking.valet_city}, {booking.valet_state} {booking.valet_zip} </p>
            <hr></hr>
            <p>Order ID: {booking.id}</p>
            <p>Length of Stay: {booking.length_of_stay} hours</p>
            <p>Drop Off Time: {this.convertTime(booking.start_time)}</p>
            <p>Pick Up Time: {this.convertTime(booking.end_time)}</p>
            <hr></hr>
            <p>Valet Fee: ${booking.total_price} </p>
            <p>Tip: ${booking.tip}</p>
            <p>Total: ${this.calculateTotal(booking.total_price, booking.tip)}</p>
            <br></br>
            <p>Order Status: {booking.order_status}</p>
          </Card>
      </Col>
      <Row>
        <Col s={2} offset='s1'><Button large onClick={() => {$('#times').modal('open')}} tooltip="Edit Times" floating icon='schedule' className='deep-purple lighten-2 center-align'/></Col>
        <Col s={2} offset='s1'><Button large onClick={() => {$('#tip').modal('open')}} tooltip="Add Tip" floating icon='attach_money' className='blue lighten-2'/></Col>
        <Col s={2} id={booking.id} onClick={this.updateStatus} offset='s1'><Button large tooltip="Request Pick Up" floating icon='directions_car' className='green lighten-2'/></Col>
        <Col s={2} offset='s1'><Button large onClick={() => {$('#cancel').modal('open')}} tooltip="Cancel Booking" floating icon='cancel' className='red lighten-2'/></Col>
      </Row>

    <div>
      <Modal
      fixedFooter
        actions={<div>
                  <Button flat modal="close" waves="light">Dismiss</Button>
                  <Button id={booking.id} onClick={this.updateTimes} modal="close" waves="light" className="deep-purple lighten-2"><Icon left>schedule</Icon>Update Times</Button>
                  </div>
                  }
                  id='times' header='Update Times'>Are you sure you want to cancel you order for {booking.valet_company_name}?
                  <Row>
                    <Icon left>access_alarm</Icon><DateTime className="col s5" defaultValue={"Drop Off Time"} timeConstraints={ {minutes: { step: 15 }}} onChange={this.getStartTime} name="start-date" />
                    <Icon left>access_alarm</Icon><DateTime className="col s5" defaultValue={"Collection Time"} timeConstraints={ {minutes: { step: 15 }}} onChange={this.getEndTime} name="end-date" />
                  </Row>
      </Modal>
      <Modal
        actions={<div>
                  <Button flat modal="close" waves="light">Dismiss</Button>
                  <Button id={booking.id} onClick={this.deleteBooking} modal="close" waves="light" className="red lighten-2"><Icon left>delete</Icon>Cancel</Button>
                    </div>
                  }
                  id='cancel' header='Cancel Booking'>Are you sure you want to cancel you order for {booking.valet_company_name}?</Modal>
      <Modal
        actions={<div>
          <Row>
                  <Col s={3} ><Button onClick={this.tip} value='0.2' modal="close" waves="light" className="blue lighten-2">${this.calculatePercentage(booking.total_price, 0.2)}</Button></Col>
                  <Col s={3} ><Button onClick={this.tip} value='0.18'modal="close" waves="light" className="blue lighten-2">${this.calculatePercentage(booking.total_price, 0.18)}</Button></Col>
                  <Col s={3} ><Button onClick={this.tip} value='0.15'modal="close" waves="light" className="blue lighten-2">${this.calculatePercentage(booking.total_price, 0.15)}</Button></Col>
                  <Col s={3} ><Button flat modal="close" waves="light">Dismiss</Button></Col>
                  </Row>
                </div>
                  }
                  id='tip' header='Add Tip to Booking'>How much would you like to tip {booking.valet_company_name}?
                </Modal>
                </div>
              </div>
    )
  }
}

export default OrderDetails
