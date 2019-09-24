import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Rating as RatingsComponent } from './../Rating';
import { getRecipeTime } from './../../Helpers';
export const RecipeCard = ({ recipes = [] }) => {
  return (
    <React.Fragment>
      {recipes &&
        recipes.map((recipe, index) => {
          return (
            <Card key={index}>
              <div>
                <Link
                  to={{
                    pathname: '/recipeDetails',
                    data: recipe,
                  }}>
                  <Image src={recipe.image} alt={recipe.description} />
                </Link>
              </div>
              <div>
                <RecipeName>
                  <Link
                    to={{
                      pathname: '/recipeDetails',
                      data: recipe,
                    }}>
                    {recipe.name}
                  </Link>
                </RecipeName>
                <RecipeDescription>{recipe.headline}</RecipeDescription>
              </div>
              <Footer>
                <Health>
                  <Calories>{recipe.calories}</Calories>
                  <Time>{getRecipeTime(recipe.time)}</Time>
                </Health>
                <Rating>
                  <RatingsComponent rating={recipe.rating} />
                </Rating>
              </Footer>
            </Card>
          );
        })}
    </React.Fragment>
  );
};

RecipeCard.propTypes = {
  recipes: PropTypes.array.isRequired,
};

const Card = styled.div`
  background: white;
  margin-bottom: 2em;
  letter-spacing: -0.3px;
  color: #343434;

  a {
    color: black;
    text-decoration: none;
  }

  @media screen and (min-width: 40em) {
    flex: 0 1 calc(50% - 1em);
  }
  @media screen and (min-width: 60em) {
    flex: 0 1 calc(33% - 1em);
  }
`;

export const Image = styled.img`
  display: block;
  border: 0;
  width: 100%;
  height: auto;
`;

export const RecipeName = styled.h3`
  font-size: 16px;
  font-weight: 400;
  margin: 10px 0 0 10px;
  font-family: Montserrat, Verdana, Geneva, sans-serif;
`;

export const RecipeDescription = styled.p`
  font-family: Montserrat, Verdana, Geneva, sans-serif;
  overflow: hidden;
  font-size: 13px;
  line-height: 1.7em;
  margin-bottom: 40px;
  margin-left: 10px;
  min-height: 25px;
`;

const Footer = styled.div`
  margin-right: 5px;
  margin-left: 5px;
  padding-bottom: 12px;
  display: flex;
  box-sizing: border-box;

  .container {
    font-size: 10px;
  }
`;

const Health = styled.div`
  padding-right: 5px;
  padding-left: 5px;
  @media only screen and (min-width: 1200px) {
    padding-right: 15px;
    padding-left: 8px;
    flex: 1;
  }
`;

const Calories = styled.span`
  font-size: 14px;
  line-height: 1.43;
  color: #b0aba3;
  font-weight: 300;
  margin-right: 10px;
`;

const Time = styled(Calories)``;

const Rating = styled.div`
  span {
    font-size: 14px;
    margin-right: 5px;
  }
`;
