import React from 'react';

const MenuCard = ({ name, imgUrl, price }) => (
  <div className="menu-card">
    <img src={imgUrl} alt={name} width={320} height={240} />
    <div className="menu-card_content">
      <h2>{name}</h2>
      <p>Price: {price}$</p>
    </div>
    <div className="menu-card_actions">
      <button className="btn" type="button">
        Add to cart
      </button>
    </div>
  </div>
);

export default MenuCard;
