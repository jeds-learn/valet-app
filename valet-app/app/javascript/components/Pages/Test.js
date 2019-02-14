import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Input, Row } from 'react-materialize'
import DateTime from 'react-datetime';

class Home extends React.Component {


handleChange = (event) => {
  console.log(event._d);

}

  render () {
    return (
      <div className="container">
        <h1>Home</h1>
            <div>
              <DateTime onChange={this.handleChange} name= "start date" label= "Start Date" />
              <br/>
              <DateTime onChange={this.handleChange} name= "end date" label= "End Date" />
            </div>
      </div>
    )
  }
}

export default Home
