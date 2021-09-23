import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      textarea: "",
      selection: "",
    };
  }

  changeHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  changeHandlerTextArea = (event) => {
    this.setState({
      textarea: event.target.value,
    });
  };

  changeHandlerSelection = (event) => {
    this.setState({
      selection: event.target.value,
    });
  };

  handleSubmit = () => {
    alert(
      `${this.state.username} ${this.state.textarea} ${this.state.selection}`
    );
  };

  render() {
    const { username, textarea, selection } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username &nbsp;</label>
          <input
            type="text"
            value={username}
            onChange={this.changeHandler}
          ></input>
          <div>
            <br />
            <label>Comments &nbsp;</label>
            <textarea
              value={textarea}
              onChange={this.changeHandlerTextArea}
            ></textarea>
          </div>
          <div>
            <select value={selection} onChange={this.changeHandlerSelection}>
              <option value="Angular">Angular</option>
              <option value="React">React</option>
              <option value="Vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
