import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "Screens/Home";
import TV from "Screens/TV";
import Search from "Screens/Search";
import Detail from "Screens/Detail";
import Header from "Components/Header";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/tv/popular" render={() => <h1>popular</h1>} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/tv/:id" component={Detail} />
        <Route path="/search" exact component={Search} />
        <Redirect path="*" to="/" />
      </Switch>
    </>
  </Router>
);
