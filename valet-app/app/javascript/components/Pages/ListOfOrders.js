import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {Table, Icon, Button, Col, Row, Input, Footer} from 'react-materialize'
import moment from 'moment'



class ListOfOrders extends React.Component {
  state = {
    myBookings: []
  }

componentDidMount = () =>{
  this.getBookings()
}
getBookings = async () => {
  try{
    let bookings = await fetch('/orders.json')
    let bookingsAsJson = await bookings.json()
    let sortedBookings = await this.sortBookings(bookingsAsJson)
    await this.setState({myBookings: sortedBookings})
  }
  catch(error){
    console.log("Error", error);
  }
}

sortBookings = async (arrayOfBookings) =>{
  arrayOfBookings.sort(function(a,b){
    return new Date(b.start_time) - new Date(a.start_time);
  })
  return arrayOfBookings.reverse()
}

  render () {
    return (
      <div className="container">
        <h1>My Bookings</h1>

        <Table bordered centered hoverable>
          <thead >
            <tr >
              <th data-field="Date">Date</th>
              <th data-field="Arrival Time">Arrival Time</th>
              <th data-field="Booking">Company</th>
              <th data-field="Location">Location</th>
              <th data-field="Status">Status</th>
              <th data-field="Details"></th>
            </tr>
          </thead>
          <tbody>
          {this.state.myBookings.map((booking, index) => {
            return(
              <tr key={index}>
              <td>{moment.utc(booking.start_time).format('l')}</td>
              <td>{moment.utc(booking.start_time).format('LT')}</td>
              <td>{booking.valet_company_name}</td>
              <td>{booking.valet_address}</td>
              <td>{booking.order_status}</td>
              <td><Link to={`/user/list-of-orders/${booking.id}`}><Button id={booking.id} waves='light'>View Details</Button></Link></td>
              </tr>
            )
          })}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default ListOfOrders
