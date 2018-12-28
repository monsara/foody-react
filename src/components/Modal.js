import React, { Component, createRef } from 'react';

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
        className="Backdrop"
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className="ModalWindow">{children}</div>
      </div>
    );
  }
}
