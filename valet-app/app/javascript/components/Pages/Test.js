import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Input, Row, Button } from 'react-materialize'
import GoogleMapReact from 'google-map-react';


const Marker = ({ text }) => (
  <div onClick={() => this.hello} style={{
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
);

class Test extends React.Component {
  static defaultProps = {
    center: {
      lat: 32.715024,
      lng: -117.147639
    },
    zoom: 15
  };

  hello = (event) => {
    console.log("hello");
  }


createUrlString = () => {
  // console.log(jsonTest.results[0].geometry.location);
  var uri = "715 J street 92101";
  var res = encodeURI(uri);
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${res}&key=AIzaSyDpZEI65XSi7ZtNpZV6CwwSa6vO28t84lg`
  fetch(url)
  .then((response) => response.json())
  .then((jsonPayload) => console.log(jsonPayload.results[0].geometry.location))
}




  render () {

    this.createUrlString()
    return (
      // Important! Always set the container height explicitly

<div style={{ height: '50vh', width: '50%' }}>
<h1>Test</h1>
  <GoogleMapReact
    bootstrapURLKeys={{ key: 'AIzaSyCMQgVmwu-p2ewvYsQvoUDiWwXOYU6N8cI' }}
    defaultCenter={this.props.center}
    defaultZoom={this.props.zoom}
  >
  <Marker
    lat={32.7111151}
    lng={-117.1558408}
    text={'Nektar'}
  />
  <Marker
    lat={32.7092125}
    lng={-117.1580465}
    text={'Bubs'}
  />
  <Marker
    lat={32.708518}
    lng={-117.159429}
    text={'Donovans'}
  />

  </GoogleMapReact>
</div>
    )
  }
}

export default Test
