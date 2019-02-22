import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import {Card, CardTitle, Col, Row} from 'react-materialize'

//Images used for 404 PageNotFound.
import Car from '../../../assets/img/car2.jpg'

class PageNotFound extends React.Component {
  render () {
    return (
      <div className = "container error-404">
        <h1> 404 ERROR!!!</h1>
        <h3> Your page is not here. We are working on this, we promise</h3>
        <div>
          <img src={Car} alt="Cartoon image of red broken car"/>
        </div>
      </div>
    )
  }
}

export default PageNotFound
