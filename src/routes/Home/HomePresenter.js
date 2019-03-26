import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loader from 'components/Loader';
import Message from "components/Message";
import {renderMovieSection} from "components/renderUtility";

const Container = styled.div`
  padding: 0 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, error, loading }) =>
  loading ?
    <Loader /> :
    (
      <Container>
        {renderMovieSection('Now Playing', nowPlaying)}
        {renderMovieSection('Popular Movies', popular)}
        {renderMovieSection('Upcoming Playing', upcoming)}
        {error && <Message text={error}/>}
      </Container>
  );


HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;