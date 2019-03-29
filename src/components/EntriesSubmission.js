import React, { Component } from "react";
import "./EntriesSubmission.css";

class EntriesSubmission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dictionary: "",
    };
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <section className="EntriesSubmission">
        <h2>Provide Your Own Dictionary</h2>
        <form onClick={event => this.props.dataSubmission(event, this.state.dictionary)}>
          <label>
            Paste your JSON here:{" "}
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.submission}
              name="dictionary"
              type="text"
              placeholder='{ "term" : "definition"}'
            />
          </label>
          <button>Submit Your Data</button>
          </form>
      </section>    
    );
  }
}
export default EntriesSubmission;

