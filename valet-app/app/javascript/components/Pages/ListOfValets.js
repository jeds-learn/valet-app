import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import {Row, Col, Table, Button, Input, Icon} from 'react-materialize'

class ListOfValets extends React.Component {
  state = {
    valets:[]

  }

  componentDidMount(){
    //talk to the end point to get all dvds
      fetch('/users/valets.json')
      //when promise is fufilled parse to json
      .then((response) => response.json())
      //then set state of dvds to the json payload
      .then((json) => {
        this.setState({valets: json})
      })
      .catch((e)=>{
        console.log("Error", e)
      })
  }

  render () {
    console.log(this.state);
    return (
      <div className="container">
      <Row>
      <Col s={3}>
          <Input placeholder='Search' />
      </Col>
          </Row>
          <div>
            <Table hoverable>
              <thead>
                <tr>
                  <th data-field="company_name">Company Name</th>
                  <th data-field="address">Address</th>
                  <th data-field="city">City</th>
                  <th data-field="state">State</th>
                  <th data-field="cost_per_hour">Cost/Hour</th>
                  <th data-field="button"></th>
                </tr>
              </thead>
              <tbody>
              {this.state.valets.map((valet, index) => {
                return(
                  <tr key={index}>
                  <td>{valet.company_name}</td>
                  <td>{valet.address}</td>
                  <td>{valet.city}</td>
                  <td>{valet.state}</td>
                  <td>${valet.cost_per_hour}</td>
                  <td><Link to={`/user/new-order/${valet.id}`}><Button waves='light'>Book</Button></Link></td>
                  </tr>
                )
              })}
              </tbody>
            </Table>
          </div>
        </div>
    )
  }
}

export default ListOfValets
