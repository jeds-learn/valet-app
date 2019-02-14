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
    duration_hours: null
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
  //Deconstructing state

  let {start, end, duration_hours} = this.state
  // if start and end are not null then continue
  if(start !== null && end !== null) {
    //Work out the difference between the start and end date
      let duration = moment.duration(end.diff(start))
      //return a paragrah with the duration as hours
      let durationInHours = duration.asHours()
      return durationInHours
  }
}
  render () {
    return (
      <div className="container">
        <h1>Home</h1>
            <div>
              <DateTime defaultValue={"Drop Off Time"} onChange={this.getStartTime} name="start-date" />
              <br/>
              <DateTime defaultValue={"Collection Time"} onChange={this.getEndTime} name="end-date"/>
              {this.calculateDuration()}
            </div>
      </div>
    )
  }
}

export default Test
