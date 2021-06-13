import axios from 'axios';

const api = axios.create({
  baseURL: `https://v3b2slwkhg.execute-api.us-east-1.amazonaws.com/dev`,
});

export default api;
