// import React, { createContext, useState } from 'react';

// export const UserContext = createContext();

// export const UserProvider = ({ children, initialId }) => {
//   const [user, setUser] = useState({
//     id: null, // Example user ID
//     // Other user data...
//   });

//   // Function to set user ID
//   const setUserId = (userId) => {
//     setUser(prevUser => ({ ...prevUser, id: userId }));
//   };

//   return (
//     <UserContext.Provider value={{ user }}>
//       {children}
//     </UserContext.Provider>
//   );
// };




// // userContext.js
// import React, { createContext, useState, useEffect } from 'react';
// import { getCurrentUser } from '../api/authApi'; // Assuming getCurrentUser is in this module

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState({
//     id: null,
//     // Other user data...
//   });

//   useEffect(() => {
//     const fetchUserId = async () => {
//       try {
//         const currentUser = await getCurrentUser();
//         if (currentUser) {
//           setUser(prevUser => ({ ...prevUser, id: currentUser.id })); // Assuming "id" property
//         } else {
//           // Handle the case where there's no current user (e.g., log, display message)
//         }
//       } catch (error) {
//         console.error('Error fetching user:', error);
//       }
//     };
  
//     fetchUserId();
//   }, []); // Run on component mount and subsequent re-renders
  

//   const setUserId = (userId) => {
//         setUser(prevUser => ({ ...prevUser, id: userId }));
//       };
    
//       return (
//         <UserContext.Provider value={{ user }}>
//           {children}
//         </UserContext.Provider>
//       );
//     };
    


// userContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getCurrentUser } from '../api/authApi'; // Assuming getCurrentUser is in this module
import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Define API_URL constant

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: null,
    // Other user data...
  });

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        // Add the JWT token to the request headers
        const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(`${API_URL}/auth/user`, config); // Use API_URL constant
        const currentUser = response.data.user;

        if (currentUser) {
          setUser(prevUser => ({ ...prevUser, id: currentUser.id })); // Assuming "id" property
        } else {
          // Handle the case where there's no current user (e.g., log, display message)
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
  
    fetchUserId();
  }, []); // Run on component mount and subsequent re-renders

  const setUserId = (userId) => {
    setUser(prevUser => ({ ...prevUser, id: userId }));
  };

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};


