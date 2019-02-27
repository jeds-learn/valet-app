  import React from 'react';
  import ReactDOM from 'react-dom';
  import Enzyme, { shallow } from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';

  import RegistrationValet from '../../app/javascript/components/Pages/RegistrationValet.js';

//   /Users/learn/Desktop/valet-app/valet-app/app/javascript/components/Pages/Home.js
// /Users/learn/Desktop/valet-app/valet-app/__tests__/components/home.test.js
  Enzyme.configure({ adapter: new Adapter() });

  it('Renders a LEARN welcome', ()=>{
    const wrapper = shallow(<RegistrationValet />)
    expect(wrapper.find('#register').text()).toEqual('Register')
  })
