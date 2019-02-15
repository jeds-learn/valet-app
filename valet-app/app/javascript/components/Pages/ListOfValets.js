import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import {Row, Table, Button, Input} from 'react-materialize'

class ListOfValets extends React.Component {

  render () {
    return (

      <div className="container">

  <Row>
        <Input s={4} defaultValue='Search' />

  </Row>
        <Table>

          <thead>
            <tr>
              <th data-field="company_name">Company Name</th>
              <th data-field="address">Address</th>
              <th data-field="state">State</th>
              <th data-field="button"></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Name 1</td>
              <td>Business 1</td>
              <td>Valet 1</td>
              <td><Link className="waves-effect waves-light btn register-btn" to={'/book_valet/details'}>Select</Link></td>

            </tr>
            <tr>
              <td>Name 1</td>
              <td>Business 2</td>
              <td>Valet 2</td>
              <td><Link className="waves-effect waves-light btn register-btn" to={'/book_valet/details'}>Select</Link></td>
            </tr>
            <tr>
              <td>name 1</td>
              <td>Business 3</td>
              <td>Valet 3</td>
              <td><Link className="waves-effect waves-light btn register-btn" to={'/book_valet/details'}>Select</Link></td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default ListOfValets
