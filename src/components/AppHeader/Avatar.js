import React from 'react';
import styles from './Avatar.module.css';

const Avatar = ({ image = '', width = 60, height = 60 }) => (
  <img
    className={styles.avatar}
    src={image}
    alt="user avatar"
    width={width}
    height={height}
  />
);

export default Avatar;
