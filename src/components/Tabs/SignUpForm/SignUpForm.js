import React, { Component } from 'react';
// styles
import styles from './SignUpForm.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  password: '',
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
    const { name, email, phone, password } = this.state;

    return (
      <div className={styles.form}>
        <h2 className={styles.title}>Sign up</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Name"
          />
          <br />
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <br />
          <input
            className={styles.input}
            type="phone"
            name="phone"
            value={phone}
            onChange={this.handleChange}
            placeholder="Phone"
          />
          <br />
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <br />
          <button className={styles.button} type="submit">
            SignUp
          </button>
        </form>
      </div>
    );
  }
}
