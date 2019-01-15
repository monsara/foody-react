import React from 'react';

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
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={name}
        type="text"
        name="name"
        placeholder="Name"
        required
      />
      <br />
      <textarea
        onChange={onChange}
        value={description}
        name="description"
        placeholder="Description"
        required
      />
      <label htmlFor="image" value="image">
        {imagePreviewUrl ? (
          <img src={imagePreviewUrl} alt={alt} />
        ) : (
          <p>Check our picture</p>
        )}
        <input type="file" name="image" value={image} onChange={onChange} />
        <br />
        <a href="/" download>
          Download
        </a>
        <br />
        <br />
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
        <br />
        <input
          onChange={onChange}
          value={price}
          type="number"
          name="price"
          placeholder="Price"
          required
        />
      </label>
      <br />
      <button type="submit">Post</button>
    </form>
  </>
);

export default AddMenuItemForm;
