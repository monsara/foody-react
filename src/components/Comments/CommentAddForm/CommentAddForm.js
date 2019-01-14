import React, { Component } from 'react';

const INITIAL_STATE = {
  text: '',
  rate: '10 ',
};

export default class CommentAddForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { text, rate } = this.state;

    const comment = {
      text,
      rate,
    };

    onSubmit(comment);

    this.setState({ text: '' });
  };

  render() {
    const { text, rate } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <p>Leave feedback</p>
          <label>
            Rate it
            <select name="rate" value={rate} onChange={this.handleChange}>
              <option value="" disabled>
                ...
              </option>
              <option value="10">10</option>
              <option value="9">9</option>
              <option value="8">8</option>
              <option value="7">7</option>
              <option value="6">6</option>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </label>
        </div>
        <div>
          <textarea
            name="text"
            cols="100"
            rows="10"
            placeholder="Your comment"
            value={text}
            onChange={this.handleChange}
            autoComplete="off"
          />
        </div>
        <div>
          <button type="submit">Add Comment</button>
        </div>
      </form>
    );
  }
}
