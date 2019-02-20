import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import {Row, Col, Table, Button, Input, Icon} from 'react-materialize'
import GoogleMapReact from 'google-map-react';


const Marker = ({ text }) => (
  <div style={{
    color: 'white',
    background: '#ee6e73',
    padding: '5px 5px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
)

class ListOfValets extends React.Component {
  state = {
    valets:[],
    center: {
      lat: 32.715024,
      lng: -117.147639
    },
    zoom: 15
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

  hello =(event) => {
    let center = this.state.center
    let obj = this.state.valets.find(object => object.id == event.currentTarget.id);
    center.lng = parseFloat(obj.long)
    center.lat = parseFloat(obj.lat)
    console.log("center",center);
    this.setState({center})
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
                  <tr key={index} id={valet.id} onClick={this.hello}>
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
          <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyCMQgVmwu-p2ewvYsQvoUDiWwXOYU6N8cI' }}
              defaultCenter={this.state.center}
              defaultZoom={this.state.zoom}
            >
            {this.state.valets.map((valet, index) => {
              return(
                <Marker
                  key={index}
                  lat={valet.lat}
                  lng={valet.long}
                  text={valet.company_name}
                />
              )
            })}
            </GoogleMapReact>
          </div>
        </div>
    )
  }
}

export default ListOfValets
