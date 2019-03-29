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
    }, () => {
      const { dictionary } = this.state;
      this.props.dataSubmission(event, dictionary)
    });
  }

  render() {
    return (
      <section className="EntriesSubmission">
        <h2>You will be able to search it once loaded</h2>
        {/* <form> */}
          <label>
            Paste your JSON here:{" "}
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.submission}
              name="dictionary"
              type="text"
              placeholder='{ "term" : "definition"}, ...'
            />
          </label>
          {/* <button>Submit Your Data</button>
          </form> */}
      </section>    
    );
  }
}
export default EntriesSubmission;

