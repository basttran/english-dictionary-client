import React, { Component } from 'react';
// import { Switch, Route } from "react-router-dom";
import EntriesSubmission from "./components/EntriesSubmission.js";
import SearchBar from "./components/SearchBar.js";
import SearchResult from "./components/SearchResult.js";


// import logo from './logo.svg';
import './App.css';

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* Maybe navlinks later here later for switching between dictionary submission and dictionary search, hence with a <Switch> component below */}
        </header>
          <EntriesSubmission/>
          <SearchBar/>
          <SearchResult/>
      </div>
    );
  }
}

export default App;
