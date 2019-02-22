import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Input, Row, Button } from 'react-materialize'
import GoogleMapReact from 'google-map-react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '50%'
};

export class Test extends React.Component {
  state = {
    showingInfoWindow: true,
    activeMarker: {},
    selectedPlace: {},
    lat: 32.715024,
    lng: -117.147639
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true

    });
    console.log(props);
}

move = () => {
  this.setState({lat:1})
}

  render() {
    console.log(this.state);
    return (
      <div>
            <Button onClick={this.move}>Move</Button>
      <Map google={this.props.google}
          style={{width: '50%', height: '50%', position: 'relative'}}
          className={'map'}
          zoom={14}
          initialCenter={{
         lat: 32.715024,
         lng: -117.147639
        }}
        center={{
       lat: this.state.lat,
       lng: this.state.lng
      }}
          >
        <Marker
        onClick={this.onMarkerClick}
        title={'Latex Gloves'}
        name={'Latex Gloves'}
        position={{lat: 32.715024, lng: -117.147639}}/>
        <Marker
        onClick={this.onMarkerClick}
        title={'Latex Gloves'}
        name={'Test'}
        position={{lat: 32.715010, lng: -117.147639}}/>
    <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h6>{this.state.selectedPlace.name}</h6>
            </div>
        </InfoWindow>
      </Map>

</div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCMQgVmwu-p2ewvYsQvoUDiWwXOYU6N8cI'
})(Test);
