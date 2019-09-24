import React from 'react';
import { shallow } from 'enzyme';
import { RecipeCard, Image, RecipeName, RecipeDescription } from './';
import { RecipesMockData } from './../../service/__mocks__/recipes.mock';

describe('Receipes component', () => {
  it('should render', () => {
    const Wrapper = shallow(<RecipeCard recipes={RecipesMockData} />);
    expect(Wrapper.exists()).toBe(true);
  });

  it('should have recipe name, image and headline', () => {
    const Wrapper = shallow(<RecipeCard recipes={RecipesMockData} />);
    expect(Wrapper.find(Image).length).toEqual(2);
    expect(Wrapper.find(RecipeName).length).toEqual(2);
    expect(Wrapper.find(RecipeDescription).length).toEqual(2);
  });

  it('should not render recipe name, image and headline, if recipes data is empty', () => {
    const Wrapper = shallow(<RecipeCard recipes={[]} />);
    expect(Wrapper.find(Image).length).toEqual(0);
    expect(Wrapper.find(RecipeName).length).toEqual(0);
    expect(Wrapper.find(RecipeDescription).length).toEqual(0);
  });
});
