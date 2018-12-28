import React, { Component } from 'react';

const INITIAL_STATE = {
  email: '',
  password: '',
  confirmPassword: '',
};

export default class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { email, password, confirmPassword } = this.state;

    return (
      <div>
        <h2>Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <br />

          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <br />

          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            placeholder="Confirm password"
          />
          <br />
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}
