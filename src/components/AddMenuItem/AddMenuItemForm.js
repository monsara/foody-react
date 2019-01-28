import React from 'react';
import styles from './AddMenuItemForm.module.css';

const AddMenuItemForm = ({
  onSubmit,
  onChange,
  name,
  description,
  image,
  alt,
  imagePreviewUrl,
  category,
  options,
  price,
}) => (
  <>
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.input}
        onChange={onChange}
        value={name}
        type="text"
        name="name"
        placeholder="Dish"
        required
      />
      <textarea
        className={styles.input}
        onChange={onChange}
        value={description}
        name="description"
        placeholder="Description"
        required
      />
      <p>Check our category</p>
      <select onChange={onChange} value={category} name="category">
        <option value="" disabled>
          ...
        </option>
        {options.map(item => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <p>Put your price</p>
      <input
        onChange={onChange}
        value={price}
        type="number"
        name="price"
        placeholder="Price"
        required
      />
      <label htmlFor="image" value="image">
        {imagePreviewUrl ? (
          <img src={imagePreviewUrl} alt={alt} />
        ) : (
          <p>Check our picture</p>
        )}
        <input type="file" name="image" value={image} onChange={onChange} />
        <a href="/">Download</a>
      </label>
      <button className={styles.button} type="submit">
        Add
      </button>
    </form>
  </>
);

export default AddMenuItemForm;
