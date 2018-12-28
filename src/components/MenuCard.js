import React from 'react';

const MenuCard = ({ name, imgUrl, price, onShowMoreInfo, onDelete }) => (
  <div className="menu-card">
    <img src={imgUrl} alt={name} width={320} height={240} />
    <div className="menu-card_content">
      <h2>{name}</h2>
      <p>Price: {price}$</p>
    </div>
    <div className="menu-card_actions">
      <button className="btn" type="button" onClick={onShowMoreInfo}>
        More info
      </button>
      <button className="btn" type="button" onClick={onDelete}>
        Dalete
      </button>
    </div>
  </div>
);

export default MenuCard;
