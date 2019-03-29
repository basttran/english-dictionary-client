import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
      query: ""
    };
  

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }


  render() {
    return (
      <section className="SearchBar">
        <h2>Find a Term</h2>
        <form>
          <label>
            Query:{" "}
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.query}
              name="query"
              type="text"
              placeholder="Enter your query string here"
            />
          </label>
          <button>Submit this Term</button>
        </form>
      </section>
    );
  }
}

export default SearchBar;


