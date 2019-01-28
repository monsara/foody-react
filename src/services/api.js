import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

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

export const deleteMenuItem = async id => {
  const response = await axios.delete(`/menu/${id}`);
  return response;
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
//= ===============

export const getAllyOrderHistoryItems = async () => {
  const response = await axios.get('/history');
  return response.data;
};

export const getOrderHistoryItemById = async id => {
  const response = await axios.get(`/history/${id}`);
  return response.data;
};

export const deleteOrderHistoryItem = async id => {
  const response = await axios.delete(`/history/${id}`);
  return response;
};

export const addOrderHistoryItem = async ({ date, price, address, rating }) => {
  const response = await axios.post('/history', {
    date,
    price,
    address,
    rating,
  });

  return response;
};
