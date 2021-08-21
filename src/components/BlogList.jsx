import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { TagsBlock } from 'components';
import { Container } from 'layouts';

const Wrapper = styled.article``;

const Image = styled.div``;

const Information = styled.div``;

const Date = styled.div``;

const Title = styled.h1``;

const BlogList = ({ path, cover, title, date, excerpt, tags }) => (
  <Container>
    <Wrapper>
      <Image>
        <Link to={path} title={title}>
          <Img fluid={cover} />
        </Link>
      </Image>
      <Information>
        <Date>{date}</Date>
        <a href={path}>
          <Title>{title}</Title>
        </a>
        <TagsBlock list={tags} />
        {excerpt}
      </Information>
    </Wrapper>
  </Container>
);

export default BlogList;

BlogList.propTypes = {
  cover: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};
