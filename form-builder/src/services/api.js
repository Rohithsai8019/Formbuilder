import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',  // Backend running on port 5000
});

// POST: Create a new form
export const createForm = (formData) => api.post('/forms', formData);

// GET: Get responses for a specific form
export const getFormResponses = (formId) => api.get(`/forms/${formId}/responses`);

