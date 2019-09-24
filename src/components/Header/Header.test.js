import React from 'react';
import { shallow } from 'enzyme';
import { HeaderComponent as Header, Logo } from './Header';

describe('Header component', () => {
  it('should have logo', () => {
    const Wrapper = shallow(<Header />);
    expect(Wrapper.find(Logo).length).toEqual(1);
  });
});
