import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Parallax, Col, Tabs, Tab} from 'react-materialize'


//Images used for HomePage
import SkyLineImage from '../../../assets/img/sdskyline3.jpg'

class Home extends React.Component {
  render () {
    return (
      <div>
        <Parallax imageSrc={SkyLineImage}/>
      {/*  <section class="container section" id="services">
          <div class="row">
            <div class="col s12 l4">
              <h2 class="indigo-text text-darken-4">What we do:</h2>
              <p>No more waiting out in the cold or rain ever again!</p>
              <p>Save time and go about your business.Go places!</p>
            </div>
            <div class="col s12 l6 offset-12">
              <ul class="tabs">
                <li class="tab col s6">
                  <a href="#customer" class="indigo-text text-darken-4">Customer</a>
                </li>
                <li class="tab col s6">
                  <a href="#valet" class="indigo-text text-darken-4">Valet</a>
                </li>
              </ul>
              <div class="col s12" id="customer">
                <p class="flow-text indigo-text text-darken-4">Customer</p>
                <p>Save time and go about your business.Go places!</p>
              </div>
              <div class="col s12" id="valet">
                <p class="flow-text indigo-text text-darken-4">Valet</p>
                <p>Save time and go about your business.Go places!</p>
              </div>
            </div>
          </div>
        </section>*/}
        <section class="container section" id="services">
          <div class="row">
            <div class="col s12 l4">
              <h2 class="indigo-text text-darken-4">What we do:</h2>
              <p>No more waiting out in the cold or rain ever again!</p>
              <p>Save time and go about your business.Go places!</p>
            </div>
            <div class="col s12 l6 offset-12">
            <Tabs classname='tab-demo z-depth-1'>
              <Tab id= "customer" title="Customer" active>
                <h3>CUSTOMER</h3>
                <p>Never be late again!</p>
              </Tab>
              <Tab id="valet" title="Valet">
                <h3>VALET</h3>
                <p>Never lose track of your cars! Full customer satisfaction!</p>
              </Tab>
              </Tabs>
              </div>
              </div>
        </section>

          {/*<h1>About Us</h1>
          <p>
            Lorizzle pizzle daahng dawg brizzle amizzle, crunk adipiscing elit. Fo sheezy velizzle, go to hizzle volutpizzle, suscipit quis, fo shizzle mah nizzle fo rizzle, mah home g-dizzle stuff, hizzle. Mofo crunk tortizzle. Check out this dawg. Shiz izzle dolizzle crackalackin turpizzle nizzle gizzle. Maurizzle cool bizzle et turpis. Doggy in tortizzle. Pellentesque eleifend rhoncus uhuh ... yih!. In hac habitasse doggy things. Phat dapibizzle. Curabitizzle crackalackin crackalackin, pretium eu, stuff ac, uhuh ... yih! vitae, nunc. Pot suscipit. Integer yippiyo velit sizzle fo shizzle.
          </p>
          <p>
            Lorizzle pizzle daahng dawg brizzle amizzle, crunk adipiscing elit. Fo sheezy velizzle, go to hizzle volutpizzle, suscipit quis, fo shizzle mah nizzle fo rizzle, mah home g-dizzle stuff, hizzle. Mofo crunk tortizzle. Check out this dawg. Shiz izzle dolizzle crackalackin turpizzle nizzle gizzle. Maurizzle cool bizzle et turpis. Doggy in tortizzle. Pellentesque eleifend rhoncus uhuh ... yih!. In hac habitasse doggy things. Phat dapibizzle. Curabitizzle crackalackin crackalackin, pretium eu, stuff ac, uhuh ... yih! vitae, nunc. Pot suscipit. Integer yippiyo velit sizzle fo shizzle.
          </p>
          <p>
            Lorizzle pizzle daahng dawg brizzle amizzle, crunk adipiscing elit. Fo sheezy velizzle, go to hizzle volutpizzle, suscipit quis, fo shizzle mah nizzle fo rizzle, mah home g-dizzle stuff, hizzle. Mofo crunk tortizzle. Check out this dawg. Shiz izzle dolizzle crackalackin turpizzle nizzle gizzle. Maurizzle cool bizzle et turpis. Doggy in tortizzle. Pellentesque eleifend rhoncus uhuh ... yih!. In hac habitasse doggy things. Phat dapibizzle. Curabitizzle crackalackin crackalackin, pretium eu, stuff ac, uhuh ... yih! vitae, nunc. Pot suscipit. Integer yippiyo velit sizzle fo shizzle.
          </p>*/}
          <Parallax imageSrc={SkyLineImage}/>
          <h1>Contact Us</h1>
          <p>
            Lorizzle pizzle daahng dawg brizzle amizzle, crunk adipiscing elit. Fo sheezy velizzle, go to hizzle volutpizzle, suscipit quis, fo shizzle mah nizzle fo rizzle, mah home g-dizzle stuff, hizzle. Mofo crunk tortizzle. Check out this dawg. Shiz izzle dolizzle crackalackin turpizzle nizzle gizzle. Maurizzle cool bizzle et turpis. Doggy in tortizzle. Pellentesque eleifend rhoncus uhuh ... yih!. In hac habitasse doggy things. Phat dapibizzle. Curabitizzle crackalackin crackalackin, pretium eu, stuff ac, uhuh ... yih! vitae, nunc. Pot suscipit. Integer yippiyo velit sizzle fo shizzle.
          </p>
          <p>
            Lorizzle pizzle daahng dawg brizzle amizzle, crunk adipiscing elit. Fo sheezy velizzle, go to hizzle volutpizzle, suscipit quis, fo shizzle mah nizzle fo rizzle, mah home g-dizzle stuff, hizzle. Mofo crunk tortizzle. Check out this dawg. Shiz izzle dolizzle crackalackin turpizzle nizzle gizzle. Maurizzle cool bizzle et turpis. Doggy in tortizzle. Pellentesque eleifend rhoncus uhuh ... yih!. In hac habitasse doggy things. Phat dapibizzle. Curabitizzle crackalackin crackalackin, pretium eu, stuff ac, uhuh ... yih! vitae, nunc. Pot suscipit. Integer yippiyo velit sizzle fo shizzle.
          </p>
          <p>
            Lorizzle pizzle daahng dawg brizzle amizzle, crunk adipiscing elit. Fo sheezy velizzle, go to hizzle volutpizzle, suscipit quis, fo shizzle mah nizzle fo rizzle, mah home g-dizzle stuff, hizzle. Mofo crunk tortizzle. Check out this dawg. Shiz izzle dolizzle crackalackin turpizzle nizzle gizzle. Maurizzle cool bizzle et turpis. Doggy in tortizzle. Pellentesque eleifend rhoncus uhuh ... yih!. In hac habitasse doggy things. Phat dapibizzle. Curabitizzle crackalackin crackalackin, pretium eu, stuff ac, uhuh ... yih! vitae, nunc. Pot suscipit. Integer yippiyo velit sizzle fo shizzle.
          </p>
      </div>
    )
  }
}

export default Home
