import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import {Row, Table, Button, Input, CollapsibleItem, Collapsible, Modal, Icon} from 'react-materialize'
import DateTime from 'react-datetime';
import moment from 'moment'


class NewOrder extends React.Component {
  state ={
    orderDetails:{
    start_date_time: null,
    end_date_time: null,
    total_price: null,
  },
    valetDetails: []
  }

componentDidMount(){
  this.getValet(this.props.match.params.valet_id)
}

  getValet = (valetId) => {
    let url = `/users/valet/${valetId}.json`
    console.log("sam");
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
    console.log(this.state);
    return (
      <div className='container'>
        <div>
          <h4>{this.state.valetDetails.company_name}</h4>
        </div>
        <Row>
            <Icon left>access_alarm</Icon><DateTime className="col s5" defaultValue={"Drop Off Time"} timeConstraints={ {minutes: { step: 15 }}} onChange={this.getStartTime} name="start-date" />
            <Icon left>access_alarm</Icon><DateTime className="col s5" defaultValue={"Collection Time"} timeConstraints={ {minutes: { step: 15 }}} onChange={this.getStartTime} name="start-date" />
        </Row>
          <Collapsible  popout defaultActiveKey={1}>
            <CollapsibleItem header='Price Estimate' icon='attach_money'>
              {this.state.valetDetails.cost_per_hour}
            </CollapsibleItem >
          </Collapsible>
          <Collapsible popout defaultActiveKey={1}>
            <CollapsibleItem header='Credit Card' icon='credit_card'>
              ***4154
            </CollapsibleItem>
          </Collapsible>
          <Collapsible popout defaultActiveKey={1}>
            <CollapsibleItem header='Vehicle' icon='directions_car'>
              $50
            </CollapsibleItem>
          </Collapsible>
          <Button waves='light'>Confirm</Button>

      </div>
    )
  }
}

export default NewOrder
