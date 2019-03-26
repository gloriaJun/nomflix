import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loader from 'components/Loader';
import Message from "components/Message";
import {renderTvSection} from "components/renderUtility";

const Container = styled.div`
  padding: 0 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
  loading ?
    <Loader /> :
    (
      <Container>
        {renderTvSection('Top Rated Shows', topRated)}
        {renderTvSection('Popular Shows', popular)}
        {renderTvSection('Airing Today', airingToday)}
        {error && <Message text={error}/>}
      </Container>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
