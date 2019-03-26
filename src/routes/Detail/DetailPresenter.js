import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loader from 'components/Loader';
import Message from "components/Message";

const Container = styled.div``;

const DetailPresenter = ({ result, error, loading }) => (
  <Container>
    {loading ? <Loader/> : null}
    {error && <Message text={error}/>}
  </Container>
);

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;