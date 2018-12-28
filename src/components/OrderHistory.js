import React, { Component, createRef } from 'react';
// components
import TableOfOrders from './TableOfOrders';
import OrderHistoryAddForm from './OrderHistoryAddForm';
import OrderHistoryNote from './OrderHistoryNote';
import Spiner from './Spiner';
import * as API from '../services/order-history-api';

export default class OrderHistory extends Component {
  containerRef = createRef();

  state = {
    history: [],
    isHistoryNoteOpen: false,
    isLoading: false,
    isOrderHistoryAddFormOpen: false,
  };

  componentDidMount() {
    API.getAllHistoryNotes().then(history => {
      this.setState({ history });
    });

    API.getHistoryNoteById().then(history => {
      this.setState({ history });
    });

    window.addEventListener('click', this.handleWindowClick);
    window.addEventListener('keydown', this.handleEscapeKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
    window.removeEventListener('keydown', this.handleEscapeKeyPress);
  }

  handleWindowClick = e => {
    const { isHistoryNoteOpen } = this.state;

    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );

    if (isHistoryNoteOpen && !isTargetInsideContainer) {
      this.closeHistoryNote();
    }
  };

  handleEscapeKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.closeHistoryNote();
  };

  openHistoryNote = () => {
    this.setState({ isHistoryNoteOpen: true });
  };

  closeHistoryNote = () => {
    this.setState({ isHistoryNoteOpen: false });
  };

  handleAddOrderHistoryItem = ({ address, price, rating }) => {
    API.addHistoryNote({
      date: new Date().toLocaleDateString('en-US'),
      price,
      address,
      rating,
    }).then(newItem => {
      this.setState(state => ({
        history: [...state.history, newItem],
      }));
    });
  };

  // Add order note
  openOrderHistoryAddForm = () => {
    this.setState({
      isOrderHistoryAddFormOpen: true,
    });
  };

  closeOrderHistoryAddForm = () => {
    this.setState({
      isOrderHistoryAddFormOpen: false,
    });
  };

  handleShowMoreInfo = id => {
    this.setState({ isLoading: true });

    API.getHistoryNoteById(id)
      .then(history => {
        this.setState({ isLoading: false });
        this.openHistoryNote(JSON.stringify(history));
      })
      .catch(err => {
        this.setState({ isLoading: false });
        this.openHistoryNote(err.message);
      });
  };

  handleDeleteHistoryNote = id => {
    API.deleteHistoryNote(id).then(isOk => {
      if (!isOk) return;

      this.setState(state => ({
        history: state.history.filter(item => item.id !== id),
      }));
    });
  };

  render() {
    const {
      history,
      isHistoryNoteOpen,
      isOrderHistoryAddFormOpen,
      isLoading,
    } = this.state;

    return (
      <div>
        <TableOfOrders
          history={history}
          onDelete={this.handleDeleteHistoryNote}
          handleShowMoreInfo={this.handleShowMoreInfo}
        />

        <button
          type="button"
          onClick={this.openOrderHistoryAddForm}
          ref={this.containerRef}
        >
          Add History Note
        </button>

        {isLoading ? (
          <Spiner />
        ) : (
          isHistoryNoteOpen && (
            <OrderHistoryNote onClose={this.closeHistoryNote} />
          )
        )}

        {isOrderHistoryAddFormOpen && (
          <OrderHistoryAddForm
            onAddOrder={this.handleAddOrderHistoryItem}
            onClose={this.closeOrderHistoryAddForm}
          />
        )}
      </div>
    );
  }
}
