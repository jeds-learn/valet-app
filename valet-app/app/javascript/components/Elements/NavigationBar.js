import React from "react"
import PropTypes from "prop-types"
import {Navbar, NavItem, Icon} from 'react-materialize'
import {Link} from 'react-router-dom'

import Logo from '../../../assets/img/logo.png'

class NavigationBar extends React.Component {
  createNavBarItems = (userDetails) => {
    if (userDetails.logged_in === false){
      return(
        //If you are not signed in
        <React.Fragment>
        <Navbar className="blue-grey nav-pad" fixed brand={
        <div>
          <img className="logo-style" src={Logo} alt="Image" height="85px" />Drive Away
        </div>}
        right>
        <NavItem href='/list-of-valets'>List of Valets</NavItem>
        <NavItem href='/users/sign_in'>Sign In</NavItem>
        <NavItem href='/registration'>Sign Up</NavItem>
        </Navbar>
        </React.Fragment>
      )
    //if the user is logged in and the is a valet
    }else if (userDetails.logged_in && userDetails.is_valet) {
      return(
        <React.Fragment>
         <Navbar className="blue-grey nav-pad" fixed brand={
          <div>
            <img className="logo-style" src={Logo} alt="Image" height="85px" />Drive Away
          </div>
         }
         right>
          <NavItem href='/valet/valet-dashboard'>Dashboard</NavItem>
          <NavItem href='/users/sign_out'>Sign Out</NavItem>
          </Navbar>
        </React.Fragment>
      )
      //if the user is logged in and is a customer
    }else if (userDetails.logged_in && userDetails.is_valet === false){
      return(
      <React.Fragment>
      <Navbar className="blue-grey nav-pad" fixed brand={
       <div>
         <img className="logo-style" src={Logo} alt="Image" height="85px" />Drive Away
       </div>
      }
      right>
      <NavItem href='/list-of-valets'>Create Booking</NavItem>
        <NavItem href='/user/add-vehicle'>My Vehicles</NavItem>
        <NavItem href='/user/list-of-orders'>View My Orders</NavItem>
        <NavItem href='/users/sign_out'>Sign Out</NavItem>
        </Navbar>
      </React.Fragment>
      )
    }
  }

  render () {
    const {userDetails: {props}} = this.props
    return (
      <div>
        {this.createNavBarItems(props)}
      </div>
    )
  }
}

export default NavigationBar
