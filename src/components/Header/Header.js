import React from 'react';
import styled from 'styled-components';
import logo from './../../hellofresh-logo.svg';

export const HeaderComponent = () => {
  return (
    <Header>
      <Logo src={logo} alt="logo" />
    </Header>
  );
};

const Header = styled.header`
  background-color: #ffffff;
  color: #91c11e;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 2;
  img {
    height: 61px;
    padding-left: 10px;
  }
  @media only screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const Logo = styled.img`
  height: 80px;
`;
