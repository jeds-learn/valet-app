import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Parallax, Col, Tabs, Tab, Row, Input} from 'react-materialize'


//Images used for HomePage
import SkyLineImage from '../../images/sdskyline3.jpg'
import SkyLineImage2 from '../../images/sdskyline9.jpg'

class Home extends React.Component {
  render () {
    return (
      <div>
        <Parallax imageSrc={SkyLineImage}/>

        <section className="container section" id="services">
          <div className="row">
            <div className="col s12 l4 offset-l2" >
              <h2 className="indigo-text text-darken-4">What we do</h2>
              <p>
                <strong>Valet Service</strong> is proud to work with local businesses in your area. Our work consists of close collaboration between local businesses and customers aim to provide guaranteed customer satisfaction upon each visit.
              </p>

            </div>
            <div className="col s12 l3 offset-l1">
              <Tabs>
                  <Tab title="Customer" active>
                    <h5 className='indigo-text text-darken-4'>CUSTOMER</h5>
                    <p>Here is how it works - </p>
                    <p>Download the app.  With the app you can tell us where you are going so that we will be waiting for you.  Call your valet, pay your fare, and tip them all at the push a button. </p>
                  </Tab>
                  <Tab id="valet" title="Valet">
                    <h5 className='indigo-text text-darken-4'>VALET</h5>
                    <p>Raise the bar with valet services that allow you to develop stronger and mutually productive relationships with your clients.  Use our reports to track your incoming revenues, and manage day-to-day operations through a smart phone or tablet.</p>
                  </Tab>
                </Tabs>
                </div>
              </div>
        </section>

          <Parallax imageSrc={SkyLineImage2}/>

          <section className="section container" id="contact">
            <div className="row">
              <div className="col s12 l5">
                <h2 className="indigo-text text-darken-4">Get In Touch</h2>
                <p>Are you tired of looking for parking?</p>
                <p>Are you a valet trying looking for a better system
                to organize your clients?</p>
                <p>Interested in partnering with <strong>Valet Service</strong>? We’d love to hear from you.</p>
              </div>
              <div className="col s12 l5 offset-l2">
                <form action="#">
                  <div className="input-field">
                    <i className="material-icons prefix">email</i>
                    <input type="email" id="email"/>
                    <label htmlFor="email">Your Email</label>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">phone</i>
                    <input type="text" id="phone" className="phone"/>
                    <label htmlFor="phone">Your Phone Number</label>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">message</i>
                    <textarea id="message" className="materialize-textarea"></textarea>
                    <label htmlFor="message">Your Message</label>

                  </div>
                  <div className="input-text">
                    <p>Services required...</p>
                  </div>
                  <div>
                    <Row className="input-field">
                        <Input name='group1' type='checkbox' value='Customer' label='Customer' />
                        <Input name='group1' type='checkbox' value='Valet' label='Valet' />
                    </Row>
                  </div>
                  <div className="input-field center">
                    <button className="btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </section>

        <footer className="page-footer grey darken-3" >
          <div className="container" >
            <div className="row">
              <div className="col s12 l6">
                <h5 className="white-text">About Us</h5>
                <p className="grey-text text-ligthen-3"><strong>Valet Service</strong>, a cloud-based solution giving you back your time!</p>
              </div>
              <div className="col s12 l4 offset-l2">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <li><a href="#" className="grey-text text-ligthen-3">Facebook</a></li>
                  <li><a href="#" className="grey-text text-ligthen-3">Twitter</a></li>
                  <li><a href="#" className="grey-text text-ligthen-3">Instagram</a></li>
                </ul>
            </div>
          </div>
          </div>
          <div className="footer-copyright grey darken-4">
            <div className="container center-align">
              &copy;2019 Valet Service
            </div>
          </div>
        </footer>


      </div>
    )
  }
}

export default Home
