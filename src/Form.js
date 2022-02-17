import React, { Component } from "react";
class Form extends Component {
  state = {
    name: "",
    job: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateNames(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <label htmlFor="job">Job</label>
          <input
            type="text"
            name="job"
            id="job"
            onChange={(e) => this.setState({ job: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <h2>{this.state.name}</h2>
        <h2>{this.state.job}</h2>
      </div>
    );
  }
}
export default Form;
