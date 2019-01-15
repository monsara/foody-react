import React from 'react';

const MenuItem = ({
  data: { name, description, image, price, category, ingredients },
  goBack,
}) => (
  <div>
    <h1>{name}</h1>
    <span>{category}</span>
    <img src={image} alt={name} width="300px" height="250px" />
    <p>
      <b>Description</b>
      {description}
    </p>
    <ul>
      <br />
      {ingredients && ingredients.map(ingr => <li key={ingr}>{ingr}</li>)}
    </ul>
    <p>
      <b>{price}</b>
    </p>
    <button type="button" onClick={goBack}>
      GO BACK
    </button>
  </div>
);

export default MenuItem;
