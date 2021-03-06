import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/logo1.png';

const StyledLink = styled(Link)`
  display: none;
  @media (min-width: 800px) {
    display: block;
    width: 90%;
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  position: absolute;
  top: 5px;
  right: 5px;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <img src={logo} alt="Gatsby Logo" />
    </StyledLink>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
    </Nav>
  </Headroom>
);

export default NavBar;
