import React from "react"
import PropTypes from "prop-types"
import {Navbar, NavItem, Icon} from 'react-materialize'

class NavigationBar extends React.Component {
  createNavBarItems = (userDetails) => {
    console.log(userDetails);
    if (userDetails.logged_in === false){
      return(
        //If you are not signed in
        <React.Fragment>
          <Navbar brand='Valet Service' right>
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
          <Navbar brand='Valet Service' right>
          <NavItem>Dashboard</NavItem>
          <NavItem href='/'>View Jobs</NavItem>
          <NavItem href='/users/sign_out'>Sign Out</NavItem>
          </Navbar>
        </React.Fragment>
      )
      //if the user is logged in and is a customer
    }else if (userDetails.logged_in && userDetails.is_valet === false){
      return(
      <React.Fragment>
        <Navbar brand='Valet Service' right>
        <NavItem href='/list-of-valets'>List of Valets</NavItem>
        <NavItem href='/'>Create New Order</NavItem>
        <NavItem href='/user/add_vehicle'>Add Vehicle</NavItem>
        <NavItem href='/'>View My Orders</NavItem>
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
