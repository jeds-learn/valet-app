import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import {Row, Table, Button, Input, CollapsibleItem, Collapsible, Modal} from 'react-materialize'
import DateTime from 'react-datetime';
import moment from 'moment'


class BookDetails extends React.Component {
  state ={
    orderDetails:{
    start_date_time: null,
    end_date_time: null,
    total_price: null,
    }
  }
  getStartTime = (date) => {
    let {start} = this.state
    this.setState({start:date})
  }

  handleOrderUpdate = (event) => {
    const { orderDetails } = this.state
    orderDetails[event.target.name] = event.target.value
    this.setState({ orderDetails:orderDetails })
  }

  renderOrderData = (event) => {
    even.preventDefault()
    get('/orders/new.json',{
      method:"GET",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({orders:this.state.orderDetails})
    })
    .then((response) => {
      this.setState({responseOk:true})
    })
  }

  // confirm button:  require syntax to bring an onclick alert that tells user he is confirmed
  render () {
    return (
      <div className='container'>
        <div>
          <h1> Valet Reservation Details </h1>
        </div>
          <Collapsible s={4} header='Arrival Time' icon='access_time' popout defaultActiveKey={1}>
                <DateTime s={4} defaultValue={"Drop off Time"} onChange={this.getStartTime} name="start_date_time" icon='access_time'/>
          </Collapsible>
          <Collapsible s={4} popout defaultActiveKey={1}>
            <CollapsibleItem s={4} header='Price Estimate' icon='attach_money'>
              $50
            </CollapsibleItem >
          </Collapsible>
          <Collapsible s={4} popout defaultActiveKey={1}>
            <CollapsibleItem s={4} header='Credit Card' icon='credit_card'>
              ***4154
            </CollapsibleItem>
          </Collapsible>
          <Collapsible s={4} popout defaultActiveKey={1}>
            <CollapsibleItem s={4} header='Vehicle' icon='directions_car'>
              $50
            </CollapsibleItem>
          </Collapsible>
          <Button waves='light'>Confirm</Button>

      </div>
    )
  }
}

export default BookDetails
