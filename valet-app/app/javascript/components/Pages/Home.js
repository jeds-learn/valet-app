import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'

class Home extends React.Component {


handleChange = (event) => {
  console.log(event._d);

}

  render () {
    return (
      <div className="container">
        <h1>Home</h1>
      </div>
    )
  }
}

export default Home
