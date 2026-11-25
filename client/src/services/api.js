import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

// Attach JWT token for protected routes if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('portfolio_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const getProjects      = (params = {}) => api.get('/projects', { params }).then(r => r.data);
export const getProjectById   = (id)          => api.get(`/projects/${id}`).then(r => r.data);
export const getSkills        = (params = {}) => api.get('/skills', { params }).then(r => r.data);
export const getTestimonials  = ()            => api.get('/testimonials').then(r => r.data);
export const getStats         = ()            => api.get('/stats').then(r => r.data);
export const sendMessage      = (data)        => api.post('/contact', data).then(r => r.data);
export const loginAdmin       = (data)        => api.post('/auth/login', data).then(r => r.data);

export default api;
