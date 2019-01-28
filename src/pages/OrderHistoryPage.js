import React, { Component } from 'react';
import OrderHistoryGrid from '../components/OrderHistory/OrderHistoryGrid';
import Spiner from '../components/Spiner/Spiner';
import Modal from '../components/Modal/Modal';

import * as API from '../services/api';

export default class OrderHistoryPage extends Component {
  state = { history: [], historyNote: null, isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    API.getAllyOrderHistoryItems().then(history => {
      this.setState({ history, isLoading: false });
    });
  }

  handleDeleteItem = id => {
    API.deleteOrderHistoryItem(id).then(isOk => {
      if (!isOk) return;

      this.setState(state => ({
        history: state.history.filter(item => item.id !== id),
      }));
    });
  };

  handleShowMoreInfo = id => {
    this.setState({ isLoading: true });
    API.getOrderHistoryItemById(id).then(item =>
      setTimeout(() => {
        this.setState({ historyNote: item, isLoading: false });
      }, 300),
    );
  };

  closeModal = () => {
    this.setState({ historyNote: null });
  };

  render() {
    const { history, historyNote, isLoading } = this.state;
    return (
      <div>
        {isLoading ? (
          <Spiner />
        ) : (
          <OrderHistoryGrid
            history={history}
            onDelete={this.handleDeleteItem}
            onShowMoreInfo={this.handleShowMoreInfo}
          />
        )}

        {historyNote && (
          <Modal onClose={this.closeModal}>
            <h1>Order History</h1>
            <p>Date - {historyNote.date}</p>
            <p>Price - {historyNote.price}</p>
            <p>Delivery address - {historyNote.address}</p>
            <p>Rating - {historyNote.rating}</p>
          </Modal>
        )}
      </div>
    );
  }
}
