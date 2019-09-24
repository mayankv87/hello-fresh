import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const RecipeIngradientsAndNutritions = props => {
  return (
    <React.Fragment>
      <IngredientsBox>
        <Ingredients>
          <IngTitle>
            <span>Ingredients</span>
          </IngTitle>
          <IngList>
            {props.ingredients.map((item, index) => {
              return (
                <IngItem key={index}>
                  <IngImage>
                    <img
                      src="https://placeimg.com/45/45/any/grayscale"
                      alt={item}
                    />
                  </IngImage>
                  <IngText>{item}</IngText>
                </IngItem>
              );
            })}
          </IngList>
        </Ingredients>
        <Nutritions>
          <NutritionTitle>
            <span>Nutrition Values</span>
          </NutritionTitle>
          <NutritionList>
            <Nvalues>
              <span>Calories</span>
              <Unit>{props.calories}</Unit>
            </Nvalues>
            <Nvalues>
              <span>Protiens</span>
              <Unit>{props.proteins}</Unit>
            </Nvalues>
            <Nvalues>
              <span>Carbohydrate</span>
              <Unit>{props.carbos}</Unit>
            </Nvalues>
          </NutritionList>
        </Nutritions>
      </IngredientsBox>
    </React.Fragment>
  );
};

RecipeIngradientsAndNutritions.propTypes = {
  ingredients: PropTypes.array.isRequired,
  calories: PropTypes.string.isRequired,
  proteins: PropTypes.string.isRequired,
  carbos: PropTypes.string.isRequired,
};

const IngImage = styled.div`
  border: 1px solid #efefef;
  border-radius: 50%;
  padding: 10px;
  width: 70px;
  height: 70px;
  img {
    height: 45px;
  }
`;

const IngredientsBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Ingredients = styled.div`
  background: #fff;
  border: solid 1px #f7f6f4;
  line-height: 1.7em;
  font-size: 16px;
  font-weight: 400;
  padding: 10px;
  margin-top: 15px;
  max-width: 100%;
  flex: 2;
  margin-right: 26px;
  padding: 10px 30px;
`;

const Nutritions = styled(Ingredients)`
  margin-right: 0px;
  flex: 1;
`;

const IngTitle = styled.div`
  line-height: 32px;
  font-size: 24px;
  font-family: Montserrat, Verdana, Geneva, sans-serif;
`;

const IngList = styled(IngredientsBox)``;

const NutritionTitle = styled(IngTitle)``;

const NutritionList = styled(IngList)``;

const IngItem = styled.div`
  display: flex;
  margin-top: 20px;
  @media only screen and (min-width: 768px) {
    flex-basis: 50%;
  }
`;

const IngText = styled.div`
  margin: 20px 0 0 10px;
`;

const Nvalues = styled.div`
  flex-basis: 100%;
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
`;

const Unit = styled.span`
  float: right;
  font-weight: 400;
`;
