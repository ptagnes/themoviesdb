import React, { Component } from "react";
import MoviesList from "./Movies/MoviesList/MoviesList";

export default class Demo extends Component {
  render() {
    return (
      <div style={{ padding: "4rem 2rem" }}>
        <h2>
          Movies <small>(Redux)</small>
        </h2>
        <MoviesList />
      </div>
    );
  }
}
