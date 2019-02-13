import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import {Input} from 'react-materialize'


class PageNotFound extends React.Component {
  render () {
    return (
      <div>
    <h1>Page Not Found</h1>
    </div>
    )
  }
}

export default PageNotFound
