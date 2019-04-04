import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin-top: 20px;
`;

export default () => (
  <Container>
    <Helmet>
      <title>Movies | Nomflix</title>
    </Helmet>
    <span role="img" aria-label="Loading">⏰</span>
  </Container>
);
