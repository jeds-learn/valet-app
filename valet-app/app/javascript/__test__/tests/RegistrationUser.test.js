import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import RegistrationUser from '../../components/Pages/RegistrationUser'



it('has a register button', ()=>{
  const home = shallow(<RegistrationUser />)
  expect(home.find('#button_text').text()).toEqual('Register')
})
