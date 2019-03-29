import React, { Component } from "react";
// import { Switch } from "react-router-dom";
import SearchBar from "./components/SearchBar.js";
import EntriesSubmission from "./components/EntriesSubmission.js";
import SearchResult from "./components/SearchResult.js";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    // App.js will centralize all child components' data (dictionary, query, result)
    this.state = {
      // Dictionary is provided as a JSON by the user via <EntriesSubmission/>
      dictionary: {},
      // result will be passed to <SearchResult/> as prop
      // genricOnChange will update query and be passed to <SearchBar/> as a prop
      query: "",
      result: {
        // default 'result' that will be displayed before the first term submission
        term: "Browse our dictionary",
        definition: "Type your query string in the above search field."
      }
    };
  }

  submitTerm(event, term) {
    event.preventDefault();
    console.log("submitTerm", term);
    var response = {
      term: "No such term found",
      definition: "Please provide another string to look for."
    };
    const { dictionary } = this.state;
    for (const [key, value] of Object.entries(dictionary)) {
      if (key === term) {
        response = { term: key, definition: value };
      }
    }
    this.setState({
      query: term,
      result: response
    });
  }

  populateDictionary(event, dictionary) {
    // event.preventDefault();
    const dictionaryObject = JSON.parse(dictionary);
    this.setState({
      dictionary: dictionaryObject
    }, () => {
      console.log("dictionary set");
    });
  }

  clearDictionary() {
    // event.preventDefault();
    this.setState({
      dictionary: {}
    });
  }

  render() {
    const { dictionary } = this.state;
    return Object.keys(dictionary).length ? ( 
      <div className="App">
      <header className="App-header">
        <h1>Explore Dictionary</h1>
      </header>
      <h3>
      Or <button onClick={() => this.clearDictionary()}>Clear Dictionary Data</button>
      </h3>
      {/* <EntriesSubmission dataSubmission={(event, dictionary) => this.populateDictionary(event, dictionary)} /> */}
      <SearchBar termSubmission={(event, term) => this.submitTerm(event, term)} />
      <SearchResult result={this.state.result}/>
  </div>
    ) : (
      <div className="App">
      <header className="App-header">
      <h1>Load Your Dictionary</h1>
      </header>
      <EntriesSubmission dataSubmission={(event, dictionary) => this.populateDictionary(event, dictionary)} />
      {/* <SearchBar termSubmission={(event, term) => this.submitTerm(event, term)} />
      <SearchResult result={this.state.result}/> */}
  </div>
    );
  }
}

export default App;
