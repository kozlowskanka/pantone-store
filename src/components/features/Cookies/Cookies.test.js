import React from 'react';
import { shallow } from 'enzyme';
import { CookiesComponent } from './Cookies';

describe('Component Cookies', () => {
  it('should render without crashing', () => {
    const component = shallow(<CookiesComponent />);
    expect(component).toBeTruthy();
  });
});
