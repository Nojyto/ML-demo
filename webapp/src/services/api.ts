import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const ping = async () => {
  const response = await API.get('/test-redis');
  return response.data;
};

export const fetchCache = async (key: string) => {
  const response = await API.get(`/cache`, { params: { key } });
  return response.data;
};
