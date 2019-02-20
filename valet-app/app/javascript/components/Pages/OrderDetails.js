import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import {Table, Icon, Button, Col, Row, Input, Modal, T} from 'react-materialize'
import moment from 'moment'



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

  render () {
    let {booking, unEditable} = this.state
    console.log("details",this.props);
    return (
      <div className="container">
      <h4>Booking Details</h4>
      <Row>
          <Input placeholder={`${booking.id}`} s={1} label="Order ID" disabled={unEditable}/>
          <Input placeholder={this.convertTime(booking.start_time)} s={3} label="Start Time" disabled={unEditable}/>
          <Input placeholder={this.convertTime(booking.end_time)} s={3} label="End Time" disabled={unEditable}/>
          <Input placeholder={booking.length_of_stay} s={1} label="Duration" disabled={unEditable}/>
          <Input placeholder={`$${booking.tip}`} s={1} label="Tip" disabled={unEditable}/>
          <Input placeholder={`$${booking.total_price}`} s={3} label="Price" disabled={unEditable}/>
          <Input placeholder={booking.valet_company_name} s={12} label="Company Name" disabled={unEditable}/>
          <Input placeholder={booking.valet_address} s={3} label="Address" disabled={unEditable}/>
          <Input placeholder={booking.valet_city} s={3} label="City" disabled={unEditable}/>
          <Input placeholder={booking.valet_state} s={3} label="State" disabled={unEditable}/>
          <Input placeholder={booking.valet_zip} s={3} label="Zip Code" disabled={unEditable}/>
      </Row>
      <Row>
        <Col s={2} offset='s1'><Button large tooltip="Edit Times" floating icon='schedule' className='deep-purple lighten-2 center-align'/></Col>
        <Col s={2} offset='s1'><Button large tooltip="Add Tip" floating icon='attach_money' className='blue lighten-2'/></Col>
        <Col s={2} offset='s1'><Button large tooltip="Request Pick Up" floating icon='directions_car' className='green lighten-2'/></Col>
        <Col s={2} offset='s1'><Button large onClick={() => {$('#cancel').modal('open')}} tooltip="Cancel Booking" floating icon='cancel' className='red lighten-2'/></Col>
      </Row>
    <div>
      <Modal
        actions={<div>
                  <Button flat modal="close" waves="light">Dismiss</Button>
                  <Button id={booking.id} onClick={this.deleteBooking} modal="close" waves="light" className="red lighten-2"><Icon left>delete</Icon>Cancel</Button>
                    </div>
                  }
                  id='cancel' header='Cancel Booking'>Are you sure you want to cancel you order for {booking.valet_company_name}?</Modal>
                </div>
              </div>
    )
  }
}

export default OrderDetails
