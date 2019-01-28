import React from 'react';

import MenuCard from '../components/Menu/MenuCard';

const MenuItemPage = ({ match }) => (
  <div>
    <MenuCard id={match.params.id} />
  </div>
);

export default MenuItemPage;
