import React from 'react';

const Logo = ({ image = '', width = 60, height = 60 }) => (
  <img src={image} alt="Logo" width={width} height={height} />
);

export default Logo;
