import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
  align-item: center;
  justify-content: space-between;
`;

const Item = styled.li`
  width: 80px;
  text-align: center;
`;

const sLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <Header>
    <List>
      <Item>
        <sLink to="/">Movies</sLink>
      </Item>
      <Item>
        <sLink to="/tv">TV</sLink>
      </Item>
      <Item>
        <sLink to="/search">Search</sLink>
      </Item>
    </List>
  </Header>
);
