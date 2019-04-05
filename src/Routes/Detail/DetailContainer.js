import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "API.js";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      loading: true,
      error: null,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;

    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    //console.log(typeof id, parseInt(id));
    if (isNaN(parsedId)) {
      return push("/");
    }

    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
        console.log(result);
        //result = request.data;
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
        //result = request.data;
      }
      //console.log("sucess", result);
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    console.log(this.state);
    const { result, loading, error } = this.state;
    return <DetailPresenter result={result} loading={loading} error={error} />;
  }
}
