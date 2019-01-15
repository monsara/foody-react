import React from 'react';
import { NavLink } from 'react-router-dom';
// styles
import styles from './AppNav.module.css';

const AppNav = ({ items = [] }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <li key={item.name} className={styles.link}>
        <NavLink to={item.path} className={styles.link}>
          {item.name}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default AppNav;
