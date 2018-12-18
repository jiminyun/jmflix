import React, { Component } from "react";
import Router from "Components/Router";
import Header from "Components/Header";
import GlobalStyle from "Components/GlobalStyles";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Router />
      </>
    );
  }
}

export default App;
