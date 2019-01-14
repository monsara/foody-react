import React from 'react';

const CommentList = ({ comments, onDeleteComment }) => (
  <ul>
    {comments.map(({ id, text, rate }) => (
      <li key={id}>
        <span>Rate: {rate}</span>
        <span>{text}</span>
        <button type="button" onClick={() => onDeleteComment(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default CommentList;
