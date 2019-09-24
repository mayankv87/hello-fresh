import React from 'react';
import styled from 'styled-components';
import { getRecipeTime } from './../../../Helpers';
import PropTypes from 'prop-types';
import { Rating as RatingsComponent } from './../../Rating';

export const RecipeDescription = props => {
  return (
    <React.Fragment>
      <RecipeBox>
        <RecipeContent>
          <Title>{props.name}</Title>
          <Headline>{props.headline}</Headline>
          <Rated><RatingsComponent rating={props.rating}/></Rated>
          <Content>
            <DescBox>
              <p>{props.description}</p>
            </DescBox>
            <RightBoxDesc>
              <div>
                <CookingTime>
                  <TimeLabel>Prepration Time</TimeLabel>
                  <Time>{getRecipeTime(props.time)}</Time>
                </CookingTime>
                <CookingDifficulty>
                  <DifficultyLabel>Difficulty</DifficultyLabel>
                  <Difficulty>Level {props.difficulty}</Difficulty>
                </CookingDifficulty>
              </div>
            </RightBoxDesc>
          </Content>
        </RecipeContent>
      </RecipeBox>
    </React.Fragment>
  );
};

RecipeDescription.propTypes = {
  name: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  difficulty: PropTypes.number.isRequired,
};

const Rated = styled.div`
  margin-top: 10px;
`;

const RecipeBox = styled.div`
  margin-top: -60px;
  background-color: #ffffff;
  position: relative;
`;

export const RecipeContent = styled.div`
  background: #fff;
  border: solid 1px #f7f6f4;
  line-height: 1.7em;
  font-size: 16px;
  font-weight: 400;
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-family: Montserrat, Verdana, Geneva, sans-serif;
  margin: 0;
  font-weight: 400;
  line-height: 1.7em;
`;

const Headline = styled(Title)`
  font-size: 16px;
  line-height: 1.4em;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-top: 1px solid #efefef;
  margin-top: 18px;
`;

const DescBox = styled.div`
  @media only screen and (min-width: 768px) {
    flex: 2;
  }
`;

const RightBoxDesc = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  max-width: 100%;
  flex: 1;
`;

const TimeLabel = styled.span`
  font-weight: 600;
  line-height: 24px;
`;

const Time = styled.span`
  float: right;
`;

const CookingTime = styled.div`
  margin-top: 20px;
  @media only screen and (min-width: 768px) {
    padding-left: 15px;
  }
`;

const DifficultyLabel = styled(TimeLabel)``;

const Difficulty = styled(Time)``;

const CookingDifficulty = styled(CookingTime)``;
