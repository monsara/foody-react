import React, { Component } from 'react';
import v4 from 'uuid/v4';
import CommentList from './CommentList';
import CommentAddForm from './CommentAddForm';

export default class Comments extends Component {
  state = {
    comments: [],
  };

  handleAddComment = ({ text, rate }) => {
    this.setState(prevState => ({
      comments: [{ id: v4(), text, rate }, ...prevState.comments],
    }));
  };

  handleDeleteComment = id => {
    this.setState(prevState => ({
      comments: prevState.comments.filter(comment => comment.id !== id),
    }));
  };

  render() {
    const { comments } = this.state;

    return (
      <div>
        <h3>Comments</h3>
        <CommentList
          comments={comments}
          onDeleteComment={this.handleDeleteComment}
        />
        <CommentAddForm onSubmit={this.handleAddComment} />
      </div>
    );
  }
}
