// // authApi.js

// import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

// export const loginUser = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/auth/login`, userData);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response?.data?.message || 'Login failed');
//   }
// };

// export const registerUser = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/auth/register`, userData);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response?.data?.message || 'Registration failed');
//   }
// };



// // authApi.js

// import axios from "axios";

// const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api";

// export const loginUser = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/auth/login`, userData);
//     const { data } = response;
//     return { user: data.user, message: data.message }; // Include user data in the response
//   } catch (error) {
//     throw new Error(error.response?.data?.message || "Login failed");
//   }
// };

// export const registerUser = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/auth/register`, userData);
//     const { data } = response;
//     return { user: data.user, message: data.message }; // Include user data in the response
//   } catch (error) {
//     throw new Error(error.response?.data?.message || "Registration failed");
//   }
// };





// import axios from "axios";

// const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api";

// export const loginUser = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/auth/login`, userData);
//     const { data } = response;
//     return { user: data.user, message: data.message };
//   } catch (error) {
//     throw new Error(error.response?.data?.message || "Login failed");
//   }
// };

// export const registerUser = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/auth/register`, userData);
//     const { data } = response;
//     return { user: data.user, message: data.message };
//   } catch (error) {
//     throw new Error(error.response?.data?.message || "Registration failed");
//   }
// };

// export const getCurrentUser = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/auth/user`); // Adjust endpoint as needed
//     const { data } = response;
//     return data.user; // Assuming your API returns user data in this format
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     return null;
//   }
// };




import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api";

// Create an Axios instance with a request interceptor for authentication
const instance = axios.create({
  baseURL: API_URL,
  // Remove X-API-Key header as it seems to be unnecessary and incorrect
});

instance.interceptors.request.use(
  (config) => {
    // Add logic to attach authentication token to requests
    // Example using a local storage token:
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const loginUser = async (userData) => {
  try {
    const response = await instance.post(`/auth/login`, userData);
    const { data } = response;
    // Store authentication token or refresh token upon successful login
    return { user: data.user, message: data.message };
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await instance.post(`/auth/register`, userData);
    const { data } = response;
    return { user: data.user, message: data.message };
  } catch (error) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await instance.get(`/auth/user`);
    const { data } = response;
    return data.user;
  } catch (error) {
    if (error.response?.status === 401) {
      // Handle 401 Unauthorized error (e.g., redirect to login)
      return null;
    } else {
      console.error('Error fetching user:', error);
      return null;
    }
  }
};
