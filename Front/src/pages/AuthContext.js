// // authContext.js
// import React, { createContext, useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { loginUser, registerUser } from '../api/authApi';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   const login = async (userData) => {
//     try {
//       const response = await loginUser(userData);
//       setUser(response.user);
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Login error:', error.message);
//     }
//   };

//   const register = async (userData) => {
//     try {
//       const response = await registerUser(userData);
//       setUser(response.user);
//       navigate('/login');
//     } catch (error) {
//       console.error('Registration error:', error.message);
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     navigate('/login');
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, register, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser, getCurrentUser } from '../api/authApi'; // Assuming you have this method

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await getCurrentUser();
        setUser(fetchedUser);
      } catch (error) {
        console.error('Error fetching current user:', error);
        // Handle error, such as setting an error state or displaying an error message
      }
    };
  
    fetchUser(); // Call the fetchUser function
  
  }, []);

  const login = async (userData) => {
    try {
      const response = await loginUser(userData);
      setUser(response.user);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  const register = async (userData) => {
    try {
      const response = await registerUser(userData);
      setUser(response.user);
      navigate('/login'); // Assuming redirect to login after registration
    } catch (error) {
      console.error('Registration error:', error.message);
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
