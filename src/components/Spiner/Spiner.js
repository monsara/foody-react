import React from 'react';
// styles
import styles from './Spiner.module.css';

const Spiner = () => (
  <div className={styles.backdrop}>
    <div className={styles.Loader} />
  </div>
);

export default Spiner;
