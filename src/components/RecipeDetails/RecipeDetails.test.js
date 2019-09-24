import React from 'react';
import { shallow, mount } from 'enzyme';
import { RecipeDetails } from './';
import { RecipesMockData } from './../../service/__mocks__/recipes.mock';
import { RecipeContent, Ingredients } from './components';
import { BrowserRouter as Router } from 'react-router-dom';
describe('Receipe Details component', () => {
  it('should render', () => {
    var props = {
      location: {
        data: RecipesMockData[0],
      },
    };
    const Wrapper = shallow(<RecipeDetails location={props.location} />);
    expect(Wrapper.exists()).toBe(true);
  });

  it('should have render Recipe description and Ingredients', () => {
    var props = {
      location: {
        data: RecipesMockData[0],
      },
    };
    const Wrapper = mount(<Router><RecipeDetails location={props.location} /></Router>);
    expect(Wrapper.find(RecipeContent).length).toEqual(1);
    expect(Wrapper.find(Ingredients).length).toEqual(1);
  });
});
