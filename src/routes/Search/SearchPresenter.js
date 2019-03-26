import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loader from 'components/Loader';
import Message from "components/Message";
import {renderMovieSection, renderNFoundError} from "components/renderUtility";

const Container = styled.div`
  padding: 0 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 2rem;
  width: 100%;
`;

const SearchPresenter = ({ movieResults, tvResults, searchTerm,
                           error, loading, handleSubmit, updateSearchTerm }) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Search Movies or TV Show..." value={searchTerm} onChange={updateSearchTerm} />
    </Form>
    { loading ? <Loader/> : (
      <>
        {renderMovieSection('Movie Results', movieResults)}
      </>
    )}
    {error && <Message text={error}/>}
    {renderNFoundError([tvResults, movieResults])}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateSearchTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;