import React from 'react';

const Filter = ({ value, categories, onChange }) => (
  <select value={value} onChange={event => onChange(event.target.value)}>
    {categories.map(({ id, name }) => (
      <option key={id} value={name}>
        {name}
      </option>
    ))}
  </select>
);

export default Filter;
