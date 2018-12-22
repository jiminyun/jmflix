import React from "react";
import HomePresentr from "./HomePresenter";
import { moviesApi } from "API";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying }
      } = await moviesApi.nowPlaying();

      const {
        data: { results: upcoming }
      } = await moviesApi.upcoming();

      const {
        data: { results: popular }
      } = await moviesApi.popular();

      this.setState({
        nowPlaying,
        upcoming,
        popular
      });
    } catch {
      this.setState({
        error: "Can't find movies information."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    //console.log(this.state);
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresentr
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
