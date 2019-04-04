import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Loader from 'components/Loader';
import Message from "components/Message";
import Poster from 'components/Poster';
import {renderTvSection} from "components/renderUtility";

const Container = styled.div`
  padding: 0 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => (
  <>
    <Helmet>
      <title>Movies | Nomflix</title>
    </Helmet>
    {
      loading ?
        <Loader/> :
        (
          <Container>
            {renderTvSection('Top Rated Shows', topRated, Poster)}
            {renderTvSection('Popular Shows', popular, Poster)}
            {renderTvSection('Airing Today', airingToday, Poster)}
            {error && <Message text={error}/>}
          </Container>
        )
    }
  </>
);
  // loading ?
  //   <Loader /> :
  //   (
  //     <Container>

  //       {error && <Message text={error}/>}
  //     </Container>
  // );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
