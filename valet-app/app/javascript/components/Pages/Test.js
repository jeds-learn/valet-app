import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Prompt } from 'react-router-dom'
import {Input, Row, Button, Toast, Card, Col, Icon} from 'react-materialize'
import GoogleMapReact from 'google-map-react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import OrderDetailsCard from '../Elements/OrderDetailsCard'
export class Test extends React.Component {





  render() {
    console.log(this.state);
    return (
      <OrderDetailsCard />
    );
  }
}

export default Test
