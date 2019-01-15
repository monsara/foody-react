import React from 'react';
import { Link } from 'react-router-dom';
// styles
import styles from './MenuGrid.module.css';

const MenuGrid = ({ items, match, location }) => (
  <>
    <ul className={styles.list}>
      {items.map(({ id, name, image, price }) => (
        <li key={id} className={styles.item}>
          <Link
            to={{
              pathname: `${match.url}/${id}`,
              state: { from: location },
            }}
          >
            <h4>{name}</h4>
            <img src={image} width="150px" height="100px" alt={name} />
            <p>
              <b>{price} UAH</b>
            </p>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default MenuGrid;
