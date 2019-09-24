import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  isItemExistInLocalstorage,
  setItemInLocalStorage,
  getItemFromLocalStorage,
} from './../../Helpers';
import {
  RecipeDescription,
  RecipeIngradientsAndNutritions,
} from './components';
export const RecipeDetails = props => {
  if (!isItemExistInLocalstorage('data') || props.location.data) {
    setItemInLocalStorage('data', props.location.data);
  }

  const data = getItemFromLocalStorage('data');

  const {
    name,
    image,
    headline,
    description,
    time,
    difficulty,
    ingredients,
    calories,
    proteins,
    carbos,
    rating
  } = data;
  return (
    <React.Fragment>
      <Navigation>
        <Link to="/recipes">Go to recipes</Link>
      </Navigation>
      <ImageBox>
        <Image src={image} alt={headline} />
      </ImageBox>

      <Recipe>
        <RecipeDescription
          name={name}
          headline={headline}
          time={time}
          description={description}
          difficulty={difficulty}
          rating={rating}
        />

        <RecipeIngradientsAndNutritions
          ingredients={ingredients}
          calories={calories}
          proteins={proteins}
          carbos={carbos}
        />
      </Recipe>
    </React.Fragment>
  );
};

const Navigation = styled.div`
  padding: 10px 0 5px 28px;
  background-color: #ffffff;
  a {
    color: #000000;
  }
`;

const ImageBox = styled.div`
  overflow: hidden;
  padding-bottom: 25vh;
  position: relative;
  margin-left: -5px;
  margin-right: -5px;
  @media only screen and (min-width: 767px) {
    padding-bottom: 50vh;
  }

  @media only screen and (min-width: 1200px) {
    padding-bottom: 500px;
  }
`;

const Image = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Recipe = styled.div`
  display: block;
  justify-content: center;
  padding-right: 10px;
  padding-left: 10px;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
`;
