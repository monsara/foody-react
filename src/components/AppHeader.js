import React from 'react';
// components
import AppNav from './AppNav';
import navItems from '../configs/nav';
// styles
import styles from './AppHeader.module.css';

const AppHeader = () => (
  <header className={styles.header}>
    <AppNav items={navItems} />
  </header>
);

export default AppHeader;
