import React from "react"
import PropTypes from "prop-types"


class OrderDetailsCard extends React.Component {
  render () {
    return (
      <div className="container">
        <h1>Booking Details</h1><div class="chip teal lighten-3">Order Confirmed</div>
        <div className="row">
          <div className="col s12 m6 l4 center-align">
            <div className="card">
              <div className="card-content">
              <i className="material-icons large blue-grey-text">alarm</i>
              <h5>1 hour</h5>
              <h6>from 2/26/2019 11:00 AM</h6>
              </div>
            </div>
          </div>
          <div className="col s12 m6 l4 center-align">
            <div className="card">
              <div className="card-content">
              <i className="material-icons large blue-grey-text">add_location</i>
              <h5>Enrique's Diner</h5>
              <h6>2715 Broadway. San Diego, California (CA) 92102</h6>
              </div>
            </div>
          </div>
          <div className="col s12 m6 l4 center-align">
            <div className="card">
              <div className="card-content">
              <i className="material-icons large blue-grey-text">attach_money</i>
              <h5>Total $45</h5>
              <h6>(Valet Fee: $30 + Tip: $15)</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderDetailsCard
