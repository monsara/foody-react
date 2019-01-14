import React from 'react';
// styles
import styles from './Backdrop.module.css';

const Backdrop = ({ children }) => (
  <div className={styles.backdrop}>{children}</div>
);

export default Backdrop;
