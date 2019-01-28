import React from 'react';
import OrderHistoryItem from './OrderHistoryItem';
import styles from './OrderHistoryGrid.module.css';

const OrderHistoryGrid = ({ history = [], onDelete, onShowMoreInfo }) => (
  <table className={styles.table}>
    <caption className={styles.head}>Order history</caption>
    <thead className={styles.thead}>
      <tr>
        <th className={styles.th}>Date</th>
        <th className={styles.th}>Price</th>
        <th className={styles.th}>Delivery address</th>
        <th className={styles.th}>Rating</th>
        <th className={styles.th}>Show more</th>
        <th className={styles.th}>Delete</th>
      </tr>
    </thead>
    <tbody>
      {history.map(item => (
        <tr key={item.id}>
          <OrderHistoryItem
            date={item.date}
            price={item.price}
            address={item.address}
            rating={item.rating}
            onDelete={() => onDelete(item.id)}
            onShowMoreInfo={() => onShowMoreInfo(item.id)}
          />
        </tr>
      ))}
    </tbody>
  </table>
);

export default OrderHistoryGrid;
