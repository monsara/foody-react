import React from 'react';
// Components
import AppHeader from './AppHeader';
import MenuPage from './MenuPage';
import OrderHistory from './OrderHistory';
import orderList from '../order-history.json';

const App = () => (
  <div>
    <AppHeader />
    <MenuPage />
    <OrderHistory orderList={orderList} />
  </div>
);

export default App;
