import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Loader from 'components/Loader';
import Message from "components/Message";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 30px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(2px);
  opacity: 0.3;
`;

const Content = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 5px;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.span`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span`
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: .7;
  line-height: 1.5;
  width: 50%;
`;

const DetailPresenter = ({ result, error, loading }) => {
  const URL = 'https://image.tmdb.org/t/p/original';

  return (
    <Container>
      {loading ? <Loader/> : (
        <>
          <Helmet>
            <title>
              {result.original_title ? result.original_title : result.original_name}{" "}
              | Nomflix
            </title>
          </Helmet>
          <Backdrop bgImage={`${URL}/${result.backdrop_path}`}/>
          <Content>
            <Cover bgImage={result.poster_path ? `${URL}/${result.poster_path}` : null} />
            <Data>
              <Title>{result.original_title}</Title>
              <ItemContainer>
                <Item>
                  {result.release_date
                    ? result.release_date.substring(0, 4)
                    : result.first_air_date.substring(0, 4)
                  }
                </Item>
                <Divider>•</Divider>
                <Item>
                  {
                    result.genres && result.genres.map((genre, index) =>
                      `${genre.name}${index === result.genres.length - 1 ? '' : ' / '}`
                  )}
                </Item>
              </ItemContainer>
              <Overview>{result.overview}</Overview>
            </Data>
          </Content>
        </>
      )}
      {error && <Message text={error}/>}
    </Container>
  )
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;