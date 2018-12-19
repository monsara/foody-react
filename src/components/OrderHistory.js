import React from 'react';
// Components
// import TableOfOrders from './TableOfOrders';

const OrderHistory = ({ orderList }) => (
  <div>
    <table className="OrderHistory__table">
      <caption>Order history</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Price</th>
          <th>Delivery address</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {orderList.map(({ id, date, price, address, rating }, index) => {
          const currNumber = index;
          const step = 1;
          return (
            <tr key={id}>
              <td>{currNumber + step}</td>
              <td>{date}</td>
              <td>{price}</td>
              <td>{address}</td>
              <td>{rating}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default OrderHistory;
