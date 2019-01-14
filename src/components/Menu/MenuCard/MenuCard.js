import React from 'react';
// styles
import styles from './MenuCard.module.css';

const MenuCard = ({ name, imgUrl, price, onShowMoreInfo, onDelete }) => (
  <div className={styles.card}>
    <img src={imgUrl} alt={name} width={320} height={240} />
    <div className="menu-card_content">
      <h2>{name}</h2>
      <p>Price: {price}$</p>
    </div>
    <div className={styles.actions}>
      <button className={styles.button} type="button" onClick={onShowMoreInfo}>
        More info
      </button>
      <button className={styles.button} type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  </div>
);

export default MenuCard;
