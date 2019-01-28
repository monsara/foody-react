import React from 'react';
import styles from './OrderHistoryItem.module.css';

const OrderHistoryItem = ({
  date,
  price,
  address,
  rating,
  onShowMoreInfo,
  onDelete,
}) => (
  <>
    <td className={styles.td}>{date}</td>
    <td className={styles.td}>{price}</td>
    <td className={styles.td}>{address}</td>
    <td className={styles.td}>{rating}</td>
    <td className={styles.td}>
      <button className={styles.button} type="button" onClick={onShowMoreInfo}>
        Show more
      </button>
    </td>
    <td className={styles.td}>
      <button className={styles.button} type="button" onClick={onDelete}>
        Delete
      </button>
    </td>
  </>
);

export default OrderHistoryItem;
