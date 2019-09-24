import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Recipes } from './components/Recipes';
import { RecipeDetails } from './components/RecipeDetails';
const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Recipes} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/recipeDetails" component={RecipeDetails} />
    </BrowserRouter>
  );
};

export default Routes;
