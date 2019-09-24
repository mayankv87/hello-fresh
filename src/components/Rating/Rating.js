import React from 'react';
import { fill, times } from 'lodash';
import styled from 'styled-components';
import PropTypes from 'prop-types';
export class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localRating: props.rating,
    };
    this.setRating = this.setRating.bind(this);
  }

  setRating(i) {
    this.setState({ localRating: i });
  }

  render() {
    const { totalStars } = this.props;
    const totalStarsNum = totalStars || 5;
    const classes = 'star-item fa fa-star';
    let stars = fill(
      times(totalStarsNum, i => 0),
      1,
      0,
      this.state.localRating
    ).map((value, index) => {
      return (
        <span
          key={index}
          className={value === 1 ? `full ${classes}` : `${classes}`}
          onClick={this.setRating.bind(null, index + 1)}
        />
      );
    });
    return <StarWidget ref={w => (this.stars = w)}>{stars}</StarWidget>;
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
  totalStars: PropTypes.number,
};

const StarWidget = styled.div`
  .star-item {
    color: grey;
    cursor: pointer;
    padding: 1px;
    box-sizing: border-box;
    &.full {
      transition: 0.25s all;
      color: #91c11e;
    }
  }
`;
