import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 300px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  position: absolute;
  top: 15px;
  right: 5px
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContianer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
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
  <Container>
    <ImageContianer>
      <Image
        bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w500${imageUrl}` : ""}
      />
      <Rating>
        <span role="img" aria-label="rate">
          ⭐️
        </span>
        {rating}/10
      </Rating>
      <Title>
        {title.length > 18 ? `${title.substring(0, 40)}...` : title}
      </Title>
      <Year>{year}</Year>
    </ImageContianer>
  </Container>
);

Poster.Protypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string
};

export default Poster;
