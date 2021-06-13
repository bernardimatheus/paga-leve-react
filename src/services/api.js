import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.NODE_ENV === 'production' ? 'https://v3b2slwkhg.execute-api.us-east-1.amazonaws.com/dev' : 'http://localhost:3000/dev'}`,
});

export default api;
