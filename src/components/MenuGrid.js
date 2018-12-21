import React from 'react';
import MenuCard from './MenuCard';

const MenuGrid = ({ items }) => (
  <div>
    <ul className="menu-list">
      {items.map(({ id, name, description, image, price, ingredients }) => (
        <li className="menu_item" key={id}>
          <MenuCard
            name={name}
            description={description}
            imgUrl={image}
            price={price}
            ingredients={ingredients}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default MenuGrid;
