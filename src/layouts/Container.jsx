import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
  text-align: ${props => (props.center ? 'center' : '')};
  margin: auto;
  padding: 3rem 1.5rem;
  width: 80%;
  max-width: ${props => props.theme.layout[props.type]};
  height: 100%;
  flex: 1;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 90%;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 95%;
  }
`;

const Container = ({ children, type, className, center }) => (
  <Wrapper className={className} type={type} center={center}>
    {children}
  </Wrapper>
);

export default Container;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  center: PropTypes.object,
};
