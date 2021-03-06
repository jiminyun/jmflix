import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import DropDown from "Components/DropDown";

const Header = styled.div`
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
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 4px solid ${props => (props.current ? "red" : "transparent")};
`;

const Slink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

const Search = styled.div`
  position: fixed;
  right: 10px;
`;
const Input = styled.input`
  -webkit-appearance: none;
  -webkit-border-radius: 1px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    {
      //console.log(props)
    }

    <List>
      <Item current={pathname === "/"}>
        <Slink to="/">Movies</Slink>
      </Item>
      <Item current={pathname === "/tv"}>
        <Slink to="/tv">TV</Slink>
      </Item>
      <Item current={pathname === "/search"}>
        <Slink to="/search">Search</Slink>
      </Item>
    </List>
    <DropDown />
  </Header>
));
