import axios from 'axios';

const BASE_URL = 'http://localhost:3004/history';

const getAllHistoryNotes = () =>
  axios.get(BASE_URL).then(response => response.data);

const getHistoryNoteById = id =>
  axios.get(`${BASE_URL}/${id}`).then(response => response.data);

const deleteHistoryNote = id =>
  axios.delete(`${BASE_URL}/${id}`).then(response => response.status === 200);

const addHistoryNote = item =>
  axios.post(BASE_URL, item).then(response => response.data);
export {
  getAllHistoryNotes,
  getHistoryNoteById,
  deleteHistoryNote,
  addHistoryNote,
};
