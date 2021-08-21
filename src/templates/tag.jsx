import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Layout, Container } from 'layouts';
import { Header } from 'components';
import { Photograph } from './photograph';
import { Birthday } from './photograph';
import { Quiz } from './quiz';
import config from '../../config/site';

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white.light};
  padding: 5px 10px;
  border: solid 1px #fff;
  border-radius: 20px;
  &:hover {
    color: ${props => props.theme.colors.black.blue};
    background: ${props => props.theme.colors.white.light};
  }
`;

const Information = styled.div`
  text-align: center;
  h1 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }
`;

const Tag = ({ pageContext }) => {
  const { posts, tagName } = pageContext;
  const upperTag = tagName.charAt(0).toUpperCase() + tagName.slice(1);
  const shuffleSite = posts.map(site => site.frontmatter.title);
  const site1 = 'Post Number One' ? <Photograph /> : '';
  const site2 = 'Post Number Two' ? <Birthday /> : '';
  const site3 = 'Post Number Three' ? <Quiz /> : '';
  const shuffledSite = shuffleSite ? (site1 ? site2 : site3) : '';

  return (
    <Layout>
      <Helmet title={`${tagName} | ${config.siteTitle}`} />
      <Header title={upperTag}>
        <StyledLink to="/tags">All Tags</StyledLink>
      </Header>
      <Container>
        <Information>
          {posts.map((post, index) => (
            <>
              <Link key={index} to={post.frontmatter.path}>
                <h3>{post.frontmatter.title}</h3>
              </Link>
            </>
          ))}
        </Information>
      </Container>
    </Layout>
  );
};

export default Tag;

Tag.propTypes = {
  pageContext: PropTypes.shape({
    posts: PropTypes.array,
    tagName: PropTypes.string,
  }),
};
