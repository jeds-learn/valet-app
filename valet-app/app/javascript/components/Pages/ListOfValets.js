import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import {Row, Table, Button, Input} from 'react-materialize'

class ListOfValets extends React.Component {

  render () {
    return (

      <div>
        <Row className="container">
          <Input s={12} label="Search Available Valets" validate defaultValue=' ' />
        </Row>

        <Table className="container">
          <thead>
            <tr>
              <th data-field="id">Name of user</th>
              <th data-field="name">Business Name</th>
              <th data-field="name">Valet Company</th>
              <th data-field="name"></th>
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
