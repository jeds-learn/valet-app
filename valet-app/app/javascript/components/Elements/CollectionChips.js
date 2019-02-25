import React from "react"
import PropTypes from "prop-types"
import ChipImage from '../images/car.png'

class CollectionChips extends React.Component {
  render () {
    return (
      <div className="chip">
        <img src={ChipImage} alt="Contact Person"/>
          {this.props.chipTitle}
      </div>
    )
  }
}

export default CollectionChips
