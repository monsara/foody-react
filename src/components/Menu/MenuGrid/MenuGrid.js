import React from 'react';
// components
import MenuCard from '../MenuCard/MenuCard';
// styles
import styles from './MenuGrid.module.css';

const MenuGrid = ({ items, onDelete, onShowMoreInfo }) => (
  <div>
    <ul className={styles.list}>
      {items.map(({ id, name, description, image, price, ingredients }) => (
        <li className={styles.item} key={id}>
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
