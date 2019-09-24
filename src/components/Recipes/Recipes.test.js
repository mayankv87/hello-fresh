import React from 'react';
import { shallow } from 'enzyme';
import { Recipes, Title, Description } from './Recipes';
import { RecipesMockData } from './../../service/__mocks__/recipes.mock';
import * as fetchCall from './../../service/Recipes.service';

describe('Receipes component', () => {
  it('should render', () => {
    const Wrapper = shallow(<Recipes />);
    expect(Wrapper.exists()).toBe(true);
  });

  it('should set the recipes in state after componentDidMount success', () => {
    fetchCall.fetchRecipes = jest.fn().mockResolvedValue(RecipesMockData);
    const renderedComponent = shallow(<Recipes />);
    fetchCall.fetchRecipes().then(() => {
      renderedComponent.update();
      expect(renderedComponent.state().recipes.length).toEqual(2);
    });
  });

  it('sets the state componentDidMount on error', () => {
    fetchCall.fetchRecipes = jest
      .fn()
      .mockRejectedValue(new Error('Error fetching Recipes'));
    const renderedComponent = shallow(<Recipes />);
    fetchCall
      .fetchRecipes()
      .then()
      .catch(() => {
        expect(renderedComponent.state().errorStatus).toEqual(
          'Error fetching Recipes'
        );
      });
  });

  it('should have title and description', () => {
    const Wrapper = shallow(<Recipes />);
    expect(Wrapper.find(Title).length).toEqual(1);
    expect(Wrapper.find(Description).length).toEqual(1);
  });

  it('should show not available message if recipes are not available', () => {
    const Wrapper = shallow(<Recipes />);
    Wrapper.setState({ recipes: [] });
    expect(Wrapper.find('.no-recipes').length).toEqual(1);
  });
});
