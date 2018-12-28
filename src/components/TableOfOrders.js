import React from 'react';

const TableOfOrders = props => {
  const { history, handleShowMoreInfo, onDelete } = props;

  return (
    <table>
      <caption>Order history</caption>
      <tbody>
        <tr>
          <th>Date</th>
          <th>Price</th>
          <th>Delivery address</th>
          <th>Rating</th>
          <th>Show more</th>
          <th>Delete</th>
        </tr>
        {history.map(({ id, date, price, address, rating }) => (
          <tr key={id}>
            <td>{date}</td>
            <td>{price}</td>
            <td>{address}</td>
            <td>{rating}</td>
            <td>
              <button
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
