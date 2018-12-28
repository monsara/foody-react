import React from 'react';
// components
import Modal from './Modal';

const OrderHistoryNote = ({ closeModal }) => (
  <Modal onClose={closeModal}>
    <h1>Order history note</h1>
    <button type="button" onClick={closeModal}>
      Close Modal
    </button>
  </Modal>
);
export default OrderHistoryNote;
