// // authUtils.js

// import { loginUser, registerUser } from '../api/authApi';


// export const authenticateUser = async (email, password) => {
  

//   try {
//     const userData = { email, password };
//     const response = await loginUser(userData);
//     return { success: true, message: response.message };
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// export const registerNewUser = async (email, username, password) => {
//   try {
//     const userData = { email, username, password };
//     const response = await registerUser(userData);
//     return { success: true, message: response.message };
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };



import { loginUser, registerUser } from '../api/authApi';
import { useNavigate } from 'react-router-dom';

export const authenticateUser = async (userData) => {
  const navigate = useNavigate();

  try {
    const response = await loginUser(userData);
    navigate('/dashboard');
    return { success: true, message: response.message };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const registerNewUser = async (userData) => {
  const navigate = useNavigate();

  try {
    const response = await registerUser(userData);
    navigate('/login');
    return { success: true, message: response.message };
  } catch (error) {
    throw new Error(error.message);
  }
};
