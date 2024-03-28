

// resumeUtils.js

import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api/resumes';

export const getAllResumes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch resumes');
  }
};

export const getResumeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch resume');
  }
};

export const createResume = async (resumeData) => {
  try {
    const response = await axios.post(API_URL, resumeData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create resume');
  }
};

export const updateResumeById = async (id, resumeData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, resumeData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update resume');
  }
};

export const deleteResumeById = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete resume');
  }
};
