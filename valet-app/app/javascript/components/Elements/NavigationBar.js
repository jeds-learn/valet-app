import React from "react"
import PropTypes from "prop-types"
import {Navbar, NavItem} from 'react-materialize'

class NavigationBar extends React.Component {
  render () {
    return (
      <Navbar brand='Valet Service' right>
        <NavItem onClick={() => console.log('test click')}>View Valet Services</NavItem>
        <NavItem href='/users/sign_in'>Sign In</NavItem>
        <NavItem href='/registration'>Sign Up</NavItem>
      </Navbar>
    )
  }
}

export default NavigationBar
