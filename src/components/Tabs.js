import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

export default class Tab extends Component {
  state = {
    on: false,
  };

  handleCheckSingIn = () => {
    this.setState({ on: true });
  };

  handleCheckSingUp = () => {
    this.setState({ on: false });
  };

  render() {
    const { on } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleCheckSingIn}>
          Sign in
        </button>
        <button type="button" onClick={this.handleCheckSingUp}>
          Sign up
        </button>
        {on ? <SignInForm /> : <SignUpForm />}
      </div>
    );
  }
}
