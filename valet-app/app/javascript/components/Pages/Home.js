import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'


// import Image from "..../assets/img/man.jpg"


class Home extends React.Component {


handleChange = (event) => {
  console.log(event._d);

}

  render () {
    return (
      <div className="header">
        <h1>Home</h1>
        <img src="..../assets/img/man.jpg" />
      </div>
    )
  }
}

export default Home
