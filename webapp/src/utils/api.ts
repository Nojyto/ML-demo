import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

export const fetchCache = async (key: string) => {
  const response = await API.get(`/cache`, { params: { key } });
  return response.data;
};
