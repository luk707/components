import React from "react";

export default class TestComponent extends React.Component {
  state = { name: "" };
  handleChange = e => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div>
        <div>
          Name: <input value={this.state.name} onChange={this.handleChange} />
        </div>

        <div>Hello {this.state.name}</div>
      </div>
    );
  }
}
