import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
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
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 5px;
  z-index: 1;
`;
const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 10px;
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

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const Videos = styled.div`
  margin-top: 20px;
`;

const Link = styled.a``;
const Icon = styled.img`
  height: 25px;
  margin: 0;
`;

const Video = styled.iframe``;
const DetailPresenter = ({ result, loading, error, isMovie }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={
          result.backdrop_path
            ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
            : null
        }
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : null
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}{" "}
            {result.imdb_id && (
              <Link href={`https://www.imdb.com/title/${result.imdb_id}`}>
                <Icon src={require("../../assets/imdb.svg")} alt="imdb" />
              </Link>
            )}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>{result.runtime ? result.runtime : ""} min</Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            <Divider>•</Divider>
            <Item>{`⭐️ ${result.vote_average} / 10 `}</Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <Videos>
            {result.videos &&
              result.videos.results.map((video, index) => (
                <Video
                  src={`https://www.youtube.com/embed/${video.key}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ))}
          </Videos>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.proTypes = {
  result: PropTypes.array,
  tvResults: PropTypes.array,
  isMovie: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
