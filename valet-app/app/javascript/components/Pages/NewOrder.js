import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import {Row, Table, Button, Input, CollapsibleItem, Collapsible, Modal, Icon} from 'react-materialize'
import DateTime from 'react-datetime';
import moment from 'moment'

class NewOrder extends React.Component {
  state ={
    bookingStatus: false,
    vehicle_id: null,
    start_time_moment: null,
    end_time_moment: null,
    length_of_stay: null,
    total_price: null,
    vehicle_id: null,
    valetDetails: [],
    vehicleDetails: [],
    orderDetails :{
      length_of_stay: null,
      start_time: null,
      end_time: null,
      total_price: null,
      order_status: null,
      vehicle_id: null,
      valet: null
    }
  }

componentDidMount(){
  this.getValet(this.props.match.params.valet_id)
  this.getVehicles()
}

getValet = (valetId) => {
    let url = `/users/valet/${valetId}.json`
    fetch(url,{
      method:"GET",
      headers: {"Content-Type": "application/json"},
    })
    .then((response) => response.json())
    //then set state of dvds to the json payload
    .then((json) => {
      this.setState({valetDetails: json})
    })
  }

getVehicles = () => {
    fetch('/vehicles.json',{
      method:"GET",
      headers: {"Content-Type": "application/json"},
    })
    .then((response) => response.json())
    //then set state of dvds to the json payload
    .then((json) => {
      this.setState({vehicleDetails: json})
    })
  }

getStartTime = (date) => {
    let {start_time_moment} = this.state
    this.setState({start_time_moment:date})
}

getEndTime = (date) => {
    let {end_time_moment} = this.state
    this.setState({end_time_moment:date})
  }

estimateCost = () => {
    let {start_time_moment, end_time_moment} = this.state
    if (start_time_moment !== null && end_time_moment !== null){
    let duration = moment.duration(end_time_moment.diff(start_time_moment))
    let durationInHours = duration.asHours()
    let cost = durationInHours * this.state.valetDetails.cost_per_hour
    // this.setState({total_price: cost, length_of_stay: duration})
    return (
      <Collapsible  popout defaultActiveKey={1}>
        <CollapsibleItem header={`Price estimate - $ ${cost}`} icon='attach_money'>
          <p>Duration of Stay - {durationInHours} hours</p>
          <p>Cost Per Hour - ${this.state.valetDetails.cost_per_hour}</p>
        </CollapsibleItem >
      </Collapsible>
    )
  }else{
    return(
      <Collapsible  popout defaultActiveKey={1}>
        <CollapsibleItem header="Select Dates for Price Estimate" icon='attach_money'>
          <p>Cost Per Hour - ${this.state.valetDetails.cost_per_hour}</p>
        </CollapsibleItem >
      </Collapsible>
    )
  }
  }

handleVehicleId = (event) => {
    let {vehicle_id} = this.state
    vehicle_id = event.target.value
    this.setState({ vehicle_id:vehicle_id })
  }


createOrder = (event) => {
  event.preventDefault()
  console.log(this.state.orderDetails);
  fetch('/orders.json', {
    method:"POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({order:this.state.orderDetails})
  })
  .then((response)=>{
    console.log(response);
    alert(`Your order has been created`)
    this.setState({responseOk:true})
  })
  .then((response)=>{
    this.props.history.push('/user/list-of-orders')
  })
}

onSubmitOrder = (event) => {
  let {start_time_moment, end_time_moment} = this.state
  let orderDetails = this.state.orderDetails
  console.log(orderDetails);
  let duration = moment.duration(end_time_moment.diff(start_time_moment))
  let durationAsHours = duration.asHours()
  orderDetails.start_time = start_time_moment.format('YYYY-MM-DD HH:MM:SS'),
  orderDetails.end_time =  end_time_moment.format('YYYY-MM-DD HH:MM:SS'),
  orderDetails.length_of_stay = durationAsHours
  orderDetails.total_price = durationAsHours * this.state.valetDetails.cost_per_hour,
  orderDetails.order_status = "Order Confirmed",
  orderDetails.vehicle_id = this.state.vehicle_id
  orderDetails.valet_id = this.state.valetDetails.id
  this.setState({orderDetails})
  this.createOrder(event)
}

  render () {
    let {vehicleDetails} = this.state
    return (
      <div className='container'>
        <div>
          <h4>{this.state.valetDetails.company_name}</h4>
        </div>
        <Row>
          <Icon left>access_alarm</Icon><DateTime className="col s5" defaultValue={"Drop Off Time"} timeConstraints={ {minutes: { step: 15 }}} onChange={this.getStartTime} name="start-date" />
          <Icon left>access_alarm</Icon><DateTime className="col s5" defaultValue={"Collection Time"} timeConstraints={ {minutes: { step: 15 }}} onChange={this.getEndTime} name="end-date" />
        </Row>
        <Row>
          <Icon left>directions_car</Icon>
          <Input onChange={this.handleVehicleId} s={5} type='select' label='Select Vehicle'>
            <option value={"default"} key={vehicleDetails.length + 1}>Please Select a Vehicle</option>
          {vehicleDetails.map((vehicle, index) => {
            return(
              <option value={vehicle.id} key={index}>{vehicle.make} - {vehicle.license_plate}</option>
            )
          })}
          </Input>
          <Icon left>credit_card</Icon>
          <Input s={5} type='select'  label='Select Credit Card' defaultValue='1'>
            <option value='1'>Amex</option>
            <option value='2'>Mastercard</option>
          </Input>
        </Row>
          {this.estimateCost()}
          <Button onClick={this.onSubmitOrder} waves='light'>Confirm Booking</Button>
      </div>
    )
  }
}

export default NewOrder
