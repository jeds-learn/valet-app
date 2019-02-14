import React from "react"
import PropTypes from "prop-types"
import {Navbar, NavItem, Icon} from 'react-materialize'

class NavigationBar extends React.Component {


createNavBarItems = (userDetails) => {
  console.log("fun",userDetails);
  if (userDetails.logged_in === false){
    return(
      //If you are not signed in
      <React.Fragment>
        <NavItem>View Valet Services</NavItem>
        <NavItem href='/users/sign_in'>Sign In</NavItem>
        <NavItem href='/registration'>Sign Up</NavItem>
      </React.Fragment>
    )
  //if the user is logged in and the is a valet
  }else if (userDetails.logged_in && userDetails.is_valet) {
    return(
      <React.Fragment>
        <NavItem>Dashboard</NavItem>
        <NavItem href='/'>View Jobs</NavItem>
        <NavItem href='/users/sign_out'>Sign Out</NavItem>
      </React.Fragment>
    )
    //if the user is logged in and is a customer
  }else if (userDetails.logged_in && userDetails.is_valet === false){
    return(
    <React.Fragment>
      <NavItem href='/'>Create New Order</NavItem>
      <NavItem href='/'>View My Orders</NavItem>
      <NavItem href='/users/sign_out'>Sign Out</NavItem>
    </React.Fragment>
    )
  }
}

  render () {
    const {userDetails: {props}} = this.props
    return (
      <div>
        <Navbar brand='Valet Service' right>
          <NavItem href='/'><Icon>home</Icon></NavItem>
          {this.createNavBarItems(props)}
        </Navbar>
      </div>
    )
  }
}

export default NavigationBar
