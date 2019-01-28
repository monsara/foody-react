import React from 'react';
// components
import AppNav from './AppNav';
import Logo from './Logo';
import UserMenu from './UserMenu';
import navItems from '../../configs/main-nav';
import appLogo from './assets/logo.png';
import avatar from './assets/avatar.png';
import styles from './AppHeader.module.css';

// styles

const AppHeader = () => (
  <header className={styles.header}>
    <Logo className={styles.logo} image={appLogo} />
    <AppNav className={styles.nav} items={navItems} />
    <div className={styles.usermenu}>
      <UserMenu avatar={avatar} name="Bob Ross" />
    </div>
  </header>
);

export default AppHeader;
