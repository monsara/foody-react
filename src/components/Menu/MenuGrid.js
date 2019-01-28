import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuGrid.module.css';

const MenuGrid = ({ items, match, location }) => (
  <>
    <ul className={styles.list}>
      {items.map(({ id, name, image, price }) => (
        <li key={id} className={styles.item}>
          <Link
            className={styles.link}
            to={{
              pathname: `${match.url}/${id}`,
              state: { from: location },
            }}
          >
            <img
              className={styles.img}
              src={image}
              width="250px"
              min-height="200px"
              alt={name}
            />
            <h4 className={styles.head}>{name}</h4>
            <p>
              <b className={styles.price}>{price} UAH</b>
            </p>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default MenuGrid;
