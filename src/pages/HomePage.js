import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => (
  <div className={styles.home}>
    <h1 className={styles.head}>
      Enjoy your favorite dishes with <br />
      <span className={styles.span}>our restaurant</span>
    </h1>
  </div>
);

export default HomePage;
