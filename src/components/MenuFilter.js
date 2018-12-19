import React from 'react';

const MenuFilter = ({ filter, onFilterChange }) => (
  <input
    type="text"
    value={filter}
    onChange={onFilterChange}
    placeholder="type to sort by name"
  />
);

export default MenuFilter;
