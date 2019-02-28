import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow,renderer } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ListOfValetsUnathenticated from '../../app/javascript/components/Pages/ListOfValetsUnathenticated.js';

Enzyme.configure({ adapter: new Adapter() });


describe("ListOfValetsUnathenticated component", () => {
  test("renders", () => {
    const wrapper = shallow(<ListOfValetsUnathenticated />)
    expect(wrapper.exists()).toBe(true)
  })
});
