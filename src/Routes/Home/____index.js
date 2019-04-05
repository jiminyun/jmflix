import React, { Component, Fragment } from "react";
//import { render } from "react-dom";
//import request from "superagent";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "API";

export default class extends React.Component {
  constructor(props) {
    super(props);

    // Sets up our initial state
    this.state = {
      nowPlaying: null,
      upcoming: null,
      popular: null,
      error: null,
      loading: true,
      hasMore: true,
      page: 1
    };

    // Binds our scroll event handler
    window.onscroll = () => {
      const {
        loadnowPlaying,
        state: { error, loading, hasMore }
      } = this;

      // Bails early if:
      // * there's an error
      // * it's already loading
      // * there's nothing left to load
      if (error || loading || !hasMore) return;

      // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        this.setState(prevState => ({
          page: prevState.page + 1
        }));

        loadnowPlaying();
      }
    };
  }

  componentWillMount() {
    // Loads some users on initial load
    this.loadnowPlaying();
  }

  loadnowPlaying = async () => {
    try {
      const {
        data: { results: nowPlaying }
      } = await moviesApi.nowPlaying(this.state.page);

      if (this.state.nowPlaying) {
        this.setState(prevState => ({
          nowPlaying: [...prevState.nowPlaying, ...nowPlaying]
        }));
      } else {
        this.setState({
          nowPlaying
        });
      }
    } catch {
    } finally {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    console.log(this.state);
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
