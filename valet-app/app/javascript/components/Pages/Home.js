import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Parallax} from 'react-materialize'

class Home extends React.Component {


handleChange = (event) => {
  console.log(event._d);

}

  render () {
    return (
      <div>
        <h1>Home</h1>
        <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg" />
      </div>
    )
  }
}

export default Home
