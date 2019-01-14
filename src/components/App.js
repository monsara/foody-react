import React, { Component } from 'react';
// Components
import AppHeader from './Header/AppHeader/AppHeader';
import MenuPage from './Menu/MenuPage/MenuPage';
import OrderHistory from './OrderHistory/OrderHistory/OrderHistory';
import Comments from './Comments/Comments/Comments';
import Modal from './Modal/Modal';
import Tab from './Tabs/Tab/Tab';
// import orderList from '../order-history.json';
// styles
import styles from './App.module.css';

export default class App extends Component {
  state = { isModalOpen: false };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isModalOpen } = this.state;

    return (
      <div>
        <AppHeader />
        <Tab />
        <button
          className={styles.btn_openModal}
          type="button"
          onClick={this.openModal}
        >
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
        <OrderHistory />
        <MenuPage />
        <Comments />
      </div>
    );
  }
}
