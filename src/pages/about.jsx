import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import styled from '@emotion/styled';

const About = () => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title={'About Me'} />
    <Container>
      <Aside>
        <img
          src="https://scontent.ftnr2-1.fna.fbcdn.net/v/t1.6435-9/cp0/e15/q65/s320x320/109689739_1584498751719418_7994595954732994583_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8024bb&_nc_ohc=Luo9ozseRxIAX8bS2CY&_nc_ht=scontent.ftnr2-1.fna&oh=8788969d682a4c48960e998af5333e96&oe=614776E1"
          alt="me smiling holding my computer"
        />
        <div>
          <ul>
            <li>
              Profession:{' '}
              <span>
                Front End developer, at <a href="http://onja.org">NGO Onja</a>
              </span>
            </li>
            <li>
              Country/City:{' '}
              <span>
                <a href="https://en.wikipedia.org/wiki/Madagascar">
                  {' '}
                  Madagascar,
                </a>
              </span>
              <span>
                <a href="https://en.wikipedia.org/wiki/Mahanoro">Mahanoro</a>
              </span>
            </li>
            <li>
              Email:{' '}
              <span>
                <a href="mailto:rratsianompo@gmail.com">Rosny@gmail.com</a>
              </span>
            </li>
            <li>
              <a href="https://github.com/mitia-anah">
                <img
                  src="https://img.icons8.com/color/40/000000/github--v1.png"
                  alt=""
                />
              </a>
              <a href="http://">
                <img src="https://img.icons8.com/nolan/40/linkedin.png" />
              </a>
            </li>
          </ul>
        </div>
      </Aside>
      <Article>
        <p>I'm Rosny, a front-end developer based in Madagascar.</p>
        <p>
          I study at Onja, which is a social enterprise that uspskills
          underprivileged youth who are not able to continue their education at
          university. Onja’s main goal is to teach young people English and
          Coding, and to offer them a job once they fulfill two years of
          learning on these two subjects. I was one of the lucky people who got
          this amazing opportunity.
        </p>
        <p>
          My two years of experience in coding and English has led me into a
          very big desire to make the world and Madagascar a better place. I
          work with HTML5, CSS3, Vanilla JavaScript and React, andTypeScript.
          I’ve also worked with React native before but I would like to have
          more experience on it.
        </p>
        <p>
          Life learning is a bit challenging, especially when it comes to a new
          world that you haven’t been to yet. But I like challenging myself to
          learn more and more and to get my hands dirty on web development as
          far as I can reach.
        </p>
      </Article>
    </Container>
  </Layout>
);

const Aside = styled.aside`
  border-bottom: 3px solid #c0c0c0;
  @media (min-width: 600px) {
    border-bottom: 0;
  }
  ul {
    padding-start: none;
    margin: 0;
  }
  li {
    list-style: none;
    a {
      color: #00bfff;
      cursor: pointer;
    }
  }
`;

const Article = styled.article`
  padding-top: 3rem;
  @media (min-width: 600px) {
    padding-top: 0;
  }
`;
export default About;

About.propTypes = {
  center: PropTypes.object,
};
