import React from 'react';
import { shallow } from 'enzyme';
import { RandomPantoneComponent } from './RandomPantone';

describe('Component RandomPantone', () => {
  it('should render without crashing', () => {
    const component = shallow(<RandomPantoneComponent />);
    expect(component).toBeTruthy();
  });
});
