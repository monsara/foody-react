import React, { Component } from 'react';
// Components
import AppHeader from './AppHeader';
import MenuPage from './MenuPage';
import OrderHistory from './OrderHistory';
import Comments from './Comments';
import Modal from './Modal';
import orderList from '../order-history.json';

export default class App extends Component {
  state = { isModalOpen: false };

  componentDidMount() {}

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isModalOpen } = this.state;
    return (
      <div>
        <AppHeader />
        <button type="button" onClick={this.openModal}>
          Open Modal
        </button>
        {isModalOpen && (
          <Modal onClose={this.closeModal}>
            <h1>Modal Content</h1>
            <p>
              Reprehenderit laborum aute culpa ipsum elit minim id eu tempor ea
              veniam anim amet. Dolore qui ut ut quis nisi amet consectetur sit.
              Et minim fugiat mollit occaecat laborum laborum. Consectetur in
              ullamco aliqua minim esse nisi mollit elit eiusmod ipsum esse.
            </p>
            <button type="button" onClick={this.closeModal}>
              Close Modal
            </button>
          </Modal>
        )}
        <OrderHistory orderList={orderList} />
        <MenuPage />
        <Comments />
      </div>
    );
  }
}
