import React, { Component, createRef } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
  state = {};

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = ({ code }) => {
    if (code !== 'Escape') return;
    const { onClose } = this.props;

    onClose();
  };

  handleBackdropClick = ({ target }) => {
    if (target !== this.backdropRef.current) return;
    const { onClose } = this.props;

    onClose();
  };

  render() {
    const { onClose, children } = this.props;
    return (
      <div
        className={styles.backdrop}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className={styles.modal}>
          {children}
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
