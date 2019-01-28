import React from 'react';
import { Link } from 'react-router-dom';

import userNav from '../../configs/user-nav';

import styles from './DropDown.module.css';

const DropDown = () => (
  <div className={styles.container}>
    <ul>
      {userNav.map(({ name, path }) => (
        <li key={name}>
          <Link to={path}>{name}</Link>
        </li>
      ))}
    </ul>
    <button type="button">Loggout</button>
  </div>
);

export default DropDown;
