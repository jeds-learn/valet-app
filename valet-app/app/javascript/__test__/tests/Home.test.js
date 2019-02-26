import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Home from '../../components/Pages/Home'


it('renders a LEARN welcome', () => {
  const app = mount(<Home />);
  expect(app.find(‘h2’).isEmpty()).toEqual(false)
  expect(app.find(‘h2’).text()).toEqual(‘What we do’)
});
