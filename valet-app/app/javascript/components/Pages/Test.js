import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Prompt } from 'react-router-dom'
import {Input, Row, Button, Toast} from 'react-materialize'
import GoogleMapReact from 'google-map-react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '50%'
};

export class Test extends React.Component {
  state = {
    formIsHalfFilledOut: false
  }




  render() {
    console.log(this.state);
    return (
      <div>
    {window.Materialize.toast('Registered Successfully!', 3000)}
</div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCMQgVmwu-p2ewvYsQvoUDiWwXOYU6N8cI'
})(Test);
