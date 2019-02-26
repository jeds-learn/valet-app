import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'

//Images used for 404 PageNotFound.
import Car from '../images/icon-404.png'

class PageNotFound extends React.Component {
  render () {
    return (
      <div className = "container error-404">
        <h2>Page Not Found</h2>
        <div>
          <img height="300px" src={Car} alt="Cartoon image of red broken car"/>
        </div>
        Return to <Link to="/">home</Link>
      </div>
    )
  }
}

export default PageNotFound
