import React, { Component } from "react";

import "./SearchResult.css";

class SearchResult extends Component {

  render() {
    const { result } = this.props
    return (
      <section className="SearchResult">
        <h2>Result</h2>
        <h4>{result.term}</h4>
        <p>{result.definition}</p>
      </section>
    );
  }
}
export default SearchResult;

