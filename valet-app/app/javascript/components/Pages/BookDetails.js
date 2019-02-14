import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import {Row, Table, Button, Input} from 'react-materialize'



class BookDetails extends React.Component {

  render () {
    return (
      <div>
        <h1> Book Details </h1>
        <h1> this is the field that allows you to select your date</h1>
        <Row>
          <Input name='on' type='time' onChange={function(e, value) {}} />
        </Row>
        <h1> price estimator, should auto populate</h1>
        <Input s={12} label="Price Estimator" defaultValue="Price Estimator" disabled />
        <Input s={12} label="credit card data" defaultValue="must hide digits" disabled />
        <Row>
        <Input s={12} type='select' label="Your Vehicle" defaultValue='1'>
          <option value='1'>Car 1</option>
          <option value='2'>Car 2</option>
        </Input>
        // need to create an alert on click
        <Button waves='light'>confirm</Button>
      </Row>

      </div>
    )
  }
}

export default BookDetails
