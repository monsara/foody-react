import React from 'react';
import MenuCard from './MenuCard';

const MenuGrid = ({ items, onDelete, onShowMoreInfo }) => (
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
            onShowMoreInfo={() => onShowMoreInfo(id)}
            onDelete={() => onDelete(id)}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default MenuGrid;
