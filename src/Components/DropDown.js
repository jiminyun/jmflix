import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  right: 3px;
`;

const Button = styled.button`
  padding: 0;
  width: 50px;
  border: 0;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  outline: 0;
  font-size: 40px;
`;

const List = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 300px;
  z-index: 2;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  padding: 8px 12px;
  background-color: grey;
`;

class DropDown extends React.Component {
  container = React.createRef();

  state = {
    open: false
  };

  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open
      };
    });
  };

  handleClickOutside = event => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false
      });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <Container ref={this.container}>
        <Button onClick={this.handleButtonClick}>☰</Button>
        {this.state.open && (
          <List>
            <Ul>
              <Li>ReadMe About the Project</Li>
              <Li>Git Url</Li>
              <Li />
            </Ul>
          </List>
        )}
      </Container>
    );
  }
}

export default DropDown;
