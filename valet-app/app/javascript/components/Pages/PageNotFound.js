import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import {Card, CardTitle, Col, Row} from 'react-materialize'

//Images used for 404 PageNotFound.
import ReaperImage from '../../../assets/img/reaper.png' //Reaper Image

class PageNotFound extends React.Component {
  render () {
    return (
      <div className = "container">
        <Col m={7} s={12} className="reaper-image">
          <Card horizontal header={<CardTitle image={ReaperImage}></CardTitle>}>
            <p className="reaper-text">404 Error: Your page is not here. We are working on this, we promise!</p>
          </Card>
        </Col>
      </div>
    )
  }
}

export default PageNotFound
