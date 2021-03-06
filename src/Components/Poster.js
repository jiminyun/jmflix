import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

//const Container = styled.div.attrs({ id: props => props.id });
const Container = styled.div``;

const Image = styled.img`
  background-image: url(${props => props.bgUrl});
  height: 270px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  position: absolute;
  top: 0px;
  right: 10px
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContianer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    z-index: 500;
    ${Image} {
      transform: scale(1.5);
      border: 10px solid white;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;
const Title = styled.span`
  display: block;
`;

const Year = styled.span`
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContianer>
        <Image
          src={imageUrl ? `https://image.tmdb.org/t/p/w500${imageUrl}` : ""}
        />
        <Rating>
          <span role="img" aria-label="rate">
            ⭐️
          </span>
          {rating}/10
        </Rating>
        <Title>
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </Title>
        <Year>{year}</Year>
      </ImageContianer>
    </Container>
  </Link>
);

Poster.Protypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string
};

export default Poster;
