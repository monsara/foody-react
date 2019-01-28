import React, { Component } from 'react';
import styles from './SignUp.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  password: '',
  passwordRepeate: '',
};

export default class SignUp extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, email, phone, password, passwordRepeate } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          placeholder="My name is"
          onChange={this.handleChange}
        />
        <input
          className={styles.input}
          type="text"
          name="email"
          value={email}
          placeholder="My email"
          onChange={this.handleChange}
        />
        <input
          className={styles.input}
          type="text"
          name="phone"
          value={phone}
          placeholder="My phone"
          onChange={this.handleChange}
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          value={password}
          placeholder="My password"
          onChange={this.handleChange}
        />
        <input
          className={styles.input}
          type="password"
          name="passwordRepeate"
          value={passwordRepeate}
          placeholder="Password once more"
          onChange={this.handleChange}
        />
        <button className={styles.button} type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}
