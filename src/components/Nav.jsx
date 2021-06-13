import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  background-color: #333;
  overflow: hidden;
`;

const NavButton = styled(NavLink)`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  
  &:hover {
    background-color: #ddd;
    color: black;
  }
  
  &.active {
    background-color: #4CAF50;
    color: white;
  }
  
  .icon {
    display: none;
  }
`;

const Nav = () => (
  <NavWrapper>
    <NavButton
      activeClassName="active"
      exact
      to="/"
    >
      Task One
    </NavButton>
    <NavButton
      activeClassName="active"
      to="/task-two"
    >
      Task Two
    </NavButton>
  </NavWrapper>
);

export default Nav;
