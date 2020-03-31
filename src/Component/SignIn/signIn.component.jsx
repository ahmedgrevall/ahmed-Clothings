import React, { Component } from "react";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>I have already An account</h1>
        <span> sign in with Your Email and Password </span>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            required
          />
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            required
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
