import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import {Card, CardTitle, Col} from 'react-materialize'



class PageNotFound extends React.Component {
  render () {
    return (
      <div className = "container">
        <h1>Page Not Found</h1>
        <div>
        <Card className='small'
          header={<CardTitle image='img/sample-1.jpg'>404 error</CardTitle>}>
          Page not found.  We are working on this, we promise!
          </Card>
          <Col m={7} s={12}>
            <Card horizontal header={<CardTitle image="./img/card-horizontal.jpeg">404 Error!</CardTitle>}>
              <p>Page not found.  We are working on this, we promise!</p>
            </Card>
          </Col>
        </div>
      </div>
    )
  }
}

export default PageNotFound
