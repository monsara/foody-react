import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3004';

export const getAllMenuItems = async () => {
  const response = await axios.get('/menu');
  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get('/categories');
  return response.data;
};

export const getMenuItemById = async id => {
  const response = await axios.get(`/menu/${id}`);
  return response.data;
};

export const getMenuItemsWithCategory = async category => {
  const response = category
    ? await axios.get(`/menu?category=${category}`)
    : await axios.get(`/menu`);
  return response.data;
};

export const addMenuItem = async ({
  name,
  price,
  image,
  description,
  category,
}) => {
  const response = await axios.post('/menu', {
    name,
    price,
    image,
    description,
    category,
  });

  return response;
};
