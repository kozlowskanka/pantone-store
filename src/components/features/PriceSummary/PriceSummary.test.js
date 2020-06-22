import React from 'react';
import { shallow } from 'enzyme';
import { PriceSummaryComponent } from './PriceSummary';

describe('Component PriceSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<PriceSummaryComponent />);
    expect(component).toBeTruthy();
  });
});
