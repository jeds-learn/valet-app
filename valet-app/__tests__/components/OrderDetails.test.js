  import React from 'react';
  import ReactDOM from 'react-dom';
  import Enzyme, { shallow } from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';

  import OrderDetails from '../../app/javascript/components/Pages/OrderDetails.js';

  Enzyme.configure({ adapter: new Adapter() });



  describe("order details for a registered customer", () => {
    test("renders correctly date component", () => {
      const DateInputComponent = renderer.create(<ListOfValetsUnathenticated />).toJSON()
      expect(DateInputComponent).toMatch()
    })
  });
