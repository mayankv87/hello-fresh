import React from 'react';
import { shallow } from 'enzyme';
import { Rating } from './';

describe('Ratings component', () => {
  it('should render without crash', () => {
    const rating = 3;
    const Wrapper = shallow(<Rating rating={rating} />);
    expect(Wrapper.exists()).toBe(true);
  });

  it('should render 5 stars if number of stars not passed', () => {
    const Wrapper = shallow(<Rating />);
    expect(Wrapper.find('.star-item').length).toEqual(5);
  });

  it('should render n  number of stars passed as props', () => {
    const totalStars = 3;
    const Wrapper = shallow(<Rating totalStars={totalStars} />);
    expect(Wrapper.find('.star-item').length).toEqual(3);
  });
});
