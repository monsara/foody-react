import React from 'react';
// Components
import AppHeader from './AppHeader';
import OrderHistory from './OrderHistory';
import orderList from '../order-history.json';

const App = () => (
  <div>
    <AppHeader />
    <OrderHistory orderList={orderList} />
  </div>
);

export default App;
