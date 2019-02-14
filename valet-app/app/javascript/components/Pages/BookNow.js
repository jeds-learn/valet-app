import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import {Row, Table, Button, Input} from 'react-materialize'
import BookDetails from './BookNow.js'


class BookNow extends React.Component {

  render () {
    return (
      <div>
        <Row className = 'right'>
          <Input s={20} label="Search Available Valets" validate defaultValue=' ' />
        </Row>
        <Table>
          <thead>
            <tr>
              <th data-field="id">Name of user</th>
              <th data-field="name">Business Name</th>
              <th data-field="name">Valet Company</th>
              <th data-field="name">Select</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name 1</td>
              <td>Business 1</td>
              <td>Valet 1</td>
              <td><Input name='group1' type='radio' value='green' label='' className='with-gap' /></td>
            </tr>
            <tr>
              <td>Name 1</td>
              <td>Business 2</td>
              <td>Valet 2</td>
              <td><Input name='group1' type='radio' value='green' label='' className='with-gap' /></td>
            </tr>
            <tr>
              <td>name 1</td>
              <td>Business 3</td>
              <td>Valet 3</td>
              <td><Input name='group1' type='radio' value='green' label='' className='with-gap' /></td>
            </tr>
          </tbody>
        </Table>
        <div className = 'right'>
          <a href= "./Pages/BookDetails"><Button waves='light'>Next</Button></a>
        </div>
      </div>
    )
  }
}

export default BookNow
