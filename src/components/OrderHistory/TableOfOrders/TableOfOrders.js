import React from 'react';
// styles
import styles from './TableOfOrders.module.css';

const TableOfOrders = props => {
  const { history, handleShowMoreInfo, onDelete } = props;

  return (
    <table className={styles.table}>
      <caption className={styles.title}>Order history</caption>
      <tbody>
        <tr className={styles.head}>
          <th>Date</th>
          <th>Price</th>
          <th>Delivery address</th>
          <th>Rating</th>
          <th>Show more</th>
          <th>Delete</th>
        </tr>
        {history.map(({ id, date, price, address, rating }) => (
          <tr key={id}>
            <td className={styles.cell}>{date}</td>
            <td className={styles.cell}>{price}</td>
            <td className={styles.cell}>{address}</td>
            <td className={styles.cell}>{rating}</td>
            <td>
              <button
                className={styles.button}
                type="button"
                onClick={() => {
                  handleShowMoreInfo(id);
                }}
              >
                Show more
              </button>
            </td>
            <td>
              <button
                className={styles.button}
                type="button"
                id={id}
                onClick={() => {
                  onDelete(id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TableOfOrders;
