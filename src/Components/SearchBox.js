import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
`;

const Button = styled.button`
  padding: 0;
  border: 0;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  outline: 0;
  font-size: 40px;
`;

class SearchBox extends React.Component {
  render() {
    return (
      <Container>
        <input value="text" z-index="-1" />
      </Container>
    );
  }
}

export default SearchBox;
