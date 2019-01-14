import React, { Component, createRef } from 'react';
// styles
import styles from './Modal.module.css';

export default class Modal extends Component {
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    const { onClose } = this.props;

    if (e.code !== 'Escape') return;
    onClose();
  };

  handleBackdropClick = e => {
    const { onClose } = this.props;

    if (e.target !== this.backdropRef.current) return;
    onClose();
  };

  render() {
    const { children } = this.props;

    return (
      <div
        className={styles.container}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className={styles.modalWindow}>{children}</div>
      </div>
    );
  }
}
