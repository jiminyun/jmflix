import React from "react";
import styled from "styled-components";
import logo from "../assets/logo-valentines.png";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 28px;
`;

export default () => (
  <Container>
    <span role="img" aria-label="Loading">
      <img src={logo} alt="loading" width="100px" />
    </span>
  </Container>
);
