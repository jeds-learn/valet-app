import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import {Row, Col, Table, Button, Input, Icon} from 'react-materialize'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

class ListOfValetsUnathenticated extends React.Component {
  state = {
    valets:[],
    showingInfoWindow: true,
    activeMarker: {},
    selectedPlace: {},
    lat: 32.715024,
    lng: -117.147639
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

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
}

  render () {
    return (
      <div className="container">
      <div>
        <Table bordered centered hoverable>
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
              </tr>
            )
          }
        )}
        </tbody>
      </Table>
      </div>
      <div>
        <Map google={this.props.google}
            style={{width: '70%', height: '50%', position: 'relative'}}
            className={'map'}
            zoom={15}
            initialCenter={{
              lat: 32.715024,
              lng: -117.147639
            }}>
            {this.state.valets.map((valet, index) => {
          return(
          <Marker
            key={index}
            onClick={this.onMarkerClick}
            title={valet.company_name}
            name={valet.company_name}
            position={{lat: valet.lat, lng: valet.long}}
            />
            )
            })}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h6>{this.state.selectedPlace.name}</h6>
              </div>
          </InfoWindow>
        </Map>
      </div>
    </div>
  )
}
}
export default GoogleApiWrapper({
apiKey: 'AIzaSyCMQgVmwu-p2ewvYsQvoUDiWwXOYU6N8cI'
})(ListOfValetsUnathenticated);
