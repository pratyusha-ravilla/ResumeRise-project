// authApi.js

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
//     console.error("Error fetching user:", error);
//     return null;
//   }
// };




// import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

// // Create a single, shared Axios instance to ensure consistency
// const instance = axios.create({
//   baseURL: API_URL,

// });

// //Add a request interceptor to automatically attach authentication headers
// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('authToken'); // Assuming token key is 'authToken'

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export const loginUser = async (userData) => {
//   try {
//     const response = await instance.post('/auth/login', userData);
//     const { data } = response;

//     // Store authentication token (e.g., in `localStorage.setItem('authToken', data.token)`)
//     return { user: data.user, message: data.message };
//   } catch (error) {
//     throw new Error(error.response?.data?.message || 'Login failed');
//   }
// };

// export const registerUser = async (userData) => {
//   try {
//     const response = await instance.post('/auth/register', userData);
//     const { data } = response;
//     return { user: data.user, message: data.message };
//   } catch (error) {
//     throw new Error(error.response?.data?.message || 'Registration failed');
//   }
// };

// export const getCurrentUser = async () => {
//   try {
//     const token = localStorage.getItem('authToken');

//     // Retrieve token securely if necessary
//     // if (!token) {
//     //   throw new Error('Missing authentication token');
//     // }

//     // Attach token to headers only if it's available
//     if (token) {
//       instance.defaults.headers.common.Authorization = `Bearer ${token}`;
//     }
//     const response = await instance.get('/auth/user');
//     const { data } = response;
//     return data.user;
//   } catch (error) {
//     if (error.response?.status === 401) {

//         // Handle 401 Unauthorized error (e.g., redirect to login, clear token)
//         localStorage.removeItem('authToken');
//       return null;
//     } else {
//       console.error('Error fetching user:', error);
//       return null;
//     }
//   }
// };
// export default instance;






import axios from "axios";

// Base URL for API requests
const baseURL = "http://localhost:8000/api/auth";

// Function to register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${baseURL}/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Function to login a user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${baseURL}/login`, userData);
    // Store JWT token in localStorage
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
