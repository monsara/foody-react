import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import appLogo from '../logo.png';
import avatar from '../avatar.jpg';
// styles
import styles from './AppHeader.module.css';

const navItems = ['menu', 'about', 'contact', 'delivery'];

const AppHeader = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Logo image={appLogo} width={100} height={100} />
    </div>
    <div className={styles.menu}>
      <Navigation items={navItems} />
    </div>
    <div className={styles.usermenu}>
      <UserMenu avatar={avatar} name="Bob Ross" />
    </div>
  </header>
);

export default AppHeader;
