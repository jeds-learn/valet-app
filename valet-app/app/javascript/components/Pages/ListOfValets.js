import React from "react"
import PropTypes from "prop-types"


class ListOfValets extends React.Component {
  render () {
    console.log("state", this.state);
    return (
      <div className="container">
        <h3>List of Valets</h3>
      </div>
    )
  }
}

export default ListOfValets
