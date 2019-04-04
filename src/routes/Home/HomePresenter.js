import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Loader from 'components/Loader';
import Message from 'components/Message';
import Poster from 'components/Poster';
import {renderMovieSection} from 'components/renderUtility';

const Container = styled.div`
  padding: 0 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, error, loading }) => (
  <>
    <Helmet>
      <title>Movies | Nomflix</title>
    </Helmet>
    {
      loading ?
        <Loader/> :
        (
          <Container>
            {renderMovieSection('Now Playing', nowPlaying, Poster)}
            {renderMovieSection('Popular Movies', popular, Poster)}
            {renderMovieSection('Upcoming Playing', upcoming, Poster)}
            {error && <Message text={error}/>}
          </Container>
        )
    }
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;