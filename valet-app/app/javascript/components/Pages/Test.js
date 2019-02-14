import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Input, Row, Button } from 'react-materialize'
import DateTime from 'react-datetime';
import moment from 'moment'

class Test extends React.Component {
  state = {
    start: null,
    end: null,
  }


getStartTime = (date) => {
  let {start} = this.state
  this.setState({start:date})
}



getEndTime = (date) => {
  let {end} = this.state
  this.setState({end:date})
}

calculateDuration = () =>{
  let {start, end} = this.state
  let duration = moment.duration(end.diff(start))
  let duration_hours = duration.asHours()
  console.log(duration_hours);

}
  render () {
    return (
      <div className="container">
        <h1>Home</h1>
            <div>
              <DateTime defaultValue={"Drop Off Time"} onChange={this.getStartTime} name="start-date" />
              <br/>
              <DateTime defaultValue={"Collection Time"} onChange={this.getEndTime} name="end-date"/>
              <Button onClick={this.calculateDuration}>Click</Button>
            </div>
      </div>
    )
  }
}

export default Test
