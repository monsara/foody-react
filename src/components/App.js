import React from 'react';
// Components
import AppHeader from './AppHeader';
import MenuPage from './MenuPage';
import OrderHistory from './OrderHistory';
import Comments from './Comments';
import orderList from '../order-history.json';

const App = () => (
  <div>
    <AppHeader />
    <OrderHistory orderList={orderList} />
    <MenuPage />
    <Comments />
  </div>
);

export default App;
