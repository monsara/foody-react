import React from 'react';
import styles from './MenuItem.module.css';

const MenuItem = ({
  data: { name, description, image, price, category, ingredients },
  goBack,
}) => (
  <div className={styles.item}>
    <h1>{name}</h1>
    <span>{category}</span>
    <img src={image} alt={name} width="150px" height="100px" />
    <p>{description}</p>
    {/* <h4>Ingredients:</h4> */}
    <ul>
      <br />
      {ingredients && ingredients.map(ingr => <li key={ingr}>{ingr}</li>)}
    </ul>
    <p>{price}</p>
    <button className={styles.button} type="button" onClick={goBack}>
      GO BACK
    </button>
  </div>
);

export default MenuItem;
