import React from 'react';

const TableOfOrders = ({ history }) => (
  <div>
    <table>
      <caption>Order history</caption>
      <tbody>
        <tr>
          <th>Date</th>
          <th>Price</th>
          <th>Delivery address</th>
          <th>Rating</th>
        </tr>
        {history.map(({ id, date, price, address, rating }) => (
          <tr key={id}>
            <td>{date}</td>
            <td>{price}</td>
            <td>{address}</td>
            <td>{rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TableOfOrders;
