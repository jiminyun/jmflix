import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({ result, loading, error, isMovie }) => null;

DetailPresenter.proTypes = {
  result: PropTypes.array,
  tvResults: PropTypes.array,
  isMovie: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
