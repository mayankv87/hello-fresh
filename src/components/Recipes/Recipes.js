import React, { Component } from 'react';
import { fetchRecipes } from './../../service/Recipes.service';
import { RecipeCard } from './../Cards';
import styled from 'styled-components';
export class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      errorStatus: '',
    };
  }

  componentDidMount() {
    fetchRecipes()
      .then(res => {
        this.setState({ recipes: res });
      })
      .catch(err => {
        this.setState({ errorStatus: err.message });
      });
  }

  render() {
    const { recipes } = this.state;
    return (
      <Container>
        <RecipesBox>
          <Title>Quick Meals</Title>
          <Description>
            All the delicious Quick meals you’ll love to cook in easy
            step-by-step instructions.
          </Description>
          {recipes.length !== 0 ? (
            <Cards>
              <RecipeCard recipes={recipes} />
            </Cards>
          ) : (
            <div className="no-recipes">Recipes not available</div>
          )}
        </RecipesBox>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
`;

const RecipesBox = styled.div`
  max-width: 1140px;
`;

export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  font-family: Montserrat, Verdana, Geneva, sans-serif;
  letter-spacing: -0.3px;
  font-weight: 400;
  color: #343434;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  font-size: 16px;
  text-align: center;
  line-height: 24px;
  margin: 10px auto 20px;
`;

const Cards = styled.div`
  @media screen and (min-width: 40em) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
